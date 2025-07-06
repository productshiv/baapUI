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

  // Content alignment options
  horizontalAlign?: 'left' | 'center' | 'right';
  verticalAlign?: 'top' | 'center' | 'bottom' | 'stretch';
  // New border options
  border?: boolean;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  borderStyle?: 'solid' | 'dashed' | 'dotted';
  // Background options
  backgroundColor?: string;
  minHeight?: number | string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  style,
  design,
  maxWidth = 'lg',
  padding = 'medium',

  horizontalAlign = 'center',
  verticalAlign = 'center',
  border = false,
  borderWidth = 1,
  borderColor,
  borderRadius = 0,
  borderStyle = 'solid',
  backgroundColor,
  minHeight,
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
    ];

    // Handle horizontal alignment
    const effectiveHorizontalAlign = horizontalAlign;
    
    if (effectiveHorizontalAlign === 'center') {
      baseStyles.push(styles.centered);
    } else if (effectiveHorizontalAlign === 'right') {
      baseStyles.push(styles.rightAligned);
    }
    // left is default, no additional styles needed

    // Apply content alignment styles
    baseStyles.push({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 
        effectiveHorizontalAlign === 'center' ? 'center' :
        effectiveHorizontalAlign === 'right' ? 'flex-end' : 'flex-start',
      justifyContent: 
        verticalAlign === 'center' ? 'center' :
        verticalAlign === 'bottom' ? 'flex-end' :
        verticalAlign === 'stretch' ? 'space-between' : 'flex-start',
    });

    // Apply border styles
    if (border) {
      baseStyles.push({
        borderWidth,
        borderColor: borderColor || themeContext?.theme.colors.primary || '#007AFF',
        borderRadius,
        borderStyle,
      });
    }

    // Apply background color
    if (backgroundColor) {
      baseStyles.push({
        backgroundColor,
      });
    }

    // Apply minimum height
    if (minHeight) {
      baseStyles.push({
        minHeight,
      });
    }

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
  rightAligned: {
    marginLeft: 'auto',
    alignSelf: 'flex-end',
  } as ViewStyle,
});

export default Container;