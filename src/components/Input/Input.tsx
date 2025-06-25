import React from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View,
  Text,
  ViewStyle,
  TextStyle,
} from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface InputProps extends TextInputProps {
  style?: ViewStyle;
  label?: string;
  error?: string;
  disabled?: boolean;
  secureTextEntry?: boolean;
  placeholder?: string;
  design?: 'flat' | 'neumorphic';
  backgroundColor?: string;
  textColor?: string;
  isFocused?: boolean;
}

const Input: React.FC<InputProps> = ({
  style,
  label,
  error,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  textColor = NEUMORPHIC_COLORS.text,
  isFocused = false,
  ...props
}) => {
  const [focused, setFocused] = React.useState(isFocused);

  const getInputStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.input];

    if (error) {
      baseStyles.push(styles.inputError);
    }

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: focused,
        customBackground: backgroundColor,
        customBorderRadius: 12,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        height: 40,
        paddingHorizontal: 10,
        color: textColor,
        borderWidth: 0,
      } as ViewStyle);
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getLabelStyles = (): TextStyle[] => {
    const labelStyles: TextStyle[] = [styles.label];

    if (design === 'neumorphic') {
      labelStyles.push({
        color: textColor,
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 8,
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      } as TextStyle);
    }

    return labelStyles;
  };

  return (
    <View style={styles.container}>
      {label && <Text style={getLabelStyles()}>{label}</Text>}
      <TextInput
        style={getInputStyles()}
        placeholderTextColor={design === 'neumorphic' ? `${textColor}80` : undefined}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
  inputError: {
    borderColor: 'red',
  },
});

export default Input;
