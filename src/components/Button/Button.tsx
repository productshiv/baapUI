import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, ActivityIndicator } from 'react-native';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({ 
  children,
  variant = 'primary',
  size = 'medium',
  disabled,
  loading,
  onPress,
  style,
  textStyle
}) => {
  const getVariantStyles = (): { container: ViewStyle, text: TextStyle } => {
    switch (variant) {
      case 'secondary':
        return {
          container: styles.secondaryButton,
          text: styles.secondaryText,
        };
      case 'outline':
        return {
          container: styles.outlineButton,
          text: styles.outlineText,
        };
      case 'text':
        return {
          container: styles.textButton,
          text: styles.textButtonText,
        };
      default:
        return {
          container: styles.primaryButton,
          text: styles.primaryText,
        };
    }
  };

  const getSizeStyles = (): ViewStyle => {
    switch (size) {
      case 'small':
        return styles.smallButton;
      case 'large':
        return styles.largeButton;
      default:
        return styles.mediumButton;
    }
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
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? 'white' : '#2196f3'} />
      ) : (
        <Text style={[
          styles.text,
          variantStyles.text,
          disabled && styles.disabledText,
          textStyle,
        ]}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  // Size variations
  smallButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  mediumButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  largeButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  // Variant styles
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
  // State styles
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