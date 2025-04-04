import { ViewStyle } from 'react-native';

export const NEUMORPHIC_COLORS = {
  background: '#e0e0e0',
  darkShadow: '#cacaca',
  lightShadow: '#f6f6f6',
  text: '#2d2d2d',
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
  const baseStyles: ViewStyle[] = [{
    backgroundColor: customBackground || NEUMORPHIC_COLORS.background,
    borderWidth: 0,
    borderRadius: customBorderRadius || NEUMORPHIC_CONFIG.borderRadius,
    padding: 16,
  }];

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