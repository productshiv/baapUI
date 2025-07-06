import { ViewStyle, Platform } from '../../platform';
import { styleCache, useMemoizedStyle } from '../../utils/performance';

export const GLASSMORPHIC_COLORS = {
  light: {
    background: 'rgba(255, 255, 255, 0.1)',
    surface: 'rgba(255, 255, 255, 0.2)',
    border: 'rgba(255, 255, 255, 0.3)',
    text: 'rgba(29, 29, 31, 0.9)',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  dark: {
    background: 'rgba(0, 0, 0, 0.1)',
    surface: 'rgba(255, 255, 255, 0.1)',
    border: 'rgba(255, 255, 255, 0.2)',
    text: 'rgba(255, 255, 255, 0.95)',
    shadow: 'rgba(0, 0, 0, 0.3)',
  },
};

export const GLASSMORPHIC_CONFIG = {
  blur: {
    light: 10,
    medium: 16,
    heavy: 24,
  },
  opacity: {
    subtle: 0.1,
    medium: 0.2,
    strong: 0.3,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
  },
};

export type GlassmorphicIntensity = 'subtle' | 'medium' | 'strong';
export type GlassmorphicBlur = 'light' | 'medium' | 'heavy';
export type GlassmorphicTheme = 'light' | 'dark';

interface GlassmorphicStyleOptions {
  intensity?: GlassmorphicIntensity;
  blur?: GlassmorphicBlur;
  theme?: GlassmorphicTheme;
  customBackground?: string;
  customBorderRadius?: number;
  tintColor?: string;
}

export const getGlassmorphicStyles = ({
  intensity = 'medium',
  blur = 'medium',
  theme = 'light',
  customBackground,
  customBorderRadius,
  tintColor,
}: GlassmorphicStyleOptions = {}): ViewStyle => {
  // Phase 9: Performance Optimization - Style caching
  const cacheKey = `glass-${intensity}-${blur}-${theme}-${customBackground || 'default'}-${customBorderRadius || 'default'}-${tintColor || 'default'}-${Platform.OS}`;
  
  const cached = styleCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const colors = GLASSMORPHIC_COLORS[theme];
  const blurValue = GLASSMORPHIC_CONFIG.blur[blur];
  const opacityValue = GLASSMORPHIC_CONFIG.opacity[intensity];
  
  const backgroundColor = customBackground || 
    (tintColor ? 
      `${tintColor.replace(')', `, ${opacityValue})`).replace('rgb', 'rgba')}` : 
      colors.surface
    );

  const baseStyle: ViewStyle = {
    backgroundColor,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: customBorderRadius || GLASSMORPHIC_CONFIG.borderRadius.md,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  };

  let finalStyle: ViewStyle;

  // Web-specific backdrop-filter
  if (Platform.OS === 'web') {
    finalStyle = {
      ...baseStyle,
      backdropFilter: `blur(${blurValue}px)`,
      WebkitBackdropFilter: `blur(${blurValue}px)`,
    } as ViewStyle;
  } else {
    // React Native fallback with enhanced shadows
    finalStyle = {
      ...baseStyle,
      shadowOpacity: 0.15,
      shadowRadius: blurValue,
      elevation: Math.min(blurValue / 2, 8),
    };
  }

  // Cache the computed style
  styleCache.set(cacheKey, finalStyle);
  return finalStyle;
};

export const getGlassmorphicCardStyles = (options: GlassmorphicStyleOptions = {}): ViewStyle => {
  return {
    ...getGlassmorphicStyles(options),
    padding: 16,
    margin: 8,
  };
};

export const getGlassmorphicButtonStyles = (options: GlassmorphicStyleOptions = {}): ViewStyle => {
  return {
    ...getGlassmorphicStyles({
      ...options,
      intensity: 'strong',
    }),
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  };
};

export const getGlassmorphicInputStyles = (options: GlassmorphicStyleOptions = {}): ViewStyle => {
  return {
    ...getGlassmorphicStyles({
      ...options,
      intensity: 'subtle',
    }),
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 44,
  };
};

export const getGlassmorphicModalStyles = (options: GlassmorphicStyleOptions = {}): ViewStyle => {
  return {
    ...getGlassmorphicStyles({
      ...options,
      blur: 'heavy',
      intensity: 'strong',
    }),
    padding: 24,
    margin: 20,
  };
};

// Utility for creating tinted glass effects
export const createTintedGlass = (
  baseColor: string,
  opacity: number = 0.2,
  options: Omit<GlassmorphicStyleOptions, 'tintColor'> = {}
): ViewStyle => {
  return getGlassmorphicStyles({
    ...options,
    tintColor: baseColor,
    customBackground: `${baseColor.replace(')', `, ${opacity})`).replace('rgb', 'rgba')}`,
  });
};

// Predefined glass color variants
export const GLASS_VARIANTS = {
  blue: (options?: GlassmorphicStyleOptions) => createTintedGlass('rgb(0, 122, 255)', 0.2, options),
  purple: (options?: GlassmorphicStyleOptions) => createTintedGlass('rgb(88, 86, 214)', 0.2, options),
  green: (options?: GlassmorphicStyleOptions) => createTintedGlass('rgb(52, 199, 89)', 0.2, options),
  red: (options?: GlassmorphicStyleOptions) => createTintedGlass('rgb(255, 59, 48)', 0.2, options),
  orange: (options?: GlassmorphicStyleOptions) => createTintedGlass('rgb(255, 149, 0)', 0.2, options),
};