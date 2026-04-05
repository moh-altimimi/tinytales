import {Ionicons} from '@expo/vector-icons';
import {Link} from 'expo-router';
import * as Haptics from 'expo-haptics';
import {MotiView} from 'moti';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useReducedMotion} from 'react-native-reanimated';
import {useTranslation} from 'react-i18next';

import {useSocialAuth} from '../../hooks/useSocialAuth';
import {useThemeColors} from '../../lib/theme';

export default function LoginScreen() {
  const {t} = useTranslation();
  const theme = useThemeColors();
  const reducedMotion = useReducedMotion();
  const {activeProvider, errorMessage, signInWithProvider} = useSocialAuth();
  const isGoogleLoading = activeProvider === 'google';
  const isAppleLoading = activeProvider === 'apple';
  const isLoading = Boolean(activeProvider);

  const handlePress = (provider: 'google' | 'apple') => {
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    void signInWithProvider(provider);
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white dark:bg-zinc-950"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        className="flex-1"
        contentContainerClassName="flex-grow justify-center px-6 py-10"
        keyboardShouldPersistTaps="handled"
      >
        <MotiView
          from={reducedMotion ? undefined : {opacity: 0, translateY: 20}}
          animate={{opacity: 1, translateY: 0}}
          transition={{type: 'timing', duration: 400}}
        >
          <View className="mb-10 items-center">
            <Text className="font-nunito-bold text-3xl text-gray-900 dark:text-gray-100">
              {t('common.appName')}
            </Text>
            <Text className="mt-2 font-nunito text-sm text-gray-500 dark:text-gray-400">
              {t('auth.signInSubtitle')}
            </Text>
          </View>

          {!!errorMessage && (
            <Text className="mt-4 font-nunito text-sm" style={{color: theme.error}}>
              {errorMessage}
            </Text>
          )}

          <Pressable
            className="mt-6 h-12 flex-row items-center justify-center rounded-xl bg-brand active:opacity-80"
            disabled={isLoading}
            onPress={() => handlePress('google')}
            style={{opacity: isLoading ? 0.75 : 1}}
            accessibilityRole="button"
            accessibilityLabel={t('auth.continueWithGoogle')}
          >
            {isGoogleLoading ? (
              <ActivityIndicator color={theme.text} />
            ) : (
              <>
                <Ionicons name="logo-google" size={20} color={theme.text} />
                <Text className="ml-2 font-nunito-semibold text-base text-gray-900">
                  {t('auth.continueWithGoogle')}
                </Text>
              </>
            )}
          </Pressable>

          <Pressable
            className="mt-4 h-12 flex-row items-center justify-center rounded-xl border border-gray-300 dark:border-zinc-700 active:opacity-80"
            disabled={isLoading}
            onPress={() => handlePress('apple')}
            style={{opacity: isLoading ? 0.75 : 1}}
            accessibilityRole="button"
            accessibilityLabel={t('auth.continueWithApple')}
          >
            {isAppleLoading ? (
              <ActivityIndicator color={theme.text} />
            ) : (
              <>
                <Ionicons name="logo-apple" size={20} color={theme.text} />
                <Text className="ml-2 font-nunito-semibold text-base text-gray-900 dark:text-gray-100">
                  {t('auth.continueWithApple')}
                </Text>
              </>
            )}
          </Pressable>

          <View className="mt-6 flex-row justify-center">
            <Text className="font-nunito text-gray-500 dark:text-gray-400">
              {t('auth.needDifferentEntry')}{' '}
            </Text>
            <Link
              href="/(auth)/register"
              className="font-nunito-semibold text-gray-900 dark:text-gray-100"
            >
              {t('auth.openRegistration')}
            </Link>
          </View>
        </MotiView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
