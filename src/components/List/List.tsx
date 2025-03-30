import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ListItemProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

interface ListProps {
  items: React.ReactNode[];
  style?: ViewStyle;
  itemStyle?: ViewStyle;
  containerStyle?: ViewStyle;
}

export const ListItem: React.FC<ListItemProps> = ({ children, style }) => (
  <View style={[styles.listItem, style]}>
    {children}
  </View>
);

const List: React.FC<ListProps> = ({ 
  items, 
  style,
  itemStyle,
  containerStyle 
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {items.map((item, index) => (
        <ListItem key={index} style={itemStyle}>
          {item}
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  },
  listItem: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 4,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});

export default List; 