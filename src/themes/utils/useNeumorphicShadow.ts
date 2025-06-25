import { useMemo } from 'react';
import { ViewStyle, Platform } from '../../platform';
import { useTheme } from '../ThemeContext';

interface NeumorphicShadowOptions {
  size?: 'small' | 'medium' | 'large';
  intensity?: number; // 0 to 1
  inset?: boolean;
  distance?: number; // Custom distance override
  blur?: number; // Custom blur override
}

export const useNeumorphicShadow = (options: NeumorphicShadowOptions = {}): ViewStyle => {
  const { theme } = useTheme();
  const {
    size = 'medium',
    intensity = 1,
    inset = false,
    distance: customDistance,
    blur: customBlur,
  } = options;

  return useMemo(() => {
    if (theme.design !== 'neumorphic') {
      return theme.shadows[size];
    }

    const distances = {
      small: 3,
      medium: 5,
      large: 8,
    };

    const blurs = {
      small: 6,
      medium: 10,
      large: 16,
    };

    const distance = customDistance || distances[size];
    const blur = customBlur || blurs[size];
    const spread = distance / 2;

    if (Platform.OS === 'web') {
      const lightShadow = theme.colors.lightShadow;
      const darkShadow = theme.colors.darkShadow;
      const lightOpacity = 1 * intensity;
      const darkOpacity = 0.7 * intensity;
      const insetStr = inset ? 'inset ' : '';

      return {
        backgroundColor: theme.colors.background,
        borderRadius: theme.shape.borderRadius.md,
        boxShadow: `
          ${insetStr}${-distance}px ${-distance}px ${blur}px ${spread}px rgba(${lightShadow}, ${lightOpacity}),
          ${insetStr}${distance}px ${distance}px ${blur}px ${spread}px rgba(${darkShadow}, ${darkOpacity})
        `,
      } as ViewStyle;
    }

    // React Native - We need to simulate the effect with a single shadow
    // since React Native doesn't support multiple shadows
    return {
      backgroundColor: theme.colors.background,
      borderRadius: theme.shape.borderRadius.md,
      shadowColor: inset ? theme.colors.darkShadow : theme.colors.lightShadow,
      shadowOffset: {
        width: inset ? distance : -distance,
        height: inset ? distance : -distance,
      },
      shadowOpacity: intensity * (inset ? 0.7 : 1),
      shadowRadius: blur / 2,
      elevation: distance,
    };
  }, [theme, size, intensity, inset, customDistance, customBlur]);
};
