import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface RadioButtonProps {
  initialSelected?: boolean;
  onToggle?: (selected: boolean) => void;
  label?: string;
  style?: ViewStyle;
  disabled?: boolean;
  design?: 'flat' | 'neumorphic';
  backgroundColor?: string;
  textColor?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  initialSelected = false,
  onToggle,
  label = 'Radio Button',
  style,
  disabled = false,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  textColor = NEUMORPHIC_COLORS.text,
}) => {
  const [selected, setSelected] = useState(initialSelected);
  const [isPressed, setIsPressed] = useState(false);

  const toggleSelection = () => {
    if (disabled) return;
    const newSelected = !selected;
    setSelected(newSelected);
    if (onToggle) {
      onToggle(newSelected);
    }
  };

  const getRadioStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.radio];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: isPressed || selected,
        customBackground: backgroundColor,
        customBorderRadius: 15,
      });
      
      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        width: 28,
        height: 28,
        borderWidth: 0,
        padding: 0,
      });
    }

    if (disabled) {
      baseStyles.push(styles.disabled);
    }

    return baseStyles;
  };

  const getSelectedStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.selected];

    if (design === 'neumorphic') {
      baseStyles.push({
        width: 14,
        height: 14,
        backgroundColor: textColor,
        borderRadius: 7,
      });
    }

    return baseStyles;
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={getRadioStyles()}
        onPress={toggleSelection}
        disabled={disabled}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        {selected && <View style={getSelectedStyles()} />}
      </TouchableOpacity>
      <Text 
        style={[
          styles.label,
          disabled && styles.disabledText,
          design === 'neumorphic' && {
            color: textColor,
            textShadowColor: NEUMORPHIC_COLORS.lightShadow,
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
          }
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  selected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  label: {
    fontSize: 16,
  },
  disabled: {
    backgroundColor: '#ccc',
  },
  disabledText: {
    color: '#ccc',
  },
});

export default RadioButton;
