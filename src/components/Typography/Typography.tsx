import React from 'react';
import { Text, StyleSheet, TextStyle, TextProps, Platform, StyleProp } from 'react-native';

/**
 * Available typography variants following Material Design typography scale
 */
type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline';

/**
 * Props for the Typography component
 * @extends {TextProps} Extends React Native's Text props
 */
interface TypographyProps extends TextProps {
  /** The typography variant to use */
  variant?: TypographyVariant;
  /** The content to display */
  children: React.ReactNode;
  /** Additional styles to apply */
  style?: StyleProp<TextStyle>;
  /** Text color */
  color?: string;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Maximum number of lines before truncating */
  numberOfLines?: number;
  /** Whether the font size should adjust to fit container */
  adjustsFontSizeToFit?: boolean;
  /** Minimum scale factor for font size adjustment */
  minimumFontScale?: number;
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
  variant = 'body1',
  children,
  style,
  color = '#000000',
  align = 'left',
  numberOfLines,
  adjustsFontSizeToFit = true,
  minimumFontScale = 0.7,
  ...props
}) => {
  const variantStyles: Record<TypographyVariant, TextStyle> = {
    h1: { fontSize: 32, fontWeight: '700', lineHeight: 40 },
    h2: { fontSize: 28, fontWeight: '700', lineHeight: 36 },
    h3: { fontSize: 24, fontWeight: '600', lineHeight: 32 },
    h4: { fontSize: 20, fontWeight: '600', lineHeight: 28 },
    h5: { fontSize: 18, fontWeight: '500', lineHeight: 26 },
    h6: { fontSize: 16, fontWeight: '500', lineHeight: 24 },
    subtitle1: { fontSize: 16, fontWeight: '400', lineHeight: 24 },
    subtitle2: { fontSize: 14, fontWeight: '400', lineHeight: 22 },
    body1: { fontSize: 16, fontWeight: '400', lineHeight: 24 },
    body2: { fontSize: 14, fontWeight: '400', lineHeight: 22 },
    caption: { fontSize: 12, fontWeight: '400', lineHeight: 20 },
    overline: { fontSize: 10, fontWeight: '400', lineHeight: 16, textTransform: 'uppercase' },
  };

  return (
    <Text
      {...props}
      style={[
        variantStyles[variant],
        { color, textAlign: align },
        style,
      ]}
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
      default: 'System'
    }),
  },
  h1: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  h2: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 36,
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  h3: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    marginBottom: 8,
  },
  h4: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    marginBottom: 8,
  },
  h5: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
    marginBottom: 8,
  },
  h6: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    marginBottom: 8,
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.15,
    marginBottom: 4,
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: 0.1,
    marginBottom: 4,
  },
  body1: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  body2: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.15,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0.4,
  },
  overline: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
});

export default Typography; 