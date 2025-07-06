import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ViewStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { getSkeuomorphicCheckboxStyles, SKEUOMORPHIC_COLORS } from '../../themes/utils/skeuomorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';
import { ThemeDesign } from '../../themes/types';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  style?: ViewStyle;
  disabled?: boolean;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  backgroundColor?: string;
  textColor?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  label = 'Checkbox',
  style,
  disabled = false,
  design, // Now optional - will use theme context if not provided
  backgroundColor,
  textColor,
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const [isPressed, setIsPressed] = useState(false);
  const themeContext = useThemeSafe();
  
  // Use design prop if provided, otherwise use theme context, otherwise default to 'flat'
  const activeDesign = design || themeContext?.design || 'flat';
  const defaultBackgroundColor = backgroundColor || themeContext?.theme.colors.surface || NEUMORPHIC_COLORS.background;
  const defaultTextColor = textColor || themeContext?.theme.colors.text || NEUMORPHIC_COLORS.text;

  const toggleCheckbox = () => {
    if (disabled) return;
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  const getCheckboxStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.checkbox];

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
        width: 24,
        height: 24,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: glassmorphicColors.border,
      });
    } else if (activeDesign === 'skeuomorphic') {
      const skeuomorphicStyles = getSkeuomorphicCheckboxStyles(isChecked, disabled);
      baseStyles.push(skeuomorphicStyles.container);
    } else if (activeDesign === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: isPressed || isChecked,
        customBackground: defaultBackgroundColor,
        customBorderRadius: 6,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        width: 24,
        height: 24,
        borderWidth: 0,
        padding: 0,
      });
    } else {
      // Default flat design with theme colors
      baseStyles.push({
        backgroundColor: isChecked ? themeContext?.theme.colors.primary || '#2196f3' : defaultBackgroundColor,
        borderColor: themeContext?.theme.colors.border || '#000',
      });
    }

    if (disabled) {
      baseStyles.push(styles.disabled);
    }

    return baseStyles;
  };

  const getCheckMarkStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.checked];

    if (activeDesign === 'glassmorphic') {
      const glassmorphicColors = themeContext?.theme.mode === 'dark' 
        ? GLASSMORPHIC_COLORS.dark 
        : GLASSMORPHIC_COLORS.light;
      
      baseStyles.push({
        width: 14,
        height: 14,
        backgroundColor: themeContext?.theme.colors.primary || '#2196f3',
        borderRadius: 3,
      });
    } else if (activeDesign === 'skeuomorphic') {
      // For skeuomorphic, we'll use a checkmark symbol instead of a filled square
      return []; // The checkmark will be rendered as Text
    } else if (activeDesign === 'neumorphic') {
      baseStyles.push({
        width: 14,
        height: 14,
        backgroundColor: defaultTextColor,
        borderRadius: 3,
      });
    }

    return baseStyles;
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={getCheckboxStyles()}
        onPress={toggleCheckbox}
        disabled={disabled}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        {isChecked && (
          activeDesign === 'skeuomorphic' ? (
            <Text style={getSkeuomorphicCheckboxStyles(isChecked, disabled).checkmark}>✓</Text>
          ) : (
            <View style={getCheckMarkStyles()} />
          )
        )}
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
          activeDesign === 'skeuomorphic' && {
            color: defaultTextColor,
            textShadowColor: SKEUOMORPHIC_COLORS.shadowLight,
            textShadowOffset: { width: 0, height: 1 },
            textShadowRadius: 1,
          },
          activeDesign === 'neumorphic' && {
            color: defaultTextColor,
            textShadowColor: NEUMORPHIC_COLORS.lightShadow,
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
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
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#fff',
    opacity: 1,
    flexShrink: 0,
  } as ViewStyle,
  checked: {
    width: 12,
    height: 12,
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

export default Checkbox;
