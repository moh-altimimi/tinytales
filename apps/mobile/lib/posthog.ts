import PostHog from 'posthog-react-native';

const apiKey = process.env.EXPO_PUBLIC_POSTHOG_API_KEY ?? '';

export const posthog = new PostHog(apiKey, {
  host: 'https://us.i.posthog.com',
  disabled: !apiKey,
  captureNativeAppLifecycleEvents: true,
  captureDeepLinks: true,
  enableSessionReplay: true,
  sessionReplayConfig: {
    maskAllTextInputs: true,
    maskAllImages: true,
  },
});
