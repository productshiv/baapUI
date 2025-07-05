import { ViewStyle, TextStyle } from '../../platform';
import { 
  SKEUOMORPHIC_COLORS, 
  SKEUOMORPHIC_SHADOWS, 
  SKEUOMORPHIC_GRADIENTS,
  SKEUOMORPHIC_BORDER_RADIUS,
  SKEUOMORPHIC_BORDER_WIDTHS 
} from '../variants/skeuomorphic';

// Shadow utility function to convert shadow objects to platform-specific styles
export const convertShadowToStyle = (shadows: any[]): ViewStyle => {
  if (!shadows || shadows.length === 0) return {};
  
  // For React Native, we can only use the first shadow
  const primaryShadow = shadows[0];
  
  return {
    shadowColor: primaryShadow.color || SKEUOMORPHIC_COLORS.shadowMedium,
    shadowOffset: {
      width: primaryShadow.x || 0,
      height: primaryShadow.y || 0,
    },
    shadowOpacity: 1,
    shadowRadius: primaryShadow.blur || 0,
    elevation: Math.max(2, (primaryShadow.y || 0) + (primaryShadow.blur || 0) / 2), // Android elevation
  };
};

// Gradient utility function (simplified for React Native)
export const convertGradientToStyle = (gradient: any[]): ViewStyle => {
  if (!gradient || gradient.length === 0) return {};
  
  // For React Native, we'll use the middle color or first color
  const middleColor = gradient.length > 1 ? gradient[Math.floor(gradient.length / 2)] : gradient[0];
  
  return {
    backgroundColor: middleColor.color || SKEUOMORPHIC_COLORS.surface,
  };
};

// Button styling utilities
export const getSkeuomorphicButtonStyles = (
  variant: 'primary' | 'secondary' | 'outline' | 'text' = 'primary',
  size: 'small' | 'medium' | 'large' = 'medium',
  pressed = false,
  disabled = false
) => {
  const baseStyle: ViewStyle = {
    borderRadius: SKEUOMORPHIC_BORDER_RADIUS.md,
    borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  };

  // Size variations
  const sizeStyles = {
    small: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      minHeight: 32,
    },
    medium: {
      paddingHorizontal: 16,
      paddingVertical: 10,
      minHeight: 40,
    },
    large: {
      paddingHorizontal: 20,
      paddingVertical: 14,
      minHeight: 48,
    },
  };

  // Variant styles
  let variantStyle: ViewStyle = {};
  let textStyle: TextStyle = {};

  if (disabled) {
    variantStyle = {
      backgroundColor: SKEUOMORPHIC_COLORS.disabled,
      borderColor: SKEUOMORPHIC_COLORS.borderDark,
      ...convertShadowToStyle([]),
    };
    textStyle = {
      color: SKEUOMORPHIC_COLORS.disabledText,
    };
  } else {
    switch (variant) {
      case 'primary':
        const primaryGradient = pressed 
          ? SKEUOMORPHIC_GRADIENTS.button.pressed 
          : SKEUOMORPHIC_GRADIENTS.button.primary;
        const primaryShadows = pressed 
          ? SKEUOMORPHIC_SHADOWS.button.pressed 
          : SKEUOMORPHIC_SHADOWS.button.default;
        
        variantStyle = {
          ...convertGradientToStyle(primaryGradient),
          borderColor: pressed ? SKEUOMORPHIC_COLORS.borderDark : SKEUOMORPHIC_COLORS.border,
          ...convertShadowToStyle(primaryShadows),
        };
        textStyle = {
          color: SKEUOMORPHIC_COLORS.onPrimary,
          fontWeight: '600',
          textShadowColor: SKEUOMORPHIC_COLORS.shadowLight,
          textShadowOffset: { width: 0, height: 1 },
          textShadowRadius: 1,
        };
        break;

      case 'secondary':
        const secondaryGradient = SKEUOMORPHIC_GRADIENTS.button.secondary;
        const secondaryShadows = pressed 
          ? SKEUOMORPHIC_SHADOWS.button.pressed 
          : SKEUOMORPHIC_SHADOWS.button.default;
        
        variantStyle = {
          ...convertGradientToStyle(secondaryGradient),
          borderColor: pressed ? SKEUOMORPHIC_COLORS.borderDark : SKEUOMORPHIC_COLORS.border,
          ...convertShadowToStyle(secondaryShadows),
        };
        textStyle = {
          color: SKEUOMORPHIC_COLORS.onSecondary,
          fontWeight: '600',
          textShadowColor: SKEUOMORPHIC_COLORS.shadowLight,
          textShadowOffset: { width: 0, height: 1 },
          textShadowRadius: 1,
        };
        break;

      case 'outline':
        variantStyle = {
          backgroundColor: 'transparent',
          borderColor: SKEUOMORPHIC_COLORS.primary,
          borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.medium,
          ...convertShadowToStyle(pressed ? SKEUOMORPHIC_SHADOWS.button.pressed : []),
        };
        textStyle = {
          color: SKEUOMORPHIC_COLORS.primary,
          fontWeight: '600',
        };
        break;

      case 'text':
        variantStyle = {
          backgroundColor: 'transparent',
          borderWidth: 0,
          ...convertShadowToStyle([]),
        };
        textStyle = {
          color: SKEUOMORPHIC_COLORS.primary,
          fontWeight: '500',
        };
        break;
    }
  }

  return {
    container: {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyle,
    },
    text: textStyle,
  };
};

