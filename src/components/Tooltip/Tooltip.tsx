import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Platform, ViewStyle, TextStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  backgroundColor?: string;
  textColor?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  style,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  textColor = NEUMORPHIC_COLORS.text,
}) => {
  const themeContext = useThemeSafe();
  const [visible, setVisible] = useState(false);

  const getPositionStyle = (): ViewStyle => {
    switch (position) {
      case 'bottom':
        return styles.tooltipBottom;
      case 'left':
        return styles.tooltipLeft;
      case 'right':
        return styles.tooltipRight;
      default:
        return styles.tooltipTop;
    }
  };

  const getTooltipStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.tooltip, getPositionStyle()];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        borderWidth: 0,
        padding: 12,
      });
    } else if (design === 'glassmorphic') {
      const themeMode = themeContext?.theme?.mode || 'light';
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: 'medium',
        blur: 'medium',
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        backgroundColor: GLASSMORPHIC_COLORS[themeMode].background,
        borderColor: GLASSMORPHIC_COLORS[themeMode].border,
        borderWidth: 1,
        padding: 12,
      });
    }

    return baseStyles;
  };

  const getTextStyles = (): TextStyle => {
    const baseStyles: TextStyle = {
      ...styles.tooltipText,
    };

    if (design === 'neumorphic') {
      Object.assign(baseStyles, {
        color: textColor,
        fontSize: 14,
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });
    } else if (design === 'glassmorphic') {
      const themeMode = themeContext?.theme?.mode || 'light';
      Object.assign(baseStyles, {
        color: GLASSMORPHIC_COLORS[themeMode].text,
        fontSize: 14,
        fontWeight: '600',
      });
    }

    return baseStyles;
  };

  return (
    <Pressable
      style={[styles.container, style]}
      onHoverIn={() => Platform.OS === 'web' && setVisible(true)}
      onHoverOut={() => Platform.OS === 'web' && setVisible(false)}
      onPress={() => Platform.OS !== 'web' && setVisible(!visible)}
    >
      {children}
      {visible && (
        <View style={getTooltipStyles()}>
          <Text style={getTextStyles()}>{content}</Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  tooltip: {
    position: 'absolute',
    backgroundColor: 'rgba(51, 51, 51, 0.95)',
    padding: 8,
    borderRadius: 4,
    zIndex: 1000,
    minWidth: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tooltipText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  tooltipTop: {
    bottom: '100%',
    left: '50%',
    transform: [{ translateX: -50 }],
    marginBottom: 8,
  },
  tooltipBottom: {
    top: '100%',
    left: '50%',
    transform: [{ translateX: -50 }],
    marginTop: 8,
  },
  tooltipLeft: {
    right: '100%',
    top: '50%',
    transform: [{ translateY: -50 }],
    marginRight: 8,
  },
  tooltipRight: {
    left: '100%',
    top: '50%',
    transform: [{ translateY: -50 }],
    marginLeft: 8,
  },
});

export default Tooltip;
