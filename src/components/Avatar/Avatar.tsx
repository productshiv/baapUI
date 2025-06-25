import React from 'react';
import { View, Image, StyleSheet, ViewStyle, ImageStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface AvatarProps {
  imageUrl: string;
  size: number;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic';
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  size,
  style,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  borderWidth = 0,
  borderColor = NEUMORPHIC_COLORS.lightShadow,
}) => {
  const getContainerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [
      styles.container,
      {
        width: size,
        height: size,
        borderRadius: size / 2,
      },
    ];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: backgroundColor,
        customBorderRadius: size / 2,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        padding: 4,
      });

      if (borderWidth > 0) {
        baseStyles.push({
          borderWidth,
          borderColor,
        });
      }
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getImageContainerStyles = (): ViewStyle => {
    const baseStyles: ViewStyle = {
      width: '100%',
      height: '100%',
      borderRadius: size / 2,
      overflow: 'hidden',
    };

    if (design === 'neumorphic') {
      baseStyles.backgroundColor = backgroundColor;
    }

    return baseStyles;
  };

  const getImageStyles = (): ImageStyle => {
    return {
      ...styles.image,
      borderRadius: size / 2,
    };
  };

  return (
    <View style={getContainerStyles()}>
      <View style={getImageContainerStyles()}>
        <Image source={{ uri: imageUrl }} style={getImageStyles()} />
      </View>
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
