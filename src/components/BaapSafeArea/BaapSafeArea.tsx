import React from 'react';
import { SafeAreaView, StyleSheet, ViewStyle, ScrollView, ScrollViewProps } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

interface BaapSafeAreaProps extends ScrollViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  disableScroll?: boolean;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  backgroundColor?: string;
}

const BaapSafeArea: React.FC<BaapSafeAreaProps> = ({
  children,
  style,
  contentContainerStyle,
  disableScroll = false,
  design,
  backgroundColor,
  ...scrollViewProps
}) => {
  const themeContext = useThemeSafe();
  const finalDesign = design || themeContext?.design || 'flat';
  const themeMode = (themeContext?.mode || 'light') as 'light' | 'dark';
  const finalBackgroundColor = backgroundColor || 
    (finalDesign === 'neumorphic' ? NEUMORPHIC_COLORS.background : 
     finalDesign === 'glassmorphic' ? GLASSMORPHIC_COLORS[themeMode].background : 
     undefined);
  const getSafeAreaStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.safeArea];

    if (finalDesign === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: finalBackgroundColor,
        customBorderRadius: 0,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor: finalBackgroundColor,
      });
    } else if (finalDesign === 'glassmorphic') {
      baseStyles.push(
        getGlassmorphicStyles({
          intensity: 'subtle',
          blur: 'light',
          theme: themeMode,
          customBorderRadius: 0,
        })
      );
      baseStyles.push({
        backgroundColor: finalBackgroundColor,
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
