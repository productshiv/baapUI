import React from 'react';
import { View, StyleSheet, ViewStyle } from '../../platform';

export interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | number;
  padding?: 'none' | 'small' | 'medium' | 'large';
  center?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  style,
  maxWidth = 'lg',
  padding = 'medium',
  center = true,
}) => {
  const getMaxWidth = () => {
    if (typeof maxWidth === 'number') {
      return maxWidth;
    }
    
    switch (maxWidth) {
      case 'sm':
        return 640;
      case 'md':
        return 768;
      case 'lg':
        return 1024;
      case 'xl':
        return 1280;
      case 'full':
        return '100%';
      default:
        return 1024;
    }
  };

  const getPaddingValue = () => {
    switch (padding) {
      case 'none':
        return 0;
      case 'small':
        return 8;
      case 'large':
        return 24;
      default: // medium
        return 16;
    }
  };

  const getContainerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [
      styles.container,
      {
        maxWidth: getMaxWidth(),
        paddingHorizontal: getPaddingValue(),
      },
      center && styles.centered,
    ];

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  return <View style={getContainerStyles()}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  } as ViewStyle,
  centered: {
    marginHorizontal: 'auto',
    alignSelf: 'center',
  } as ViewStyle,
});

export default Container; 