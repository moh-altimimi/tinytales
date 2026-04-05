import {Redirect, Stack} from 'expo-router';
import {ActivityIndicator, View} from 'react-native';

import {useAuthSession} from '../../hooks/useAuthSession';
import {useThemeColors} from '../../lib/theme';

export default function AuthLayout() {
  const {isLoading, isAuthenticated} = useAuthSession();
  const theme = useThemeColors();

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white dark:bg-zinc-950">
        <ActivityIndicator color={theme.text} />
      </View>
    );
  }

  if (isAuthenticated) {
    return <Redirect href="/(app)/" />;
  }

  return <Stack screenOptions={{headerShown: false}} />;
}
