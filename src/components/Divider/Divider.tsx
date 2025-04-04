import React from 'react';
import { View, StyleSheet } from 'react-native';

interface DividerProps {
  style?: object;
}

const Divider: React.FC<DividerProps> = ({ style }) => {
  return <View style={[styles.divider, style]} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
    marginVertical: 10,
  },
});

export default Divider;
