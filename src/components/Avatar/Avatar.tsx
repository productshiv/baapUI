import React from 'react';
import { View, Image, StyleSheet, ViewStyle, ImageStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { convertShadowToStyle, convertGradientToStyle } from '../../themes/utils/skeuomorphic';
import { SKEUOMORPHIC_COLORS, SKEUOMORPHIC_SHADOWS, SKEUOMORPHIC_GRADIENTS, SKEUOMORPHIC_BORDER_RADIUS, SKEUOMORPHIC_BORDER_WIDTHS } from '../../themes/variants/skeuomorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

interface AvatarProps {
  imageUrl: string;
  size: number;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  size,
  style,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  borderWidth = 0,
  borderColor = NEUMORPHIC_COLORS.lightShadow,
}) => {
  const themeContext = useThemeSafe();
  const getContainerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [
      styles.container,
      {
        width: size,
        height: size,
        borderRadius: size / 2,
      },
    ];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: backgroundColor,
        customBorderRadius: size / 2,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        padding: 4,
      });

      if (borderWidth > 0) {
        baseStyles.push({
          borderWidth,
          borderColor,
        });
      }
    } else if (design === 'skeuomorphic') {
      baseStyles.push({
        backgroundColor: SKEUOMORPHIC_COLORS.surface,
        padding: 4,
        borderWidth: Math.max(borderWidth, SKEUOMORPHIC_BORDER_WIDTHS.medium),
        borderColor: SKEUOMORPHIC_COLORS.borderLight,
        ...convertShadowToStyle(SKEUOMORPHIC_SHADOWS.card),
        ...convertGradientToStyle(SKEUOMORPHIC_GRADIENTS.surface),
      });
    } else if (design === 'glassmorphic') {
      const glassmorphicStyles = getGlassmorphicStyles({
        theme: themeContext?.theme?.mode as 'light' | 'dark' || 'light',
        intensity: 'medium',
        blur: 'medium',
        customBackground: backgroundColor || 'rgba(255, 255, 255, 0.1)',
        customBorderRadius: size / 2,
      });

      baseStyles.push({
        ...glassmorphicStyles,
        padding: 4,
        borderWidth: borderWidth > 0 ? borderWidth : 1,
        borderColor: borderColor || (themeContext?.theme?.mode === 'dark' 
          ? 'rgba(255, 255, 255, 0.2)' 
          : 'rgba(0, 0, 0, 0.1)'),
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getImageContainerStyles = (): ViewStyle => {
    const baseStyles: ViewStyle = {
      width: '100%',
      height: '100%',
      borderRadius: size / 2,
      overflow: 'hidden',
    };

    if (design === 'neumorphic') {
      baseStyles.backgroundColor = backgroundColor;
    } else if (design === 'skeuomorphic') {
      Object.assign(baseStyles, {
        backgroundColor: SKEUOMORPHIC_COLORS.background,
        borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
        borderColor: SKEUOMORPHIC_COLORS.shadowMedium,
      });
    } else if (design === 'glassmorphic') {
      Object.assign(baseStyles, {
        backgroundColor: 'transparent',
        borderWidth: 0.5,
        borderColor: themeContext?.theme?.mode === 'dark' 
          ? 'rgba(255, 255, 255, 0.1)' 
          : 'rgba(0, 0, 0, 0.05)',
      });
    }

    return baseStyles;
  };

  const getImageStyles = (): ImageStyle => {
    return {
      ...styles.image,
      borderRadius: size / 2,
    };
  };

  return (
    <View style={getContainerStyles()}>
      <View style={getImageContainerStyles()}>
        <Image source={{ uri: imageUrl }} style={getImageStyles()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Avatar;
