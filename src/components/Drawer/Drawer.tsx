import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import Typography from '../Typography/Typography';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface DrawerItem {
  id: string;
  label: string;
}

interface DrawerProps {
  items: DrawerItem[];
  selectedItem: string;
  onSelect: (id: string) => void;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic';
  backgroundColor?: string;
  textColor?: string;
}

const Drawer: React.FC<DrawerProps> = ({
  items,
  selectedItem,
  onSelect,
  style,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  textColor = NEUMORPHIC_COLORS.text,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHamburgerPressed, setIsHamburgerPressed] = useState(false);
  const [pressedItemId, setPressedItemId] = useState<string | null>(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const getHamburgerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.hamburger];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: isHamburgerPressed,
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });
      
      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
      });
    }

    return baseStyles;
  };

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
        borderWidth: 0,
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getItemStyles = (itemId: string): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.item];

    if (design === 'neumorphic') {
      const isSelected = selectedItem === itemId;
      const isPressed = pressedItemId === itemId;
      
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: isPressed || isSelected,
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });
      
      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        margin: 8,
        borderBottomWidth: 0,
      });
    } else if (selectedItem === itemId) {
      baseStyles.push(styles.selectedItem);
    }

    return baseStyles;
  };

  return (
    <View>
      <TouchableOpacity
        onPress={toggleDrawer}
        style={getHamburgerStyles()}
        onPressIn={() => setIsHamburgerPressed(true)}
        onPressOut={() => setIsHamburgerPressed(false)}
      >
        <View style={[styles.hamburgerLine, design === 'neumorphic' && { backgroundColor: textColor }]} />
        <View style={[styles.hamburgerLine, design === 'neumorphic' && { backgroundColor: textColor }]} />
        <View style={[styles.hamburgerLine, design === 'neumorphic' && { backgroundColor: textColor }]} />
      </TouchableOpacity>
      {isOpen && (
        <View style={getContainerStyles()}>
          {items.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => onSelect(item.id)}
              onPressIn={() => setPressedItemId(item.id)}
              onPressOut={() => setPressedItemId(null)}
              style={getItemStyles(item.id)}
            >
              <Typography
                variant="body1"
                style={[
                  design === 'neumorphic'
                    ? {
                        color: textColor,
                        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
                        textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 1,
                      }
                    : selectedItem === item.id
                    ? styles.selectedLabel
                    : styles.label
                ]}
              >
                {item.label}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  hamburger: {
    width: 36,
    height: 36,
    backgroundColor: '#4A90E2',
    borderRadius: 4,
    padding: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  hamburgerLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
  container: {
    width: 250,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    position: 'absolute',
    top: 44,
    left: 0,
    zIndex: 1000,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  selectedItem: {
    backgroundColor: '#4A90E2',
  },
  label: {
    color: '#333333',
  },
  selectedLabel: {
    color: '#FFFFFF',
  },
});

export default Drawer;
