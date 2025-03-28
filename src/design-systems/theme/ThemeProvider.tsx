import React, { createContext, useContext } from 'react';
import { Theme, ThemeProviderProps } from './types';

export const defaultTheme: Theme = {
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
    border: '#C7C7CC',
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
    xl: 24,
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
          paddingHorizontal: 12,
          paddingVertical: 6,
        },
        medium: {
          paddingHorizontal: 16,
          paddingVertical: 8,
        },
        large: {
          paddingHorizontal: 20,
          paddingVertical: 12,
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

export const ThemeContext = createContext<Theme>(defaultTheme);

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme = {},
  children,
}) => {
  const mergedTheme: Theme = {
    ...defaultTheme,
    ...theme,
    colors: {
      ...defaultTheme.colors,
      ...(theme.colors || {}),
    },
    spacing: {
      ...defaultTheme.spacing,
      ...(theme.spacing || {}),
    },
    fontSizes: {
      ...defaultTheme.fontSizes,
      ...(theme.fontSizes || {}),
    },
    radii: {
      ...defaultTheme.radii,
      ...(theme.radii || {}),
    },
    components: {
      ...defaultTheme.components,
      ...(theme.components || {}),
      button: {
        ...defaultTheme.components.button,
        ...(theme.components?.button || {}),
      },
    },
  };

  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
}; 