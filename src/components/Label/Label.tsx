import React from 'react';
import { Text, StyleSheet, TextStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { SKEUOMORPHIC_COLORS } from '../../themes/utils/skeuomorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

interface LabelProps {
  text: string;
  style?: TextStyle;
  htmlFor?: string;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  textColor?: string;
}

const Label: React.FC<LabelProps> = ({
  text,
  style,
  htmlFor,
  design, // Now optional - will use theme context if not provided
  textColor,
}) => {
  const themeContext = useThemeSafe();
  
  // Use design prop if provided, otherwise use theme context, otherwise default to 'flat'
  const activeDesign = design || themeContext?.design || 'flat';
  const defaultTextColor = textColor || themeContext?.theme.colors.text || NEUMORPHIC_COLORS.text;
  const getLabelStyles = (): TextStyle => {
    const baseStyles: TextStyle = {
      ...styles.label,
    };

    if (activeDesign === 'glassmorphic') {
      const glassmorphicColors = themeContext?.theme.mode === 'dark' 
        ? GLASSMORPHIC_COLORS.dark 
        : GLASSMORPHIC_COLORS.light;
      
      Object.assign(baseStyles, {
        color: textColor || glassmorphicColors.text,
        textShadowColor: 'rgba(255, 255, 255, 0.1)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1,
      });
    } else if (activeDesign === 'skeuomorphic') {
      Object.assign(baseStyles, {
        color: defaultTextColor,
        textShadowColor: SKEUOMORPHIC_COLORS.shadowLight,
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1,
      });
    } else if (activeDesign === 'neumorphic') {
      Object.assign(baseStyles, {
        color: defaultTextColor,
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });
    } else {
      // Default flat design with theme colors
      Object.assign(baseStyles, {
        color: defaultTextColor,
      });
    }

    if (style) {
      Object.assign(baseStyles, style);
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
