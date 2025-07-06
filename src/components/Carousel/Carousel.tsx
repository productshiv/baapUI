import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from '../../platform';
import Typography from '../Typography/Typography';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { convertShadowToStyle, convertGradientToStyle } from '../../themes/utils/skeuomorphic';
import { SKEUOMORPHIC_COLORS, SKEUOMORPHIC_SHADOWS, SKEUOMORPHIC_GRADIENTS, SKEUOMORPHIC_BORDER_RADIUS, SKEUOMORPHIC_BORDER_WIDTHS } from '../../themes/variants/skeuomorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

interface CarouselProps {
  items: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  style?: ViewStyle;
  itemStyle?: ViewStyle;
  activeItemStyle?: ViewStyle;
  textStyle?: TextStyle;
  activeTextStyle?: TextStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
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
  const themeContext = useThemeSafe();

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
    } else if (design === 'skeuomorphic') {
      baseStyles.push({
        backgroundColor: SKEUOMORPHIC_COLORS.surface,
        borderRadius: SKEUOMORPHIC_BORDER_RADIUS.lg,
        borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
        borderColor: SKEUOMORPHIC_COLORS.borderLight,
        padding: 12,
        ...convertShadowToStyle(SKEUOMORPHIC_SHADOWS.card),
        ...convertGradientToStyle(SKEUOMORPHIC_GRADIENTS.card),
      });
    } else if (design === 'glassmorphic') {
      const themeMode = themeContext?.theme?.mode || 'light';
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: 'medium',
        blur: 'medium',
        customBackground: backgroundColor,
        customBorderRadius: 12,
      });

      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        backgroundColor: GLASSMORPHIC_COLORS[themeMode].surface,
        borderColor: GLASSMORPHIC_COLORS[themeMode].border,
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
    } else if (design === 'skeuomorphic') {
      baseStyles.push({
        backgroundColor: isActive ? SKEUOMORPHIC_COLORS.primary : SKEUOMORPHIC_COLORS.surface,
        borderRadius: SKEUOMORPHIC_BORDER_RADIUS.md,
        borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
        borderColor: isActive ? SKEUOMORPHIC_COLORS.primaryDark : SKEUOMORPHIC_COLORS.border,
        ...convertShadowToStyle(isActive ? SKEUOMORPHIC_SHADOWS.button.pressed : SKEUOMORPHIC_SHADOWS.button.default),
        ...convertGradientToStyle(isActive ? SKEUOMORPHIC_GRADIENTS.button.primary : SKEUOMORPHIC_GRADIENTS.button.secondary),
      });
    } else if (design === 'glassmorphic') {
      const themeMode = themeContext?.theme?.mode || 'light';
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: isActive ? 'strong' : 'medium',
        blur: isActive ? 'heavy' : 'medium',
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        backgroundColor: isActive ? 'rgba(0, 122, 255, 0.3)' : GLASSMORPHIC_COLORS[themeMode].surface,
        borderColor: isActive ? 'rgba(0, 122, 255, 0.5)' : GLASSMORPHIC_COLORS[themeMode].border,
      });
    }

    if (itemStyle) {
      baseStyles.push(itemStyle);
    }

    if (isActive && design !== 'skeuomorphic') {
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
    } else if (design === 'skeuomorphic') {
      baseStyle.color = isActive ? SKEUOMORPHIC_COLORS.onPrimary : SKEUOMORPHIC_COLORS.onSurface;
      baseStyle.textShadowColor = isActive ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.8)';
      baseStyle.textShadowOffset = { width: 0, height: 1 };
      baseStyle.textShadowRadius = 1;
    } else if (design === 'glassmorphic') {
      const themeMode = themeContext?.theme?.mode || 'light';
      baseStyle.color = isActive ? '#FFFFFF' : GLASSMORPHIC_COLORS[themeMode].text;
      baseStyle.fontWeight = isActive ? '600' : '400';
    }

    if (textStyle) {
      Object.assign(baseStyle, textStyle);
    }

    if (isActive && design !== 'skeuomorphic') {
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
            <Typography variant="body" style={getTextStyles(index)}>
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
