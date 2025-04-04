import React, { useState } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface ListItemProps {
  children: React.ReactNode;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic';
  backgroundColor?: string;
  onPress?: () => void;
  isPressed?: boolean;
}

interface ListProps {
  items: React.ReactNode[];
  style?: ViewStyle;
  itemStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  design?: 'flat' | 'neumorphic';
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
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const content = (
    <View style={getItemStyles()}>
      {children}
    </View>
  );

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
