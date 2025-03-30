import React from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

interface SliderProps {
  value: number;
  onValueChange: (value: number) => void;
  minimumValue?: number;
  maximumValue?: number;
  minimumTrackTintColor?: string;
  maximumTrackTintColor?: string;
  thumbTintColor?: string;
  style?: object;
}

const CustomSlider: React.FC<SliderProps> = ({
  value,
  onValueChange,
  minimumValue = 0,
  maximumValue = 100,
  minimumTrackTintColor = '#007bff',
  maximumTrackTintColor = '#ccc',
  thumbTintColor = '#007bff',
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      <Slider
        value={value}
        onValueChange={onValueChange}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        minimumTrackTintColor={minimumTrackTintColor}
        maximumTrackTintColor={maximumTrackTintColor}
        thumbTintColor={thumbTintColor}
        style={{ width: 200 }}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default CustomSlider; 