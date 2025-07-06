import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

interface StepperProps {
  value: number;
  onValueChange: (value: number) => void;
  step?: number;
  minimumValue?: number;
  maximumValue?: number;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
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
  const themeContext = useThemeSafe();
  const activeDesign = design || themeContext?.theme?.design || 'flat';
  const themeMode = themeContext?.theme?.mode || 'light';

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

    if (activeDesign === 'neumorphic') {
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
    } else if (activeDesign === 'glassmorphic') {
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: 'medium',
        blur: 'medium',
        theme: themeMode,
        customBorderRadius: 12,
      });

      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        padding: 12,
        borderRadius: 12,
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getButtonStyles = (type: 'increment' | 'decrement'): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.button];
    const isPressed = pressedButton === type;

    if (activeDesign === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: isPressed,
        customBackground: backgroundColor,
        customBorderRadius: 6,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        width: 40,
        height: 40,
      });
    } else if (activeDesign === 'glassmorphic') {
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: isPressed ? 'strong' : 'medium',
        blur: 'medium',
        theme: themeMode,
        customBorderRadius: 8,
      });

      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        width: 40,
        height: 40,
        borderRadius: 8,
      });
    }

    return baseStyles;
  };

  const getButtonTextStyles = (): TextStyle => {
    const baseStyle: TextStyle = {
      ...styles.buttonText,
      color: buttonColor,
    };

    if (activeDesign === 'neumorphic') {
      baseStyle.textShadowColor = NEUMORPHIC_COLORS.lightShadow;
      baseStyle.textShadowOffset = { width: 1, height: 1 };
      baseStyle.textShadowRadius = 1;
    } else if (activeDesign === 'glassmorphic') {
      baseStyle.color = themeContext?.theme?.colors?.primary || '#007AFF';
      baseStyle.textShadowColor = themeMode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)';
      baseStyle.textShadowOffset = { width: 0, height: 1 };
      baseStyle.textShadowRadius = 2;
      baseStyle.fontWeight = '700';
    }

    return baseStyle;
  };

  const getValueStyles = (): TextStyle => {
    const baseStyle: TextStyle = {
      ...styles.value,
      color: textColor,
    };

    if (activeDesign === 'neumorphic') {
      baseStyle.textShadowColor = NEUMORPHIC_COLORS.lightShadow;
      baseStyle.textShadowOffset = { width: 1, height: 1 };
      baseStyle.textShadowRadius = 1;
    } else if (activeDesign === 'glassmorphic') {
      const glassmorphicColors = GLASSMORPHIC_COLORS[themeMode];
      baseStyle.color = glassmorphicColors.text;
      baseStyle.textShadowColor = themeMode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)';
      baseStyle.textShadowOffset = { width: 0, height: 1 };
      baseStyle.textShadowRadius = 2;
      baseStyle.fontWeight = '600';
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
