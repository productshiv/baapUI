import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Typography from '../Typography/Typography';

interface CarouselProps {
  items: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  style?: ViewStyle;
  itemStyle?: ViewStyle;
  activeItemStyle?: ViewStyle;
  textStyle?: TextStyle;
  activeTextStyle?: TextStyle;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  currentIndex,
  onIndexChange,
  style,
  itemStyle,
  activeItemStyle,
  textStyle,
  activeTextStyle,
}) => {
  return (
    <View style={[styles.wrapper, style]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onIndexChange(index)}
            style={[
              styles.item,
              itemStyle,
              index === currentIndex && styles.activeItem,
              index === currentIndex && activeItemStyle,
            ]}
          >
            <Typography
              variant="body1"
              style={
                index === currentIndex
                  ? { ...styles.text, ...styles.activeText, ...activeTextStyle }
                  : { ...styles.text, ...textStyle }
              }
            >
              {item}
            </Typography>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
  },
  item: {
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    minWidth: 100,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginRight: 8,
  },
  activeItem: {
    backgroundColor: '#4A90E2',
    borderColor: '#4A90E2',
  },
  text: {
    color: '#333333',
  },
  activeText: {
    color: '#FFFFFF',
  },
});

export default Carousel;
