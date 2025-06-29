import React from 'react';
import { View, StyleSheet, Pressable, ViewStyle, Text } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

export interface CardProps {
  children: React.ReactNode | string;
  style?: ViewStyle;
  onPress?: () => void;
  design?: 'flat' | 'neumorphic';
  backgroundColor?: string;
  fullWidth?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  style,
  onPress,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  fullWidth = false,
}) => {
  const getCardStyles = (pressed?: boolean): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [
      styles.container,
      !fullWidth && styles.responsive
    ];

    if (design === 'neumorphic') {
      baseStyles.push(
        ...getNeumorphicStyles({
          isPressed: pressed,
          customBackground: backgroundColor,
        })
      );
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const content =
    typeof children === 'string' ? (
      <Text style={[styles.text, design === 'neumorphic' && styles.neumorphicText]}>
        {children}
      </Text>
    ) : (
      children
    );

  if (onPress) {
    return (
      <Pressable
        style={({ pressed }: { pressed: boolean }) => getCardStyles(pressed)}
        onPress={onPress}
      >
        {content}
      </Pressable>
    );
  }

  return <View style={getCardStyles()}>{content}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  } as ViewStyle,
  responsive: {
    maxWidth: 400,
    width: '100%',
    marginHorizontal: 'auto',
    alignSelf: 'center',
    '@media (min-width: 768px)': {
      maxWidth: 600,
    },
    '@media (min-width: 1024px)': {
      maxWidth: 800,
    },
  } as ViewStyle,
  text: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },
  neumorphicText: {
    color: NEUMORPHIC_COLORS.text,
  },
});

export default Card;
