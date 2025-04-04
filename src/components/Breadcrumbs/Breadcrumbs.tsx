import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface BreadcrumbItem {
  id: string;
  label: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  currentItem: string;
  onSelect: (id: string) => void;
  style?: object;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, currentItem, onSelect, style }) => {
  return (
    <View style={[styles.container, style]}>
      {items.map((item, index) => (
        <View key={item.id} style={styles.itemContainer}>
          <TouchableOpacity onPress={() => onSelect(item.id)} disabled={item.id === currentItem}>
            <Text style={[styles.item, item.id === currentItem && styles.currentItem]}>
              {item.label}
            </Text>
          </TouchableOpacity>
          {index < items.length - 1 && <Text style={styles.separator}>/</Text>}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    color: '#007bff',
  },
  currentItem: {
    fontWeight: 'bold',
    color: '#333',
  },
  separator: {
    marginHorizontal: 5,
    color: '#333',
  },
});

export default Breadcrumbs;
