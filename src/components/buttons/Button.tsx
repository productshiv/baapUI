import React from 'react';
import { Pressable, Text, StyleSheet, ActivityIndicator } from 'react-native';
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

  const getButtonStyle = () => {
    const baseStyle = [
      styles.base,
      buttonStyles?.variants?.[variant],
      buttonStyles?.sizes?.[size],
      fullWidth === true && styles.fullWidth,
      (disabled || loading) && buttonStyles?.states?.disabled,
      style,
    ].filter(Boolean);

    return baseStyle;
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
      style={({ pressed }) => [
        getButtonStyle(),
        pressed && !disabled && buttonStyles?.states?.pressed,
      ].filter(Boolean)}
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