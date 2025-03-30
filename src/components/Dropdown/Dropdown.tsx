import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ViewStyle, TextStyle, ScrollView } from 'react-native';
import Typography from '../Typography/Typography';

interface DropdownProps {
  options: string[];
  onSelect: (value: string) => void;
  label?: string;
  value?: string | null;
  placeholder?: string;
  style?: ViewStyle;
  dropdownStyle?: ViewStyle;
  optionStyle?: ViewStyle;
  labelStyle?: TextStyle | TextStyle[];
  textStyle?: TextStyle | TextStyle[];
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  label = "Select",
  value,
  placeholder = "Choose an option",
  style,
  dropdownStyle,
  optionStyle,
  labelStyle,
  textStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleDropdown = () => {
    const toValue = isOpen ? 0 : 1;
    setIsOpen(!isOpen);
    
    Animated.timing(animation, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const optionsHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Math.min(options.length * 48, 200)], // Max height of 200
  });

  return (
    <View style={[styles.container, style]}>
      {label && (
        <Typography 
          variant="subtitle2" 
          style={[styles.label, labelStyle]}
        >
          {label}
        </Typography>
      )}
      <TouchableOpacity
        onPress={toggleDropdown}
        style={[styles.dropdown, dropdownStyle]}
        activeOpacity={0.7}
      >
        <Typography 
          variant="body1" 
          style={[styles.text, textStyle]}
        >
          {value || placeholder}
        </Typography>
        <Typography 
          variant="body1"
          style={[styles.arrow, isOpen ? styles.arrowUp : undefined]}
        >
          ▼
        </Typography>
      </TouchableOpacity>
      <Animated.View style={[styles.optionsContainer, { maxHeight: optionsHeight }]}>
        <ScrollView 
          showsVerticalScrollIndicator={true}
          bounces={false}
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          {options.map((option, index) => (
            <TouchableOpacity
              key={option}
              onPress={() => {
                onSelect(option);
                toggleDropdown();
              }}
              style={[
                styles.option,
                index === options.length - 1 && styles.lastOption,
                optionStyle,
              ]}
            >
              <Typography 
                variant="body1" 
                style={[styles.optionText, textStyle]}
              >
                {option}
              </Typography>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    zIndex: 1000,
  },
  label: {
    marginBottom: 6,
    color: '#495057',
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#dee2e6',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    color: '#495057',
    flex: 1,
  },
  arrow: {
    fontSize: 12,
    color: '#495057',
    marginLeft: 8,
  },
  arrowUp: {
    transform: [{ rotate: '180deg' }],
  },
  optionsContainer: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dee2e6',
    marginTop: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  scrollView: {
    maxHeight: 200, // Maximum height for the dropdown
  },
  scrollContent: {
    flexGrow: 1,
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
    backgroundColor: '#fff',
  },
  lastOption: {
    borderBottomWidth: 0,
  },
  optionText: {
    color: '#495057',
  },
});

export default Dropdown;
