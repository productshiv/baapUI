import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  style,
  textStyle,
}) => {
  const getVariantStyle = (): ViewStyle => {
    switch (variant) {
      case 'secondary':
        return { backgroundColor: '#f50057' };
      case 'success':
        return { backgroundColor: '#4caf50' };
      case 'error':
        return { backgroundColor: '#f44336' };
      case 'warning':
        return { backgroundColor: '#ff9800' };
      case 'info':
        return { backgroundColor: '#2196f3' };
      default:
        return { backgroundColor: '#6200ee' };
    }
  };

  const getSizeStyle = (): { container: ViewStyle; text: TextStyle } => {
    switch (size) {
      case 'small':
        return {
          container: {
            minWidth: 16,
            height: 16,
            borderRadius: 8,
            paddingHorizontal: 4,
          },
          text: {
            fontSize: 10,
          },
        };
      case 'large':
        return {
          container: {
            minWidth: 28,
            height: 28,
            borderRadius: 14,
            paddingHorizontal: 8,
          },
          text: {
            fontSize: 14,
          },
        };
      default:
        return {
          container: {
            minWidth: 22,
            height: 22,
            borderRadius: 11,
            paddingHorizontal: 6,
          },
          text: {
            fontSize: 12,
          },
        };
    }
  };

  const sizeStyle = getSizeStyle();
  const variantStyle = getVariantStyle();

  return (
    <View style={[styles.badge, variantStyle, sizeStyle.container, style]}>
      <Text style={[styles.text, sizeStyle.text, textStyle]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default Badge;
