import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ProgressBarProps {
  progress: number; // Value between 0 and 1
  style?: object;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, style }) => {
  // Ensure progress is between 0 and 1
  const normalizedProgress = Math.max(0, Math.min(progress || 0, 1));

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.progress, { width: `${normalizedProgress * 100}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 8,
    width: 300,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#2196f3',
    borderRadius: 4,
  },
});

export default ProgressBar;
