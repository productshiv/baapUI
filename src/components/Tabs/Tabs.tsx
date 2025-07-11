import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { convertShadowToStyle, convertGradientToStyle } from '../../themes/utils/skeuomorphic';
import { SKEUOMORPHIC_COLORS, SKEUOMORPHIC_SHADOWS, SKEUOMORPHIC_GRADIENTS, SKEUOMORPHIC_BORDER_RADIUS, SKEUOMORPHIC_BORDER_WIDTHS } from '../../themes/variants/skeuomorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  selectedTab: string;
  onSelect: (id: string) => void;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
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
  const themeContext = useThemeSafe();
  const activeDesign = design || themeContext?.design || 'flat';
  const themeMode = themeContext?.mode || 'light';

  const getContainerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.container];

    if (activeDesign === 'neumorphic') {
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
    } else if (activeDesign === 'skeuomorphic') {
      const skeuomorphicStyle: ViewStyle = {
        backgroundColor: SKEUOMORPHIC_COLORS.background,
        padding: 12,
        borderRadius: SKEUOMORPHIC_BORDER_RADIUS.lg,
        borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
        borderColor: SKEUOMORPHIC_COLORS.borderLight,
        ...convertGradientToStyle(SKEUOMORPHIC_GRADIENTS.card),
        ...convertShadowToStyle(SKEUOMORPHIC_SHADOWS.card),
      };
      baseStyles.push(skeuomorphicStyle);
    } else if (activeDesign === 'glassmorphic') {
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: 'medium',
        blur: 'medium',
        theme: themeMode,
      });
      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        padding: 8,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
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

    if (activeDesign === 'neumorphic') {
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
    } else if (activeDesign === 'skeuomorphic') {
      const skeuomorphicStyle: ViewStyle = {
        marginHorizontal: 6,
        padding: 12,
        borderRadius: SKEUOMORPHIC_BORDER_RADIUS.md,
        borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
        borderColor: isSelected ? SKEUOMORPHIC_COLORS.primary : SKEUOMORPHIC_COLORS.borderLight,
        backgroundColor: isSelected ? SKEUOMORPHIC_COLORS.primary : SKEUOMORPHIC_COLORS.surface,
        ...convertGradientToStyle(isSelected ? SKEUOMORPHIC_GRADIENTS.button.primary : SKEUOMORPHIC_GRADIENTS.button.secondary),
        ...convertShadowToStyle(isPressed || isSelected ? SKEUOMORPHIC_SHADOWS.button.pressed : SKEUOMORPHIC_SHADOWS.button.default),
      };
      baseStyles.push(skeuomorphicStyle);
    } else if (activeDesign === 'glassmorphic') {
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: isPressed || isSelected ? 'strong' : 'medium',
        blur: 'medium',
        theme: themeMode,
      });
      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        marginHorizontal: 6,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: isSelected 
          ? (themeMode === 'dark' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.2)')
          : (themeMode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'),
      });
    } else if (isSelected) {
      baseStyles.push(styles.selectedTab);
    }

    return baseStyles;
  };

  const getTextStyles = (tabId: string): TextStyle => {
    const baseStyles: TextStyle = {
      ...styles.label,
    };
    const isSelected = selectedTab === tabId;

    if (activeDesign === 'neumorphic') {
      Object.assign(baseStyles, {
        color: textColor,
        fontSize: 14,
        fontWeight: '600',
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });
    } else if (activeDesign === 'skeuomorphic') {
      Object.assign(baseStyles, {
        color: isSelected ? SKEUOMORPHIC_COLORS.onPrimary : SKEUOMORPHIC_COLORS.onSurface,
        fontSize: 14,
        fontWeight: '700',
        textShadowColor: SKEUOMORPHIC_COLORS.shadowMedium,
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1,
      });
    } else if (activeDesign === 'glassmorphic') {
      const glassmorphicColors = GLASSMORPHIC_COLORS[themeMode];
      Object.assign(baseStyles, {
        color: textColor || glassmorphicColors.text,
        fontSize: 14,
        fontWeight: isSelected ? '700' : '600',
        textShadowColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
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
