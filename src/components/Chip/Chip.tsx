import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ChipProps {
  label: string;
  onPress: () => void;
  style?: object;
}

const Chip: React.FC<ChipProps> = ({ label, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.chip, style]}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  label: {
    fontSize: 14,
    color: '#333',
  },
});

export default Chip;
