import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ViewStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { getSkeuomorphicRadioStyles, SKEUOMORPHIC_COLORS } from '../../themes/utils/skeuomorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

interface RadioButtonProps {
  initialSelected?: boolean;
  onToggle?: (selected: boolean) => void;
  label?: string;
  style?: ViewStyle;
  disabled?: boolean;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  backgroundColor?: string;
  textColor?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  initialSelected = false,
  onToggle,
  label = 'Radio Button',
  style,
  disabled = false,
  design, // Now optional - will use theme context if not provided
  backgroundColor,
  textColor,
}) => {
  const [selected, setSelected] = useState(initialSelected);
  const [isPressed, setIsPressed] = useState(false);
  const themeContext = useThemeSafe();
  
  // Use design prop if provided, otherwise use theme context, otherwise default to 'flat'
  const activeDesign = design || themeContext?.design || 'flat';
  const defaultBackgroundColor = backgroundColor || themeContext?.theme.colors.surface || NEUMORPHIC_COLORS.background;
  const defaultTextColor = textColor || themeContext?.theme.colors.text || NEUMORPHIC_COLORS.text;

  const toggleSelection = () => {
    if (disabled) return;
    const newSelected = !selected;
    setSelected(newSelected);
    if (onToggle) {
      onToggle(newSelected);
    }
  };

  const getRadioStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.radio];

    if (activeDesign === 'glassmorphic') {
      const glassmorphicColors = themeContext?.theme.mode === 'dark' 
        ? GLASSMORPHIC_COLORS.dark 
        : GLASSMORPHIC_COLORS.light;
      
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: isPressed ? 'medium' : 'subtle',
        theme: themeContext?.theme.mode || 'light',
        customBackground: backgroundColor || glassmorphicColors.background,
      });
      
      baseStyles.push({
        ...glassmorphicStyles,
        width: 28,
        height: 28,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: glassmorphicColors.border,
      });
    } else if (activeDesign === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: isPressed || selected,
        customBackground: defaultBackgroundColor,
        customBorderRadius: 15,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        width: 28,
        height: 28,
        borderWidth: 0,
        padding: 0,
      });
    } else if (activeDesign === 'skeuomorphic') {
      const skeuomorphicStyles = getSkeuomorphicRadioStyles(selected, disabled);
      baseStyles.push(skeuomorphicStyles.container);
    } else {
      // Default flat design with theme colors
      baseStyles.push({
        backgroundColor: selected ? themeContext?.theme.colors.primary || '#2196f3' : defaultBackgroundColor,
        borderColor: themeContext?.theme.colors.border || '#000',
      });
    }

    if (disabled) {
      baseStyles.push(styles.disabled);
    }

    return baseStyles;
  };

  const getSelectedStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.selected];

    if (activeDesign === 'glassmorphic') {
      const glassmorphicColors = themeContext?.theme.mode === 'dark' 
        ? GLASSMORPHIC_COLORS.dark 
        : GLASSMORPHIC_COLORS.light;
      
      baseStyles.push({
        width: 14,
        height: 14,
        backgroundColor: themeContext?.theme.colors.primary || '#2196f3',
        borderRadius: 7,
      });
    } else if (activeDesign === 'neumorphic') {
      baseStyles.push({
        width: 14,
        height: 14,
        backgroundColor: defaultTextColor,
        borderRadius: 7,
      });
    } else if (activeDesign === 'skeuomorphic') {
      const skeuomorphicStyles = getSkeuomorphicRadioStyles(selected, disabled);
      baseStyles.push(skeuomorphicStyles.innerCircle);
    }

    return baseStyles;
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={getRadioStyles()}
        onPress={toggleSelection}
        disabled={disabled}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        {selected && <View style={getSelectedStyles()} />}
      </TouchableOpacity>
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
          },
          activeDesign === 'skeuomorphic' && {
            color: defaultTextColor,
          },
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
    flexWrap: 'nowrap',
  } as ViewStyle,
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#fff',
    opacity: 1,
    flexShrink: 0,
  } as ViewStyle,
  selected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  } as ViewStyle,
  label: {
    fontSize: 16,
    flex: 1,
  } as ViewStyle,
  disabled: {
    backgroundColor: '#ccc',
  } as ViewStyle,
  disabledText: {
    color: '#ccc',
  } as ViewStyle,
});

export default RadioButton;
