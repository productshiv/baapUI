import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ViewStyle, Animated } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { getSkeuomorphicToggleStyles, SKEUOMORPHIC_COLORS } from '../../themes/utils/skeuomorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

interface ToggleSwitchProps {
  initialValue?: boolean;
  onToggle?: (value: boolean) => void;
  label?: string;
  style?: ViewStyle;
  disabled?: boolean;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  backgroundColor?: string;
  textColor?: string;
  activeColor?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  initialValue = false,
  onToggle,
  label = 'Toggle',
  style,
  disabled = false,
  design, // Now optional - will use theme context if not provided
  backgroundColor,
  textColor,
  activeColor,
}) => {
  const [value, setValue] = useState(initialValue);
  const [isPressed, setIsPressed] = useState(false);
  const translateX = useState(new Animated.Value(value ? 28 : 0))[0];
  const themeContext = useThemeSafe();
  
  // Use design prop if provided, otherwise use theme context, otherwise default to 'flat'
  const activeDesign = design || themeContext?.design || 'flat';
  const defaultBackgroundColor = backgroundColor || themeContext?.theme.colors.surface || NEUMORPHIC_COLORS.background;
  const defaultTextColor = textColor || themeContext?.theme.colors.text || NEUMORPHIC_COLORS.text;
  const defaultActiveColor = activeColor || themeContext?.theme.colors.primary || '#4CAF50';

  const toggleSwitch = () => {
    if (disabled) return;
    const newValue = !value;
    setValue(newValue);

    Animated.spring(translateX, {
      toValue: newValue ? 28 : 0,
      useNativeDriver: true,
      bounciness: 8,
    }).start();

    if (onToggle) {
      onToggle(newValue);
    }
  };

  const getToggleContainerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.toggleContainer];

    if (activeDesign === 'glassmorphic') {
      const glassmorphicColors = themeContext?.theme.mode === 'dark' 
        ? GLASSMORPHIC_COLORS.dark 
        : GLASSMORPHIC_COLORS.light;
      
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: isPressed ? 'medium' : 'subtle',
        theme: themeContext?.theme.mode || 'light',
        customBackground: value ? defaultActiveColor : (backgroundColor || glassmorphicColors.background),
      });
      
      baseStyles.push({
        ...glassmorphicStyles,
        width: 56,
        height: 28,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: glassmorphicColors.border,
        padding: 2,
      });
    } else if (activeDesign === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed,
        customBackground: defaultBackgroundColor,
        customBorderRadius: 20,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        width: 56,
        height: 28,
        padding: 2,
      });
    } else if (activeDesign === 'skeuomorphic') {
      const skeuomorphicStyles = getSkeuomorphicToggleStyles(value, disabled);
      baseStyles.push(skeuomorphicStyles.track);
    } else {
      // Default flat design with theme colors
      baseStyles.push({
        backgroundColor: value ? defaultActiveColor : defaultBackgroundColor,
        borderColor: themeContext?.theme.colors.border || '#000',
      });
    }

    if (disabled) {
      baseStyles.push(styles.disabled);
    }

    return baseStyles;
  };

  const getKnobStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.knob];

    if (activeDesign === 'glassmorphic') {
      const glassmorphicColors = themeContext?.theme.mode === 'dark' 
        ? GLASSMORPHIC_COLORS.dark 
        : GLASSMORPHIC_COLORS.light;
      
      const knobGlassmorphicStyles = getGlassmorphicStyles({
        intensity: 'medium',
        theme: themeContext?.theme.mode || 'light',
        customBackground: glassmorphicColors.surface,
      });
      
      baseStyles.push({
        ...knobGlassmorphicStyles,
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: glassmorphicColors.border,
        margin: 0,
      });
    } else if (activeDesign === 'neumorphic') {
      const knobNeumorphicStyles = getNeumorphicStyles({
        isPressed: value,
        customBackground: value ? defaultActiveColor : defaultBackgroundColor,
        customBorderRadius: 12,
      });

      baseStyles.push(...knobNeumorphicStyles);
      baseStyles.push({
        width: 24,
        height: 24,
        margin: 0,
      });
    } else if (activeDesign === 'skeuomorphic') {
      const skeuomorphicStyles = getSkeuomorphicToggleStyles(value, disabled);
      baseStyles.push(skeuomorphicStyles.thumb);
    }

    return baseStyles;
  };

  return (
    <View style={[styles.container, style]}>
      <Text
        style={[
          styles.label,
          disabled && styles.disabledText,
          activeDesign === 'glassmorphic' && {
            color: textColor || (themeContext?.theme.mode === 'dark' 
              ? GLASSMORPHIC_COLORS.dark.text 
              : GLASSMORPHIC_COLORS.light.text),
            textShadowColor: 'rgba(255, 255, 255, 0.1)',
            textShadowOffset: { width: 0, height: 1 },
            textShadowRadius: 1,
          },
          activeDesign === 'neumorphic' && {
            color: defaultTextColor,
            textShadowColor: NEUMORPHIC_COLORS.lightShadow,
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
          },
          activeDesign === 'skeuomorphic' && {
            color: defaultTextColor,
            textShadowColor: SKEUOMORPHIC_COLORS.shadowLight,
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
          },
        ]}
      >
        {label}
      </Text>
      <TouchableOpacity
        style={getToggleContainerStyles()}
        onPress={toggleSwitch}
        disabled={disabled}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        activeOpacity={1}
      >
        <Animated.View
          style={[
            getKnobStyles(),
            {
              transform: [{ translateX }],
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  } as ViewStyle,
  toggleContainer: {
    width: 50,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
  } as ViewStyle,
  knob: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  } as ViewStyle,
  label: {
    marginRight: 10,
    fontSize: 16,
  } as ViewStyle,
  disabled: {
    opacity: 0.5,
  } as ViewStyle,
  disabledText: {
    color: '#ccc',
  } as ViewStyle,
});

export default ToggleSwitch;
