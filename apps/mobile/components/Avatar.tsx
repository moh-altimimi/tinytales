import {Image} from 'expo-image';
import {View, Text} from 'react-native';

import {useThemeColors} from '../lib/theme';

interface AvatarProps {
  uri?: string | null
  name: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {sm: 32, md: 44, lg: 64} as const;
const textSizeMap = {sm: 'text-xs', md: 'text-sm', lg: 'text-lg'} as const;

export function Avatar({uri, name, size = 'md'}: AvatarProps) {
  const px = sizeMap[size];
  const theme = useThemeColors();

  if (uri) {
    return (
      <Image
        source={uri}
        style={{width: px, height: px, borderRadius: px / 2}}
        contentFit="cover"
        transition={200}
        placeholder={{blurhash: 'LKO2?U%2Tw=w]~RBVZRi};RPxuwH'}}
        accessibilityLabel={`${name}'s avatar`}
      />
    );
  }

  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <View
      className="items-center justify-center bg-gray-200 dark:bg-zinc-700"
      style={{width: px, height: px, borderRadius: px / 2}}
      accessibilityLabel={`${name}'s avatar`}
    >
      <Text
        className={`font-nunito-semibold text-gray-600 dark:text-gray-300 ${textSizeMap[size]}`}
        style={{color: theme.textSecondary}}
      >
        {initials}
      </Text>
    </View>
  );
}
