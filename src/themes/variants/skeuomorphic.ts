import { Theme } from '../types';

// Skeuomorphic Color Palette - Rich, realistic colors
const SKEUOMORPHIC_COLORS = {
  // Primary Colors - Rich blues with depth
  primary: '#2c5aa0',
  primaryLight: '#4a7bc8',
  primaryDark: '#1e3f73',
  primaryVariant: '#3d6bb3',
  
  // Secondary Colors - Warm oranges
  secondary: '#d4731b',
  secondaryLight: '#e89142',
  secondaryDark: '#a85a15',
  secondaryVariant: '#c4661a',
  
  // Surface Colors - Paper-like textures
  surface: '#f8f6f2',
  surfaceVariant: '#ede9e4',
  surfaceDark: '#2c2a27',
  surfaceVariantDark: '#3a3835',
  
  // Background Colors - Natural tones
  background: '#fafaf8',
  backgroundVariant: '#f2f0ed',
  backgroundDark: '#1a1917',
  backgroundVariantDark: '#242220',
  
  // Text Colors - Rich blacks and whites
  onPrimary: '#ffffff',
  onSecondary: '#ffffff',
  onSurface: '#2d2c2a',
  onSurfaceDark: '#e8e6e3',
  onBackground: '#2d2c2a',
  onBackgroundDark: '#e8e6e3',
  
  // State Colors - Natural variations
  success: '#2d7d32',
  successLight: '#4caf50',
  successDark: '#1b5e20',
  
  warning: '#f57c00',
  warningLight: '#ff9800',
  warningDark: '#e65100',
  
  error: '#d32f2f',
  errorLight: '#f44336',
  errorDark: '#b71c1c',
  
  info: '#1976d2',
  infoLight: '#2196f3',
  infoDark: '#0d47a1',
  
  // Neutral Colors - Paper and metal tones
  neutral: '#6d6d6d',
  neutralLight: '#9e9e9e',
  neutralDark: '#424242',
  
  // Border Colors - Realistic edges
  border: '#d0ccc4',
  borderLight: '#e0ddd6',
  borderDark: '#a8a39a',
  
  // Shadow Colors - Multiple layers
  shadowLight: 'rgba(0, 0, 0, 0.08)',
  shadowMedium: 'rgba(0, 0, 0, 0.16)',
  shadowDark: 'rgba(0, 0, 0, 0.24)',
  shadowInner: 'rgba(0, 0, 0, 0.12)',
  
  // Highlight Colors - Realistic light reflections
  highlight: 'rgba(255, 255, 255, 0.6)',
  highlightStrong: 'rgba(255, 255, 255, 0.8)',
  
  // Disabled Colors
  disabled: '#bdbdbd',
  disabledText: '#9e9e9e',
};

