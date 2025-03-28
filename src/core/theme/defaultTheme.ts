import { Theme } from './types';

export const defaultTheme: Theme = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    info: '#5856D6',
    background: '#F2F2F7',
    surface: '#FFFFFF',
    text: {
      primary: '#000000',
      secondary: '#8E8E93',
      disabled: '#C7C7CC',
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
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
          paddingHorizontal: 24,
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
          lineHeight: 20,
        },
        medium: {
          fontSize: 16,
          lineHeight: 24,
        },
        large: {
          fontSize: 18,
          lineHeight: 28,
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
      textStates: {
        disabled: {
          color: '#C7C7CC',
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
