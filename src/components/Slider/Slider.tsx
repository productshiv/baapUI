import React from 'react';
import { View, StyleSheet, ViewStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

interface SliderProps {
  value: number;
  onValueChange: (value: number) => void;
  minimumValue?: number;
  maximumValue?: number;
  minimumTrackTintColor?: string;
  maximumTrackTintColor?: string;
  thumbTintColor?: string;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  backgroundColor?: string;
  width?: number;
  step?: number;
}

const CustomSlider: React.FC<SliderProps> = ({
  value,
  onValueChange,
  minimumValue = 0,
  maximumValue = 100,
  minimumTrackTintColor,
  maximumTrackTintColor,
  thumbTintColor,
  style,
  design, // Now optional - will use theme context if not provided
  backgroundColor,
  width = 200,
  step,
  ...props
}) => {
  const themeContext = useThemeSafe();
  
  // Use design prop if provided, otherwise use theme context, otherwise default to 'flat'
  const activeDesign = design || themeContext?.design || 'flat';
  const defaultBackgroundColor = backgroundColor || themeContext?.theme.colors.surface || NEUMORPHIC_COLORS.background;
  const defaultMinimumTrackTintColor = minimumTrackTintColor || themeContext?.theme.colors.primary || NEUMORPHIC_COLORS.primary;
  const defaultMaximumTrackTintColor = maximumTrackTintColor || themeContext?.theme.colors.border || NEUMORPHIC_COLORS.lightShadow;
  const defaultThumbTintColor = thumbTintColor || themeContext?.theme.colors.primary || NEUMORPHIC_COLORS.primary;
  const getContainerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.container];

    if (activeDesign === 'glassmorphic') {
      const glassmorphicColors = themeContext?.theme.mode === 'dark' 
        ? GLASSMORPHIC_COLORS.dark 
        : GLASSMORPHIC_COLORS.light;
      
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: 'subtle',
        theme: themeContext?.theme.mode || 'light',
        customBackground: backgroundColor || glassmorphicColors.background,
      });
      
      baseStyles.push({
        ...glassmorphicStyles,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: glassmorphicColors.border,
        padding: 12,
      } as ViewStyle);
    } else if (activeDesign === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: defaultBackgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor: defaultBackgroundColor,
        padding: 12,
      } as ViewStyle);
    } else {
      // Default flat design with theme colors
      baseStyles.push({
        backgroundColor: defaultBackgroundColor,
        borderRadius: 8,
        padding: 12,
      } as ViewStyle);
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  // Cross-platform slider using HTML input range
  const WebSlider = () => {
    const getSliderStyles = () => {
      const baseStyles = {
        width,
        height: 20,
        outline: 'none',
        opacity: 0.7,
        transition: 'opacity 0.2s',
        cursor: 'pointer',
        borderRadius: '10px',
        appearance: 'none' as const,
        WebkitAppearance: 'none' as const,
      };

      if (activeDesign === 'glassmorphic') {
        const glassmorphicColors = themeContext?.theme.mode === 'dark' 
          ? GLASSMORPHIC_COLORS.dark 
          : GLASSMORPHIC_COLORS.light;
        
        return {
          ...baseStyles,
          background: `linear-gradient(to right, ${defaultMinimumTrackTintColor} 0%, ${defaultMinimumTrackTintColor} ${(value - minimumValue) / (maximumValue - minimumValue) * 100}%, ${glassmorphicColors.surface} ${(value - minimumValue) / (maximumValue - minimumValue) * 100}%, ${glassmorphicColors.surface} 100%)`,
          border: `1px solid ${glassmorphicColors.border}`,
          backdropFilter: 'blur(10px)',
          boxShadow: `0 4px 6px ${glassmorphicColors.shadow}`,
        };
      }

      return {
        ...baseStyles,
        background: defaultMaximumTrackTintColor,
      };
    };

    return (
      <input
        type="range"
        min={minimumValue}
        max={maximumValue}
        value={value}
        step={step}
        onChange={e => onValueChange(Number(e.target.value))}
        style={getSliderStyles()}
        {...props}
      />
    );
  };

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
