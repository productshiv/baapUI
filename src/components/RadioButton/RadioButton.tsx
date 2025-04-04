import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface RadioButtonProps {
  initialSelected?: boolean;
  onToggle?: (selected: boolean) => void;
  label?: string;
  style?: object;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  initialSelected = false,
  onToggle,
  label = 'Radio Button',
  style,
}) => {
  const [selected, setSelected] = useState(initialSelected);

  const toggleSelection = () => {
    const newSelected = !selected;
    setSelected(newSelected);
    if (onToggle) {
      onToggle(newSelected);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.radio} onPress={toggleSelection}>
        {selected && <View style={styles.selected} />}
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
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
});

export default RadioButton;
