import { Theme } from '../types';

export const flatLightTheme: Theme = {
  mode: 'light',
  design: 'flat',
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    background: '#FFFFFF',
    surface: '#F2F2F7',
    text: '#000000',
    textSecondary: '#8E8E93',
    border: '#C7C7CC',
    error: '#FF3B30',
    success: '#34C759',
    warning: '#FF9500',
    info: '#5856D6',
    lightShadow: '#FFFFFF',
    darkShadow: '#000000'
  },
  shadows: {
    small: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1
    },
    medium: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 3
    },
    large: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 5
    }
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32
  },
  typography: {
    h1: {
      fontSize: 34,
      fontWeight: 'bold',
      letterSpacing: 0.37,
    },
    h2: {
      fontSize: 28,
      fontWeight: '600',
      letterSpacing: 0.35,
    },
    h3: {
      fontSize: 22,
      fontWeight: '600',
      letterSpacing: 0.35,
    },
    body: {
      fontSize: 17,
      fontWeight: 'normal',
      letterSpacing: -0.41,
    },
    button: {
      fontSize: 17,
      fontWeight: '600',
      letterSpacing: -0.41,
    },
    caption: {
      fontSize: 12,
      fontWeight: 'normal',
      letterSpacing: 0,
    }
  },
  shape: {
    borderRadius: {
      sm: 4,
      md: 8,
      lg: 12,
      full: 9999
    }
  }
}; 