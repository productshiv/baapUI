import React from 'react';
import { View, StyleSheet, ViewStyle } from '../../platform';
import { ThemeDesign } from '../../themes/types';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

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
  design,
  padding = 'medium',
  backgroundColor,
  fullHeight = false,
}) => {
  const themeContext = useThemeSafe();
  const finalDesign = design || themeContext?.design || 'flat';
  const themeMode: 'light' | 'dark' = themeContext?.mode || 'light';
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
    } else if (finalDesign === 'neumorphic') {
      baseStyles.push({ backgroundColor: NEUMORPHIC_COLORS.background });
    } else if (finalDesign === 'glassmorphic') {
      baseStyles.push({ backgroundColor: GLASSMORPHIC_COLORS[themeMode].background });
    }

    // Apply design-specific styles
    if (finalDesign === 'neumorphic') {
      baseStyles.push(
        ...getNeumorphicStyles({
          isPressed: false,
          customBackground: backgroundColor || NEUMORPHIC_COLORS.background,
        })
      );
    } else if (finalDesign === 'glassmorphic') {
      baseStyles.push(
        getGlassmorphicStyles({
          intensity: 'medium',
          blur: 'medium',
          theme: themeMode,
        }),
        {
          borderWidth: 1,
          borderColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        }
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