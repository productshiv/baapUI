import React, { useState, useMemo, useCallback } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from '../../platform';

import { ThemeDesign } from '../../themes/types';
import { useThemeSafe } from '../../themes/ThemeContext';
import { getSkeuomorphicButtonStyles } from '../../themes/utils/skeuomorphic';
import { getGlassmorphicButtonStyles } from '../../themes/utils/glassmorphic';
import { getRetroButtonStyles, RetroEra, RetroColorScheme, RetroBorderThickness, RetroCornerRadius, RetroShadowStyle } from '../../themes/utils/retro';
import { useMemoizedStyle, useMemoizedCallback } from '../../utils/performance';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  /**
   * Design system to use. If not provided, will use the current theme from ThemeProvider.
   * @deprecated Use ThemeProvider to set design system globally instead of passing to each component
   */
  design?: ThemeDesign;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  backgroundColor?: string;
  textColor?: string;
  // Phase 8: Glassmorphic ArgTypes Configuration
  glassBlurIntensity?: number;
  glassTransparency?: number;
  glassBorderOpacity?: number;
  glassIntensity?: 'subtle' | 'medium' | 'strong';
  glassBlur?: 'light' | 'medium' | 'heavy';
  glassTheme?: 'light' | 'dark';
  glassTintColor?: string;
  glassBorderRadius?: number;
  // Retro-specific props
  retroEra?: RetroEra;
  retroColorScheme?: RetroColorScheme;
  retroBorderThickness?: RetroBorderThickness;
  retroCornerRadius?: RetroCornerRadius;
  retroShadowStyle?: RetroShadowStyle;
  retroGlowEffect?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  design, // Now optional - will use theme context if not provided
  disabled = false,
  loading = false,
  onPress,
  style,
  textStyle,
  backgroundColor,
  textColor,
  retroEra = 'neon80s',
  retroColorScheme = 'bright',
  retroBorderThickness = 'thick',
  retroCornerRadius = 'slight',
  retroShadowStyle = 'drop',
  retroGlowEffect = false,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const themeContext = useThemeSafe();
  
  // Use design prop if provided, otherwise use theme context, otherwise default to 'flat'
  const activeDesign = design || themeContext?.design || 'flat';

  const getVariantStylesInternal = (): { container: ViewStyle; text: TextStyle } => {
    // If design is skeuomorphic, use skeuomorphic styles
    if (activeDesign === 'skeuomorphic') {
      const skeuomorphicStyles = getSkeuomorphicButtonStyles(variant, size, isPressed, disabled);
      return {
        container: {
          ...skeuomorphicStyles.container,
          ...(backgroundColor && { backgroundColor }),
        },
        text: {
          ...skeuomorphicStyles.text,
          ...(textColor && { color: textColor }),
        },
      };
    }

    // If design is glassmorphic, use glassmorphic styles
    if (activeDesign === 'glassmorphic') {
      const glassmorphicStyles = getGlassmorphicButtonStyles({
        theme: themeContext?.theme.mode || 'light',
        intensity: variant === 'primary' ? 'strong' : 'medium',
        customBackground: backgroundColor,
      });
      
      const textColorForVariant = (() => {
        if (textColor) return textColor;
        if (disabled) return themeContext?.theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)';
        
        switch (variant) {
          case 'primary':
            return themeContext?.theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(29, 29, 31, 0.9)';
          case 'secondary':
            return themeContext?.theme.colors.secondary || '#5856D6';
          case 'outline':
          case 'text':
            return themeContext?.theme.colors.primary || '#007AFF';
          default:
            return themeContext?.theme.colors.text || '#000000';
        }
      })();

      return {
        container: {
          ...glassmorphicStyles,
          opacity: disabled ? 0.6 : 1,
        },
        text: {
          color: textColorForVariant,
          fontSize: 16,
          fontWeight: '600',
        },
      };
    }

    // If design is retro, use retro styles
    if (activeDesign === 'retro') {
      const retroStyles = getRetroButtonStyles({
        era: retroEra,
        colorScheme: retroColorScheme,
        borderThickness: retroBorderThickness,
        cornerRadius: retroCornerRadius,
        shadowStyle: retroShadowStyle,
        glowEffect: retroGlowEffect,
        customColors: backgroundColor ? { primary: backgroundColor } : undefined,
      });

      const textColorForVariant = (() => {
        if (textColor) return textColor;
        if (disabled) return '#666666';
        
        // Use retro era-specific text colors
        switch (retroEra) {
          case 'neon80s':
            return variant === 'primary' ? '#00FFFF' : '#FF00FF';
          case 'pastel90s':
            return variant === 'primary' ? '#FF6B9D' : '#A8E6CF';
          case 'grunge90s':
            return variant === 'primary' ? '#8B4513' : '#2F4F4F';
          case 'vintage70s':
            return variant === 'primary' ? '#D2691E' : '#8B4513';
          case 'pixelArt':
            return variant === 'primary' ? '#00FF00' : '#FFFF00';
          case 'terminal':
            return variant === 'primary' ? '#00FF00' : '#FFFFFF';
          default:
            return '#FFFFFF';
        }
      })();

      return {
        container: {
          ...retroStyles,
          opacity: disabled ? 0.6 : 1,
        },
        text: {
          color: textColorForVariant,
          fontSize: 16,
          fontWeight: '700',
          textShadow: retroGlowEffect ? '0 0 10px currentColor' : undefined,
        },
      };
    }

    // If design is neumorphic, use neumorphic styles
    if (activeDesign === 'neumorphic') {
      return {
        container: {
          backgroundColor: backgroundColor || themeContext?.theme.colors.surface || '#fff',
          borderRadius: 22,
          ...(isPressed
            ? {
                boxShadow: 'inset 10px 10px 41px #cacaca, inset -10px -10px 41px #f6f6f6',
              }
            : {
                boxShadow: '10px 10px 41px #cacaca, -10px -10px 41px #f6f6f6',
              }),
          opacity: disabled ? 0.6 : 1,
        },
        text: {
          color: disabled ? '#9e9e9e' : textColor || themeContext?.theme.colors.primary || '#2196f3',
          fontSize: 16,
          fontWeight: '600',
        },
      };
    }

    // For other designs, use the standard flat styles with theme colors
    const primaryColor = backgroundColor || themeContext?.theme.colors.primary || '#2196f3';
    const secondaryColor = backgroundColor || themeContext?.theme.colors.secondary || '#f50057';
    const textColorPrimary = textColor || themeContext?.theme.colors.text || '#000000';
    
    switch (variant) {
      case 'secondary':
        return {
          container: {
            ...styles.secondaryButton,
            backgroundColor: secondaryColor,
          },
          text: {
            ...styles.secondaryText,
            color: textColor || 'white',
          },
        };
      case 'outline':
        return {
          container: {
            ...styles.outlineButton,
            borderColor: primaryColor,
          },
          text: {
            ...styles.outlineText,
            color: textColor || primaryColor,
          },
        };
      case 'text':
        return {
          container: styles.textButton,
          text: {
            ...styles.textButtonText,
            color: textColor || primaryColor,
          },
        };
      default:
        return {
          container: {
            ...styles.primaryButton,
            backgroundColor: primaryColor,
          },
          text: {
            ...styles.primaryText,
            color: textColor || 'white',
          },
        };
    }
  };

  // Phase 9: Performance Optimization - Memoize expensive style calculations
  const variantStyles = useMemoizedStyle(
    () => {
      return getVariantStylesInternal();
    },
    [activeDesign, variant, size, isPressed, disabled, backgroundColor, textColor, themeContext?.theme.mode, themeContext?.theme.colors.primary, themeContext?.theme.colors.secondary, themeContext?.theme.colors.text, themeContext?.theme.colors.surface, retroEra, retroColorScheme, retroBorderThickness, retroCornerRadius, retroShadowStyle, retroGlowEffect],
    `button-${activeDesign}-${variant}-${size}-${isPressed}-${disabled}-${backgroundColor || 'default'}-${textColor || 'default'}-${retroEra}-${retroColorScheme}-${retroBorderThickness}-${retroCornerRadius}-${retroShadowStyle}-${retroGlowEffect}`
  );

  // Phase 9: Performance Optimization - Memoize size styles
  const sizeStyles = useMemoizedStyle(
    () => {
      const sizes = {
        small: {
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 12,
        },
        medium: {
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 16,
        },
        large: {
          paddingVertical: 16,
          paddingHorizontal: 32,
          borderRadius: 20,
        },
      };
      return sizes[size];
    },
    [size],
    `button-size-${size}`
  );

  // Phase 9: Performance Optimization - Memoize event handlers
  const handlePress = useMemoizedCallback(() => {
    if (!disabled && !loading && onPress) {
      onPress();
    }
  }, [disabled, loading, onPress]);

  const handlePressIn = useMemoizedCallback(() => {
    setIsPressed(true);
  }, []);

  const handlePressOut = useMemoizedCallback(() => {
    setIsPressed(false);
  }, []);

  // Phase 9: Performance Optimization - Combine all styles with memoization
  const combinedStyles = useMemoizedStyle(
    () => [
      styles.button,
      variantStyles.container,
      sizeStyles,
      disabled && styles.disabledButton,
      style,
    ],
    [variantStyles.container, sizeStyles, disabled, style],
    `button-combined-${variant}-${size}-${disabled}`
  );

  const textStyles = useMemoizedStyle(
    () => [
      styles.text, 
      variantStyles.text, 
      disabled && styles.disabledText, 
      textStyle,
      { opacity: 1 }
    ],
    [variantStyles.text, disabled, textStyle],
    `button-text-${variant}-${disabled}`
  );

  return (
    <TouchableOpacity
      style={combinedStyles}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled || loading}
      activeOpacity={activeDesign === 'neumorphic' ? 1 : 0.7}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? 'white' : '#666666'} />
      ) : (
        <Text style={textStyles}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    minHeight: 44, // Ensure minimum touch target
    minWidth: 44,
    // Add fallback padding in case size styles don't apply
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 16,
    // Force visibility
    // display: 'flex', // Not needed in React Native
    opacity: 1,
  },
  primaryButton: {
    backgroundColor: '#2196f3',
    // Ensure button is always visible
    minHeight: 44,
    minWidth: 100,
  },
  primaryText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16, // Add fallback font size
  },
  secondaryButton: {
    backgroundColor: '#f50057',
  },
  secondaryText: {
    color: 'white',
    fontWeight: '600',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#2196f3',
  },
  outlineText: {
    color: '#2196f3',
    fontWeight: '600',
  },
  textButton: {
    backgroundColor: 'transparent',
  },
  textButtonText: {
    color: '#2196f3',
    fontWeight: '600',
  },
  disabledButton: {
    opacity: 0.6,
  },
  disabledText: {
    color: '#999999',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});

// Add displayName for easier debugging
Button.displayName = 'Button';

// Phase 9: Performance Optimization - Memoize component with custom comparison
const MemoizedButton = React.memo(Button, (prevProps, nextProps) => {
  // Custom comparison for optimal performance
  return (
    prevProps.variant === nextProps.variant &&
    prevProps.size === nextProps.size &&
    prevProps.design === nextProps.design &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.loading === nextProps.loading &&
    prevProps.backgroundColor === nextProps.backgroundColor &&
    prevProps.textColor === nextProps.textColor &&
    prevProps.children === nextProps.children &&
    prevProps.onPress === nextProps.onPress &&
    // Deep comparison for style objects would be expensive, so we use shallow comparison
    JSON.stringify(prevProps.style) === JSON.stringify(nextProps.style) &&
    JSON.stringify(prevProps.textStyle) === JSON.stringify(nextProps.textStyle)
  );
});

MemoizedButton.displayName = 'Button';

export default MemoizedButton;
