import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ViewStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  style?: ViewStyle;
  disabled?: boolean;
  design?: 'flat' | 'neumorphic';
  backgroundColor?: string;
  textColor?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  label = 'Checkbox',
  style,
  disabled = false,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  textColor = NEUMORPHIC_COLORS.text,
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const [isPressed, setIsPressed] = useState(false);

  const toggleCheckbox = () => {
    if (disabled) return;
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  const getCheckboxStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.checkbox];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: isPressed || isChecked,
        customBackground: backgroundColor,
        customBorderRadius: 6,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        width: 24,
        height: 24,
        borderWidth: 0,
        padding: 0,
      });
    }

    if (disabled) {
      baseStyles.push(styles.disabled);
    }

    return baseStyles;
  };

  const getCheckMarkStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.checked];

    if (design === 'neumorphic') {
      baseStyles.push({
        width: 14,
        height: 14,
        backgroundColor: textColor,
        borderRadius: 3,
      });
    }

    return baseStyles;
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={getCheckboxStyles()}
        onPress={toggleCheckbox}
        disabled={disabled}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        {isChecked && <View style={getCheckMarkStyles()} />}
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
          },
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
    flexWrap: 'nowrap',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#fff',
    // Ensure visibility and prevent line breaks
    display: 'flex',
    opacity: 1,
    flexShrink: 0,
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#000',
  },
  label: {
    fontSize: 16,
    flex: 1,
    display: 'inline',
  },
  disabled: {
    backgroundColor: '#ccc',
  },
  disabledText: {
    color: '#ccc',
  },
});

export default Checkbox;
