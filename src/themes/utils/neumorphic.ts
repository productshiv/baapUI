import { ViewStyle } from '../../platform';

export const NEUMORPHIC_COLORS = {
  background: '#fff',
  darkShadow: '#cacaca',
  lightShadow: '#f6f6f6',
  text: '#2d2d2d',
  primary: '#4A90E2',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
};

export const NEUMORPHIC_CONFIG = {
  distance: 10,
  blur: 41,
  intensity: 1,
  borderRadius: 22,
};

interface NeumorphicStyleOptions {
  isPressed?: boolean;
  customBackground?: string;
  customBorderRadius?: number;
}

export const getNeumorphicStyles = ({
  isPressed = false,
  customBackground,
  customBorderRadius,
}: NeumorphicStyleOptions = {}): ViewStyle[] => {
  const baseStyles: ViewStyle[] = [
    {
      backgroundColor: customBackground || NEUMORPHIC_COLORS.background,
      borderWidth: 0,
      borderRadius: customBorderRadius || NEUMORPHIC_CONFIG.borderRadius,
      padding: 16,
    },
  ];

  if (isPressed) {
    // Inset shadow effect when pressed
    baseStyles.push({
      boxShadow: `inset ${NEUMORPHIC_CONFIG.distance}px ${NEUMORPHIC_CONFIG.distance}px ${NEUMORPHIC_CONFIG.blur}px ${NEUMORPHIC_COLORS.darkShadow}, inset -${NEUMORPHIC_CONFIG.distance}px -${NEUMORPHIC_CONFIG.distance}px ${NEUMORPHIC_CONFIG.blur}px ${NEUMORPHIC_COLORS.lightShadow}`,
    } as ViewStyle);
  } else {
    // Raised effect when not pressed
    baseStyles.push({
      boxShadow: `${NEUMORPHIC_CONFIG.distance}px ${NEUMORPHIC_CONFIG.distance}px ${NEUMORPHIC_CONFIG.blur}px ${NEUMORPHIC_COLORS.darkShadow}, -${NEUMORPHIC_CONFIG.distance}px -${NEUMORPHIC_CONFIG.distance}px ${NEUMORPHIC_CONFIG.blur}px ${NEUMORPHIC_COLORS.lightShadow}`,
    } as ViewStyle);
  }

  return baseStyles;
};
