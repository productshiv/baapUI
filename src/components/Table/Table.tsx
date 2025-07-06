import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { convertShadowToStyle, convertGradientToStyle } from '../../themes/utils/skeuomorphic';
import { SKEUOMORPHIC_COLORS, SKEUOMORPHIC_SHADOWS, SKEUOMORPHIC_GRADIENTS, SKEUOMORPHIC_BORDER_RADIUS, SKEUOMORPHIC_BORDER_WIDTHS } from '../../themes/variants/skeuomorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

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
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
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
  design,
  backgroundColor,
  textColor,
}) => {
  const themeContext = useThemeSafe();
  const contextDesign = themeContext?.design;
  const finalDesign = design || (contextDesign && ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'].includes(contextDesign) ? contextDesign as 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic' : 'flat');
  const themeMode = (themeContext?.mode || 'light') as 'light' | 'dark';
  const finalBackgroundColor = backgroundColor || 
    (finalDesign === 'neumorphic' ? NEUMORPHIC_COLORS.background :
     finalDesign === 'glassmorphic' ? GLASSMORPHIC_COLORS[themeMode].background :
     NEUMORPHIC_COLORS.background);
  const finalTextColor = textColor || 
    (finalDesign === 'neumorphic' ? NEUMORPHIC_COLORS.text :
     finalDesign === 'glassmorphic' ? GLASSMORPHIC_COLORS[themeMode].text :
     NEUMORPHIC_COLORS.text);
  const getContainerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.container];

    if (finalDesign === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: finalBackgroundColor,
        customBorderRadius: 12,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor: finalBackgroundColor,
        borderWidth: 0,
        padding: 12,
      });
    } else if (finalDesign === 'skeuomorphic') {
      baseStyles.push({
        backgroundColor: SKEUOMORPHIC_COLORS.surface,
        borderRadius: SKEUOMORPHIC_BORDER_RADIUS.lg,
        borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
        borderColor: SKEUOMORPHIC_COLORS.borderLight,
        padding: 12,
        ...convertShadowToStyle(SKEUOMORPHIC_SHADOWS.card),
        ...convertGradientToStyle(SKEUOMORPHIC_GRADIENTS.card),
      });
    } else if (finalDesign === 'glassmorphic') {
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: 'medium',
        blur: 'medium',
        theme: themeMode,
        customBorderRadius: 12,
      });

      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        backgroundColor: finalBackgroundColor,
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

    if (finalDesign === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: true,
        customBackground: finalBackgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor: finalBackgroundColor,
        borderBottomWidth: 0,
        marginBottom: 8,
      });
    } else if (finalDesign === 'skeuomorphic') {
      baseStyles.push({
        backgroundColor: SKEUOMORPHIC_COLORS.primary,
        borderRadius: SKEUOMORPHIC_BORDER_RADIUS.md,
        borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
        borderColor: SKEUOMORPHIC_COLORS.borderDark,
        marginBottom: 8,
        ...convertShadowToStyle(SKEUOMORPHIC_SHADOWS.button.default),
        ...convertGradientToStyle(SKEUOMORPHIC_GRADIENTS.button.primary),
      });
    } else if (finalDesign === 'glassmorphic') {
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: 'strong',
        blur: 'light',
        theme: themeMode,
        customBorderRadius: 8,
      });

      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        backgroundColor: GLASSMORPHIC_COLORS[themeMode].surface,
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

    if (finalDesign === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: finalBackgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor: finalBackgroundColor,
        borderBottomWidth: 0,
        marginBottom: isLast ? 0 : 8,
      });
    } else if (finalDesign === 'skeuomorphic') {
      baseStyles.push({
        backgroundColor: SKEUOMORPHIC_COLORS.background,
        borderRadius: SKEUOMORPHIC_BORDER_RADIUS.sm,
        borderWidth: SKEUOMORPHIC_BORDER_WIDTHS.thin,
        borderColor: SKEUOMORPHIC_COLORS.border,
        marginBottom: isLast ? 0 : 8,
        ...convertShadowToStyle(SKEUOMORPHIC_SHADOWS.input.default),
      });
    } else if (finalDesign === 'glassmorphic') {
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: 'subtle',
        blur: 'light',
        theme: themeMode,
        customBorderRadius: 8,
      });

      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        backgroundColor: finalBackgroundColor,
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

    if (finalDesign === 'neumorphic') {
      Object.assign(baseStyles, {
        color: finalTextColor,
        fontWeight: '700',
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });
    } else if (finalDesign === 'skeuomorphic') {
      Object.assign(baseStyles, {
        color: SKEUOMORPHIC_COLORS.onPrimary,
        fontWeight: '600',
        textShadowColor: SKEUOMORPHIC_COLORS.shadowMedium,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
      });
    } else if (finalDesign === 'glassmorphic') {
      Object.assign(baseStyles, {
        color: finalTextColor,
        fontWeight: '700',
        textShadowColor: GLASSMORPHIC_COLORS[themeMode].shadow,
        textShadowOffset: { width: 0.5, height: 0.5 },
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

    if (finalDesign === 'neumorphic') {
      Object.assign(baseStyles, {
        color: finalTextColor,
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });
    } else if (finalDesign === 'skeuomorphic') {
      Object.assign(baseStyles, {
        color: SKEUOMORPHIC_COLORS.onSurface,
        textShadowColor: SKEUOMORPHIC_COLORS.highlight,
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1,
      });
    } else if (finalDesign === 'glassmorphic') {
      Object.assign(baseStyles, {
        color: finalTextColor,
        textShadowColor: GLASSMORPHIC_COLORS[themeMode].shadow,
        textShadowOffset: { width: 0.5, height: 0.5 },
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
