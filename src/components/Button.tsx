import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

interface ButtonStyle extends ViewStyle {
  backgroundColor?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
}

interface ButtonProps {
  label: string;
  onPress: () => void;
  style?: ButtonStyle;
}

const Button: React.FC<ButtonProps> = ({ label, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default Button; 