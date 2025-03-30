import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface LabelProps {
  text: string;
  style?: TextStyle;
  htmlFor?: string;
}

const Label: React.FC<LabelProps> = ({ text, style, htmlFor }) => {
  return (
    <Text style={[styles.label, style]} accessibilityLabel={htmlFor}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
});

export default Label; 