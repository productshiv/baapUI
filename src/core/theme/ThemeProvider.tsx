import React, { createContext, useContext, useState } from 'react';
import { Theme, ThemeContextType } from './types';
import { defaultTheme } from './defaultTheme';

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  setTheme: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context.theme;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
