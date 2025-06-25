import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ViewStyle, Animated } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface ToggleSwitchProps {
  initialValue?: boolean;
  onToggle?: (value: boolean) => void;
  label?: string;
  style?: ViewStyle;
  disabled?: boolean;
  design?: 'flat' | 'neumorphic';
  backgroundColor?: string;
  textColor?: string;
  activeColor?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  initialValue = false,
  onToggle,
  label = 'Toggle',
  style,
  disabled = false,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  textColor = NEUMORPHIC_COLORS.text,
  activeColor = '#4CAF50',
}) => {
  const [value, setValue] = useState(initialValue);
  const [isPressed, setIsPressed] = useState(false);
  const translateX = useState(new Animated.Value(value ? 28 : 0))[0];

  const toggleSwitch = () => {
    if (disabled) return;
    const newValue = !value;
    setValue(newValue);

    Animated.spring(translateX, {
      toValue: newValue ? 28 : 0,
      useNativeDriver: true,
      bounciness: 8,
    }).start();

    if (onToggle) {
      onToggle(newValue);
    }
  };

  const getToggleContainerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.toggleContainer];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed,
        customBackground: backgroundColor,
        customBorderRadius: 20,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        width: 56,
        height: 28,
        padding: 2,
      });
    }

    if (disabled) {
      baseStyles.push(styles.disabled);
    }

    return baseStyles;
  };

  const getKnobStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.knob];

    if (design === 'neumorphic') {
      const knobNeumorphicStyles = getNeumorphicStyles({
        isPressed: value,
        customBackground: value ? activeColor : backgroundColor,
        customBorderRadius: 12,
      });

      baseStyles.push(...knobNeumorphicStyles);
      baseStyles.push({
        width: 24,
        height: 24,
        margin: 0,
      });
    }

    return baseStyles;
  };

  return (
    <View style={[styles.container, style]}>
      <Text
        style={[
          styles.label,
          disabled && styles.disabledText,
          design === 'neumorphic' && {
            color: textColor,
            textShadowColor: NEUMORPHIC_COLORS.lightShadow,
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
          },
        ]}
      >
        {label}
      </Text>
      <TouchableOpacity
        style={getToggleContainerStyles()}
        onPress={toggleSwitch}
        disabled={disabled}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        activeOpacity={1}
      >
        <Animated.View
          style={[
            getKnobStyles(),
            {
              transform: [{ translateX }],
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  toggleContainer: {
    width: 50,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
  },
  knob: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    marginRight: 10,
    fontSize: 16,
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    color: '#ccc',
  },
});

export default ToggleSwitch;
