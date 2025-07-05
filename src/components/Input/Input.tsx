import React from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View,
  Text,
  ViewStyle,
  TextStyle,
} from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { getSkeuomorphicInputStyles, SKEUOMORPHIC_COLORS } from '../../themes/utils/skeuomorphic';
import { useThemeSafe } from '../../themes/ThemeContext';
import { ThemeDesign } from '../../themes/types';

interface InputProps extends TextInputProps {
  style?: ViewStyle;
  label?: string;
  error?: string;
  disabled?: boolean;
  secureTextEntry?: boolean;
  placeholder?: string;
  /**
   * Design system to use. If not provided, will use the current theme from ThemeProvider.
   * @deprecated Use ThemeProvider to set design system globally instead of passing to each component
   */
  design?: ThemeDesign;
  backgroundColor?: string;
  textColor?: string;
  isFocused?: boolean;
}

const Input: React.FC<InputProps> = ({
  style,
  label,
  error,
  design, // Now optional - will use theme context if not provided
  backgroundColor,
  textColor,
  isFocused = false,
  ...props
}) => {
  const [focused, setFocused] = React.useState(isFocused);
  const themeContext = useThemeSafe();
  
  // Use design prop if provided, otherwise use theme context, otherwise default to 'flat'
  const activeDesign = design || themeContext?.design || 'flat';
  const defaultBackgroundColor = backgroundColor || themeContext?.theme.colors.surface || NEUMORPHIC_COLORS.background;
  const defaultTextColor = textColor || themeContext?.theme.colors.text || NEUMORPHIC_COLORS.text;

  const getInputStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.input];

    if (activeDesign === 'skeuomorphic') {
      const skeuomorphicStyles = getSkeuomorphicInputStyles(focused, !!error, !!props.disabled);
      baseStyles.push({
        ...skeuomorphicStyles,
        color: defaultTextColor,
        ...(backgroundColor && { backgroundColor }),
      });
    } else if (activeDesign === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: focused,
        customBackground: defaultBackgroundColor,
        customBorderRadius: 12,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        height: 40,
        paddingHorizontal: 10,
        color: defaultTextColor,
        borderWidth: 0,
      } as ViewStyle);
    } else {
      // Default flat design with theme colors
      baseStyles.push({
        backgroundColor: defaultBackgroundColor,
        borderColor: error ? themeContext?.theme.colors.error || 'red' : (focused ? themeContext?.theme.colors.primary || '#2196f3' : themeContext?.theme.colors.border || '#ccc'),
        color: defaultTextColor,
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getLabelStyles = (): TextStyle => {
    const labelStyles: TextStyle = {
      ...styles.label,
    };

    if (activeDesign === 'skeuomorphic') {
      Object.assign(labelStyles, {
        color: defaultTextColor,
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,
        textShadowColor: SKEUOMORPHIC_COLORS.shadowLight,
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1,
      } as TextStyle);
    } else if (activeDesign === 'neumorphic') {
      Object.assign(labelStyles, {
        color: defaultTextColor,
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 8,
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      } as TextStyle);
    }

    return labelStyles;
  };

  return (
    <View style={styles.container}>
      {label && <Text style={getLabelStyles()}>{label}</Text>}
      <TextInput
        style={getInputStyles()}
        placeholderTextColor={activeDesign === 'neumorphic' || activeDesign === 'skeuomorphic' ? `${defaultTextColor}80` : undefined}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
  inputError: {
    borderColor: 'red',
  },
});

export default Input;
