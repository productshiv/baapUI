import React from 'react';
import { Pressable, Text, StyleSheet, ActivityIndicator, Platform, ViewStyle } from 'react-native';
import { ButtonProps } from './types';
import { useTheme } from '../../design-systems/theme/ThemeProvider';

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  onPress,
  style,
  ...props
}) => {
  const theme = useTheme();
  const buttonStyles = theme.components?.button;

  const getNeumorphicStyle = (isPressed: boolean): ViewStyle => {
    if (buttonStyles?.designLanguage !== 'neumorphism' || !buttonStyles.neumorphism) {
      return {} as ViewStyle;
    }

    const { shadowLight, shadowDark, intensity, blur, distance } = buttonStyles.neumorphism;
    const { intensity: pressedIntensity, blur: pressedBlur, distance: pressedDistance } = buttonStyles.neumorphism.pressed;

    const currentIntensity = isPressed ? pressedIntensity : intensity;
    const currentBlur = isPressed ? pressedBlur : blur;
    const currentDistance = isPressed ? pressedDistance : distance;

    if (Platform.OS === 'web') {
      return {
        boxShadow: `${currentDistance}px ${currentDistance}px ${currentBlur}px ${shadowDark},
                    -${currentDistance}px -${currentDistance}px ${currentBlur}px ${shadowLight}`,
        backgroundColor: theme.colors.surface,
      } as ViewStyle;
    }

    return {
      shadowColor: shadowDark,
      shadowOffset: {
        width: currentDistance,
        height: currentDistance,
      },
      shadowOpacity: currentIntensity,
      shadowRadius: currentBlur,
      backgroundColor: theme.colors.surface,
      elevation: currentDistance,
    };
  };

  const getGlassmorphicStyle = (): ViewStyle => {
    if (buttonStyles?.designLanguage !== 'glassmorphism' || !buttonStyles.glassmorphism) {
      return {} as ViewStyle;
    }

    const { blur, opacity, borderOpacity } = buttonStyles.glassmorphism;

    return {
      backgroundColor: `rgba(255, 255, 255, ${opacity})`,
      borderColor: `rgba(255, 255, 255, ${borderOpacity})`,
      borderWidth: 1,
      backdropFilter: `blur(${blur}px)`,
    } as ViewStyle;
  };

  const getMaterialStyle = (isPressed: boolean): ViewStyle => {
    if (buttonStyles?.designLanguage !== 'material' || !buttonStyles.material) {
      return {} as ViewStyle;
    }

    const { elevation, stateLayerOpacity } = buttonStyles.material;

    return {
      elevation: isPressed ? elevation - 1 : elevation,
      backgroundColor: isPressed
        ? `rgba(0, 0, 0, ${stateLayerOpacity})`
        : buttonStyles.variants?.[variant]?.backgroundColor,
    };
  };

  const getButtonStyle = (isPressed: boolean) => {
    const baseStyle = [
      styles.base,
      buttonStyles?.variants?.[variant],
      buttonStyles?.sizes?.[size],
      fullWidth === true && styles.fullWidth,
      (disabled || loading) && buttonStyles?.states?.disabled,
      style,
    ].filter(Boolean);

    const designStyles: ViewStyle = {
      flat: {} as ViewStyle,
      neumorphism: getNeumorphicStyle(isPressed),
      glassmorphism: getGlassmorphicStyle(),
      material: getMaterialStyle(isPressed),
    }[buttonStyles?.designLanguage || 'flat'];

    return [...baseStyle, designStyles];
  };

  const getTextStyle = () => {
    return [
      styles.text,
      buttonStyles?.textVariants?.[variant],
      buttonStyles?.textSizes?.[size],
      (disabled || loading) && buttonStyles?.textStates?.disabled,
    ].filter(Boolean);
  };

  const renderContent = () => {
    if (loading) {
      return (
        <ActivityIndicator
          testID="button-loading-indicator"
          color={buttonStyles?.loadingColor?.[variant]}
          size={size === 'small' ? 'small' : 'small'}
        />
      );
    }

    return (
      <>
        {leftIcon && <>{leftIcon}</>}
        <Text style={getTextStyle()}>{title}</Text>
        {rightIcon && <>{rightIcon}</>}
      </>
    );
  };

  return (
    <Pressable
      style={({ pressed }) => getButtonStyle(pressed)}
      onPress={onPress}
      disabled={disabled || loading}
      {...props}
    >
      {renderContent()}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  fullWidth: {
    width: '100%',
    alignSelf: 'stretch',
  },
  text: {
    textAlign: 'center',
  },
}); 