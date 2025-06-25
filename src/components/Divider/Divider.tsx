import React from 'react';
import { View, StyleSheet, ViewStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface DividerProps {
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic';
  backgroundColor?: string;
  thickness?: number;
}

const Divider: React.FC<DividerProps> = ({
  style,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  thickness = 1,
}) => {
  const getDividerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [
      styles.divider,
      {
        height: thickness,
      },
    ];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: backgroundColor,
        customBorderRadius: thickness / 2,
      });
      
      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        height: thickness,
        marginVertical: Math.max(thickness * 2, 10),
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  return <View style={getDividerStyles()} />;
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    marginVertical: 10,
  },
});

export default Divider;
