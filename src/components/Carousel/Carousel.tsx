import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from '../../platform';
import Typography from '../Typography/Typography';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface CarouselProps {
  items: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  style?: ViewStyle;
  itemStyle?: ViewStyle;
  activeItemStyle?: ViewStyle;
  textStyle?: TextStyle;
  activeTextStyle?: TextStyle;
  design?: 'flat' | 'neumorphic';
  backgroundColor?: string;
  textColor?: string;
  activeTextColor?: string;
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
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  textColor = NEUMORPHIC_COLORS.text,
  activeTextColor = NEUMORPHIC_COLORS.primary,
}) => {
  const [pressedIndex, setPressedIndex] = useState<number | null>(null);

  const getWrapperStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.wrapper];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: backgroundColor,
        customBorderRadius: 12,
      });
      
      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        padding: 12,
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getItemStyles = (index: number): ViewStyle[] => {
    const isActive = index === currentIndex;
    const baseStyles: ViewStyle[] = [styles.item];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: pressedIndex === index || isActive,
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });
      
      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        borderWidth: 0,
      });
    }

    if (itemStyle) {
      baseStyles.push(itemStyle);
    }

    if (isActive) {
      if (design === 'neumorphic') {
        baseStyles.push({
          backgroundColor: NEUMORPHIC_COLORS.primary,
        });
      } else {
        baseStyles.push(styles.activeItem);
      }
      if (activeItemStyle) {
        baseStyles.push(activeItemStyle);
      }
    }

    return baseStyles;
  };

  const getTextStyles = (index: number): TextStyle => {
    const isActive = index === currentIndex;
    const baseStyle: TextStyle = {
      ...styles.text,
      color: design === 'neumorphic' ? (isActive ? activeTextColor : textColor) : undefined,
    };

    if (design === 'neumorphic') {
      baseStyle.textShadowColor = NEUMORPHIC_COLORS.lightShadow;
      baseStyle.textShadowOffset = { width: 1, height: 1 };
      baseStyle.textShadowRadius = 1;
    }

    if (textStyle) {
      Object.assign(baseStyle, textStyle);
    }

    if (isActive) {
      Object.assign(baseStyle, styles.activeText);
      if (activeTextStyle) {
        Object.assign(baseStyle, activeTextStyle);
      }
    }

    return baseStyle;
  };

  return (
    <View style={getWrapperStyles()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onIndexChange(index)}
            onPressIn={() => setPressedIndex(index)}
            onPressOut={() => setPressedIndex(null)}
            style={getItemStyles(index)}
          >
            <Typography
              variant="body1"
              style={getTextStyles(index)}
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
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
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
