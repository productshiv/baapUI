import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { convertShadowToStyle, convertGradientToStyle } from '../../themes/utils/skeuomorphic';
import { SKEUOMORPHIC_COLORS, SKEUOMORPHIC_SHADOWS, SKEUOMORPHIC_GRADIENTS, SKEUOMORPHIC_BORDER_RADIUS, SKEUOMORPHIC_BORDER_WIDTHS } from '../../themes/variants/skeuomorphic';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic';
  backgroundColor?: string;
  textColor?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  style,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  textColor = NEUMORPHIC_COLORS.text,
}) => {
  const [pressedButton, setPressedButton] = useState<'prev' | 'next' | null>(null);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
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
        padding: 12,
      });
    } else if (design === 'skeuomorphic') {
      const skeuomorphicStyle: ViewStyle = {
        backgroundColor: SKEUOMORPHIC_COLORS.background,
        padding: 16,
        borderRadius: SKEUOMORPHIC_BORDER_RADIUS.lg,
        borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
        borderColor: SKEUOMORPHIC_COLORS.borderLight,
        ...convertGradientToStyle(SKEUOMORPHIC_GRADIENTS.card),
        ...convertShadowToStyle(SKEUOMORPHIC_SHADOWS.card),
      };
      baseStyles.push(skeuomorphicStyle);
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getButtonStyles = (type: 'prev' | 'next'): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.button];
    const isDisabled = type === 'prev' ? currentPage === 1 : currentPage === totalPages;
    const isPressed = pressedButton === type;

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: isPressed || isDisabled,
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        opacity: isDisabled ? 0.5 : 1,
        padding: 12,
        minWidth: 100,
      });
    } else if (design === 'skeuomorphic') {
      const skeuomorphicStyle: ViewStyle = {
        padding: 12,
        minWidth: 100,
        borderRadius: SKEUOMORPHIC_BORDER_RADIUS.md,
        borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
        borderColor: isDisabled ? SKEUOMORPHIC_COLORS.borderLight : SKEUOMORPHIC_COLORS.primary,
        backgroundColor: isDisabled ? SKEUOMORPHIC_COLORS.surface : SKEUOMORPHIC_COLORS.primary,
        opacity: isDisabled ? 0.6 : 1,
        ...convertGradientToStyle(isDisabled ? SKEUOMORPHIC_GRADIENTS.button.secondary : SKEUOMORPHIC_GRADIENTS.button.primary),
        ...convertShadowToStyle(isPressed ? SKEUOMORPHIC_SHADOWS.button.pressed : SKEUOMORPHIC_SHADOWS.button.default),
      };
      baseStyles.push(skeuomorphicStyle);
    } else {
      if (isDisabled) {
        baseStyles.push({ opacity: 0.5 });
      }
    }

    return baseStyles;
  };

  const getTextStyles = (isButton: boolean): TextStyle => {
    const baseStyles: TextStyle = {
      ...(isButton ? styles.buttonText : styles.pageInfo),
    };

    if (design === 'neumorphic') {
      Object.assign(baseStyles, {
        color: textColor,
        fontSize: isButton ? 14 : 16,
        fontWeight: '600',
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });
    } else if (design === 'skeuomorphic') {
      Object.assign(baseStyles, {
        color: isButton ? SKEUOMORPHIC_COLORS.onPrimary : SKEUOMORPHIC_COLORS.onSurface,
        fontSize: isButton ? 14 : 16,
        fontWeight: '700',
        textShadowColor: SKEUOMORPHIC_COLORS.shadowMedium,
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1,
      });
    }

    return baseStyles;
  };

  return (
    <View style={getContainerStyles()}>
      <TouchableOpacity
        onPress={handlePrevious}
        disabled={currentPage === 1}
        style={getButtonStyles('prev')}
        onPressIn={() => setPressedButton('prev')}
        onPressOut={() => setPressedButton(null)}
      >
        <Text style={getTextStyles(true)}>Previous</Text>
      </TouchableOpacity>
      <Text style={getTextStyles(false)}>{`Page ${currentPage} of ${totalPages}`}</Text>
      <TouchableOpacity
        onPress={handleNext}
        disabled={currentPage === totalPages}
        style={getButtonStyles('next')}
        onPressIn={() => setPressedButton('next')}
        onPressOut={() => setPressedButton(null)}
      >
        <Text style={getTextStyles(true)}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button: {
    padding: 10,
    marginHorizontal: 8,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  pageInfo: {
    marginHorizontal: 16,
    fontSize: 16,
  },
});

export default Pagination;
