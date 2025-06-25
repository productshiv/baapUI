import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from '../../platform';

import { ThemeDesign } from '../../themes/types';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  design?: ThemeDesign;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  backgroundColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  design = 'flat', // Add explicit default
  disabled = false,
  loading = false,
  onPress,
  style,
  textStyle,
  backgroundColor,
  textColor,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  // Remove theme dependency - use explicit design prop only
  const activeDesign = design;

  const getVariantStyles = (): { container: ViewStyle; text: TextStyle } => {
    // If design is neumorphic, use neumorphic styles
    if (activeDesign === 'neumorphic') {
      return {
        container: {
          backgroundColor: backgroundColor || '#fff',
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
          color: disabled ? '#9e9e9e' : textColor || '#2196f3',
          fontSize: 16,
          fontWeight: '600',
        },
      };
    }

    // For other designs, use the standard flat styles with custom colors
    switch (variant) {
      case 'secondary':
        return {
          container: {
            ...styles.secondaryButton,
            backgroundColor: backgroundColor || '#f50057',
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
            borderColor: backgroundColor || '#2196f3',
          },
          text: {
            ...styles.outlineText,
            color: textColor || backgroundColor || '#2196f3',
          },
        };
      case 'text':
        return {
          container: styles.textButton,
          text: {
            ...styles.textButtonText,
            color: textColor || '#2196f3',
          },
        };
      default:
        return {
          container: {
            ...styles.primaryButton,
            backgroundColor: backgroundColor || '#2196f3',
          },
          text: {
            ...styles.primaryText,
            color: textColor || 'white',
          },
        };
    }
  };

  const getSizeStyles = (): ViewStyle => {
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
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  // Combine all styles
  const combinedStyles = [
    styles.button,
    variantStyles.container,
    sizeStyles,
    disabled && styles.disabledButton,
    style,
  ];

  // Debug logging (remove in production)
  if (process.env.NODE_ENV === 'development') {
    console.log('Button render:', { 
      variant, 
      size, 
      activeDesign, 
      variantStyles, 
      sizeStyles,
      combinedStyles,
      disabled,
      loading
    });
  }

  return (
    <TouchableOpacity
      style={combinedStyles}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      disabled={disabled || loading}
      activeOpacity={activeDesign === 'neumorphic' ? 1 : 0.7}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? 'white' : '#666666'} />
      ) : (
        <Text style={[
          styles.text, 
          variantStyles.text, 
          disabled && styles.disabledText, 
          textStyle,
          // Force text visibility
          { opacity: 1, display: 'flex' }
        ]}>
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
    display: 'flex',
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

export default Button;
