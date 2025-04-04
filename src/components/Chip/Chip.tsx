import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface ChipProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  labelStyle?: TextStyle;
  design?: 'flat' | 'neumorphic';
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
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getLabelStyles = (): TextStyle[] => {
    const baseStyles: TextStyle[] = [styles.label];

    if (design === 'neumorphic') {
      baseStyles.push({
        color: textColor,
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });
    }

    if (labelStyle) {
      baseStyles.push(labelStyle);
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
