import { Theme } from '../types';
import { validateTheme, ThemeValidationError } from '../validation';
import { checkColorContrast } from '../../utils/accessibility';

// Retro Light Theme - 80s Neon Inspired
export const retroLightTheme: Theme = {
  mode: 'light',
  design: 'retro',
  colors: {
    primary: '#FF6B9D', // Hot pink
    secondary: '#00F5FF', // Electric cyan
    background: '#1A1A2E', // Dark navy
    surface: '#16213E', // Darker blue
    text: '#EEEEFF', // Off-white
    textSecondary: '#B8B8FF', // Light purple
    border: '#FF6B9D', // Hot pink border
    error: '#FF073A', // Neon red
    success: '#39FF14', // Electric green
    warning: '#FFFF00', // Electric yellow
    info: '#00F5FF', // Electric cyan
    lightShadow: '#FF6B9D40', // Pink glow
    darkShadow: '#00000080', // Dark shadow
  },
  shadows: {
    small: {
      shadowColor: '#FF6B9D',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.6,
      shadowRadius: 4.0,
      elevation: 3,
    },
    medium: {
      shadowColor: '#00F5FF',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.7,
      shadowRadius: 8.0,
      elevation: 6,
    },
    large: {
      shadowColor: '#FF6B9D',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.8,
      shadowRadius: 12.0,
      elevation: 10,
    },
  },
  spacing: {
    xs: 6,
    sm: 12,
    md: 20,
    lg: 28,
    xl: 36,
  },
  typography: {
    h1: {
      fontSize: 36,
      fontWeight: 'bold',
      letterSpacing: 2.0,
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: 30,
      fontWeight: 'bold',
      letterSpacing: 1.5,
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: 24,
      fontWeight: '700',
      letterSpacing: 1.2,
      textTransform: 'uppercase',
    },
    body: {
      fontSize: 16,
      fontWeight: 'normal',
      letterSpacing: 0.5,
    },
    button: {
      fontSize: 18,
      fontWeight: 'bold',
      letterSpacing: 1.0,
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: 12,
      fontWeight: 'normal',
      letterSpacing: 0.8,
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: {
      sm: 2,
      md: 4,
      lg: 8,
      full: 0, // Sharp corners for retro feel
    },
  },
};


// Validate retro themes for accessibility and consistency
function validateRetroTheme(theme: Theme, themeName: string): Theme {
  try {
    validateTheme(theme);
    console.log(`✅ ${themeName} passed validation`);
    return theme;
  } catch (error) {
    if (error instanceof ThemeValidationError) {
      console.warn(`⚠️ ${themeName} validation issues:`, error.message);
      // Return theme with warnings but don't throw
      return theme;
    }
    throw error;
  }
}

// Export validated themes
export const validatedRetroLightTheme = validateRetroTheme(retroLightTheme, 'Retro Light Theme');

// Accessibility-improved color palettes
export const ACCESSIBLE_RETRO_PALETTES = {
  neon80s: {
    primary: '#FF1493', // Deep pink - better contrast
    secondary: '#00CED1', // Dark turquoise - better contrast
    accent: '#32CD32', // Lime green - good contrast
    background: '#0A0A0A', // Darker for better contrast
    surface: '#1A1A1A', // Darker surface
    text: '#FFFFFF', // Pure white for maximum contrast
    textSecondary: '#CCCCCC', // Light gray with good contrast
  },
  pastel90s: {
    primary: '#8B4B8B', // Darker plum for better contrast
    secondary: '#4B8B4B', // Darker green for better contrast
    accent: '#8B4B8B', // Consistent with primary
    background: '#F8F8F8', // Slightly darker cream
    surface: '#F0F0F0', // Light gray
    text: '#2F2F2F', // Dark gray for good contrast
    textSecondary: '#5F5F5F', // Medium gray
  },
  grunge90s: {
    primary: '#9932CC', // Darker orchid for better contrast
    secondary: '#FF6347', // Tomato - better contrast than orange red
    accent: '#228B22', // Forest green - better contrast
    background: '#000000', // Pure black
    surface: '#1C1C1C', // Dark gray
    text: '#FFFFFF', // Pure white
    textSecondary: '#CCCCCC', // Light gray
  },
  vintage70s: {
    primary: '#8B4513', // Saddle brown - good contrast
    secondary: '#A0522D', // Sienna - complementary
    accent: '#B8860B', // Dark goldenrod - better contrast
    background: '#FFF8DC', // Cornsilk - light background
    surface: '#F5DEB3', // Wheat - slightly darker
    text: '#2F2F2F', // Dark gray
    textSecondary: '#5F5F5F', // Medium gray
  },
  terminal: {
    primary: '#00FF00', // Bright green - classic terminal
    secondary: '#FFFF00', // Bright yellow
    accent: '#00FFFF', // Bright cyan
    background: '#000000', // Pure black
    surface: '#0A0A0A', // Very dark gray
    text: '#00FF00', // Green text
    textSecondary: '#00CC00', // Darker green
  },
};

// Helper function to create accessible retro theme
export function createAccessibleRetroTheme(
  baseTheme: Theme,
  palette: keyof typeof ACCESSIBLE_RETRO_PALETTES
): Theme {
  const colors = ACCESSIBLE_RETRO_PALETTES[palette];
  
  // Validate color combinations
  const textContrast = checkColorContrast(colors.text, colors.background);
  const primaryContrast = checkColorContrast(colors.primary, colors.background);
  
  if (textContrast.ratio < 4.5) {
    console.warn(`⚠️ Text contrast ratio ${textContrast.ratio}:1 may not meet WCAG AA standards`);
  }
  
  if (primaryContrast.ratio < 3) {
    console.warn(`⚠️ Primary color contrast ratio ${primaryContrast.ratio}:1 may not meet WCAG AA standards for large text`);
  }
  
  return {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      ...colors,
      error: '#DC143C', // Crimson - good contrast
      success: colors.accent,
      warning: '#FF8C00', // Dark orange - better contrast
      info: colors.secondary,
    },
  };
}



