import React, { useState } from 'react';
import { TextInput, StyleSheet, TextInputProps, ViewStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { getGlassmorphicInputStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

interface TextAreaProps extends TextInputProps {
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  backgroundColor?: string;
  textColor?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  style,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  textColor = NEUMORPHIC_COLORS.text,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const themeContext = useThemeSafe();
  const themeMode = themeContext?.mode || 'light';

  const getTextAreaStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.textArea];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: isFocused,
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        borderWidth: 0,
      });
    }

    if (design === 'glassmorphic') {
      const glassmorphicStyles = getGlassmorphicInputStyles({
        theme: themeMode,
        intensity: isFocused ? 'medium' : 'subtle',
        customBorderRadius: 8,
      });

      const glassmorphicColors = GLASSMORPHIC_COLORS[themeMode];
      
      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        color: glassmorphicColors.text,
        minHeight: 100, // Override for textarea height
        textAlignVertical: 'top',
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getPlaceholderColor = () => {
    if (design === 'neumorphic') {
      return textColor + '80';
    }
    if (design === 'glassmorphic') {
      const glassmorphicColors = GLASSMORPHIC_COLORS[themeMode];
      return glassmorphicColors.text.replace('0.9', '0.6').replace('0.95', '0.6');
    }
    return undefined;
  };

  const getSelectionColor = () => {
    if (design === 'neumorphic') {
      return textColor;
    }
    if (design === 'glassmorphic') {
      const glassmorphicColors = GLASSMORPHIC_COLORS[themeMode];
      return glassmorphicColors.text;
    }
    return undefined;
  };

  return (
    <TextInput
      style={getTextAreaStyles()}
      multiline
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholderTextColor={getPlaceholderColor()}
      selectionColor={getSelectionColor()}
      defaultValue=""
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  textArea: {
    height: 100,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    textAlignVertical: 'top',
    marginVertical: 8,
  },
});

export default TextArea;
