import { ViewStyle, TextStyle, Platform } from '../../platform';
import { styleCache } from '../../utils/performance';

// Retro Era Types
export type RetroEra = 'neon80s' | 'pastel90s' | 'grunge90s' | 'vintage70s' | 'pixelArt' | 'terminal';
export type RetroColorScheme = 'bright' | 'muted' | 'monochrome' | 'rainbow';
export type RetroBorderThickness = 'thin' | 'medium' | 'thick' | 'ultra';
export type RetroCornerRadius = 'sharp' | 'slight' | 'rounded' | 'pill';
export type RetroShadowStyle = 'none' | 'drop' | 'neon' | 'deep' | 'box';

// Retro Color Palettes by Era
export const RETRO_ERA_COLORS = {
  neon80s: {
    primary: '#FF6B9D',
    secondary: '#00F5FF',
    accent: '#39FF14',
    background: '#1A1A2E',
    surface: '#16213E',
    text: '#EEEEFF',
    border: '#FF6B9D',
    glow: '#FF6B9D80',
  },
  pastel90s: {
    primary: '#FFB6C1',
    secondary: '#98FB98',
    accent: '#DDA0DD',
    background: '#F5F5DC',
    surface: '#FFF8DC',
    text: '#4A4A4A',
    border: '#E6E6FA',
    glow: '#FFB6C140',
  },
  grunge90s: {
    primary: '#8A2BE2',
    secondary: '#FF4500',
    accent: '#32CD32',
    background: '#0D0D0D',
    surface: '#1C1C1C',
    text: '#F0F0F0',
    border: '#8A2BE2',
    glow: '#8A2BE240',
  },
  vintage70s: {
    primary: '#D2691E',
    secondary: '#8B4513',
    accent: '#DAA520',
    background: '#F4A460',
    surface: '#DEB887',
    text: '#2F1B14',
    border: '#8B4513',
    glow: '#D2691E40',
  },
  pixelArt: {
    primary: '#FF0000',
    secondary: '#00FF00',
    accent: '#0000FF',
    background: '#000000',
    surface: '#333333',
    text: '#FFFFFF',
    border: '#FFFFFF',
    glow: '#FFFFFF40',
  },
  terminal: {
    primary: '#00FF00',
    secondary: '#FFFF00',
    accent: '#00FFFF',
    background: '#000000',
    surface: '#001100',
    text: '#00FF00',
    border: '#00FF00',
    glow: '#00FF0080',
  },
};

// Border Thickness Values
export const RETRO_BORDER_THICKNESS = {
  thin: 1,
  medium: 2,
  thick: 4,
  ultra: 6,
};

// Corner Radius Values
export const RETRO_CORNER_RADIUS = {
  sharp: 0,
  slight: 2,
  rounded: 8,
  pill: 9999,
};

// Shadow Configurations
export const RETRO_SHADOW_CONFIGS = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  drop: {
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 0,
    elevation: 2,
  },
  neon: {
    shadowColor: '#FF6B9D',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 8,
  },
  deep: {
    shadowColor: '#000000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 0,
    elevation: 0,
  },
  box: {
    shadowColor: '#8A2BE2',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 0,
    elevation: 3,
  },
};

// Typography Styles by Era
export const RETRO_TYPOGRAPHY_STYLES = {
  neon80s: {
    fontWeight: 'bold' as const,
    letterSpacing: 1.5,
    textTransform: 'uppercase' as const,
  },
  pastel90s: {
    fontWeight: '600' as const,
    letterSpacing: 0.5,
    fontStyle: 'italic' as const,
  },
  grunge90s: {
    fontWeight: '700' as const,
    letterSpacing: 0.8,
    textTransform: 'lowercase' as const,
  },
  vintage70s: {
    fontWeight: '600' as const,
    letterSpacing: 0.8,
    fontStyle: 'italic' as const,
  },
  pixelArt: {
    fontFamily: 'monospace',
    letterSpacing: 2,
    textTransform: 'uppercase' as const,
  },
  terminal: {
    fontFamily: 'monospace',
    letterSpacing: 1,
    fontWeight: 'normal' as const,
  },
};

interface RetroStyleOptions {
  era?: RetroEra;
  colorScheme?: RetroColorScheme;
  borderThickness?: RetroBorderThickness;
  cornerRadius?: RetroCornerRadius;
  shadowStyle?: RetroShadowStyle;
  customColors?: Partial<typeof RETRO_ERA_COLORS.neon80s>;
  glowEffect?: boolean;
}