// Retro theme utilities
export const retroThemeUtils = {
  /**
   * Get the appropriate text color for a background
   */
  getContrastingTextColor: (backgroundColor: string): string => {
    const contrast = checkColorContrast('#FFFFFF', backgroundColor);
    return contrast.ratio >= 4.5 ? '#FFFFFF' : '#000000';
  },
  
  /**
   * Validate if a color combination meets accessibility standards
   */
  validateColorCombination: (foreground: string, background: string) => {
    return checkColorContrast(foreground, background);
  },
  
  /**
   * Get theme-appropriate shadow for retro design
   */
  getRetroShadow: (era: keyof typeof RETRO_COLOR_PALETTES, intensity: 'small' | 'medium' | 'large') => {
    const palette = RETRO_COLOR_PALETTES[era];
    const baseColor = palette.primary;
    
    const intensityMap = {
      small: { opacity: 0.4, radius: 4, offset: 2 },
      medium: { opacity: 0.6, radius: 8, offset: 4 },
      large: { opacity: 0.8, radius: 12, offset: 6 },
    };
    
    const config = intensityMap[intensity];
    
    return {
      shadowColor: baseColor,
      shadowOffset: { width: 0, height: config.offset },
      shadowOpacity: config.opacity,
      shadowRadius: config.radius,
      elevation: config.offset,
    };
  },
};

