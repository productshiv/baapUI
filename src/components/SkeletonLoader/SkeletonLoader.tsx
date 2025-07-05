import React from 'react';
import { View, StyleSheet, Animated, ViewStyle, DimensionValue } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { convertShadowToStyle, convertGradientToStyle } from '../../themes/utils/skeuomorphic';
import { SKEUOMORPHIC_COLORS, SKEUOMORPHIC_SHADOWS, SKEUOMORPHIC_GRADIENTS, SKEUOMORPHIC_BORDER_RADIUS, SKEUOMORPHIC_BORDER_WIDTHS } from '../../themes/variants/skeuomorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

interface SkeletonLoaderProps {
  width: DimensionValue;
  height: DimensionValue;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  backgroundColor?: string;
  borderRadius?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width,
  height,
  style,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  borderRadius = 4,
}) => {
  const themeContext = useThemeSafe();
  const shimmerAnim = new Animated.Value(0);

  Animated.loop(
    Animated.sequence([
      Animated.timing(shimmerAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(shimmerAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ])
  ).start();

  const shimmerStyle = {
    opacity: shimmerAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 1],
    }),
  };

  const getSkeletonStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [
      styles.skeleton,
      {
        width,
        height,
        borderRadius,
      },
    ];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: true,
        customBackground: backgroundColor,
        customBorderRadius: borderRadius,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
      });
    } else if (design === 'skeuomorphic') {
      baseStyles.push({
        backgroundColor: SKEUOMORPHIC_COLORS.surfaceVariant,
        borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
        borderColor: SKEUOMORPHIC_COLORS.border,
        ...convertShadowToStyle(SKEUOMORPHIC_SHADOWS.input.default),
      });
    } else if (design === 'glassmorphic') {
      const themeMode = themeContext?.theme?.mode || 'light';
      const glassmorphicStyles = getGlassmorphicStyles({
        theme: themeMode as 'light' | 'dark',
        intensity: 'subtle',
        blur: 'light',
        customBackground: backgroundColor,
        customBorderRadius: borderRadius,
      });

      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        backgroundColor: GLASSMORPHIC_COLORS[themeMode].surface,
        borderColor: GLASSMORPHIC_COLORS[themeMode].border,
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  return <Animated.View style={[getSkeletonStyles(), shimmerStyle]} />;
};

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: '#e0e0e0',
  },
});

export default SkeletonLoader;