// Complex Shadow System - Multiple layers for depth
const SKEUOMORPHIC_SHADOWS = {
  // Button Shadows - Realistic button depth
  button: {
    default: [
      { x: 0, y: 2, blur: 4, color: SKEUOMORPHIC_COLORS.shadowLight },
      { x: 0, y: 4, blur: 8, color: SKEUOMORPHIC_COLORS.shadowMedium },
      { x: 0, y: 1, blur: 0, color: SKEUOMORPHIC_COLORS.border },
    ],
    pressed: [
      { x: 0, y: 1, blur: 2, color: SKEUOMORPHIC_COLORS.shadowInner },
      { x: 0, y: 0, blur: 0, color: SKEUOMORPHIC_COLORS.borderDark },
    ],
    hover: [
      { x: 0, y: 3, blur: 6, color: SKEUOMORPHIC_COLORS.shadowLight },
      { x: 0, y: 6, blur: 12, color: SKEUOMORPHIC_COLORS.shadowMedium },
      { x: 0, y: 1, blur: 0, color: SKEUOMORPHIC_COLORS.border },
    ],
  },
  
  // Card Shadows - Paper-like depth
  card: [
    { x: 0, y: 2, blur: 8, color: SKEUOMORPHIC_COLORS.shadowLight },
    { x: 0, y: 4, blur: 16, color: SKEUOMORPHIC_COLORS.shadowMedium },
    { x: 0, y: 1, blur: 0, color: SKEUOMORPHIC_COLORS.borderLight },
  ],
  
  // Input Shadows - Inset depth
  input: {
    default: [
      { x: 0, y: 0, blur: 0, color: SKEUOMORPHIC_COLORS.border },
      { x: 0, y: 1, blur: 2, color: SKEUOMORPHIC_COLORS.shadowInner, inset: true },
    ],
    focused: [
      { x: 0, y: 0, blur: 0, color: SKEUOMORPHIC_COLORS.primary },
      { x: 0, y: 1, blur: 3, color: SKEUOMORPHIC_COLORS.shadowInner, inset: true },
      { x: 0, y: 0, blur: 4, color: `${SKEUOMORPHIC_COLORS.primary}40` },
    ],
  },
  
  // Modal Shadows - Deep overlay
  modal: [
    { x: 0, y: 8, blur: 32, color: SKEUOMORPHIC_COLORS.shadowDark },
    { x: 0, y: 4, blur: 16, color: SKEUOMORPHIC_COLORS.shadowMedium },
    { x: 0, y: 2, blur: 8, color: SKEUOMORPHIC_COLORS.shadowLight },
  ],
  
  // Text Shadows - Realistic text depth
  text: {
    default: [{ x: 0, y: 1, blur: 2, color: SKEUOMORPHIC_COLORS.shadowLight }],
    strong: [{ x: 0, y: 2, blur: 4, color: SKEUOMORPHIC_COLORS.shadowMedium }],
    embossed: [
      { x: 0, y: 1, blur: 0, color: SKEUOMORPHIC_COLORS.highlight },
      { x: 0, y: -1, blur: 0, color: SKEUOMORPHIC_COLORS.shadowLight },
    ],
  },
};

// Gradients - Rich, multi-stop gradients
const SKEUOMORPHIC_GRADIENTS = {
  button: {
    primary: [
      { offset: 0, color: SKEUOMORPHIC_COLORS.primaryLight },
      { offset: 0.5, color: SKEUOMORPHIC_COLORS.primary },
      { offset: 1, color: SKEUOMORPHIC_COLORS.primaryDark },
    ],
    secondary: [
      { offset: 0, color: SKEUOMORPHIC_COLORS.secondaryLight },
      { offset: 0.5, color: SKEUOMORPHIC_COLORS.secondary },
      { offset: 1, color: SKEUOMORPHIC_COLORS.secondaryDark },
    ],
    pressed: [
      { offset: 0, color: SKEUOMORPHIC_COLORS.primaryDark },
      { offset: 0.5, color: SKEUOMORPHIC_COLORS.primary },
      { offset: 1, color: SKEUOMORPHIC_COLORS.primaryLight },
    ],
  },
  
  surface: [
    { offset: 0, color: SKEUOMORPHIC_COLORS.surface },
    { offset: 0.5, color: SKEUOMORPHIC_COLORS.surfaceVariant },
    { offset: 1, color: SKEUOMORPHIC_COLORS.surface },
  ],
  
  input: [
    { offset: 0, color: SKEUOMORPHIC_COLORS.surfaceVariant },
    { offset: 1, color: SKEUOMORPHIC_COLORS.surface },
  ],
  
  card: [
    { offset: 0, color: SKEUOMORPHIC_COLORS.surface },
    { offset: 0.3, color: SKEUOMORPHIC_COLORS.surfaceVariant },
    { offset: 0.7, color: SKEUOMORPHIC_COLORS.surfaceVariant },
    { offset: 1, color: SKEUOMORPHIC_COLORS.surface },
  ],
};

