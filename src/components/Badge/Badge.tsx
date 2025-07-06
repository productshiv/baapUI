import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { convertShadowToStyle, convertGradientToStyle } from '../../themes/utils/skeuomorphic';
import { SKEUOMORPHIC_COLORS, SKEUOMORPHIC_SHADOWS, SKEUOMORPHIC_GRADIENTS, SKEUOMORPHIC_BORDER_RADIUS, SKEUOMORPHIC_BORDER_WIDTHS } from '../../themes/variants/skeuomorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { getRetroStyles, RETRO_ERA_COLORS, RetroEra, RetroColorScheme, RetroBorderThickness, RetroCornerRadius, RetroShadowStyle } from '../../themes/utils/retro';

export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic' | 'retro';
  backgroundColor?: string;
  textColor?: string;
  // Retro-specific props
  retroEra?: RetroEra;
  retroColorScheme?: RetroColorScheme;
  retroBorderThickness?: RetroBorderThickness;
  retroCornerRadius?: RetroCornerRadius;
  retroShadowStyle?: RetroShadowStyle;
  retroGlowEffect?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  style,
  textStyle,
  design = 'flat',
  backgroundColor,
  textColor = NEUMORPHIC_COLORS.text,
  retroEra = 'neon80s',
  retroColorScheme = 'bright',
  retroBorderThickness = 'medium',
  retroCornerRadius = 'slight',
  retroShadowStyle = 'drop',
  retroGlowEffect = false,
}) => {
  const getVariantStyle = (): ViewStyle => {
    if (design === 'neumorphic') {
      switch (variant) {
        case 'secondary':
          return { backgroundColor: '#FCE4EC' };
        case 'success':
          return { backgroundColor: '#E8F5E9' };
        case 'error':
          return { backgroundColor: '#FFEBEE' };
        case 'warning':
          return { backgroundColor: '#FFF3E0' };
        case 'info':
          return { backgroundColor: '#E3F2FD' };
        default:
          return { backgroundColor: '#EDE7F6' };
      }
    }

    if (design === 'skeuomorphic') {
      switch (variant) {
        case 'secondary':
          return { backgroundColor: SKEUOMORPHIC_COLORS.secondary };
        case 'success':
          return { backgroundColor: SKEUOMORPHIC_COLORS.success };
        case 'error':
          return { backgroundColor: SKEUOMORPHIC_COLORS.error };
        case 'warning':
          return { backgroundColor: SKEUOMORPHIC_COLORS.warning };
        case 'info':
          return { backgroundColor: SKEUOMORPHIC_COLORS.info };
        default:
          return { backgroundColor: SKEUOMORPHIC_COLORS.primary };
      }
    }

    if (design === 'glassmorphic') {
      switch (variant) {
        case 'secondary':
          return { backgroundColor: 'rgba(245, 0, 87, 0.2)' };
        case 'success':
          return { backgroundColor: 'rgba(76, 175, 80, 0.2)' };
        case 'error':
          return { backgroundColor: 'rgba(244, 67, 54, 0.2)' };
        case 'warning':
          return { backgroundColor: 'rgba(255, 152, 0, 0.2)' };
        case 'info':
          return { backgroundColor: 'rgba(33, 150, 243, 0.2)' };
        default:
          return { backgroundColor: 'rgba(98, 0, 238, 0.2)' };
      }
    }

    if (design === 'retro') {
      const colors = RETRO_ERA_COLORS[retroEra];
      switch (variant) {
        case 'secondary':
          return { backgroundColor: colors.secondary };
        case 'success':
          return { backgroundColor: colors.accent };
        case 'error':
          return { backgroundColor: '#FF073A' }; // Neon red
        case 'warning':
          return { backgroundColor: '#FFFF00' }; // Electric yellow
        case 'info':
          return { backgroundColor: colors.secondary };
        default:
          return { backgroundColor: colors.primary };
      }
    }

    switch (variant) {
      case 'secondary':
        return { backgroundColor: '#f50057' };
      case 'success':
        return { backgroundColor: '#4caf50' };
      case 'error':
        return { backgroundColor: '#f44336' };
      case 'warning':
        return { backgroundColor: '#ff9800' };
      case 'info':
        return { backgroundColor: '#2196f3' };
      default:
        return { backgroundColor: '#6200ee' };
    }
  };

  const getSizeStyle = (): { container: ViewStyle; text: TextStyle } => {
    switch (size) {
      case 'small':
        return {
          container: {
            minWidth: 16,
            height: 16,
            borderRadius: 8,
            paddingHorizontal: 4,
          },
          text: {
            fontSize: 10,
          },
        };
      case 'large':
        return {
          container: {
            minWidth: 28,
            height: 28,
            borderRadius: 14,
            paddingHorizontal: 8,
          },
          text: {
            fontSize: 14,
          },
        };
      default:
        return {
          container: {
            minWidth: 22,
            height: 22,
            borderRadius: 11,
            paddingHorizontal: 6,
          },
          text: {
            fontSize: 12,
          },
        };
    }
  };

  const getBadgeStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.badge];
    const sizeStyle = getSizeStyle();
    const variantStyle = getVariantStyle();
    const bgColor = (backgroundColor || variantStyle.backgroundColor || '') as string;

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: bgColor,
        customBorderRadius: sizeStyle.container.borderRadius as number,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        ...sizeStyle.container,
        backgroundColor: bgColor,
      });
    } else if (design === 'skeuomorphic') {
      const skeuomorphicStyle: ViewStyle = {
        ...sizeStyle.container,
        backgroundColor: bgColor,
        borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
        borderColor: SKEUOMORPHIC_COLORS.borderLight,
        ...convertGradientToStyle(SKEUOMORPHIC_GRADIENTS.button.primary),
        ...convertShadowToStyle(SKEUOMORPHIC_SHADOWS.button.default),
      };
      baseStyles.push(skeuomorphicStyle);
    } else if (design === 'glassmorphic') {
      const glassmorphicStyle = getGlassmorphicStyles({
        intensity: 'medium',
        blur: 'light',
        theme: 'light',
        customBackground: bgColor,
        customBorderRadius: sizeStyle.container.borderRadius as number,
      });
      baseStyles.push({
        ...glassmorphicStyle,
        ...sizeStyle.container,
      });
    } else if (design === 'retro') {
      const retroStyle = getRetroStyles({
        era: retroEra,
        colorScheme: retroColorScheme,
        borderThickness: retroBorderThickness,
        cornerRadius: retroCornerRadius,
        shadowStyle: retroShadowStyle,
        customColors: { surface: bgColor },
        glowEffect: retroGlowEffect,
      });
      baseStyles.push({
        ...retroStyle,
        ...sizeStyle.container,
        backgroundColor: bgColor,
      });
    } else {
      baseStyles.push(variantStyle, sizeStyle.container);
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getTextStyles = (): TextStyle => {
    const baseStyles: TextStyle = {
      ...styles.text,
    };
    const sizeStyle = getSizeStyle();

    if (design === 'neumorphic') {
      Object.assign(baseStyles, {
        color: textColor,
        fontSize: sizeStyle.text.fontSize,
        fontWeight: '600',
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });

      // Add variant-specific text colors for neumorphic design
      switch (variant) {
        case 'secondary':
          Object.assign(baseStyles, { color: '#C2185B' });
          break;
        case 'success':
          Object.assign(baseStyles, { color: '#2E7D32' });
          break;
        case 'error':
          Object.assign(baseStyles, { color: '#C62828' });
          break;
        case 'warning':
          Object.assign(baseStyles, { color: '#F57C00' });
          break;
        case 'info':
          Object.assign(baseStyles, { color: '#1976D2' });
          break;
        default:
          Object.assign(baseStyles, { color: '#4527A0' });
      }
    } else if (design === 'skeuomorphic') {
      Object.assign(baseStyles, {
        color: SKEUOMORPHIC_COLORS.onPrimary,
        fontSize: sizeStyle.text.fontSize,
        fontWeight: '700',
        textShadowColor: SKEUOMORPHIC_COLORS.shadowMedium,
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
      });
    } else if (design === 'glassmorphic') {
      Object.assign(baseStyles, {
        color: textColor || GLASSMORPHIC_COLORS.light.text,
        fontSize: sizeStyle.text.fontSize,
        fontWeight: '600',
      });

      // Add variant-specific text colors for glassmorphic design
      switch (variant) {
        case 'secondary':
          Object.assign(baseStyles, { color: '#f50057' });
          break;
        case 'success':
          Object.assign(baseStyles, { color: '#4caf50' });
          break;
        case 'error':
          Object.assign(baseStyles, { color: '#f44336' });
          break;
        case 'warning':
          Object.assign(baseStyles, { color: '#ff9800' });
          break;
        case 'info':
          Object.assign(baseStyles, { color: '#2196f3' });
          break;
        default:
          Object.assign(baseStyles, { color: '#6200ee' });
      }
    } else if (design === 'retro') {
      const colors = RETRO_ERA_COLORS[retroEra];
      Object.assign(baseStyles, {
        color: textColor || colors.text,
        fontSize: sizeStyle.text.fontSize,
        fontWeight: retroEra === 'neon80s' || retroEra === 'pixelArt' ? 'bold' : '600',
        letterSpacing: retroEra === 'pixelArt' || retroEra === 'terminal' ? 1 : 0.5,
        textTransform: retroEra === 'neon80s' || retroEra === 'pixelArt' ? 'uppercase' : 'none',
        fontFamily: retroEra === 'pixelArt' || retroEra === 'terminal' ? 'monospace' : undefined,
      });

      // Add glow effect for neon styles
      if ((retroEra === 'neon80s' || retroEra === 'terminal') && retroGlowEffect) {
        Object.assign(baseStyles, {
          textShadowColor: colors.glow,
          textShadowOffset: { width: 0, height: 0 },
          textShadowRadius: 8,
        });
      }
    } else {
      Object.assign(baseStyles, sizeStyle.text);
    }

    if (textStyle) {
      Object.assign(baseStyles, textStyle);
    }

    return baseStyles;
  };

  return (
    <View style={getBadgeStyles()}>
      <Text style={getTextStyles()}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Badge;
