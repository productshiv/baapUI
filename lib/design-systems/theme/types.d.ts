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
export interface Theme {
    colors: ThemeColors;
    spacing: ThemeSpacing;
    fontSizes: ThemeFontSizes;
    radii: ThemeRadii;
}
export interface ThemeProviderProps {
    theme?: Partial<Theme>;
    children: React.ReactNode;
}
