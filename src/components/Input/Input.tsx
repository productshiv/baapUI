import React from 'react';
import { TextInput, StyleSheet, TextInputProps, View, Text, ViewStyle, TextStyle } from 'react-native';

interface InputProps extends TextInputProps {
  style?: ViewStyle;
  label?: string;
  error?: string;
  disabled?: boolean;
  secureTextEntry?: boolean;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ style, label, error, ...props }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput 
        style={[
          styles.input, 
          error ? styles.inputError : null,
          style
        ]} 
        {...props} 
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
  inputError: {
    borderColor: 'red',
  },
});

export default Input; 