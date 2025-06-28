import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
  design?: 'flat' | 'neumorphic';
  backgroundColor?: string;
  textColor?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  style,
  textStyle,
  design = 'flat',
  backgroundColor,
  textColor = NEUMORPHIC_COLORS.text,
}) => {
  const getVariantStyle = (): ViewStyle => {
    if (design === 'neumorphic') {
      switch (variant) {
        case 'secondary':
          return { backgroundColor: '#FCE4EC' };
        case 'success':
          return { backgroundColor: '#E8F5E9' };
        case 'error':
          return { backgroundColor: '#FFEBEE' };
        case 'warning':
          return { backgroundColor: '#FFF3E0' };
        case 'info':
          return { backgroundColor: '#E3F2FD' };
        default:
          return { backgroundColor: '#EDE7F6' };
      }
    }

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

  const getBadgeStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.badge];
    const sizeStyle = getSizeStyle();
    const variantStyle = getVariantStyle();
    const bgColor = (backgroundColor || variantStyle.backgroundColor || '') as string;

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: bgColor,
        customBorderRadius: sizeStyle.container.borderRadius as number,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        ...sizeStyle.container,
        backgroundColor: bgColor,
      });
    } else {
      baseStyles.push(variantStyle, sizeStyle.container);
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getTextStyles = (): TextStyle => {
    const baseStyles: TextStyle = {
      ...styles.text,
    };
    const sizeStyle = getSizeStyle();

    if (design === 'neumorphic') {
      Object.assign(baseStyles, {
        color: textColor,
        fontSize: sizeStyle.text.fontSize,
        fontWeight: '600',
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });

      // Add variant-specific text colors for neumorphic design
      switch (variant) {
        case 'secondary':
          Object.assign(baseStyles, { color: '#C2185B' });
          break;
        case 'success':
          Object.assign(baseStyles, { color: '#2E7D32' });
          break;
        case 'error':
          Object.assign(baseStyles, { color: '#C62828' });
          break;
        case 'warning':
          Object.assign(baseStyles, { color: '#F57C00' });
          break;
        case 'info':
          Object.assign(baseStyles, { color: '#1976D2' });
          break;
        default:
          Object.assign(baseStyles, { color: '#4527A0' });
      }
    } else {
      Object.assign(baseStyles, sizeStyle.text);
    }

    if (textStyle) {
      Object.assign(baseStyles, textStyle);
    }

    return baseStyles;
  };

  return (
    <View style={getBadgeStyles()}>
      <Text style={getTextStyles()}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Badge;
