import React from 'react';
import { Theme, ThemeProviderProps } from './types';
export declare const defaultTheme: Theme;
export declare const ThemeContext: React.Context<Theme>;
export declare const useTheme: () => Theme;
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
