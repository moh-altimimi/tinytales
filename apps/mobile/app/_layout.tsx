import '../global.css';
import '../lib/i18n';

import {ApolloProvider} from '@apollo/client/react';
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import {useFonts} from 'expo-font';
import {Stack, usePathname} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import * as SystemUI from 'expo-system-ui';
import * as Sentry from '@sentry/react-native';
import {PostHogProvider} from 'posthog-react-native';
import {useEffect, useRef} from 'react';
import {useColorScheme} from 'nativewind';
import Toast from 'react-native-toast-message';

import {apolloClient} from '../lib/apollo';
import {posthog} from '../lib/posthog';
import {colors} from '../lib/theme';

SplashScreen.preventAutoHideAsync();

Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  enabled: !!process.env.EXPO_PUBLIC_SENTRY_DSN,
});

function useScreenTracking() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    if (pathname && pathname !== previousPath.current) {
      posthog.screen(pathname, {path: pathname});
      previousPath.current = pathname;
    }
  }, [pathname]);
}

function RootLayout() {
  const {colorScheme} = useColorScheme();

  useScreenTracking();

  const [fontsLoaded, fontError] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    const bg = colors[colorScheme ?? 'light'].background;
    SystemUI.setBackgroundColorAsync(bg);
  }, [colorScheme]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <PostHogProvider client={posthog}>
      <ApolloProvider client={apolloClient}>
        <Stack screenOptions={{headerShown: false}} />
        <Toast />
      </ApolloProvider>
    </PostHogProvider>
  );
}

export default Sentry.wrap(RootLayout);
