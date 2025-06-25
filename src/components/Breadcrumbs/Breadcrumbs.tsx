import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface BreadcrumbItem {
  id: string;
  label: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  currentItem: string;
  onSelect: (id: string) => void;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic';
  backgroundColor?: string;
  textColor?: string;
  activeTextColor?: string;
  separatorColor?: string;
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
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getItemStyles = (itemId: string): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.itemContainer];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: pressedId === itemId,
        customBackground: backgroundColor,
        customBorderRadius: 6,
      });
      
      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        padding: 6,
        marginHorizontal: 2,
      });
    }

    return baseStyles;
  };

  const getTextStyles = (isCurrentItem: boolean): TextStyle[] => {
    const baseStyles: TextStyle[] = [styles.item];

    if (design === 'neumorphic') {
      baseStyles.push({
        color: isCurrentItem ? activeTextColor : textColor,
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });
    }

    if (isCurrentItem) {
      baseStyles.push(styles.currentItem);
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
            <Text style={getTextStyles(item.id === currentItem)}>
              {item.label}
            </Text>
          </TouchableOpacity>
          {index < items.length - 1 && (
            <Text style={[styles.separator, { color: separatorColor }]}>/</Text>
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
