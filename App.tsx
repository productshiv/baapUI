import React from 'react';
import { StyleSheet } from 'react-native';
import { ButtonShowcase } from './src/screens/ButtonShowcase';

export default function App() {
  return <ButtonShowcase />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 