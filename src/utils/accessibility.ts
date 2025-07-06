/**
 * Accessibility utilities for color contrast validation and WCAG compliance
 */

export interface ColorContrastResult {
  ratio: number;
  wcagAA: boolean;
  wcagAAA: boolean;
  level: 'fail' | 'aa' | 'aaa';
}

/**
 * Convert hex color to RGB values
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Calculate relative luminance of a color
 * Based on WCAG 2.1 specification
 */
export function getRelativeLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const sRGB = c / 255;
    return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 * Returns a value between 1 and 21
 */
export function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) {
    throw new Error('Invalid color format. Please use hex colors.');
  }
  
  const lum1 = getRelativeLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getRelativeLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Check if color combination meets WCAG accessibility standards
 */
export function checkColorContrast(
  foreground: string,
  background: string,
  fontSize: 'normal' | 'large' = 'normal'
): ColorContrastResult {
  const ratio = getContrastRatio(foreground, background);
  
  // WCAG AA requirements: 4.5:1 for normal text, 3:1 for large text
  // WCAG AAA requirements: 7:1 for normal text, 4.5:1 for large text
  const aaThreshold = fontSize === 'large' ? 3 : 4.5;
  const aaaThreshold = fontSize === 'large' ? 4.5 : 7;
  
  const wcagAA = ratio >= aaThreshold;
  const wcagAAA = ratio >= aaaThreshold;
  
  let level: 'fail' | 'aa' | 'aaa';
  if (wcagAAA) {
    level = 'aaa';
  } else if (wcagAA) {
    level = 'aa';
  } else {
    level = 'fail';
  }
  
  return {
    ratio: Math.round(ratio * 100) / 100,
    wcagAA,
    wcagAAA,
    level,
  };
}

/**
 * Validate all color combinations in a theme
 */
export function validateThemeAccessibility(
  colors: Record<string, string>,
  backgroundColors: string[] = ['#FFFFFF', '#000000']
): Record<string, ColorContrastResult[]> {
  const results: Record<string, ColorContrastResult[]> = {};
  
  Object.entries(colors).forEach(([colorName, colorValue]) => {
    results[colorName] = backgroundColors.map((bg) =>
      checkColorContrast(colorValue, bg)
    );
  });
  
  return results;
}

/**
 * Generate accessibility report for a color palette
 */
export function generateAccessibilityReport(
  colors: Record<string, string>,
  backgroundColors: string[] = ['#FFFFFF', '#000000']
): string {
  const results = validateThemeAccessibility(colors, backgroundColors);
  let report = '# Color Accessibility Report\n\n';
  
  Object.entries(results).forEach(([colorName, contrastResults]) => {
    report += `## ${colorName}: ${colors[colorName]}\n`;
    
    contrastResults.forEach((result, index) => {
      const bgColor = backgroundColors[index];
      const status = result.level === 'fail' ? '❌' : result.level === 'aa' ? '✅' : '🌟';
      report += `- vs ${bgColor}: ${status} ${result.ratio}:1 (${result.level.toUpperCase()})\n`;
    });
    
    report += '\n';
  });
  
  return report;
}

/**
 * Suggest better color alternatives for failed contrast ratios
 */
export function suggestBetterColors(
  foreground: string,
  background: string,
  targetRatio: number = 4.5
): { lighter: string; darker: string } {
  const fgRgb = hexToRgb(foreground);
  if (!fgRgb) throw new Error('Invalid foreground color');
  
  // Simple approach: adjust lightness
  const lighterRgb = {
    r: Math.min(255, Math.round(fgRgb.r * 1.2)),
    g: Math.min(255, Math.round(fgRgb.g * 1.2)),
    b: Math.min(255, Math.round(fgRgb.b * 1.2)),
  };
  
  const darkerRgb = {
    r: Math.max(0, Math.round(fgRgb.r * 0.8)),
    g: Math.max(0, Math.round(fgRgb.g * 0.8)),
    b: Math.max(0, Math.round(fgRgb.b * 0.8)),
  };
  
  const rgbToHex = (r: number, g: number, b: number) =>
    `#${[r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')}`;
  
  return {
    lighter: rgbToHex(lighterRgb.r, lighterRgb.g, lighterRgb.b),
    darker: rgbToHex(darkerRgb.r, darkerRgb.g, darkerRgb.b),
  };
}