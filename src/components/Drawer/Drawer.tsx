import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import Typography from '../Typography/Typography';

interface DrawerItem {
  id: string;
  label: string;
}

interface DrawerProps {
  items: DrawerItem[];
  selectedItem: string;
  onSelect: (id: string) => void;
  style?: ViewStyle;
}

const Drawer: React.FC<DrawerProps> = ({ items, selectedItem, onSelect, style }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleDrawer} style={styles.hamburger}>
        <View style={styles.hamburgerLine} />
        <View style={styles.hamburgerLine} />
        <View style={styles.hamburgerLine} />
      </TouchableOpacity>
      {isOpen && (
        <View style={[styles.container, style]}>
          {items.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => onSelect(item.id)}
              style={[styles.item, selectedItem === item.id && styles.selectedItem]}
            >
              <Typography
                variant="body1"
                style={selectedItem === item.id ? styles.selectedLabel : styles.label}
              >
                {item.label}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  hamburger: {
    width: 36,
    height: 36,
    backgroundColor: '#4A90E2',
    borderRadius: 4,
    padding: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  hamburgerLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
  container: {
    width: 250,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  selectedItem: {
    backgroundColor: '#4A90E2',
  },
  label: {
    color: '#333333',
  },
  selectedLabel: {
    color: '#FFFFFF',
  },
});

export default Drawer;
