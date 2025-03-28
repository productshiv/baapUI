export interface ThemeColors {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
}
export interface ThemeSpacing {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}
export interface ThemeFontSizes {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}
export interface ThemeRadii {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    full: number;
}
export interface ThemeButtonStyles {
    variants: {
        primary: object;
        secondary: object;
        outline: object;
        ghost: object;
    };
    sizes: {
        small: object;
        medium: object;
        large: object;
    };
    states: {
        pressed: object;
        disabled: object;
    };
    textVariants: {
        primary: object;
        secondary: object;
        outline: object;
        ghost: object;
    };
    textSizes: {
        small: object;
        medium: object;
        large: object;
    };
    textStates: {
        disabled: object;
    };
    loadingColor: {
        primary: string;
        secondary: string;
        outline: string;
        ghost: string;
    };
}
export interface ThemeComponents {
    button: ThemeButtonStyles;
}
export interface Theme {
    colors: ThemeColors;
    spacing: ThemeSpacing;
    fontSizes: ThemeFontSizes;
    radii: ThemeRadii;
    components: ThemeComponents;
}
export interface ThemeProviderProps {
    theme?: Partial<Theme>;
    children: React.ReactNode;
}
