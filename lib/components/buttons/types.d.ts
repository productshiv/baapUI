import { ViewStyle, TextStyle, PressableProps } from 'react-native';
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';
export interface ButtonStyleProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    loading?: boolean;
    disabled?: boolean;
}
export interface ButtonStyles {
    container: ViewStyle;
    contentContainer: ViewStyle;
    text: TextStyle;
    iconContainer: ViewStyle;
    leftIcon: ViewStyle;
    rightIcon: ViewStyle;
    loadingContainer: ViewStyle;
    disabled: ViewStyle;
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
    style?: ViewStyle;
    textStyle?: TextStyle;
}
