import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface AvatarProps {
  imageUrl: string;
  size: number;
  style?: object;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, size, style }) => {
  return (
    <View style={[styles.container, { width: size, height: size, borderRadius: size / 2 }, style]}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Avatar; 