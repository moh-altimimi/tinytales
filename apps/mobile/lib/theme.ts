import {useColorScheme} from 'nativewind';

export const colors = {
  light: {
    background: '#FFFFFF',
    surface: '#F5F5F5',
    text: '#1A1A1A',
    textSecondary: '#444444',
    textTertiary: '#777777',
    border: '#E0E0E0',
    brand: '#FDD835',
    error: '#B00020',
  },
  dark: {
    background: '#09090B',
    surface: '#18181B',
    text: '#F5F5F5',
    textSecondary: '#A1A1AA',
    textTertiary: '#71717A',
    border: '#27272A',
    brand: '#FDD835',
    error: '#CF6679',
  },
} as const;

export type ThemeColors = (typeof colors)['light']

/** Semantic colour tokens for the current colour scheme. Use in non-NativeWind contexts (e.g. ActivityIndicator color prop). */
export function useThemeColors(): ThemeColors {
  const {colorScheme} = useColorScheme();
  return colors[colorScheme ?? 'light'];
}
