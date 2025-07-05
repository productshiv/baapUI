import React from 'react';
import { View, StyleSheet, Pressable, ViewStyle, Text } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { getSkeuomorphicCardStyles } from '../../themes/utils/skeuomorphic';
import { useThemeSafe } from '../../themes/ThemeContext';
import { ThemeDesign } from '../../themes/types';

export interface CardProps {
  children: React.ReactNode | string;
  style?: ViewStyle;
  onPress?: () => void;
  /**
   * Design system to use. If not provided, will use the current theme from ThemeProvider.
   * @deprecated Use ThemeProvider to set design system globally instead of passing to each component
   */
  design?: ThemeDesign;
  backgroundColor?: string;
  fullWidth?: boolean;
  /** Center the card horizontally */
  centered?: boolean;
  /** Maximum width for larger screens */
  maxWidth?: number | string;
  /** Enable responsive behavior */
  responsive?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  style,
  onPress,
  design, // Now optional - will use theme context if not provided
  backgroundColor,
  fullWidth = false,
  centered = true,
  maxWidth = 400,
  responsive = true,
}) => {
  const themeContext = useThemeSafe();
  
  // Use design prop if provided, otherwise use theme context, otherwise default to 'flat'
  const activeDesign = design || themeContext?.design || 'flat';
  const defaultBackgroundColor = backgroundColor || themeContext?.theme.colors.surface || NEUMORPHIC_COLORS.background;

  const getCardStyles = (pressed?: boolean): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.container];

    // Apply responsive and centering styles
    if (!fullWidth && responsive) {
      const responsiveStyle: ViewStyle = {
        width: '100%',
        maxWidth: typeof maxWidth === 'number' ? maxWidth : maxWidth,
      };
      
      if (centered) {
        responsiveStyle.alignSelf = 'center';
        responsiveStyle.marginHorizontal = 'auto';
      }
      
      baseStyles.push(responsiveStyle);
    } else if (fullWidth) {
      baseStyles.push({ width: '100%' });
    }

    if (activeDesign === 'skeuomorphic') {
      const skeuomorphicStyles = getSkeuomorphicCardStyles(true);
      baseStyles.push({
        ...skeuomorphicStyles,
        ...(backgroundColor && { backgroundColor }),
      });
    } else if (activeDesign === 'neumorphic') {
      baseStyles.push(
        ...getNeumorphicStyles({
          isPressed: pressed,
          customBackground: defaultBackgroundColor,
        })
      );
    } else {
      // Apply theme colors for other design systems
      baseStyles.push({
        backgroundColor: defaultBackgroundColor,
        borderColor: themeContext?.theme.colors.border || '#E5E5E5',
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const content =
    typeof children === 'string' ? (
      <Text style={[
        styles.text, 
        activeDesign === 'neumorphic' && styles.neumorphicText,
        { color: themeContext?.theme.colors.text || '#000000' }
      ]}>
        {children}
      </Text>
    ) : (
      children
    );

  if (onPress) {
    return (
      <Pressable
        style={({ pressed }: { pressed: boolean }) => getCardStyles(pressed)}
        onPress={onPress}
      >
        {content}
      </Pressable>
    );
  }

  return <View style={getCardStyles()}>{content}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  } as ViewStyle,
  text: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },
  neumorphicText: {
    color: NEUMORPHIC_COLORS.text,
  },
});

export default Card;
