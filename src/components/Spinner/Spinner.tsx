import React from 'react';
import { ActivityIndicator, View, StyleSheet, ViewStyle } from 'react-native';
import Typography from '../Typography/Typography';

type SpinnerSize = 'small' | 'medium' | 'large';
type SpinnerVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

interface SpinnerProps {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  color?: string;
  label?: string;
  style?: ViewStyle;
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
      return '#6C757D';
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
}) => {
  const spinnerColor = color || getSpinnerColor(variant);

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={getSpinnerSize(size)} color={spinnerColor} />
      {label && (
        <Typography variant="caption" style={{ ...styles.label, color: spinnerColor }}>
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
