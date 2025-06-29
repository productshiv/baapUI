import React from 'react';
import { View, StyleSheet, ViewStyle } from '../../platform';
import { ThemeDesign } from '../../themes/types';

export interface FormProps {
  children: React.ReactNode;
  style?: ViewStyle;
  design?: ThemeDesign;
  spacing?: 'compact' | 'normal' | 'relaxed';
  fullWidthButtons?: boolean; // Make buttons full width by default
}

const Form: React.FC<FormProps> = ({
  children,
  style,
  design = 'flat',
  spacing = 'normal',
  fullWidthButtons = true,
}) => {
  const getSpacingValue = () => {
    switch (spacing) {
      case 'compact':
        return 8;
      case 'relaxed':
        return 24;
      default:
        return 16;
    }
  };

  const spacingValue = getSpacingValue();

  // Clone children and add spacing + full width to form elements
  const processedChildren = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child;

    const isLastChild = index === React.Children.count(children) - 1;
    const isButton = child.type && 
                    ((child.type as any).displayName === 'Button' || 
                     (child.type as any).name === 'Button' ||
                     child.props?.onPress); // Heuristic for button-like components

    const additionalProps: any = {};
    const additionalStyle: ViewStyle = {
      marginBottom: isLastChild ? 0 : spacingValue,
    };

    // Add full width to buttons if enabled
    if (isButton && fullWidthButtons) {
      additionalStyle.alignSelf = 'stretch';
    }

    // Add full width to inputs and other form elements
    if (!isButton) {
      additionalStyle.alignSelf = 'stretch';
    }

    // Pass design prop to child components that support it
    if (child.props && typeof child.props === 'object' && 'design' in child.props) {
      additionalProps.design = design;
    }

    return React.cloneElement(child, {
      ...additionalProps,
      style: child.props?.style ? [child.props.style, additionalStyle] : additionalStyle,
    });
  });

  return (
    <View style={[styles.container, style]}>
      {processedChildren}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  } as ViewStyle,
});

// Add displayName for easier debugging
Form.displayName = 'Form';

export default Form; 