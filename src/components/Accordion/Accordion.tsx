import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Section {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  sections: Section[];
  expandedSection: string | null;
  onToggle: (id: string) => void;
  style?: object;
}

const Accordion: React.FC<AccordionProps> = ({ sections, expandedSection, onToggle, style }) => {
  return (
    <View style={[styles.container, style]}>
      {sections.map(section => (
        <View key={section.id} style={styles.section}>
          <TouchableOpacity onPress={() => onToggle(section.id)} style={styles.header}>
            <Text style={styles.title}>{section.title}</Text>
          </TouchableOpacity>
          {expandedSection === section.id && (
            <View style={styles.contentContainer}>
              <Text style={styles.content}>{section.content}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  content: {
    fontSize: 14,
  },
});

export default Accordion;