// Retro Dark Theme - 90s Grunge Inspired
export const retroDarkTheme: Theme = {
  mode: 'dark',
  design: 'retro',
  colors: {
    primary: '#8A2BE2', // Blue violet
    secondary: '#FF4500', // Orange red
    background: '#0D0D0D', // Almost black
    surface: '#1C1C1C', // Dark gray
    text: '#F0F0F0', // Light gray
    textSecondary: '#A0A0A0', // Medium gray
    border: '#8A2BE2', // Blue violet border
    error: '#DC143C', // Crimson
    success: '#32CD32', // Lime green
    warning: '#FFD700', // Gold
    info: '#1E90FF', // Dodger blue
    lightShadow: '#8A2BE240', // Purple glow
    darkShadow: '#00000090', // Deep shadow
  },
  shadows: {
    small: {
      shadowColor: '#8A2BE2',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 3.0,
      elevation: 2,
    },
    medium: {
      shadowColor: '#FF4500',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.6,
      shadowRadius: 6.0,
      elevation: 4,
    },
    large: {
      shadowColor: '#8A2BE2',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.7,
      shadowRadius: 10.0,
      elevation: 8,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
      letterSpacing: 1.5,
    },
    h2: {
      fontSize: 26,
      fontWeight: '700',
      letterSpacing: 1.2,
    },
    h3: {
      fontSize: 20,
      fontWeight: '600',
      letterSpacing: 1.0,
    },
    body: {
      fontSize: 15,
      fontWeight: 'normal',
      letterSpacing: 0.3,
    },
    button: {
      fontSize: 16,
      fontWeight: '600',
      letterSpacing: 0.8,
    },
    caption: {
      fontSize: 11,
      fontWeight: 'normal',
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: {
      sm: 3,
      md: 6,
      lg: 10,
      full: 0, // Sharp corners for retro feel
    },
  },
};

// Export validated dark theme
export const validatedRetroDarkTheme = validateRetroTheme(retroDarkTheme, 'Retro Dark Theme');

// Retro Color Palettes for different eras
export const RETRO_COLOR_PALETTES = {
  neon80s: {
    primary: '#FF6B9D',
    secondary: '#00F5FF',
    accent: '#39FF14',
    background: '#1A1A2E',
    surface: '#16213E',
  },
  pastel90s: {
    primary: '#FFB6C1',
    secondary: '#98FB98',
    accent: '#DDA0DD',
    background: '#F5F5DC',
    surface: '#FFF8DC',
  },
  grunge90s: {
    primary: '#8A2BE2',
    secondary: '#FF4500',
    accent: '#32CD32',
    background: '#0D0D0D',
    surface: '#1C1C1C',
  },
  vintage70s: {
    primary: '#D2691E',
    secondary: '#8B4513',
    accent: '#DAA520',
    background: '#F4A460',
    surface: '#DEB887',
  },
  terminal: {
    primary: '#00FF00',
    secondary: '#FFFF00',
    accent: '#00FFFF',
    background: '#000000',
    surface: '#001100',
  },
};

// Retro Typography Styles
export const RETRO_TYPOGRAPHY = {
  pixelArt: {
    fontFamily: 'monospace',
    letterSpacing: 2,
    textTransform: 'uppercase' as const,
  },
  neon: {
    fontWeight: 'bold' as const,
    letterSpacing: 1.5,
    textTransform: 'uppercase' as const,
    textShadowColor: '#FF6B9D',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  vintage: {
    fontWeight: '600' as const,
    letterSpacing: 0.8,
    fontStyle: 'italic' as const,
  },
  terminal: {
    fontFamily: 'monospace',
    letterSpacing: 1,
    fontWeight: 'normal' as const,
  },
};

// Retro Border Styles
export const RETRO_BORDERS = {
  thick: {
    borderWidth: 4,
    borderStyle: 'solid' as const,
  },
  neon: {
    borderWidth: 2,
    borderStyle: 'solid' as const,
    shadowColor: '#FF6B9D',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  pixelated: {
    borderWidth: 3,
    borderStyle: 'solid' as const,
  },
  vintage: {
    borderWidth: 1,
    borderStyle: 'solid' as const,
  },
};

// Retro Shadow Effects
export const RETRO_SHADOWS = {
  neonGlow: {
    shadowColor: '#FF6B9D',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 8,
  },
  deepShadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 0,
    elevation: 0,
  },
  retroBox: {
    shadowColor: '#8A2BE2',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 0,
    elevation: 3,
  },
};

// Export accessible theme variants
export const accessibleRetroNeon80s = createAccessibleRetroTheme(retroLightTheme, 'neon80s');
export const accessibleRetroPastel90s = createAccessibleRetroTheme(retroLightTheme, 'pastel90s');
export const accessibleRetroGrunge90s = createAccessibleRetroTheme(retroDarkTheme, 'grunge90s');
export const accessibleRetroVintage70s = createAccessibleRetroTheme(retroLightTheme, 'vintage70s');
export const accessibleRetroTerminal = createAccessibleRetroTheme(retroDarkTheme, 'terminal');