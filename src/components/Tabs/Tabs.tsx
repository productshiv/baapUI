import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  selectedTab: string;
  onSelect: (id: string) => void;
  style?: object;
}

const Tabs: React.FC<TabsProps> = ({ tabs, selectedTab, onSelect, style }) => {
  return (
    <View style={[styles.container, style]}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={[styles.tab, selectedTab === tab.id && styles.selectedTab]}
          onPress={() => onSelect(tab.id)}
        >
          <Text style={styles.label}>{tab.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  tab: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  selectedTab: {
    backgroundColor: '#007bff',
  },
  label: {
    color: '#333',
  },
});

export default Tabs; 