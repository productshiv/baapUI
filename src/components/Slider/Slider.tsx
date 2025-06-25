import React from 'react';
import { View, StyleSheet, ViewStyle } from '../../platform';
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
      } as ViewStyle);
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  // Cross-platform slider using HTML input range
  const WebSlider = () => (
    <input
      type="range"
      min={minimumValue}
      max={maximumValue}
      value={value}
      step={step}
      onChange={(e) => onValueChange(Number(e.target.value))}
      style={{
        width,
        height: 20,
        background: maximumTrackTintColor,
        outline: 'none',
        opacity: 0.7,
        transition: 'opacity 0.2s',
        cursor: 'pointer',
        borderRadius: '10px',
        appearance: 'none',
        WebkitAppearance: 'none',
      }}
      {...props}
    />
  );

  return (
    <View style={getContainerStyles()}>
      <WebSlider />
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
