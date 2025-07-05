import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { convertShadowToStyle, convertGradientToStyle } from '../../themes/utils/skeuomorphic';
import { SKEUOMORPHIC_COLORS, SKEUOMORPHIC_SHADOWS, SKEUOMORPHIC_GRADIENTS, SKEUOMORPHIC_BORDER_RADIUS, SKEUOMORPHIC_BORDER_WIDTHS } from '../../themes/variants/skeuomorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

interface ChipProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  labelStyle?: TextStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  backgroundColor?: string;
  textColor?: string;
  isSelected?: boolean;
}

const Chip: React.FC<ChipProps> = ({
  label,
  onPress,
  style,
  labelStyle,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  textColor = NEUMORPHIC_COLORS.text,
  isSelected = false,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const themeContext = useThemeSafe();

  const getChipStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.chip];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: isPressed || isSelected,
        customBackground: backgroundColor,
        customBorderRadius: 15,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
      });
    } else if (design === 'skeuomorphic') {
      baseStyles.push({
        backgroundColor: isPressed || isSelected ? SKEUOMORPHIC_COLORS.primary : SKEUOMORPHIC_COLORS.surface,
        borderRadius: SKEUOMORPHIC_BORDER_RADIUS.full,
        borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
        borderColor: isPressed || isSelected ? SKEUOMORPHIC_COLORS.borderDark : SKEUOMORPHIC_COLORS.border,
        ...convertShadowToStyle(isPressed || isSelected ? SKEUOMORPHIC_SHADOWS.button.pressed : SKEUOMORPHIC_SHADOWS.button.default),
        ...convertGradientToStyle(isPressed || isSelected ? SKEUOMORPHIC_GRADIENTS.button.primary : SKEUOMORPHIC_GRADIENTS.card),
      });
    } else if (design === 'glassmorphic') {
      const glassmorphicStyles = getGlassmorphicStyles({
        theme: themeContext?.theme?.mode as 'light' | 'dark' || 'light',
        intensity: isPressed || isSelected ? 'strong' : 'medium',
        blur: 'light',
        customBackground: backgroundColor,
        customBorderRadius: 15,
      });
      baseStyles.push(glassmorphicStyles);
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getLabelStyles = (): TextStyle => {
    const baseStyles: TextStyle = {
      ...styles.label,
    };

    if (design === 'neumorphic') {
      Object.assign(baseStyles, {
        color: textColor,
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });
    } else if (design === 'skeuomorphic') {
      Object.assign(baseStyles, {
        color: isPressed || isSelected ? SKEUOMORPHIC_COLORS.onPrimary : SKEUOMORPHIC_COLORS.onSurface,
        fontWeight: '500',
        textShadowColor: isPressed || isSelected ? SKEUOMORPHIC_COLORS.shadowMedium : SKEUOMORPHIC_COLORS.highlight,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });
    } else if (design === 'glassmorphic') {
      Object.assign(baseStyles, {
        color: textColor || (themeContext?.theme?.mode === 'dark' ? GLASSMORPHIC_COLORS.dark.text : GLASSMORPHIC_COLORS.light.text),
        fontWeight: '600',
      });
    }

    if (labelStyle) {
      Object.assign(baseStyles, labelStyle);
    }

    return baseStyles;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={getChipStyles()}
    >
      <Text style={getLabelStyles()}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  label: {
    fontSize: 14,
  },
});

export default Chip;
