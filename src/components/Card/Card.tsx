import React from 'react';
import { View, StyleSheet, Pressable, ViewStyle, Text } from 'react-native';

export interface CardProps {
  children: React.ReactNode | string;
  style?: ViewStyle;
  onPress?: () => void;
  design?: 'flat' | 'neumorphic';
  backgroundColor?: string;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  style, 
  onPress,
  design = 'flat',
  backgroundColor = '#ffffff',
}) => {
  const getCardStyles = (pressed?: boolean): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.container];

    if (design === 'neumorphic') {
      baseStyles.push({
        backgroundColor,
        borderWidth: 0,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: pressed ? -2 : 6,
          height: pressed ? -2 : 6,
        },
        shadowOpacity: pressed ? 0.2 : 0.25,
        shadowRadius: pressed ? 3 : 8,
        elevation: pressed ? 3 : 8,
      } as ViewStyle);

      // Light shadow
      baseStyles.push({
        shadowColor: '#fff',
        shadowOffset: {
          width: pressed ? 2 : -6,
          height: pressed ? 2 : -6,
        },
        shadowOpacity: 0.7,
        shadowRadius: pressed ? 3 : 8,
      } as ViewStyle);
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const content = typeof children === 'string' ? (
    <Text style={styles.text}>{children}</Text>
  ) : (
    children
  );

  if (onPress) {
    return (
      <Pressable 
        style={({ pressed }) => getCardStyles(pressed)} 
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
  text: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },
});

export default Card; 