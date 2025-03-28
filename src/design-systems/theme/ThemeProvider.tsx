import React, { createContext, useContext } from 'react';
import { Theme, ThemeProviderProps } from './types';

const defaultTheme: Theme = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    info: '#5856D6',
    background: '#FFFFFF',
    surface: '#F2F2F7',
    text: '#000000',
    textSecondary: '#8E8E93',
    border: '#C6C6C8',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  radii: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    full: 9999,
  },
  components: {
    button: {
      variants: {
        primary: {
          backgroundColor: '#007AFF',
        },
        secondary: {
          backgroundColor: '#5856D6',
        },
        outline: {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: '#007AFF',
        },
        ghost: {
          backgroundColor: 'transparent',
        },
      },
      sizes: {
        small: {
          paddingVertical: 8,
          paddingHorizontal: 12,
        },
        medium: {
          paddingVertical: 12,
          paddingHorizontal: 16,
        },
        large: {
          paddingVertical: 16,
          paddingHorizontal: 20,
        },
      },
      states: {
        pressed: {
          opacity: 0.8,
        },
        disabled: {
          opacity: 0.5,
        },
      },
      textVariants: {
        primary: {
          color: '#FFFFFF',
        },
        secondary: {
          color: '#FFFFFF',
        },
        outline: {
          color: '#007AFF',
        },
        ghost: {
          color: '#007AFF',
        },
      },
      textSizes: {
        small: {
          fontSize: 14,
        },
        medium: {
          fontSize: 16,
        },
        large: {
          fontSize: 18,
        },
      },
      textStates: {
        disabled: {
          opacity: 0.5,
        },
      },
      loadingColor: {
        primary: '#FFFFFF',
        secondary: '#FFFFFF',
        outline: '#007AFF',
        ghost: '#007AFF',
      },
    },
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme = {},
  children,
}) => {
  const mergedTheme = {
    ...defaultTheme,
    ...theme,
    colors: {
      ...defaultTheme.colors,
      ...theme.colors,
    },
    spacing: {
      ...defaultTheme.spacing,
      ...theme.spacing,
    },
    fontSizes: {
      ...defaultTheme.fontSizes,
      ...theme.fontSizes,
    },
    radii: {
      ...defaultTheme.radii,
      ...theme.radii,
    },
    components: {
      ...defaultTheme.components,
      ...theme.components,
    },
  };

  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
}; 