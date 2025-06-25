import React from 'react';
import { View, StyleSheet, Animated, ViewStyle, DimensionValue } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface SkeletonLoaderProps {
  width: DimensionValue;
  height: DimensionValue;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic';
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