export const getRetroStyles = ({
  era = 'neon80s',
  colorScheme = 'bright',
  borderThickness = 'medium',
  cornerRadius = 'sharp',
  shadowStyle = 'drop',
  customColors,
  glowEffect = false,
}: RetroStyleOptions = {}): ViewStyle => {
  // Performance optimization - style caching
  const cacheKey = `retro-${era}-${colorScheme}-${borderThickness}-${cornerRadius}-${shadowStyle}-${glowEffect}-${Platform.OS}`;
  
  const cached = styleCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const colors = { ...RETRO_ERA_COLORS[era], ...customColors };
  const borderWidth = RETRO_BORDER_THICKNESS[borderThickness];
  const borderRadius = RETRO_CORNER_RADIUS[cornerRadius];
  const shadowConfig = RETRO_SHADOW_CONFIGS[shadowStyle];

  let backgroundColor = colors.surface;
  let borderColor = colors.border;

  // Apply color scheme modifications
  switch (colorScheme) {
    case 'muted':
      backgroundColor = colors.background;
      borderColor = colors.text + '40'; // 25% opacity
      break;
    case 'monochrome':
      backgroundColor = era === 'terminal' ? '#000000' : '#FFFFFF';
      borderColor = era === 'terminal' ? '#FFFFFF' : '#000000';
      break;
    case 'rainbow':
      // Keep original bright colors
      break;
  }

  const baseStyle: ViewStyle = {
    backgroundColor,
    borderWidth,
    borderColor,
    borderRadius,
    ...shadowConfig,
  };

  // Add glow effect for neon styles
  if (glowEffect && (era === 'neon80s' || era === 'terminal')) {
    if (Platform.OS === 'web') {
      (baseStyle as any).boxShadow = `0 0 20px ${colors.glow}, inset 0 0 20px ${colors.glow}`;
    } else {
      baseStyle.shadowColor = colors.primary;
      baseStyle.shadowOpacity = 0.8;
      baseStyle.shadowRadius = 12;
      baseStyle.elevation = 8;
    }
  }

  // Cache the computed style
  styleCache.set(cacheKey, baseStyle);
  return baseStyle;
};

export const getRetroButtonStyles = (options: RetroStyleOptions = {}): ViewStyle => {
  const baseStyles = getRetroStyles({
    ...options,
    borderThickness: options.borderThickness || 'thick',
    shadowStyle: options.shadowStyle || 'drop',
  });

  return {
    ...baseStyles,
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
  };
};

export const getRetroInputStyles = (options: RetroStyleOptions = {}): ViewStyle => {
  const baseStyles = getRetroStyles({
    ...options,
    borderThickness: options.borderThickness || 'medium',
    shadowStyle: options.shadowStyle || 'none',
  });

  return {
    ...baseStyles,
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 44,
  };
};

export const getRetroCardStyles = (options: RetroStyleOptions = {}): ViewStyle => {
  const baseStyles = getRetroStyles({
    ...options,
    borderThickness: options.borderThickness || 'medium',
    shadowStyle: options.shadowStyle || 'drop',
  });

  return {
    ...baseStyles,
    padding: 16,
    margin: 8,
  };
};

export const getRetroModalStyles = (options: RetroStyleOptions = {}): ViewStyle => {
  const baseStyles = getRetroStyles({
    ...options,
    borderThickness: options.borderThickness || 'thick',
    shadowStyle: options.shadowStyle || 'deep',
  });

  return {
    ...baseStyles,
    padding: 24,
    margin: 20,
  };
};

export const getRetroTextStyles = ({
  era = 'neon80s',
  size = 'medium',
  customColors,
}: {
  era?: RetroEra;
  size?: 'small' | 'medium' | 'large';
  customColors?: Partial<typeof RETRO_ERA_COLORS.neon80s>;
} = {}): TextStyle => {
  const colors = { ...RETRO_ERA_COLORS[era], ...customColors };
  const typography = RETRO_TYPOGRAPHY_STYLES[era];

  const fontSize = {
    small: 12,
    medium: 16,
    large: 20,
  }[size];

  const baseStyle: TextStyle = {
    ...typography,
    fontSize,
    color: colors.text,
  };

  // Add text glow for neon styles
  if (era === 'neon80s' || era === 'terminal') {
    if (Platform.OS === 'web') {
      (baseStyle as any).textShadow = `0 0 10px ${colors.glow}`;
    }
  }

  return baseStyle;
};

// Predefined retro style variants
export const RETRO_VARIANTS = {
  neon80s: (options?: Omit<RetroStyleOptions, 'era'>) => 
    getRetroStyles({ ...options, era: 'neon80s', glowEffect: true }),
  pastel90s: (options?: Omit<RetroStyleOptions, 'era'>) => 
    getRetroStyles({ ...options, era: 'pastel90s', cornerRadius: 'rounded' }),
  grunge90s: (options?: Omit<RetroStyleOptions, 'era'>) => 
    getRetroStyles({ ...options, era: 'grunge90s', shadowStyle: 'deep' }),
  vintage70s: (options?: Omit<RetroStyleOptions, 'era'>) => 
    getRetroStyles({ ...options, era: 'vintage70s', cornerRadius: 'rounded' }),
  pixelArt: (options?: Omit<RetroStyleOptions, 'era'>) => 
    getRetroStyles({ ...options, era: 'pixelArt', cornerRadius: 'sharp', borderThickness: 'thick' }),
  terminal: (options?: Omit<RetroStyleOptions, 'era'>) => 
    getRetroStyles({ ...options, era: 'terminal', glowEffect: true, cornerRadius: 'sharp' }),
};

// Utility for creating custom retro themes
export const createRetroTheme = (
  baseEra: RetroEra,
  customizations: {
    colors?: Partial<typeof RETRO_ERA_COLORS.neon80s>;
    typography?: Partial<TextStyle>;
    borders?: Partial<{ thickness: RetroBorderThickness; radius: RetroCornerRadius }>;
    shadows?: RetroShadowStyle;
  } = {}
) => {
  const baseColors = RETRO_ERA_COLORS[baseEra];
  const baseTypography = RETRO_TYPOGRAPHY_STYLES[baseEra];

  return {
    colors: { ...baseColors, ...customizations.colors },
    typography: { ...baseTypography, ...customizations.typography },
    getStyles: (options: RetroStyleOptions = {}) => getRetroStyles({
      era: baseEra,
      borderThickness: customizations.borders?.thickness,
      cornerRadius: customizations.borders?.radius,
      shadowStyle: customizations.shadows,
      ...options,
    }),
  };
};