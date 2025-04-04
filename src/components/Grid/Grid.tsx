import React from 'react';
import { View, StyleSheet, ViewStyle, DimensionValue } from 'react-native';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface GridProps {
  children: React.ReactNode;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic';
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
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
}) => {
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
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  elevated = false,
}) => {
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

    if (design === 'neumorphic' && elevated) {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });
      
      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
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
            design,
            backgroundColor,
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
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  elevated = false,
}) => {
  const getColStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [
      styles.col,
      ...(offset > 0 ? [{ marginLeft: `${(offset / 12) * 100}%` as DimensionValue }] : []),
    ];

    if (design === 'neumorphic' && elevated) {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });
      
      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
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
