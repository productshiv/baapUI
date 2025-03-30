import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, ViewStyle } from 'react-native';
import Typography from '../Typography/Typography';

interface ToastProps {
  message: string;
  visible: boolean;
  onClose: () => void;
  duration?: number;
  style?: ViewStyle;
}

const Toast: React.FC<ToastProps> = ({ message, visible, onClose, duration = 3000, style }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(onClose);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, duration, fadeAnim, onClose]);

  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <Animated.View style={[styles.toast, { opacity: fadeAnim }, style]}>
        <Typography variant="body2" style={styles.message}>
          {message}
        </Typography>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 9999,
  },
  toast: {
    backgroundColor: '#333333',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginBottom: 20,
    minWidth: 200,
    maxWidth: '80%',
    alignItems: 'center',
  },
  message: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default Toast; 