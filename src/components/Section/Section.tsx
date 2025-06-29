import React from 'react';
import { View, StyleSheet, ViewStyle } from '../../platform';
import { ThemeDesign } from '../../themes/types';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

export interface SectionProps {
  children: React.ReactNode;
  style?: ViewStyle;
  design?: ThemeDesign;
  padding?: 'none' | 'small' | 'medium' | 'large';
  backgroundColor?: string;
  fullHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  style,
  design = 'flat',
  padding = 'medium',
  backgroundColor,
  fullHeight = false,
}) => {
  const getPaddingValue = () => {
    switch (padding) {
      case 'none':
        return 0;
      case 'small':
        return 16;
      case 'large':
        return 48;
      default: // medium
        return 32;
    }
  };

  const getSectionStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [
      styles.container,
      {
        paddingVertical: getPaddingValue(),
        paddingHorizontal: Math.max(16, getPaddingValue() / 2), // Minimum horizontal padding
      },
      fullHeight && styles.fullHeight,
    ];

    // Apply background color
    if (backgroundColor) {
      baseStyles.push({ backgroundColor });
    } else if (design === 'neumorphic') {
      baseStyles.push({ backgroundColor: NEUMORPHIC_COLORS.background });
    }

    // Apply design-specific styles
    if (design === 'neumorphic') {
      baseStyles.push(
        ...getNeumorphicStyles({
          isPressed: false,
          customBackground: backgroundColor || NEUMORPHIC_COLORS.background,
        })
      );
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  return <View style={getSectionStyles()}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  } as ViewStyle,
  fullHeight: {
    minHeight: '100vh',
    justifyContent: 'center',
  } as ViewStyle,
});

export default Section; 