import { StyleProp, ViewStyle, TextStyle, PressableProps } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';
export type DesignLanguage = 'flat' | 'neumorphism' | 'glassmorphism' | 'material';

export interface ButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

export interface ButtonStyles {
  designLanguage?: DesignLanguage;
  variants?: Record<ButtonVariant, ViewStyle>;
  sizes?: Record<ButtonSize, ViewStyle>;
  states?: {
    pressed?: ViewStyle;
    disabled?: ViewStyle;
  };
  textVariants?: Record<ButtonVariant, TextStyle>;
  textSizes?: Record<ButtonSize, TextStyle>;
  textStates?: {
    disabled?: TextStyle;
  };
  loadingColor?: Record<ButtonVariant, string>;
  neumorphism?: {
    shadowLight: string;
    shadowDark: string;
    intensity: number;
    blur: number;
    distance: number;
    pressed: {
      intensity: number;
      blur: number;
      distance: number;
    };
  };
  glassmorphism?: {
    blur: number;
    opacity: number;
    borderOpacity: number;
  };
  material?: {
    elevation: number;
    stateLayerOpacity: number;
  };
}

export interface ButtonProps extends PressableProps {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
} 