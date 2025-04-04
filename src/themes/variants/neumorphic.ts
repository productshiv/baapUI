import { Theme } from '../types';

export const neumorphicLightTheme: Theme = {
  mode: 'light',
  design: 'neumorphic',
  colors: {
    primary: '#4A90E2',
    secondary: '#5856D6',
    background: '#E0E5EC',
    surface: '#E0E5EC',
    text: '#2D3436',
    textSecondary: '#636E72',
    border: '#D1D9E6',
    error: '#FF3B30',
    success: '#34C759',
    warning: '#FF9500',
    info: '#5856D6',
    lightShadow: '#FFFFFF',
    darkShadow: '#A3B1C6'
  },
  shadows: {
    small: {
      shadowColor: '#000000',
      shadowOffset: { width: -3, height: -3 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3
    },
    medium: {
      shadowColor: '#000000',
      shadowOffset: { width: -5, height: -5 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 5
    },
    large: {
      shadowColor: '#000000',
      shadowOffset: { width: -8, height: -8 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 8
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
      sm: 8,
      md: 12,
      lg: 16,
      full: 9999
    }
  }
}; 