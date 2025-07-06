import React, { useState } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacity } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { convertShadowToStyle, convertGradientToStyle } from '../../themes/utils/skeuomorphic';
import { SKEUOMORPHIC_COLORS, SKEUOMORPHIC_SHADOWS, SKEUOMORPHIC_GRADIENTS, SKEUOMORPHIC_BORDER_RADIUS, SKEUOMORPHIC_BORDER_WIDTHS } from '../../themes/variants/skeuomorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

interface ListItemProps {
  children: React.ReactNode;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  backgroundColor?: string;
  onPress?: () => void;
  isPressed?: boolean;
}

interface ListProps {
  items: React.ReactNode[];
  style?: ViewStyle;
  itemStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  backgroundColor?: string;
  onItemPress?: (index: number) => void;
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  style,
  design,
  backgroundColor,
  onPress,
  isPressed = false,
}) => {
  const [isPressedState, setIsPressedState] = useState(false);
  const themeContext = useThemeSafe();
  const contextDesign = themeContext?.design;
  const finalDesign = design || (contextDesign && ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'].includes(contextDesign) ? contextDesign as 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic' : 'flat');
  const themeMode = (themeContext?.mode || 'light') as 'light' | 'dark';
  const finalBackgroundColor = backgroundColor || 
    (finalDesign === 'neumorphic' ? NEUMORPHIC_COLORS.background :
     finalDesign === 'glassmorphic' ? GLASSMORPHIC_COLORS[themeMode].background :
     NEUMORPHIC_COLORS.background);

  const getItemStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.listItem];

    if (finalDesign === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: isPressed || isPressedState,
        customBackground: finalBackgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor: finalBackgroundColor,
        marginVertical: 8,
        padding: 16,
      });
    } else if (finalDesign === 'skeuomorphic') {
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
    } else if (finalDesign === 'glassmorphic') {
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: 'subtle',
        blur: 'light',
        theme: themeMode,
        customBorderRadius: 8,
      });

      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        backgroundColor: finalBackgroundColor,
        marginVertical: 8,
        padding: 16,
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
  design,
  backgroundColor,
  onItemPress,
}) => {
  const [pressedIndex, setPressedIndex] = useState<number | null>(null);
  const themeContext = useThemeSafe();
  const contextDesign = themeContext?.design;
  const finalDesign = design || (contextDesign && ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'].includes(contextDesign) ? contextDesign as 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic' : 'flat');
  const themeMode = (themeContext?.mode || 'light') as 'light' | 'dark';
  const finalBackgroundColor = backgroundColor || 
    (finalDesign === 'neumorphic' ? NEUMORPHIC_COLORS.background :
     finalDesign === 'glassmorphic' ? GLASSMORPHIC_COLORS[themeMode].background :
     NEUMORPHIC_COLORS.background);

  const getContainerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.container];

    if (finalDesign === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: finalBackgroundColor,
        customBorderRadius: 12,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor: finalBackgroundColor,
        padding: 12,
      });
    } else if (finalDesign === 'skeuomorphic') {
      baseStyles.push({
        backgroundColor: SKEUOMORPHIC_COLORS.surface,
        borderRadius: SKEUOMORPHIC_BORDER_RADIUS.lg,
        borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
        borderColor: SKEUOMORPHIC_COLORS.borderLight,
        padding: 12,
        ...convertShadowToStyle(SKEUOMORPHIC_SHADOWS.card),
        ...convertGradientToStyle(SKEUOMORPHIC_GRADIENTS.surface),
      });
    } else if (finalDesign === 'glassmorphic') {
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: 'medium',
        blur: 'medium',
        theme: themeMode,
        customBorderRadius: 12,
      });

      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        backgroundColor: finalBackgroundColor,
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
          design={finalDesign}
          backgroundColor={finalBackgroundColor}
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
