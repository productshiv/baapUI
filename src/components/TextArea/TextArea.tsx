import React, { useState } from 'react';
import { TextInput, StyleSheet, TextInputProps, ViewStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface TextAreaProps extends TextInputProps {
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic';
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

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  return (
    <TextInput
      style={getTextAreaStyles()}
      multiline
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholderTextColor={design === 'neumorphic' ? textColor + '80' : undefined}
      defaultValue=""
      {...props}
      {...(design === 'neumorphic' && { selectionColor: textColor })}
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
