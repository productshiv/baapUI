import React from 'react';
import { ActivityIndicator, View, StyleSheet, ViewStyle, TextStyle } from '../../platform';
import Typography from '../Typography/Typography';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

type SpinnerSize = 'small' | 'medium' | 'large';
type SpinnerVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

interface SpinnerProps {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  color?: string;
  label?: string;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic';
  backgroundColor?: string;
  textColor?: string;
}

const getSpinnerSize = (size: SpinnerSize): 'small' | 'large' | number => {
  switch (size) {
    case 'small':
      return 'small';
    case 'medium':
      return 36;
    case 'large':
      return 'large';
    default:
      return 36;
  }
};

const getSpinnerColor = (variant: SpinnerVariant): string => {
  switch (variant) {
    case 'primary':
      return '#4A90E2';
    case 'secondary':
      return NEUMORPHIC_COLORS.text;
    case 'success':
      return '#28A745';
    case 'danger':
      return '#DC3545';
    case 'warning':
      return '#FFC107';
    case 'info':
      return '#17A2B8';
    default:
      return '#4A90E2';
  }
};

const Spinner: React.FC<SpinnerProps> = ({
  size = 'medium',
  variant = 'primary',
  color,
  label,
  style,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  textColor,
}) => {
  const spinnerColor = color || getSpinnerColor(variant);
  const labelColor = textColor || spinnerColor;

  const getContainerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.container];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        padding: 16,
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getLabelStyles = (): TextStyle => {
    const baseStyle: TextStyle = {
      ...styles.label,
      color: labelColor,
    };

    if (design === 'neumorphic') {
      baseStyle.textShadowColor = NEUMORPHIC_COLORS.lightShadow;
      baseStyle.textShadowOffset = { width: 1, height: 1 };
      baseStyle.textShadowRadius = 1;
    }

    return baseStyle;
  };

  return (
    <View style={getContainerStyles()}>
      <ActivityIndicator size={getSpinnerSize(size)} color={spinnerColor} />
      {label && (
        <Typography variant="caption" style={getLabelStyles()}>
          {label}
        </Typography>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  label: {
    marginTop: 8,
  },
});

export default Spinner;
