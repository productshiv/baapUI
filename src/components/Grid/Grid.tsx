import React from 'react';
import { View, StyleSheet, ViewStyle, DimensionValue } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

interface GridProps {
  children: React.ReactNode;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  backgroundColor?: string;
}

interface RowProps extends GridProps {
  spacing?: number;
  columns?: number;
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  wrap?: 'wrap' | 'nowrap';
  elevated?: boolean;
}

interface ColProps extends GridProps {
  size?: number;
  offset?: number;
  flex?: boolean;
  elevated?: boolean;
}

export const Container: React.FC<GridProps> = ({
  children,
  style,
  design, // Now optional - will use theme context if not provided
  backgroundColor,
}) => {
  const themeContext = useThemeSafe();
  
  // Use design prop if provided, otherwise use theme context, otherwise default to 'flat'
  const activeDesign = design || themeContext?.design || 'flat';
  const themeMode = themeContext?.theme.mode || 'light';
  const defaultBackgroundColor = backgroundColor || themeContext?.theme.colors.background || NEUMORPHIC_COLORS.background;

  const getContainerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.container];

    if (activeDesign === 'glassmorphic') {
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: 'medium',
        blur: 'medium',
        theme: themeMode,
      });

      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        borderColor: themeMode === 'dark' 
          ? GLASSMORPHIC_COLORS.dark.border 
          : GLASSMORPHIC_COLORS.light.border,
      });
    } else if (activeDesign === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: defaultBackgroundColor,
        customBorderRadius: 12,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor: defaultBackgroundColor,
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  return <View style={getContainerStyles()}>{children}</View>;
};

export const Row: React.FC<RowProps> = ({
  children,
  spacing = 2,
  columns = 12,
  align = 'center',
  justify = 'flex-start',
  wrap = 'wrap',
  style,
  design, // Now optional - will use theme context if not provided
  backgroundColor,
  elevated = false,
}) => {
  const themeContext = useThemeSafe();
  
  // Use design prop if provided, otherwise use theme context, otherwise default to 'flat'
  const activeDesign = design || themeContext?.design || 'flat';
  const themeMode = themeContext?.theme.mode || 'light';
  const defaultBackgroundColor = backgroundColor || themeContext?.theme.colors.background || NEUMORPHIC_COLORS.background;
  const childrenArray = React.Children.toArray(children);

  const { fixedColumns, flexCount } = childrenArray.reduce(
    (acc, child) => {
      if (React.isValidElement(child)) {
        if (child.props.flex) {
          return { ...acc, flexCount: acc.flexCount + 1 };
        } else {
          return { ...acc, fixedColumns: acc.fixedColumns + (child.props.size || 1) };
        }
      }
      return acc;
    },
    { fixedColumns: 0, flexCount: 0 }
  );

  const remainingColumns = Math.max(0, columns - fixedColumns);
  const columnsPerFlex = flexCount > 0 ? remainingColumns / flexCount : 0;

  const getRowStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [
      styles.row,
      {
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        margin: -(spacing * 4),
      },
    ];

    if (activeDesign === 'glassmorphic' && elevated) {
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: 'medium',
        blur: 'medium',
        theme: themeMode,
      });

      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        borderColor: themeMode === 'dark' 
          ? GLASSMORPHIC_COLORS.dark.border 
          : GLASSMORPHIC_COLORS.light.border,
        padding: 8,
      });
    } else if (activeDesign === 'neumorphic' && elevated) {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: defaultBackgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor: defaultBackgroundColor,
        padding: 8,
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  return (
    <View style={getRowStyles()}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          let width: DimensionValue;

          if (child.props.flex) {
            width = `${(columnsPerFlex / columns) * 100}%`;
          } else {
            const colSize = child.props.size || 1;
            width = `${(colSize / columns) * 100}%`;
          }

          return React.cloneElement(child, {
            ...child.props,
            design: activeDesign,
            backgroundColor: defaultBackgroundColor,
            style: [
              child.props.style,
              {
                width,
                padding: spacing * 4,
              },
            ],
          });
        }
        return child;
      })}
    </View>
  );
};

export const Col: React.FC<ColProps> = ({
  children,
  size = 1,
  offset = 0,
  flex = false,
  style,
  design, // Now optional - will use theme context if not provided
  backgroundColor,
  elevated = false,
}) => {
  const themeContext = useThemeSafe();
  
  // Use design prop if provided, otherwise use theme context, otherwise default to 'flat'
  const activeDesign = design || themeContext?.design || 'flat';
  const themeMode = themeContext?.theme.mode || 'light';
  const defaultBackgroundColor = backgroundColor || themeContext?.theme.colors.background || NEUMORPHIC_COLORS.background;
  const getColStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [
      styles.col,
      ...(offset > 0 ? [{ marginLeft: `${(offset / 12) * 100}%` as DimensionValue }] : []),
    ];

    if (activeDesign === 'glassmorphic' && elevated) {
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: 'medium',
        blur: 'medium',
        theme: themeMode,
      });

      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        borderColor: themeMode === 'dark' 
          ? GLASSMORPHIC_COLORS.dark.border 
          : GLASSMORPHIC_COLORS.light.border,
        padding: 8,
      });
    } else if (activeDesign === 'neumorphic' && elevated) {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: defaultBackgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor: defaultBackgroundColor,
        padding: 8,
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  return <View style={getColStyles()}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  col: {
    flexDirection: 'column',
  },
});

export default {
  Container,
  Row,
  Col,
};
