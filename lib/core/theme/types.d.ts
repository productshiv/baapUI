import { ViewStyle, TextStyle } from 'react-native';
export type Breakpoints = {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
export type ThemeColors = {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    background: string;
    surface: string;
    text: {
        primary: string;
        secondary: string;
        disabled: string;
    };
};
export type ThemeSpacing = {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
export type ButtonVariantStyles = {
    [key: string]: ViewStyle;
};
export type ButtonSizeStyles = {
    [key: string]: ViewStyle;
};
export type ButtonTextVariantStyles = {
    [key: string]: TextStyle;
};
export type ButtonTextSizeStyles = {
    [key: string]: TextStyle;
};
export type ButtonStateStyles = {
    pressed: ViewStyle;
    disabled: ViewStyle;
};
export type ButtonTextStateStyles = {
    disabled: TextStyle;
};
export type ButtonLoadingColorStyles = {
    [key: string]: string;
};
export type ButtonStyles = {
    variants: ButtonVariantStyles;
    sizes: ButtonSizeStyles;
    textVariants: ButtonTextVariantStyles;
    textSizes: ButtonTextSizeStyles;
    states: ButtonStateStyles;
    textStates: ButtonTextStateStyles;
    loadingColor: ButtonLoadingColorStyles;
};
export type ThemeComponents = {
    button: ButtonStyles;
};
export type Theme = {
    colors: ThemeColors;
    spacing: ThemeSpacing;
    components: ThemeComponents;
};
export type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};
