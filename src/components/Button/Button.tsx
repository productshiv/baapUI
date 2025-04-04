import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '../../themes/ThemeContext';
import { useNeumorphicShadow } from '../../themes/utils/useNeumorphicShadow';
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
  design,
  disabled,
  loading,
  onPress,
  style,
  textStyle,
  backgroundColor,
  textColor,
}) => {
  const { theme } = useTheme();
  const [isPressed, setIsPressed] = useState(false);
  const activeDesign = design || theme.design;

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
          ...theme.typography.button,
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

  return (
    <TouchableOpacity
      style={[
        styles.button,
        variantStyles.container,
        sizeStyles,
        disabled && styles.disabledButton,
        style,
      ]}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      disabled={disabled || loading}
      activeOpacity={activeDesign === 'neumorphic' ? 1 : 0.7}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? 'white' : '#666666'} />
      ) : (
        <Text style={[styles.text, variantStyles.text, disabled && styles.disabledText, textStyle]}>
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
  },
  primaryButton: {
    backgroundColor: '#2196f3',
  },
  primaryText: {
    color: 'white',
    fontWeight: '600',
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
    backgroundColor: '#e0e0e0',
    borderColor: '#e0e0e0',
  },
  disabledText: {
    color: '#9e9e9e',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Button;
