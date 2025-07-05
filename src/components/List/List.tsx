import React, { useState } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacity } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { convertShadowToStyle, convertGradientToStyle } from '../../themes/utils/skeuomorphic';
import { SKEUOMORPHIC_COLORS, SKEUOMORPHIC_SHADOWS, SKEUOMORPHIC_GRADIENTS, SKEUOMORPHIC_BORDER_RADIUS, SKEUOMORPHIC_BORDER_WIDTHS } from '../../themes/variants/skeuomorphic';

interface ListItemProps {
  children: React.ReactNode;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic';
  backgroundColor?: string;
  onPress?: () => void;
  isPressed?: boolean;
}

interface ListProps {
  items: React.ReactNode[];
  style?: ViewStyle;
  itemStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic';
  backgroundColor?: string;
  onItemPress?: (index: number) => void;
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  style,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  onPress,
  isPressed = false,
}) => {
  const [isPressedState, setIsPressedState] = useState(false);

  const getItemStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.listItem];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: isPressed || isPressedState,
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        marginVertical: 8,
        padding: 16,
      });
    } else if (design === 'skeuomorphic') {
      baseStyles.push({
        backgroundColor: isPressed || isPressedState ? SKEUOMORPHIC_COLORS.surface : SKEUOMORPHIC_COLORS.background,
        borderRadius: SKEUOMORPHIC_BORDER_RADIUS.md,
        borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
        borderColor: SKEUOMORPHIC_COLORS.border,
        marginVertical: 8,
        padding: 16,
        ...convertShadowToStyle(isPressed || isPressedState ? SKEUOMORPHIC_SHADOWS.button.pressed : SKEUOMORPHIC_SHADOWS.card),
        ...convertGradientToStyle(SKEUOMORPHIC_GRADIENTS.card),
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const content = <View style={getItemStyles()}>{children}</View>;

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        onPressIn={() => setIsPressedState(true)}
        onPressOut={() => setIsPressedState(false)}
      >
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};

const List: React.FC<ListProps> = ({
  items,
  style,
  itemStyle,
  containerStyle,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  onItemPress,
}) => {
  const [pressedIndex, setPressedIndex] = useState<number | null>(null);

  const getContainerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.container];

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
        ...convertGradientToStyle(SKEUOMORPHIC_GRADIENTS.surface),
      });
    }

    if (containerStyle) {
      baseStyles.push(containerStyle);
    }

    return baseStyles;
  };

  const handleItemPress = (index: number) => {
    if (onItemPress) {
      onItemPress(index);
    }
  };

  return (
    <View style={getContainerStyles()}>
      {items.map((item, index) => (
        <ListItem
          key={index}
          style={itemStyle}
          design={design}
          backgroundColor={backgroundColor}
          onPress={onItemPress ? () => handleItemPress(index) : undefined}
          isPressed={pressedIndex === index}
        >
          {item}
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 12,
  },
  listItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 4,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});

export default List;
