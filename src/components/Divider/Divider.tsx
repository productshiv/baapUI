import React from 'react';
import { View, StyleSheet, ViewStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { convertShadowToStyle, convertGradientToStyle } from '../../themes/utils/skeuomorphic';
import { SKEUOMORPHIC_COLORS, SKEUOMORPHIC_SHADOWS, SKEUOMORPHIC_GRADIENTS, SKEUOMORPHIC_BORDER_RADIUS, SKEUOMORPHIC_BORDER_WIDTHS } from '../../themes/variants/skeuomorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

interface DividerProps {
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  backgroundColor?: string;
  thickness?: number;
}

const Divider: React.FC<DividerProps> = ({
  style,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  thickness = 1,
}) => {
  const themeContext = useThemeSafe();
  const getDividerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [
      styles.divider,
      {
        height: thickness,
      },
    ];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: backgroundColor,
        customBorderRadius: thickness / 2,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        height: thickness,
        marginVertical: Math.max(thickness * 2, 10),
      });
    } else if (design === 'skeuomorphic') {
      baseStyles.push({
        backgroundColor: SKEUOMORPHIC_COLORS.border,
        height: thickness,
        borderRadius: thickness / 2,
        borderTopWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
        borderTopColor: SKEUOMORPHIC_COLORS.highlight,
        borderBottomWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
        borderBottomColor: SKEUOMORPHIC_COLORS.shadowMedium,
        marginVertical: Math.max(thickness * 2, 10),
        ...convertShadowToStyle(SKEUOMORPHIC_SHADOWS.input.default),
      });
    } else if (design === 'glassmorphic') {
      const glassmorphicStyles = getGlassmorphicStyles({
        theme: themeContext?.theme?.mode as 'light' | 'dark' || 'light',
        intensity: 'medium',
        blur: 'medium',
        customBackground: backgroundColor || 'rgba(255, 255, 255, 0.1)',
        customBorderRadius: thickness / 2,
      });

      baseStyles.push({
        ...glassmorphicStyles,
        height: thickness,
        marginVertical: Math.max(thickness * 2, 10),
        borderWidth: 0.5,
        borderColor: themeContext?.theme?.mode === 'dark' 
          ? 'rgba(255, 255, 255, 0.2)' 
          : 'rgba(0, 0, 0, 0.1)',
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  return <View style={getDividerStyles()} />;
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    marginVertical: 10,
  },
});

export default Divider;
