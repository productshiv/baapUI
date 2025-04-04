import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

interface SkeletonLoaderProps {
  width: number | string;
  height: number | string;
  style?: object;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ width, height, style }) => {
  const shimmerAnim = new Animated.Value(0);

  Animated.loop(
    Animated.sequence([
      Animated.timing(shimmerAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(shimmerAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ])
  ).start();

  const shimmerStyle = {
    opacity: shimmerAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 1],
    }),
  };

  return <Animated.View style={[styles.skeleton, { width, height }, shimmerStyle, style]} />;
};

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
});

export default SkeletonLoader;
