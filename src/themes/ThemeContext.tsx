import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Theme, ThemeMode, ThemeDesign } from './types';
import { flatLightTheme } from './variants/flat';
import { neumorphicLightTheme } from './variants/neumorphic';
import { skeuomorphicLightTheme } from './variants/skeuomorphic';
import { glassmorphicLightTheme, glassmorphicDarkTheme } from './variants/glassmorphic';
import { retroLightTheme, retroDarkTheme } from './variants/retro';

interface ThemeContextType {
  theme: Theme;
  mode: ThemeMode;
  design: ThemeDesign;
  setMode: (mode: ThemeMode) => void;
  setDesign: (design: ThemeDesign) => void;
  setTheme: (theme: Partial<Theme>) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface ThemeProviderProps {
  children: ReactNode;
  /**
   * Initial theme design system
   * @default 'flat'
   */
  initialDesign?: ThemeDesign;
  /**
   * Initial theme mode
   * @default 'light'
   */
  initialMode?: ThemeMode;
  /**
   * Custom theme overrides
   */
  theme?: Partial<Theme>;
}

/**
 * Get theme based on design and mode
 */
const getTheme = (design: ThemeDesign, mode: ThemeMode): Theme => {
  let baseTheme: Theme;
  
  switch (design) {
    case 'neumorphic':
      baseTheme = neumorphicLightTheme;
      break;
    case 'skeuomorphic':
      baseTheme = skeuomorphicLightTheme;
      break;
    case 'glassmorphic':
      baseTheme = mode === 'dark' ? glassmorphicDarkTheme : glassmorphicLightTheme;
      break;
    case 'retro':
      baseTheme = mode === 'dark' ? retroDarkTheme : retroLightTheme;
      break;
    case 'material':
    case 'simplistic':
      // TODO: Implement these design systems
      // For now, fall back to flat theme
      console.warn(`Design system '${design}' not yet implemented, falling back to 'flat'`);
      baseTheme = flatLightTheme;
      break;
    default:
      baseTheme = flatLightTheme;
  }
  
  // Handle dark mode for other design systems
  if (mode === 'dark' && design !== 'glassmorphic' && design !== 'retro') {
    console.warn(`Dark mode for '${design}' not yet implemented, using light mode`);
  }
  
  return {
    ...baseTheme,
    mode,
    design,
  };
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  initialDesign = 'flat',
  initialMode = 'light',
  theme: themeOverrides
}) => {
  const [currentDesign, setCurrentDesign] = useState<ThemeDesign>(initialDesign);
  const [currentMode, setCurrentMode] = useState<ThemeMode>(initialMode);
  const [customTheme, setCustomTheme] = useState<Partial<Theme> | undefined>(themeOverrides);

  // Get the current theme
  const baseTheme = getTheme(currentDesign, currentMode);
  const theme: Theme = customTheme ? { ...baseTheme, ...customTheme } : baseTheme;

  const setMode = useCallback((mode: ThemeMode) => {
    setCurrentMode(mode);
  }, []);

  const setDesign = useCallback((design: ThemeDesign) => {
    setCurrentDesign(design);
  }, []);

  const setTheme = useCallback((themeOverrides: Partial<Theme>) => {
    setCustomTheme(themeOverrides);
  }, []);

  const contextValue: ThemeContextType = {
    theme,
    mode: currentMode,
    design: currentDesign,
    setMode,
    setDesign,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Hook to access the current theme context
 * @throws Error if used outside of ThemeProvider
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

/**
 * Hook to safely access theme context with fallback
 * Returns null if used outside of ThemeProvider
 */
export const useThemeSafe = (): ThemeContextType | null => {
  const context = useContext(ThemeContext);
  return context || null;
};
