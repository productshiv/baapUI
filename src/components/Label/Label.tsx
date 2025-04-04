import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface LabelProps {
  text: string;
  style?: TextStyle;
  htmlFor?: string;
  design?: 'flat' | 'neumorphic';
  textColor?: string;
}

const Label: React.FC<LabelProps> = ({
  text,
  style,
  htmlFor,
  design = 'flat',
  textColor = NEUMORPHIC_COLORS.text,
}) => {
  const getLabelStyles = (): TextStyle[] => {
    const baseStyles: TextStyle[] = [styles.label];

    if (design === 'neumorphic') {
      baseStyles.push({
        color: textColor,
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  return (
    <Text style={getLabelStyles()} accessibilityLabel={htmlFor}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default Label;
