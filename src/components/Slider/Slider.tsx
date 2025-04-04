import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Slider from '@react-native-community/slider';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface SliderProps {
  value: number;
  onValueChange: (value: number) => void;
  minimumValue?: number;
  maximumValue?: number;
  minimumTrackTintColor?: string;
  maximumTrackTintColor?: string;
  thumbTintColor?: string;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic';
  backgroundColor?: string;
  width?: number;
  step?: number;
}

const CustomSlider: React.FC<SliderProps> = ({
  value,
  onValueChange,
  minimumValue = 0,
  maximumValue = 100,
  minimumTrackTintColor = NEUMORPHIC_COLORS.primary,
  maximumTrackTintColor = NEUMORPHIC_COLORS.lightShadow,
  thumbTintColor = NEUMORPHIC_COLORS.primary,
  style,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  width = 200,
  step,
  ...props
}) => {
  const getContainerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.container];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });
      
      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        padding: 12,
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  return (
    <View style={getContainerStyles()}>
      <Slider
        value={value}
        onValueChange={onValueChange}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        minimumTrackTintColor={minimumTrackTintColor}
        maximumTrackTintColor={maximumTrackTintColor}
        thumbTintColor={thumbTintColor}
        style={{ width }}
        step={step}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
  },
});

export default CustomSlider;
