import React from 'react';
import { View, StyleSheet, ViewStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface ProgressBarProps {
  progress: number; // Value between 0 and 1
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic';
  backgroundColor?: string;
  progressColor?: string;
  height?: number;
  width?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  style,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  progressColor = '#2196f3',
  height = 12,
  width = 300,
}) => {
  // Ensure progress is between 0 and 1
  const normalizedProgress = Math.max(0, Math.min(progress || 0, 1));

  const getContainerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [
      styles.container,
      {
        height,
        width,
      },
    ];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: true,
        customBackground: backgroundColor,
        customBorderRadius: height / 2,
      });
      
      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        borderRadius: height / 2,
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getProgressStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [
      styles.progress,
      {
        width: `${normalizedProgress * 100}%`,
        borderRadius: height / 2,
      },
    ];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: progressColor,
        customBorderRadius: height / 2,
      });
      
      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor: progressColor,
      });
    } else {
      baseStyles.push({
        backgroundColor: progressColor,
      });
    }

    return baseStyles;
  };

  return (
    <View style={getContainerStyles()}>
      <View style={getProgressStyles()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#2196f3',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default ProgressBar;
