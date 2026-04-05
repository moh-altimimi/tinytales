import {Provider} from '@supabase/supabase-js';
import {useRouter} from 'expo-router';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import {useState} from 'react';

import {supabaseClient} from '../lib/supabase';

WebBrowser.maybeCompleteAuthSession();

type SocialProvider = Extract<Provider, 'google' | 'apple'>

export function useSocialAuth() {
  const router = useRouter();
  const [activeProvider, setActiveProvider] = useState<SocialProvider | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const signInWithProvider = async (provider: SocialProvider) => {
    setErrorMessage('');
    setActiveProvider(provider);

    const redirectTo = Linking.createURL('auth/callback');
    const {data, error} = await supabaseClient.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo,
        skipBrowserRedirect: true,
      },
    });

    if (error || !data.url) {
      setActiveProvider(null);
      setErrorMessage(error?.message || `Unable to sign in with ${provider}.`);
      return;
    }

    const result = await WebBrowser.openAuthSessionAsync(data.url, redirectTo);

    if (result.type === 'success') {
      const {data: sessionData} = await supabaseClient.auth.getSession();

      if (sessionData.session) {
        router.replace('/(app)/');
      }
    }

    if (result.type === 'dismiss' || result.type === 'cancel') {
      setErrorMessage(`${provider === 'google' ? 'Google' : 'Apple'} sign-in was cancelled.`);
    }

    setActiveProvider(null);
  };

  return {
    activeProvider,
    errorMessage,
    signInWithProvider,
  };
}
