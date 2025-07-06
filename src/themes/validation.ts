/**
 * Theme validation utilities and schemas for compile-time and runtime validation
 */

import { Theme, ThemeColors, ThemeDesign, ThemeMode } from './types';
import { validateThemeAccessibility, generateAccessibilityReport } from '../utils/accessibility';

// Branded types for better type safety
export type ValidatedTheme = Theme & { __validated: true };
export type ColorHex = string & { __colorHex: true };
export type AccessibleColorPair = {
  foreground: ColorHex;
  background: ColorHex;
  __accessible: true;
};

/**
 * Theme validation errors
 */
export class ThemeValidationError extends Error {
  constructor(
    message: string,
    public readonly field: string,
    public readonly value: unknown
  ) {
    super(`Theme validation failed for '${field}': ${message}`);
    this.name = 'ThemeValidationError';
  }
}

/**
 * Validation rules for theme properties
 */
export const THEME_VALIDATION_RULES = {
  colors: {
    required: ['primary', 'secondary', 'background', 'surface', 'text', 'error'] as const,
    optional: ['textSecondary', 'border', 'success', 'warning', 'info', 'lightShadow', 'darkShadow'] as const,
    hexPattern: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
    contrastRequirements: {
      'text-background': 4.5,
      'text-surface': 4.5,
      'primary-background': 3.0,
      'secondary-background': 3.0,
    },
  },
  shadows: {
    required: ['small', 'medium', 'large'] as const,
    properties: ['shadowColor', 'shadowOffset', 'shadowOpacity', 'shadowRadius', 'elevation'] as const,
  },
  spacing: {
    required: ['xs', 'sm', 'md', 'lg', 'xl'] as const,
    min: 0,
  },
  typography: {
    required: ['h1', 'h2', 'h3', 'body', 'button', 'caption'] as const,
    properties: ['fontSize', 'fontWeight'] as const,
    optional: ['lineHeight', 'letterSpacing', 'textTransform'] as const,
  },
  shape: {
    required: ['borderRadius'] as const,
    borderRadius: {
      required: ['sm', 'md', 'lg', 'full'] as const,
      min: 0,
    },
  },
} as const;

/**
 * Validate hex color format
 */
export function isValidHexColor(color: string): color is ColorHex {
  return THEME_VALIDATION_RULES.colors.hexPattern.test(color);
}

/**
 * Validate theme colors structure and format
 */
export function validateThemeColors(colors: ThemeColors): void {
  const { required, hexPattern } = THEME_VALIDATION_RULES.colors;
  
  // Check required colors
  for (const requiredColor of required) {
    if (!(requiredColor in colors)) {
      throw new ThemeValidationError(
        `Missing required color '${requiredColor}'`,
        'colors',
        colors
      );
    }
  }
  
  // Validate hex format for all colors
  Object.entries(colors).forEach(([colorName, colorValue]) => {
    if (!hexPattern.test(colorValue)) {
      throw new ThemeValidationError(
        `Invalid hex color format '${colorValue}'`,
        `colors.${colorName}`,
        colorValue
      );
    }
  });
}

/**
 * Validate theme shadows structure
 */
export function validateThemeShadows(shadows: Record<string, string>): void {
  const { required } = THEME_VALIDATION_RULES.shadows;
  
  for (const requiredShadow of required) {
    if (!(requiredShadow in shadows)) {
      throw new ThemeValidationError(
        `Missing required shadow '${requiredShadow}'`,
        'shadows',
        shadows
      );
    }
  }
}

/**
 * Validate theme spacing structure
 */
export function validateThemeSpacing(spacing: Record<string, number>): void {
  const { required } = THEME_VALIDATION_RULES.spacing;
  
  for (const requiredSpacing of required) {
    if (!(requiredSpacing in spacing)) {
      throw new ThemeValidationError(
        `Missing required spacing '${requiredSpacing}'`,
        'spacing',
        spacing
      );
    }
    
    if (typeof spacing[requiredSpacing] !== 'number' || spacing[requiredSpacing] < 0) {
      throw new ThemeValidationError(
        `Invalid spacing value '${spacing[requiredSpacing]}'. Must be a positive number.`,
        `spacing.${requiredSpacing}`,
        spacing[requiredSpacing]
      );
    }
  }
}

/**
 * Validate theme typography structure
 */
export function validateThemeTypography(typography: Record<string, unknown>): void {
  const { required } = THEME_VALIDATION_RULES.typography;
  
  for (const requiredTypo of required) {
    if (!(requiredTypo in typography)) {
      throw new ThemeValidationError(
        `Missing required typography property '${requiredTypo}'`,
        'typography',
        typography
      );
    }
  }
}

/**
 * Validate theme shape structure
 */
