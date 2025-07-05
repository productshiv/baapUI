import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface StepperProps {
  value: number;
  onValueChange: (value: number) => void;
  step?: number;
  minimumValue?: number;
  maximumValue?: number;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic';
  backgroundColor?: string;
  textColor?: string;
  buttonColor?: string;
}

const Stepper: React.FC<StepperProps> = ({
  value,
  onValueChange,
  step = 1,
  minimumValue = 0,
  maximumValue = 100,
  style,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  textColor = NEUMORPHIC_COLORS.text,
  buttonColor = '#4A90E2',
}) => {
  const [pressedButton, setPressedButton] = useState<'increment' | 'decrement' | null>(null);

  const increment = () => {
    if (value + step <= maximumValue) {
      onValueChange(value + step);
    }
  };

  const decrement = () => {
    if (value - step >= minimumValue) {
      onValueChange(value - step);
    }
  };

  const getContainerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.container];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        padding: 8,
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getButtonStyles = (type: 'increment' | 'decrement'): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.button];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: pressedButton === type,
        customBackground: backgroundColor,
        customBorderRadius: 6,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        width: 40,
        height: 40,
      });
    }

    return baseStyles;
  };

  const getButtonTextStyles = (): TextStyle => {
    const baseStyle: TextStyle = {
      ...styles.buttonText,
      color: buttonColor,
    };

    if (design === 'neumorphic') {
      baseStyle.textShadowColor = NEUMORPHIC_COLORS.lightShadow;
      baseStyle.textShadowOffset = { width: 1, height: 1 };
      baseStyle.textShadowRadius = 1;
    }

    return baseStyle;
  };

  const getValueStyles = (): TextStyle => {
    const baseStyle: TextStyle = {
      ...styles.value,
      color: textColor,
    };

    if (design === 'neumorphic') {
      baseStyle.textShadowColor = NEUMORPHIC_COLORS.lightShadow;
      baseStyle.textShadowOffset = { width: 1, height: 1 };
      baseStyle.textShadowRadius = 1;
    }

    return baseStyle;
  };

  return (
    <View style={getContainerStyles()}>
      <TouchableOpacity
        onPress={decrement}
        onPressIn={() => setPressedButton('decrement')}
        onPressOut={() => setPressedButton(null)}
        style={getButtonStyles('decrement')}
      >
        <Text style={getButtonTextStyles()}>-</Text>
      </TouchableOpacity>
      <Text style={getValueStyles()}>{value}</Text>
      <TouchableOpacity
        onPress={increment}
        onPressIn={() => setPressedButton('increment')}
        onPressOut={() => setPressedButton(null)}
        style={getButtonStyles('increment')}
      >
        <Text style={getButtonTextStyles()}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  value: {
    marginHorizontal: 16,
    fontSize: 18,
    minWidth: 40,
    textAlign: 'center',
  },
});

export default Stepper;
