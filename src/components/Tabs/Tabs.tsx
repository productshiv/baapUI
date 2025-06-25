import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  selectedTab: string;
  onSelect: (id: string) => void;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic';
  backgroundColor?: string;
  textColor?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedTab,
  onSelect,
  style,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  textColor = NEUMORPHIC_COLORS.text,
}) => {
  const [pressedTabId, setPressedTabId] = useState<string | null>(null);

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
        padding: 8,
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getTabStyles = (tabId: string): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.tab];
    const isSelected = selectedTab === tabId;
    const isPressed = pressedTabId === tabId;

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: isPressed || isSelected,
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        marginHorizontal: 8,
        padding: 12,
      });
    } else if (isSelected) {
      baseStyles.push(styles.selectedTab);
    }

    return baseStyles;
  };

  const getTextStyles = (tabId: string): TextStyle[] => {
    const baseStyles: TextStyle[] = [styles.label];

    if (design === 'neumorphic') {
      baseStyles.push({
        color: textColor,
        fontSize: 14,
        fontWeight: '600',
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });
    }

    return baseStyles;
  };

  return (
    <View style={getContainerStyles()}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.id}
          style={getTabStyles(tab.id)}
          onPress={() => onSelect(tab.id)}
          onPressIn={() => setPressedTabId(tab.id)}
          onPressOut={() => setPressedTabId(null)}
        >
          <Text style={getTextStyles(tab.id)}>{tab.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flexWrap: 'wrap',
  },
  tab: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#eee',
    minWidth: 80,
    alignItems: 'center',
  },
  selectedTab: {
    backgroundColor: '#007bff',
  },
  label: {
    color: '#333',
    textAlign: 'center',
  },
});

export default Tabs;
