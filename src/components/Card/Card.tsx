import React from 'react';
import { View, StyleSheet, Pressable, ViewStyle } from 'react-native';

export interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  elevation?: number;
  onPress?: () => void;
}

const Card: React.FC<CardProps> = ({ children, style, elevation = 0, onPress }) => {
  const cardStyle = [
    styles.container,
    elevation > 0 && {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: elevation * 2 },
      shadowOpacity: 0.25,
      shadowRadius: elevation * 2,
      elevation: elevation,
    },
    style,
  ];

  if (onPress) {
    return (
      <Pressable style={cardStyle} onPress={onPress}>
        {children}
      </Pressable>
    );
  }

  return <View style={cardStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});

export default Card; 