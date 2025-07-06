import React from 'react';
import { View, StyleSheet, ViewStyle } from '../../platform';
import { useThemeSafe } from '../../themes/ThemeContext';
import { getGlassmorphicStyles } from '../../themes/utils/glassmorphic';
import { getNeumorphicStyles } from '../../themes/utils/neumorphic';
import { getSkeuomorphicCardStyles } from '../../themes/utils/skeuomorphic';

export interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | number;
  padding?: 'none' | 'small' | 'medium' | 'large';
  center?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  style,
  design,
  maxWidth = 'lg',
  padding = 'medium',
  center = true,
}) => {
  const themeContext = useThemeSafe();
  const activeDesign = design || themeContext?.design || 'flat';
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

    // Apply design-specific styling
    switch (activeDesign) {
      case 'glassmorphic':
        baseStyles.push(getGlassmorphicStyles({
          intensity: 'medium',
          blur: 'medium',
          theme: themeContext?.mode || 'light',
        }));
        break;
      case 'neumorphic':
        baseStyles.push(...getNeumorphicStyles({
          isPressed: false,
        }));
        break;
      case 'skeuomorphic':
        baseStyles.push(getSkeuomorphicCardStyles(true));
        break;
      default:
        // Flat design - no additional styling
        break;
    }

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