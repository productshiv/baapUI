import { ViewStyle, TextStyle } from 'react-native';

export type ThemeMode = 'light' | 'dark';
export type ThemeDesign = 'flat' | 'neumorphic' | 'skeuomorphic' | 'material' | 'simplistic';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  error: string;
  success: string;
  warning: string;
  info: string;
  lightShadow: string;
  darkShadow: string;
}

export interface ThemeShadows {
  small: ViewStyle;
  medium: ViewStyle;
  large: ViewStyle;
}

export interface ThemeSpacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface ThemeTypography {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  body: TextStyle;
  button: TextStyle;
  caption: TextStyle;
}

export interface ThemeShape {
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    full: number;
  };
}

export interface Theme {
  mode: ThemeMode;
  design: ThemeDesign;
  colors: ThemeColors;
  shadows: ThemeShadows;
  spacing: ThemeSpacing;
  typography: ThemeTypography;
  shape: ThemeShape;
} 