// Input styling utilities
export const getSkeuomorphicInputStyles = (
  focused = false,
  error = false,
  disabled = false
) => {
  const baseStyle: ViewStyle = {
    borderRadius: SKEUOMORPHIC_BORDER_RADIUS.sm,
    borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 40,
    ...convertGradientToStyle(SKEUOMORPHIC_GRADIENTS.input),
  };

  let borderColor = SKEUOMORPHIC_COLORS.border;
  let shadowStyle = convertShadowToStyle(SKEUOMORPHIC_SHADOWS.input.default);

  if (disabled) {
    borderColor = SKEUOMORPHIC_COLORS.borderDark;
    shadowStyle = {};
  } else if (error) {
    borderColor = SKEUOMORPHIC_COLORS.error;
    shadowStyle = convertShadowToStyle([
      { x: 0, y: 0, blur: 4, color: `${SKEUOMORPHIC_COLORS.error}40` }
    ]);
  } else if (focused) {
    borderColor = SKEUOMORPHIC_COLORS.primary;
    shadowStyle = convertShadowToStyle(SKEUOMORPHIC_SHADOWS.input.focused);
  }

  return {
    ...baseStyle,
    borderColor,
    ...shadowStyle,
  };
};

// Card styling utilities
export const getSkeuomorphicCardStyles = (elevated = true) => {
  const baseStyle: ViewStyle = {
    borderRadius: SKEUOMORPHIC_BORDER_RADIUS.lg,
    borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
    borderColor: SKEUOMORPHIC_COLORS.borderLight,
    padding: 16,
    ...convertGradientToStyle(SKEUOMORPHIC_GRADIENTS.card),
  };

  const shadowStyle = elevated ? convertShadowToStyle(SKEUOMORPHIC_SHADOWS.card) : {};

  return {
    ...baseStyle,
    ...shadowStyle,
  };
};

// Checkbox styling utilities
export const getSkeuomorphicCheckboxStyles = (
  checked = false,
  disabled = false
) => {
  const size = 20;
  const baseStyle: ViewStyle = {
    width: size,
    height: size,
    borderRadius: SKEUOMORPHIC_BORDER_RADIUS.sm,
    borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.medium,
    justifyContent: 'center',
    alignItems: 'center',
  };

  let backgroundColor = SKEUOMORPHIC_COLORS.surface;
  let borderColor = SKEUOMORPHIC_COLORS.border;
  let shadowStyle = convertShadowToStyle(SKEUOMORPHIC_SHADOWS.input.default);

  if (disabled) {
    backgroundColor = SKEUOMORPHIC_COLORS.disabled;
    borderColor = SKEUOMORPHIC_COLORS.borderDark;
    shadowStyle = {};
  } else if (checked) {
    backgroundColor = SKEUOMORPHIC_COLORS.primary;
    borderColor = SKEUOMORPHIC_COLORS.primaryDark;
    shadowStyle = convertShadowToStyle(SKEUOMORPHIC_SHADOWS.button.pressed);
  }

  return {
    container: {
      ...baseStyle,
      backgroundColor,
      borderColor,
      ...shadowStyle,
    },
    checkmark: {
      color: SKEUOMORPHIC_COLORS.onPrimary,
      fontSize: 12,
      fontWeight: 'bold' as const,
    },
  };
};

// Radio button styling utilities
export const getSkeuomorphicRadioStyles = (
  selected = false,
  disabled = false
) => {
  const size = 20;
  const innerSize = 8;
  
  const baseStyle: ViewStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.medium,
    justifyContent: 'center',
    alignItems: 'center',
  };

  let backgroundColor = SKEUOMORPHIC_COLORS.surface;
  let borderColor = SKEUOMORPHIC_COLORS.border;
  let shadowStyle = convertShadowToStyle(SKEUOMORPHIC_SHADOWS.input.default);

  if (disabled) {
    backgroundColor = SKEUOMORPHIC_COLORS.disabled;
    borderColor = SKEUOMORPHIC_COLORS.borderDark;
    shadowStyle = {};
  } else if (selected) {
    borderColor = SKEUOMORPHIC_COLORS.primary;
  }

  const innerCircleStyle: ViewStyle = {
    width: innerSize,
    height: innerSize,
    borderRadius: innerSize / 2,
    backgroundColor: selected ? SKEUOMORPHIC_COLORS.primary : 'transparent',
  };

  return {
    container: {
      ...baseStyle,
      backgroundColor,
      borderColor,
      ...shadowStyle,
    },
    innerCircle: innerCircleStyle,
  };
};

