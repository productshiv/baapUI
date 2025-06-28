import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface Column {
  key: string;
  label: string;
}

interface TableProps {
  data: Record<string, any>[];
  columns: Column[];
  style?: ViewStyle;
  headerStyle?: ViewStyle;
  rowStyle?: ViewStyle;
  cellStyle?: TextStyle;
  headerCellStyle?: TextStyle;
  design?: 'flat' | 'neumorphic';
  backgroundColor?: string;
  textColor?: string;
}

const Table: React.FC<TableProps> = ({
  data,
  columns,
  style,
  headerStyle,
  rowStyle,
  cellStyle,
  headerCellStyle,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  textColor = NEUMORPHIC_COLORS.text,
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
        borderWidth: 0,
        padding: 12,
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getHeaderStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.header];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: true,
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        borderBottomWidth: 0,
        marginBottom: 8,
      });
    }

    if (headerStyle) {
      baseStyles.push(headerStyle);
    }

    return baseStyles;
  };

  const getRowStyles = (isLast: boolean): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.row];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        borderBottomWidth: 0,
        marginBottom: isLast ? 0 : 8,
      });
    }

    if (rowStyle) {
      baseStyles.push(rowStyle);
    }

    return baseStyles;
  };

  const getHeaderCellStyles = (): TextStyle => {
    const baseStyles: TextStyle = {
      ...styles.headerCell,
    };

    if (design === 'neumorphic') {
      Object.assign(baseStyles, {
        color: textColor,
        fontWeight: '700',
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });
    }

    if (headerCellStyle) {
      Object.assign(baseStyles, headerCellStyle);
    }

    return baseStyles;
  };

  const getCellStyles = (): TextStyle => {
    const baseStyles: TextStyle = {
      ...styles.cell,
    };

    if (design === 'neumorphic') {
      Object.assign(baseStyles, {
        color: textColor,
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });
    }

    if (cellStyle) {
      Object.assign(baseStyles, cellStyle);
    }

    return baseStyles;
  };

  return (
    <View style={getContainerStyles()}>
      <View style={getHeaderStyles()}>
        {columns.map(column => (
          <Text key={column.key} style={getHeaderCellStyles()}>
            {column.label}
          </Text>
        ))}
      </View>
      {data.map((row, rowIndex) => (
        <View key={rowIndex} style={getRowStyles(rowIndex === data.length - 1)}>
          {columns.map(column => (
            <Text key={column.key} style={getCellStyles()}>
              {row[column.key]}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
    borderRadius: 8,
  },
  headerCell: {
    flex: 1,
    padding: 12,
    fontWeight: '600',
    textAlign: 'center',
    color: '#495057',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
    borderRadius: 8,
  },
  cell: {
    flex: 1,
    padding: 12,
    textAlign: 'center',
    color: '#212529',
  },
});

export default Table;
