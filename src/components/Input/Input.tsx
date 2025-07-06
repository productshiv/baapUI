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
import { getGlassmorphicInputStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';
import { ThemeDesign } from '../../themes/types';
import { useMemoizedStyle, useMemoizedCallback } from '../../utils/performance';

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

  // Phase 9: Performance Optimization - Memoize expensive style calculations
  const inputStyles = useMemoizedStyle(
    () => {
      const baseStyles: ViewStyle[] = [styles.input];

      if (activeDesign === 'glassmorphic') {
        const themeMode = themeContext?.theme?.mode || 'light';
        const glassmorphicStyles = getGlassmorphicInputStyles({
          intensity: focused ? 'medium' : 'subtle',
          blur: 'medium',
          theme: themeMode,
          customBackground: backgroundColor,
          customBorderRadius: 12,
        });
        
        baseStyles.push({
          ...glassmorphicStyles,
          backgroundColor: backgroundColor || GLASSMORPHIC_COLORS[themeMode].surface,
          borderColor: error 
            ? 'rgba(255, 59, 48, 0.6)' 
            : focused 
              ? 'rgba(0, 122, 255, 0.6)' 
              : GLASSMORPHIC_COLORS[themeMode].border,
          color: GLASSMORPHIC_COLORS[themeMode].text,
          borderWidth: 1,
          height: 44,
          paddingHorizontal: 16,
        });
      } else if (activeDesign === 'skeuomorphic') {
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
    },
    [activeDesign, focused, error, backgroundColor, defaultBackgroundColor, defaultTextColor, style, themeContext?.theme?.mode, themeContext?.theme.colors, props.disabled],
    `input-styles-${activeDesign}-${focused}-${!!error}-${!!props.disabled}`
  );

  // Phase 9: Performance Optimization - Memoize label styles
  const labelStyles = useMemoizedStyle(
    () => {
      const baseStyles: TextStyle = {
        ...styles.label,
      };

      if (activeDesign === 'glassmorphic') {
        const themeMode = themeContext?.theme?.mode || 'light';
        Object.assign(baseStyles, {
          color: GLASSMORPHIC_COLORS[themeMode].text,
          fontSize: 14,
          fontWeight: '500',
          marginBottom: 8,
        } as TextStyle);
      } else if (activeDesign === 'skeuomorphic') {
        Object.assign(baseStyles, {
          color: defaultTextColor,
          fontSize: 14,
          fontWeight: '600',
          marginBottom: 8,
          textShadowColor: SKEUOMORPHIC_COLORS.shadowLight,
          textShadowOffset: { width: 0, height: 1 },
          textShadowRadius: 1,
        } as TextStyle);
      } else if (activeDesign === 'neumorphic') {
        Object.assign(baseStyles, {
          color: defaultTextColor,
          fontSize: 14,
          fontWeight: '500',
          marginBottom: 8,
          textShadowColor: NEUMORPHIC_COLORS.lightShadow,
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 1,
        } as TextStyle);
      }

      return baseStyles;
    },
    [activeDesign, defaultTextColor, themeContext?.theme?.mode],
    `input-label-${activeDesign}`
  );

  // Phase 9: Performance Optimization - Memoize event handlers
  const handleFocus = useMemoizedCallback((event: any) => {
    setFocused(true);
    props.onFocus?.(event);
  }, [props.onFocus]);

  const handleBlur = useMemoizedCallback((event: any) => {
    setFocused(false);
    props.onBlur?.(event);
  }, [props.onBlur]);

  return (
    <View style={styles.container}>
      {label && <Text style={labelStyles}>{label}</Text>}
      <TextInput
        style={inputStyles}
        placeholderTextColor={
          activeDesign === 'glassmorphic' 
            ? `${GLASSMORPHIC_COLORS[themeContext?.theme?.mode || 'light'].text}60`
            : activeDesign === 'neumorphic' || activeDesign === 'skeuomorphic' 
              ? `${defaultTextColor}80` 
              : undefined
        }
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {error && (
        <Text 
          style={[
            styles.error,
            activeDesign === 'glassmorphic' && {
              color: 'rgba(255, 59, 48, 0.9)',
            }
          ]}
        >
          {error}
        </Text>
      )}
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

// Phase 9: Performance Optimization - Memoize component with custom comparison
const MemoizedInput = React.memo(Input, (prevProps, nextProps) => {
  // Custom comparison for optimal performance
  return (
    prevProps.design === nextProps.design &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.backgroundColor === nextProps.backgroundColor &&
    prevProps.textColor === nextProps.textColor &&
    prevProps.isFocused === nextProps.isFocused &&
    prevProps.label === nextProps.label &&
    prevProps.error === nextProps.error &&
    prevProps.placeholder === nextProps.placeholder &&
    prevProps.secureTextEntry === nextProps.secureTextEntry &&
    prevProps.value === nextProps.value &&
    prevProps.onFocus === nextProps.onFocus &&
    prevProps.onBlur === nextProps.onBlur &&
    JSON.stringify(prevProps.style) === JSON.stringify(nextProps.style)
  );
});

MemoizedInput.displayName = 'Input';

export default MemoizedInput;
