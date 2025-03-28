import React, { createContext, useContext } from 'react';
import { Theme, ThemeProviderProps } from './types';

const defaultTheme: Theme = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    surface: '#FFFFFF',
    background: '#F2F2F7',
    text: '#000000',
    error: '#FF3B30',
    success: '#34C759',
    warning: '#FF9500',
    info: '#5856D6',
    disabled: '#C7C7CC',
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
      designLanguage: 'flat',
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
          paddingHorizontal: 24,
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
      neumorphism: {
        shadowLight: '#FFFFFF',
        shadowDark: '#D1D9E6',
        intensity: 0.15,
        blur: 15,
        distance: 5,
        pressed: {
          intensity: 0.25,
          blur: 10,
          distance: 2,
        },
      },
      glassmorphism: {
        blur: 10,
        opacity: 0.3,
        borderOpacity: 0.1,
      },
      material: {
        elevation: 2,
        stateLayerOpacity: 0.12,
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
    components: {
      ...defaultTheme.components,
      ...theme.components,
      button: {
        ...defaultTheme.components.button,
        ...theme.components?.button,
      },
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