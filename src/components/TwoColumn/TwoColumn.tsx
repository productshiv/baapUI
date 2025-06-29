import React from 'react';
import { View, StyleSheet, ViewStyle } from '../../platform';
import { ThemeDesign } from '../../themes/types';

export interface TwoColumnProps {
  left: React.ReactNode;
  right: React.ReactNode;
  style?: ViewStyle;
  design?: ThemeDesign;
  gap?: 'none' | 'small' | 'medium' | 'large';
  ratio?: '1:1' | '1:2' | '2:1' | '1:3' | '3:1';
  stackOnMobile?: boolean;
  reverseOnMobile?: boolean;
  alignment?: 'top' | 'center' | 'bottom' | 'stretch';
}

const TwoColumn: React.FC<TwoColumnProps> = ({
  left,
  right,
  style,
  design = 'flat',
  gap = 'medium',
  ratio = '1:1',
  stackOnMobile = true,
  reverseOnMobile = false,
  alignment = 'top',
}) => {
  const getGapValue = () => {
    switch (gap) {
      case 'none':
        return 0;
      case 'small':
        return 8;
      case 'large':
        return 32;
      default: // medium
        return 16;
    }
  };

  const getFlexRatio = () => {
    switch (ratio) {
      case '1:2':
        return { left: 1, right: 2 };
      case '2:1':
        return { left: 2, right: 1 };
      case '1:3':
        return { left: 1, right: 3 };
      case '3:1':
        return { left: 3, right: 1 };
      default: // '1:1'
        return { left: 1, right: 1 };
    }
  };

  const getAlignItems = () => {
    switch (alignment) {
      case 'center':
        return 'center';
      case 'bottom':
        return 'flex-end';
      case 'stretch':
        return 'stretch';
      default: // 'top'
        return 'flex-start';
    }
  };

  const flexRatio = getFlexRatio();
  const gapValue = getGapValue();

  const containerStyles: ViewStyle[] = [
    styles.container,
    {
      gap: gapValue,
      alignItems: getAlignItems(),
    },
    stackOnMobile && styles.stackOnMobile,
    stackOnMobile && reverseOnMobile && styles.reverseOnMobile,
  ];

  const leftColumnStyles: ViewStyle[] = [
    styles.column,
    { flex: flexRatio.left },
    stackOnMobile && styles.mobileColumn,
  ];

  const rightColumnStyles: ViewStyle[] = [
    styles.column,
    { flex: flexRatio.right },
    stackOnMobile && styles.mobileColumn,
  ];

  if (style) {
    containerStyles.push(style);
  }

  return (
    <View style={containerStyles}>
      <View style={leftColumnStyles}>{left}</View>
      <View style={rightColumnStyles}>{right}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  } as ViewStyle,
  column: {
    flex: 1,
  } as ViewStyle,
  stackOnMobile: {
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  } as ViewStyle,
  reverseOnMobile: {
    '@media (max-width: 768px)': {
      flexDirection: 'column-reverse',
    },
  } as ViewStyle,
  mobileColumn: {
    '@media (max-width: 768px)': {
      flex: 'none',
      width: '100%',
    },
  } as ViewStyle,
});

export default TwoColumn; 