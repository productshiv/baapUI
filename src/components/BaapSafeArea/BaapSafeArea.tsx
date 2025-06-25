import React from 'react';
import { SafeAreaView, StyleSheet, ViewStyle, ScrollView, ScrollViewProps } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface BaapSafeAreaProps extends ScrollViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  disableScroll?: boolean;
  design?: 'flat' | 'neumorphic';
  backgroundColor?: string;
}

const BaapSafeArea: React.FC<BaapSafeAreaProps> = ({
  children,
  style,
  contentContainerStyle,
  disableScroll = false,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  ...scrollViewProps
}) => {
  const getSafeAreaStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.safeArea];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: backgroundColor,
        customBorderRadius: 0,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getScrollContainerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.scrollContainer];

    if (contentContainerStyle) {
      baseStyles.push(contentContainerStyle);
    }

    return baseStyles;
  };

  return (
    <SafeAreaView style={getSafeAreaStyles()}>
      {disableScroll ? (
        children
      ) : (
        <ScrollView {...scrollViewProps} contentContainerStyle={getScrollContainerStyles()}>
          {children}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default BaapSafeArea;
