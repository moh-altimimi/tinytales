import {createClient} from '@supabase/supabase-js';
import * as SecureStore from 'expo-secure-store';
import {Platform} from 'react-native';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error('Missing env var: EXPO_PUBLIC_SUPABASE_URL');
}

if (!supabaseAnonKey) {
  throw new Error('Missing env var: EXPO_PUBLIC_SUPABASE_ANON_KEY');
}

// iOS Keychain has a 2048-byte value limit. Supabase session JSON often exceeds
// this, so we chunk large values across multiple SecureStore keys.
const CHUNK_SIZE = 2048;

async function getItem(key: string): Promise<string | null> {
  if (Platform.OS === 'web') return localStorage.getItem(key);

  const value = await SecureStore.getItemAsync(key);
  if (value) return value;

  const chunks: string[] = [];
  let i = 0;
   
  while (true) {
    const chunk = await SecureStore.getItemAsync(`${key}__chunk_${i}`);
    if (!chunk) break;
    chunks.push(chunk);
    i++;
  }
  return chunks.length > 0 ? chunks.join('') : null;
}

async function setItem(key: string, value: string): Promise<void> {
  if (Platform.OS === 'web') {
    localStorage.setItem(key, value);
    return;
  }

  await removeItem(key);

  if (value.length <= CHUNK_SIZE) {
    await SecureStore.setItemAsync(key, value);
    return;
  }

  const chunks = value.match(new RegExp(`.{1,${CHUNK_SIZE}}`, 'g')) ?? [];
  await Promise.all(
    chunks.map((chunk, i) => SecureStore.setItemAsync(`${key}__chunk_${i}`, chunk)),
  );
}

async function removeItem(key: string): Promise<void> {
  if (Platform.OS === 'web') {
    localStorage.removeItem(key);
    return;
  }

  await SecureStore.deleteItemAsync(key).catch(() => {});
  let i = 0;
   
  while (true) {
    try {
      const chunk = await SecureStore.getItemAsync(`${key}__chunk_${i}`);
      if (!chunk) break;
      await SecureStore.deleteItemAsync(`${key}__chunk_${i}`);
    } catch {
      break;
    }
    i++;
  }
}

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: {getItem, setItem, removeItem},
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false,
  },
});
