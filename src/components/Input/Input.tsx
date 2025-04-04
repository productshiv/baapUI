import React from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';

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
}

const Input: React.FC<InputProps> = ({
  style,
  label,
  error,
  design = 'flat',
  backgroundColor = '#ffffff',
  textColor = '#000000',
  ...props
}) => {
  const getInputStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.input];

    if (error) {
      baseStyles.push(styles.inputError);
    }

    if (design === 'neumorphic') {
      baseStyles.push({
        backgroundColor,
        color: textColor,
        borderWidth: 0,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
      } as ViewStyle);

      // Inner shadow effect for neumorphic design
      baseStyles.push({
        shadowColor: '#000',
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
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
        textShadowColor: 'rgba(255, 255, 255, 0.5)',
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
