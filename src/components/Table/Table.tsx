import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

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
}

const Table: React.FC<TableProps> = ({
  data,
  columns,
  style,
  headerStyle,
  rowStyle,
  cellStyle,
  headerCellStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.header, headerStyle]}>
        {columns.map((column) => (
          <Text key={column.key} style={[styles.headerCell, headerCellStyle]}>
            {column.label}
          </Text>
        ))}
      </View>
      {data.map((row, rowIndex) => (
        <View key={rowIndex} style={[styles.row, rowStyle]}>
          {columns.map((column) => (
            <Text key={column.key} style={[styles.cell, cellStyle]}>
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
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
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
  },
  cell: {
    flex: 1,
    padding: 12,
    textAlign: 'center',
    color: '#212529',
  },
});

export default Table; 