// Typography - Enhanced text styles with realistic effects
const SKEUOMORPHIC_TYPOGRAPHY = {
  h1: {
    fontSize: 32,
    fontWeight: 'bold' as const,
    lineHeight: 40,
    letterSpacing: -0.5,
    textShadow: SKEUOMORPHIC_SHADOWS.text.strong,
  },
  h2: {
    fontSize: 28,
    fontWeight: 'bold' as const,
    lineHeight: 36,
    letterSpacing: -0.25,
    textShadow: SKEUOMORPHIC_SHADOWS.text.strong,
  },
  h3: {
    fontSize: 24,
    fontWeight: '600' as const,
    lineHeight: 32,
    letterSpacing: 0,
    textShadow: SKEUOMORPHIC_SHADOWS.text.default,
  },
  h4: {
    fontSize: 20,
    fontWeight: '600' as const,
    lineHeight: 28,
    letterSpacing: 0,
    textShadow: SKEUOMORPHIC_SHADOWS.text.default,
  },
  h5: {
    fontSize: 18,
    fontWeight: '600' as const,
    lineHeight: 24,
    letterSpacing: 0,
    textShadow: SKEUOMORPHIC_SHADOWS.text.default,
  },
  h6: {
    fontSize: 16,
    fontWeight: '600' as const,
    lineHeight: 22,
    letterSpacing: 0.15,
    textShadow: SKEUOMORPHIC_SHADOWS.text.default,
  },
  body: {
    fontSize: 16,
    fontWeight: 'normal' as const,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  body2: {
    fontSize: 14,
    fontWeight: 'normal' as const,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  caption: {
    fontSize: 12,
    fontWeight: 'normal' as const,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  button: {
    fontSize: 14,
    fontWeight: '600' as const,
    lineHeight: 20,
    letterSpacing: 0.75,
    textTransform: 'uppercase' as const,
    textShadow: SKEUOMORPHIC_SHADOWS.text.default,
  },
  overline: {
    fontSize: 10,
    fontWeight: '600' as const,
    lineHeight: 16,
    letterSpacing: 1.5,
    textTransform: 'uppercase' as const,
  },
};

// Spacing - Consistent spacing system
const SKEUOMORPHIC_SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

// Border Radius - Realistic rounded corners
const SKEUOMORPHIC_BORDER_RADIUS = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 9999,
};

// Border Widths - Multiple border styles
const SKEUOMORPHIC_BORDER_WIDTHS = {
  none: 0,
  thin: 1,
  medium: 2,
  thick: 3,
  heavy: 4,
};

// Light Theme
export const skeuomorphicLightTheme: Theme = {
  mode: 'light',
  design: 'skeuomorphic',
  colors: {
    primary: SKEUOMORPHIC_COLORS.primary,
    secondary: SKEUOMORPHIC_COLORS.secondary,
    background: SKEUOMORPHIC_COLORS.background,
    surface: SKEUOMORPHIC_COLORS.surface,
    error: SKEUOMORPHIC_COLORS.error,
    warning: SKEUOMORPHIC_COLORS.warning,
    success: SKEUOMORPHIC_COLORS.success,
    info: SKEUOMORPHIC_COLORS.info,
    text: SKEUOMORPHIC_COLORS.onSurface,
    textSecondary: SKEUOMORPHIC_COLORS.neutral,
    border: SKEUOMORPHIC_COLORS.border,
    lightShadow: SKEUOMORPHIC_COLORS.shadowLight,
    darkShadow: SKEUOMORPHIC_COLORS.shadowDark,
  },
  shadows: {
    small: { shadowColor: SKEUOMORPHIC_COLORS.shadowLight, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 4 },
    medium: { shadowColor: SKEUOMORPHIC_COLORS.shadowMedium, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.16, shadowRadius: 8 },
    large: { shadowColor: SKEUOMORPHIC_COLORS.shadowDark, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.24, shadowRadius: 16 },
  },
  spacing: SKEUOMORPHIC_SPACING,
  typography: {
    h1: SKEUOMORPHIC_TYPOGRAPHY.h1,
    h2: SKEUOMORPHIC_TYPOGRAPHY.h2,
    h3: SKEUOMORPHIC_TYPOGRAPHY.h3,
    body: SKEUOMORPHIC_TYPOGRAPHY.body,
    button: SKEUOMORPHIC_TYPOGRAPHY.button,
    caption: SKEUOMORPHIC_TYPOGRAPHY.caption,
  },
  shape: {
    borderRadius: SKEUOMORPHIC_BORDER_RADIUS,
  },
};

// Dark Theme
export const skeuomorphicDarkTheme: Theme = {
  mode: 'dark',
  design: 'skeuomorphic',
  colors: {
    primary: SKEUOMORPHIC_COLORS.primaryLight,
    secondary: SKEUOMORPHIC_COLORS.secondaryLight,
    background: SKEUOMORPHIC_COLORS.backgroundDark,
    surface: SKEUOMORPHIC_COLORS.surfaceDark,
    error: SKEUOMORPHIC_COLORS.errorLight,
    warning: SKEUOMORPHIC_COLORS.warningLight,
    success: SKEUOMORPHIC_COLORS.successLight,
    info: SKEUOMORPHIC_COLORS.infoLight,
    text: SKEUOMORPHIC_COLORS.onSurfaceDark,
    textSecondary: SKEUOMORPHIC_COLORS.neutralLight,
    border: SKEUOMORPHIC_COLORS.borderDark,
    lightShadow: SKEUOMORPHIC_COLORS.shadowLight,
    darkShadow: SKEUOMORPHIC_COLORS.shadowDark,
  },
  shadows: {
    small: { shadowColor: SKEUOMORPHIC_COLORS.shadowLight, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 4 },
    medium: { shadowColor: SKEUOMORPHIC_COLORS.shadowMedium, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.16, shadowRadius: 8 },
    large: { shadowColor: SKEUOMORPHIC_COLORS.shadowDark, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.24, shadowRadius: 16 },
  },
  spacing: SKEUOMORPHIC_SPACING,
  typography: {
    h1: SKEUOMORPHIC_TYPOGRAPHY.h1,
    h2: SKEUOMORPHIC_TYPOGRAPHY.h2,
    h3: SKEUOMORPHIC_TYPOGRAPHY.h3,
    body: SKEUOMORPHIC_TYPOGRAPHY.body,
    button: SKEUOMORPHIC_TYPOGRAPHY.button,
    caption: SKEUOMORPHIC_TYPOGRAPHY.caption,
  },
  shape: {
    borderRadius: SKEUOMORPHIC_BORDER_RADIUS,
  },
};

// Export utility functions for skeuomorphic styling
export const getSkeuomorphicButtonStyle = (variant: 'primary' | 'secondary' = 'primary', pressed = false) => {
  const gradient = pressed 
    ? SKEUOMORPHIC_GRADIENTS.button.pressed 
    : SKEUOMORPHIC_GRADIENTS.button[variant];
  
  const shadows = pressed 
    ? SKEUOMORPHIC_SHADOWS.button.pressed 
    : SKEUOMORPHIC_SHADOWS.button.default;
  
  return {
    background: gradient,
    shadows,
    borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
    borderColor: pressed ? SKEUOMORPHIC_COLORS.borderDark : SKEUOMORPHIC_COLORS.border,
    borderRadius: SKEUOMORPHIC_BORDER_RADIUS.md,
  };
};

export const getSkeuomorphicInputStyle = (focused = false) => {
  return {
    background: SKEUOMORPHIC_GRADIENTS.input,
    shadows: focused ? SKEUOMORPHIC_SHADOWS.input.focused : SKEUOMORPHIC_SHADOWS.input.default,
    borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
    borderColor: focused ? SKEUOMORPHIC_COLORS.primary : SKEUOMORPHIC_COLORS.border,
    borderRadius: SKEUOMORPHIC_BORDER_RADIUS.sm,
  };
};

export const getSkeuomorphicCardStyle = () => {
  return {
    background: SKEUOMORPHIC_GRADIENTS.card,
    shadows: SKEUOMORPHIC_SHADOWS.card,
    borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
    borderColor: SKEUOMORPHIC_COLORS.borderLight,
    borderRadius: SKEUOMORPHIC_BORDER_RADIUS.lg,
  };
};

// Export all constants for component usage
export {
  SKEUOMORPHIC_COLORS,
  SKEUOMORPHIC_SHADOWS,
  SKEUOMORPHIC_GRADIENTS,
  SKEUOMORPHIC_TYPOGRAPHY,
  SKEUOMORPHIC_SPACING,
  SKEUOMORPHIC_BORDER_RADIUS,
  SKEUOMORPHIC_BORDER_WIDTHS,
}; 