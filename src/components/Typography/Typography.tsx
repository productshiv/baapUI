import React from 'react';
import { Text, StyleSheet, TextStyle, TextProps, Platform, StyleProp } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { ThemeDesign } from '../../themes/types';
import { useThemeSafe } from '../../themes/ThemeContext';

/**
 * Available typography variants following Material Design typography scale
 */
type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline';

/**
 * Props for the Typography component
 * @extends {TextProps} Extends React Native's Text props
 */
interface TypographyProps extends TextProps {
  /** The typography variant to use */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'body2' | 'caption' | 'button' | 'overline';
  /** The content to display */
  children: React.ReactNode;
  /** Additional styles to apply */
  style?: StyleProp<TextStyle>;
  /** Text color */
  color?: string;
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** Maximum number of lines before truncating */
  numberOfLines?: number;
  /** Whether the font size should adjust to fit container */
  adjustsFontSizeToFit?: boolean;
  /** Minimum scale factor for font size adjustment */
  minimumFontScale?: number;
  /** Design style - supports all theme designs */
  design?: ThemeDesign;
  /** Background color for neumorphic effect */
  backgroundColor?: string;
}

/**
 * A component for displaying text with consistent styling across the app.
 * Implements Material Design typography scale with responsive sizing.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Typography variant="h1">Hello World</Typography>
 *
 * // With neumorphic styling
 * <Typography
 *   variant="h1"
 *   design="neumorphic"
 *   backgroundColor="#E0E5EC"
 * >
 *   Neumorphic Heading
 * </Typography>
 *
 * // With custom styling
 * <Typography
 *   variant="body1"
 *   color="#007AFF"
 *   align="center"
 * >
 *   Centered blue text
 * </Typography>
 *
 * // Auto-sizing text
 * <Typography
 *   adjustsFontSizeToFit
 *   numberOfLines={1}
 * >
 *   This text will shrink to fit
 * </Typography>
 * ```
 */
const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  children,
  style,
  color,
  align = 'left',
  numberOfLines,
  adjustsFontSizeToFit = true,
  minimumFontScale = 0.7,
  design,
  backgroundColor = NEUMORPHIC_COLORS.background,
  ...props
}) => {
  const themeContext = useThemeSafe();
  
  // Use design prop if provided, otherwise use theme context, otherwise default to 'flat'
  const activeDesign = design || themeContext?.design || 'flat';
  
  const getVariantStyles = (): TextStyle => {
    // Use theme typography if available, otherwise use default styles
    const themeTypography = themeContext?.theme.typography;
    
    switch (variant) {
      case 'h1':
        return themeTypography?.h1 || styles.h1;
      case 'h2':
        return themeTypography?.h2 || styles.h2;
      case 'h3':
        return themeTypography?.h3 || styles.h3;
      case 'h4':
        return styles.h4;
      case 'h5':
        return styles.h5;
      case 'h6':
        return styles.h6;
      case 'body2':
        return styles.body2;
      case 'caption':
        return themeTypography?.caption || styles.caption;
      case 'button':
        return themeTypography?.button || styles.button;
      case 'overline':
        return styles.overline;
      default:
        return themeTypography?.body || styles.body;
    }
  };

  const getDesignStyles = (): TextStyle => {
    const baseColor = color || themeContext?.theme.colors.text || '#000000';
    
    switch (activeDesign) {
      case 'neumorphic':
        return {
          color: baseColor,
          textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8), -1px -1px 2px rgba(0, 0, 0, 0.1)',
        };
      case 'skeuomorphic':
        return {
          color: baseColor,
          textShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)',
        };
      case 'glassmorphic':
        return {
          color: baseColor,
          textShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)',
        };
      default:
        return {
          color: baseColor,
        };
    }
  };

  const variantStyles = getVariantStyles();
  const designStyles = getDesignStyles();
  
  const combinedStyles: TextStyle = {
    ...variantStyles,
    ...designStyles,
    textAlign: align,
    ...(style || {}),
  };

  return (
    <Text
      {...props}
      style={combinedStyles}
      numberOfLines={numberOfLines}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      minimumFontScale={minimumFontScale}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
      default: 'System',
    }),
  },
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 40,
    marginBottom: 16,
  } as TextStyle,
  h2: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 36,
    marginBottom: 14,
  } as TextStyle,
  h3: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    marginBottom: 12,
  } as TextStyle,
  h4: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    marginBottom: 10,
  } as TextStyle,
  h5: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
    marginBottom: 8,
  } as TextStyle,
  h6: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    marginBottom: 6,
  } as TextStyle,
  body: {
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 24,
    marginBottom: 8,
  } as TextStyle,
  body2: {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 20,
    marginBottom: 6,
  } as TextStyle,
  caption: {
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: 16,
    marginBottom: 4,
  } as TextStyle,
  button: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  } as TextStyle,
  overline: {
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
  } as TextStyle,
});

export default Typography;