export function validateThemeShape(shape: Record<string, unknown>): void {
  const { required, borderRadius } = THEME_VALIDATION_RULES.shape;
  
  for (const requiredProp of required) {
    if (!(requiredProp in shape)) {
      throw new ThemeValidationError(
        `Missing required shape property '${requiredProp}'`,
        'shape',
        shape
      );
    }
  }
  
  // Validate borderRadius structure
  if ('borderRadius' in shape) {
    const borderRadiusObj = shape.borderRadius;
    if (!borderRadiusObj || typeof borderRadiusObj !== 'object') {
      throw new ThemeValidationError(
        'borderRadius must be an object',
        'shape.borderRadius',
        borderRadiusObj
      );
    }
    
    const borderRadiusRecord = borderRadiusObj as Record<string, unknown>;
    for (const requiredSize of borderRadius.required) {
      if (!(requiredSize in borderRadiusRecord)) {
        throw new ThemeValidationError(
          `Missing required borderRadius size '${requiredSize}'`,
          'shape.borderRadius',
          borderRadiusRecord
        );
      }
      
      const value = borderRadiusRecord[requiredSize];
      if (typeof value !== 'number' || value < borderRadius.min) {
        throw new ThemeValidationError(
          `Invalid borderRadius value '${value}'. Must be a non-negative number.`,
          `shape.borderRadius.${requiredSize}`,
          value
        );
      }
    }
  }
}

/**
 * Validate accessibility requirements for theme colors
 */
export function validateThemeColorAccessibility(colors: ThemeColors): void {
  const { contrastRequirements } = THEME_VALIDATION_RULES.colors;
  const colorsRecord = colors as unknown as Record<string, string>;
  
  Object.entries(contrastRequirements).forEach(([pair, minRatio]) => {
    const [foreground, background] = pair.split('-');
    
    if (colorsRecord[foreground] && colorsRecord[background]) {
      const accessibilityResults = validateThemeAccessibility({
        [foreground]: colorsRecord[foreground],
      }, [colorsRecord[background]]);
      
      const result = accessibilityResults[foreground]?.[0];
      if (result && result.ratio < minRatio) {
        throw new ThemeValidationError(
          `Insufficient color contrast between ${foreground} and ${background}. ` +
          `Got ${result.ratio}:1, required ${minRatio}:1`,
          `colors.${pair}`,
          { foreground: colorsRecord[foreground], background: colorsRecord[background] }
        );
      }
    }
  });
}

/**
 * Comprehensive theme validation
 */
export function validateTheme(theme: Theme): ValidatedTheme {
  try {
    // Validate structure
    validateThemeColors(theme.colors);
    validateThemeShadows(theme.shadows as unknown as Record<string, string>);
    validateThemeSpacing(theme.spacing as unknown as Record<string, number>);
    validateThemeTypography(theme.typography as unknown as Record<string, unknown>);
    validateThemeShape(theme.shape as unknown as Record<string, unknown>);
    
    // Validate accessibility (optional - can be disabled for development)
    if (process.env.NODE_ENV !== 'development' || process.env.VALIDATE_ACCESSIBILITY === 'true') {
      validateThemeColorAccessibility(theme.colors);
    }
    
    return theme as ValidatedTheme;
  } catch (error) {
    if (error instanceof ThemeValidationError) {
      console.error('Theme Validation Error:', error.message);
      throw error;
    }
    throw new ThemeValidationError(
      'Unknown validation error',
      'theme',
      theme
    );
  }
}

/**
 * Create a validated theme with runtime checks
 */
export function createValidatedTheme(
  design: ThemeDesign,
  mode: ThemeMode,
  themeData: Omit<Theme, 'design' | 'mode'>
): ValidatedTheme {
  const theme: Theme = {
    design,
    mode,
    ...themeData,
  };
  
  return validateTheme(theme);
}

/**
 * Generate theme validation report
 */
export function generateThemeValidationReport(theme: Theme): string {
  let report = `# Theme Validation Report\n\n`;
  report += `**Design:** ${theme.design}\n`;
  report += `**Mode:** ${theme.mode}\n\n`;
  
  try {
    validateTheme(theme);
    report += '✅ **Theme validation passed!**\n\n';
  } catch (error) {
    if (error instanceof ThemeValidationError) {
      report += `❌ **Validation failed:** ${error.message}\n\n`;
    }
  }
  
  // Add accessibility report
  report += generateAccessibilityReport(theme.colors as unknown as Record<string, string>);
  
  return report;
}

/**
 * Type guard for validated themes
 */
export function isValidatedTheme(theme: Theme): theme is ValidatedTheme {
  try {
    validateTheme(theme);
    return true;
  } catch {
    return false;
  }
}

/**
 * Development helper to validate all themes in a theme collection
 */
export function validateThemeCollection(
  themes: Record<string, Theme>
): Record<string, ValidatedTheme | ThemeValidationError> {
  const results: Record<string, ValidatedTheme | ThemeValidationError> = {};
  
  Object.entries(themes).forEach(([themeName, theme]) => {
    try {
      results[themeName] = validateTheme(theme);
    } catch (error) {
      results[themeName] = error as ThemeValidationError;
    }
  });
  
  return results;
}