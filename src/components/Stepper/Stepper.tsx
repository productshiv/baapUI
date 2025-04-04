import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface StepperProps {
  value: number;
  onValueChange: (value: number) => void;
  step?: number;
  minimumValue?: number;
  maximumValue?: number;
  style?: object;
}

const Stepper: React.FC<StepperProps> = ({
  value,
  onValueChange,
  step = 1,
  minimumValue = 0,
  maximumValue = 100,
  style,
}) => {
  const increment = () => {
    if (value + step <= maximumValue) {
      onValueChange(value + step);
    }
  };

  const decrement = () => {
    if (value - step >= minimumValue) {
      onValueChange(value - step);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <Button title="-" onPress={decrement} />
      <Text style={styles.value}>{value}</Text>
      <Button title="+" onPress={increment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    marginHorizontal: 10,
    fontSize: 18,
  },
});

export default Stepper;