// Toggle switch styling utilities
export const getSkeuomorphicToggleStyles = (
  enabled = false,
  disabled = false
) => {
  const trackWidth = 50;
  const trackHeight = 28;
  const thumbSize = 22;
  
  const trackStyle: ViewStyle = {
    width: trackWidth,
    height: trackHeight,
    borderRadius: trackHeight / 2,
    borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
    justifyContent: 'center',
    paddingHorizontal: 3,
  };

  const thumbStyle: ViewStyle = {
    width: thumbSize,
    height: thumbSize,
    borderRadius: thumbSize / 2,
    borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
    borderColor: SKEUOMORPHIC_COLORS.border,
    ...convertShadowToStyle(SKEUOMORPHIC_SHADOWS.button.default),
  };

  let trackBackgroundColor = SKEUOMORPHIC_COLORS.surfaceVariant;
  let trackBorderColor = SKEUOMORPHIC_COLORS.border;
  let thumbBackgroundColor = SKEUOMORPHIC_COLORS.surface;

  if (disabled) {
    trackBackgroundColor = SKEUOMORPHIC_COLORS.disabled;
    trackBorderColor = SKEUOMORPHIC_COLORS.borderDark;
    thumbBackgroundColor = SKEUOMORPHIC_COLORS.disabled;
  } else if (enabled) {
    trackBackgroundColor = SKEUOMORPHIC_COLORS.primary;
    trackBorderColor = SKEUOMORPHIC_COLORS.primaryDark;
    thumbBackgroundColor = SKEUOMORPHIC_COLORS.surface;
  }

  return {
    track: {
      ...trackStyle,
      backgroundColor: trackBackgroundColor,
      borderColor: trackBorderColor,
    },
    thumb: {
      ...thumbStyle,
      backgroundColor: thumbBackgroundColor,
      alignSelf: enabled ? 'flex-end' : 'flex-start',
    },
  };
};

// Progress bar styling utilities
export const getSkeuomorphicProgressStyles = (
  progress: number = 0,
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error' = 'primary'
) => {
  const height = 8;
  
  const trackStyle: ViewStyle = {
    height,
    borderRadius: height / 2,
    backgroundColor: SKEUOMORPHIC_COLORS.surfaceVariant,
    borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
    borderColor: SKEUOMORPHIC_COLORS.border,
    overflow: 'hidden',
  };

  let fillColor = SKEUOMORPHIC_COLORS.primary;
  switch (variant) {
    case 'secondary':
      fillColor = SKEUOMORPHIC_COLORS.secondary;
      break;
    case 'success':
      fillColor = SKEUOMORPHIC_COLORS.success;
      break;
    case 'warning':
      fillColor = SKEUOMORPHIC_COLORS.warning;
      break;
    case 'error':
      fillColor = SKEUOMORPHIC_COLORS.error;
      break;
  }

  const fillStyle: ViewStyle = {
    height: '100%',
    backgroundColor: fillColor,
    borderRadius: height / 2,
    width: `${Math.max(0, Math.min(100, progress))}%`,
    ...convertShadowToStyle([
      { x: 0, y: 1, blur: 2, color: SKEUOMORPHIC_COLORS.shadowLight }
    ]),
  };

  return {
    track: trackStyle,
    fill: fillStyle,
  };
};

// Modal styling utilities
export const getSkeuomorphicModalStyles = () => {
  return {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
      backgroundColor: SKEUOMORPHIC_COLORS.surface,
      borderRadius: SKEUOMORPHIC_BORDER_RADIUS.xl,
      borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
      borderColor: SKEUOMORPHIC_COLORS.borderLight,
      padding: 24,
      margin: 20,
      ...convertShadowToStyle(SKEUOMORPHIC_SHADOWS.modal),
    },
  };
};

// Toast styling utilities
export const getSkeuomorphicToastStyles = (
  variant: 'success' | 'warning' | 'error' | 'info' = 'info'
) => {
  let backgroundColor = SKEUOMORPHIC_COLORS.info;
  let borderColor = SKEUOMORPHIC_COLORS.infoDark;
  
  switch (variant) {
    case 'success':
      backgroundColor = SKEUOMORPHIC_COLORS.success;
      borderColor = SKEUOMORPHIC_COLORS.successDark;
      break;
    case 'warning':
      backgroundColor = SKEUOMORPHIC_COLORS.warning;
      borderColor = SKEUOMORPHIC_COLORS.warningDark;
      break;
    case 'error':
      backgroundColor = SKEUOMORPHIC_COLORS.error;
      borderColor = SKEUOMORPHIC_COLORS.errorDark;
      break;
  }

  return {
    backgroundColor,
    borderColor,
    borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
    borderRadius: SKEUOMORPHIC_BORDER_RADIUS.md,
    padding: 12,
    ...convertShadowToStyle(SKEUOMORPHIC_SHADOWS.card),
  };
};

// Export colors for direct usage
export { SKEUOMORPHIC_COLORS }; 