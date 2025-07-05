import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { convertShadowToStyle, convertGradientToStyle } from '../../themes/utils/skeuomorphic';
import { SKEUOMORPHIC_COLORS, SKEUOMORPHIC_SHADOWS, SKEUOMORPHIC_GRADIENTS, SKEUOMORPHIC_BORDER_RADIUS, SKEUOMORPHIC_BORDER_WIDTHS } from '../../themes/variants/skeuomorphic';

interface BreadcrumbItem {
  id: string;
  label: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  currentItem: string;
  onSelect: (id: string) => void;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic';
  backgroundColor?: string;
  textColor?: string;
  activeTextColor?: string;
  separatorColor?: string;
  separator?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  currentItem,
  onSelect,
  style,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  textColor = NEUMORPHIC_COLORS.text,
  activeTextColor = NEUMORPHIC_COLORS.primary,
  separatorColor = NEUMORPHIC_COLORS.text,
  separator = '/',
}) => {
  const [pressedId, setPressedId] = useState<string | null>(null);

  const getContainerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.container];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        padding: 12,
      });
    } else if (design === 'skeuomorphic') {
      baseStyles.push({
        backgroundColor: SKEUOMORPHIC_COLORS.surface,
        borderRadius: SKEUOMORPHIC_BORDER_RADIUS.md,
        borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
        borderColor: SKEUOMORPHIC_COLORS.borderLight,
        padding: 12,
        ...convertShadowToStyle(SKEUOMORPHIC_SHADOWS.card),
        ...convertGradientToStyle(SKEUOMORPHIC_GRADIENTS.card),
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getItemStyles = (itemId: string): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.itemContainer];
    const isPressed = pressedId === itemId;

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed,
        customBackground: backgroundColor,
        customBorderRadius: 6,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        padding: 6,
        marginHorizontal: 2,
      });
    } else if (design === 'skeuomorphic') {
      baseStyles.push({
        backgroundColor: SKEUOMORPHIC_COLORS.surface,
        borderRadius: SKEUOMORPHIC_BORDER_RADIUS.sm,
        borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
        borderColor: SKEUOMORPHIC_COLORS.border,
        padding: 6,
        marginHorizontal: 2,
        ...convertShadowToStyle(isPressed ? SKEUOMORPHIC_SHADOWS.button.pressed : SKEUOMORPHIC_SHADOWS.button.default),
        ...convertGradientToStyle(SKEUOMORPHIC_GRADIENTS.button.secondary),
      });
    }

    return baseStyles;
  };

  const getTextStyles = (isCurrentItem: boolean): TextStyle => {
    const baseStyles: TextStyle = {
      ...styles.item,
    };

    if (design === 'neumorphic') {
      Object.assign(baseStyles, {
        color: isCurrentItem ? activeTextColor : textColor,
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });
    } else if (design === 'skeuomorphic') {
      Object.assign(baseStyles, {
        color: isCurrentItem ? SKEUOMORPHIC_COLORS.primary : SKEUOMORPHIC_COLORS.onSurface,
        textShadowColor: 'rgba(255, 255, 255, 0.8)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1,
      });
    }

    if (isCurrentItem) {
      Object.assign(baseStyles, styles.currentItem);
    }

    return baseStyles;
  };

  return (
    <View style={getContainerStyles()}>
      {items.map((item, index) => (
        <View key={item.id} style={styles.itemWrapper}>
          <TouchableOpacity
            onPress={() => onSelect(item.id)}
            onPressIn={() => setPressedId(item.id)}
            onPressOut={() => setPressedId(null)}
            disabled={item.id === currentItem}
            style={getItemStyles(item.id)}
          >
            <Text style={getTextStyles(item.id === currentItem)}>{item.label}</Text>
          </TouchableOpacity>
          {index < items.length - 1 && (
            <Text style={[styles.separator, { color: separatorColor }]}>{separator}</Text>
          )}
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
    flexWrap: 'wrap',
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContainer: {
    borderRadius: 6,
  },
  item: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  currentItem: {
    fontWeight: 'bold',
  },
  separator: {
    marginHorizontal: 8,
  },
});

export default Breadcrumbs;
