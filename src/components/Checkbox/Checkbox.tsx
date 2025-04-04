import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  style?: object;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  label = 'Checkbox',
  style,
  disabled = false,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheckbox = () => {
    if (disabled) return;
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={[styles.checkbox, disabled && styles.disabled]}
        onPress={toggleCheckbox}
        disabled={disabled}
      >
        {isChecked && <View style={styles.checked} />}
      </TouchableOpacity>
      <Text style={[styles.label, disabled && styles.disabledText]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    width: 12,
    height: 12,
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

export default Checkbox;
