import React, { createContext, useContext, useState, useCallback } from 'react';
import { Theme, ThemeMode, ThemeDesign } from './types';
import { flatLightTheme } from './variants/flat';
import { neumorphicLightTheme } from './variants/neumorphic';

interface ThemeContextType {
  theme: Theme;
  setMode: (mode: ThemeMode) => void;
  setDesign: (design: ThemeDesign) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(flatLightTheme);

  const setMode = useCallback((mode: ThemeMode) => {
    setCurrentTheme(prevTheme => {
      // Here we'll implement the logic to switch between light/dark variants
      // of the current design theme
      return prevTheme;
    });
  }, []);

  const setDesign = useCallback((design: ThemeDesign) => {
    setCurrentTheme(prevTheme => {
      const mode = prevTheme.mode;
      switch (design) {
        case 'neumorphic':
          return { ...neumorphicLightTheme, mode };
        case 'skeuomorphic':
        case 'material':
        case 'simplistic':
          // Temporarily fall back to flat theme for unimplemented designs
          return { ...flatLightTheme, mode };
        default:
          return { ...flatLightTheme, mode };
      }
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setMode, setDesign }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
