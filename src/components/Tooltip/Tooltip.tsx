import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  style?: object;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, position = 'top', style }) => {
  const [visible, setVisible] = useState(false);

  const getTooltipStyle = () => {
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

  return (
    <Pressable
      style={[styles.container, style]}
      onHoverIn={() => Platform.OS === 'web' && setVisible(true)}
      onHoverOut={() => Platform.OS === 'web' && setVisible(false)}
      onPress={() => Platform.OS !== 'web' && setVisible(!visible)}
    >
      {children}
      {visible && (
        <View style={[styles.tooltip, getTooltipStyle()]}>
          <Text style={styles.tooltipText}>{content}</Text>
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
    marginBottom: 4,
  },
  tooltipBottom: {
    top: '100%',
    left: '50%',
    transform: [{ translateX: -50 }],
    marginTop: 4,
  },
  tooltipLeft: {
    right: '100%',
    top: '50%',
    transform: [{ translateY: -50 }],
    marginRight: 4,
  },
  tooltipRight: {
    left: '100%',
    top: '50%',
    transform: [{ translateY: -50 }],
    marginLeft: 4,
  },
});

export default Tooltip;
