import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface TextAreaProps extends TextInputProps {
  style?: object;
}

const TextArea: React.FC<TextAreaProps> = ({ style, ...props }) => {
  return <TextInput style={[styles.textArea, style]} multiline {...props} />;
};

const styles = StyleSheet.create({
  textArea: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    textAlignVertical: 'top',
    marginVertical: 5,
  },
});

export default TextArea; 