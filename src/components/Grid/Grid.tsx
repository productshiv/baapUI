import React from 'react';
import { View, StyleSheet, ViewStyle, DimensionValue } from 'react-native';

interface GridProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

interface RowProps extends GridProps {
  spacing?: number;
  columns?: number; // Number of columns per row
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: 'wrap' | 'nowrap';
}

interface ColProps extends GridProps {
  size?: number; // Number of columns to span
  offset?: number;
  flex?: boolean; // Whether to use flex: 1
}

export const Container: React.FC<GridProps> = ({ children, style }) => (
  <View style={[styles.container, style]}>{children}</View>
);

export const Row: React.FC<RowProps> = ({
  children,
  spacing = 2,
  columns = 12,
  align = 'center',
  justify = 'flex-start',
  wrap = 'wrap',
  style,
}) => {
  const childrenArray = React.Children.toArray(children);
  
  // Calculate total fixed columns and count flex columns
  const { fixedColumns, flexCount } = childrenArray.reduce((acc, child) => {
    if (React.isValidElement(child)) {
      if (child.props.flex) {
        return { ...acc, flexCount: acc.flexCount + 1 };
      } else {
        return { ...acc, fixedColumns: acc.fixedColumns + (child.props.size || 1) };
      }
    }
    return acc;
  }, { fixedColumns: 0, flexCount: 0 });

  // Calculate remaining space for flex columns
  const remainingColumns = Math.max(0, columns - fixedColumns);
  const columnsPerFlex = flexCount > 0 ? remainingColumns / flexCount : 0;

  return (
    <View
      style={[
        styles.row,
        {
          alignItems: align,
          justifyContent: justify,
          flexWrap: wrap,
          margin: -(spacing * 4),
        },
        style,
      ]}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          let width: DimensionValue;
          
          if (child.props.flex) {
            // For flex columns, distribute remaining space evenly
            width = `${(columnsPerFlex / columns) * 100}%`;
          } else {
            // For fixed columns, use specified size or default to 1
            const colSize = child.props.size || 1;
            width = `${(colSize / columns) * 100}%`;
          }

          return React.cloneElement(child, {
            ...child.props,
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
  style 
}) => {
  return (
    <View
      style={[
        styles.col,
        offset > 0 && { marginLeft: `${(offset / 12) * 100}%` as DimensionValue },
        style,
      ]}
    >
      {children}
    </View>
  );
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