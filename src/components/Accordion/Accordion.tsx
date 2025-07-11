import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { getSkeuomorphicCardStyles, SKEUOMORPHIC_COLORS } from '../../themes/utils/skeuomorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

interface Section {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  sections: Section[];
  expandedSection: string | null;
  onToggle: (id: string) => void;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  backgroundColor?: string;
  textColor?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  sections,
  expandedSection,
  onToggle,
  style,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  textColor = NEUMORPHIC_COLORS.text,
}) => {
  const themeContext = useThemeSafe();
  const [pressedSectionId, setPressedSectionId] = useState<string | null>(null);

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
        padding: 12,
      });
    }

    if (design === 'skeuomorphic') {
      const skeuomorphicStyles = getSkeuomorphicCardStyles(true);
      baseStyles.push(skeuomorphicStyles);
      baseStyles.push({
        padding: 12,
      });
    }

    if (design === 'glassmorphic') {
      const themeMode = themeContext?.theme?.mode || 'light';
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: 'medium',
        blur: 'medium',
        customBackground: backgroundColor,
        customBorderRadius: 12,
      });

      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        backgroundColor: GLASSMORPHIC_COLORS[themeMode].background,
        borderColor: GLASSMORPHIC_COLORS[themeMode].border,
        padding: 12,
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getHeaderStyles = (sectionId: string): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.header];
    const isPressed = pressedSectionId === sectionId;
    const isExpanded = expandedSection === sectionId;

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: isPressed || isExpanded,
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        padding: 16,
      });
    }

    if (design === 'skeuomorphic') {
      const skeuomorphicStyles = getSkeuomorphicCardStyles(!isExpanded);
      baseStyles.push(skeuomorphicStyles);
      baseStyles.push({
        padding: 16,
      });
    }

    if (design === 'glassmorphic') {
      const themeMode = themeContext?.theme?.mode || 'light';
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: isExpanded ? 'strong' : 'medium',
        blur: 'medium',
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        backgroundColor: isExpanded 
          ? 'rgba(33, 150, 243, 0.2)' 
          : GLASSMORPHIC_COLORS[themeMode].surface,
        borderColor: isExpanded 
          ? 'rgba(33, 150, 243, 0.3)' 
          : GLASSMORPHIC_COLORS[themeMode].border,
        padding: 16,
      });
    }

    return baseStyles;
  };

  const getContentStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.contentContainer];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: true,
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        marginTop: 8,
        padding: 16,
      });
    }

    if (design === 'skeuomorphic') {
      const skeuomorphicStyles = getSkeuomorphicCardStyles(false);
      baseStyles.push(skeuomorphicStyles);
      baseStyles.push({
        marginTop: 8,
        padding: 16,
      });
    }

    if (design === 'glassmorphic') {
      const themeMode = themeContext?.theme?.mode || 'light';
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: 'subtle',
        blur: 'light',
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        backgroundColor: GLASSMORPHIC_COLORS[themeMode].surface,
        borderColor: GLASSMORPHIC_COLORS[themeMode].border,
        marginTop: 8,
        padding: 16,
      });
    }

    return baseStyles;
  };

  const getTextStyles = (isTitle: boolean): TextStyle => {
    const baseStyles: TextStyle = {
      ...(isTitle ? styles.title : styles.content),
    };

    if (design === 'neumorphic') {
      Object.assign(baseStyles, {
        color: textColor,
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });
    }

    if (design === 'skeuomorphic') {
      Object.assign(baseStyles, {
        color: textColor,
        textShadowColor: SKEUOMORPHIC_COLORS.shadowLight,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });
    }

    if (design === 'glassmorphic') {
      const themeMode = themeContext?.theme?.mode || 'light';
      Object.assign(baseStyles, {
        color: GLASSMORPHIC_COLORS[themeMode].text,
        fontSize: isTitle ? 16 : 14,
        fontWeight: isTitle ? '600' : '400',
      });
    }

    return baseStyles;
  };

  return (
    <View style={getContainerStyles()}>
      {sections.map(section => (
        <View key={section.id} style={styles.section}>
          <TouchableOpacity
            onPress={() => onToggle(section.id)}
            onPressIn={() => setPressedSectionId(section.id)}
            onPressOut={() => setPressedSectionId(null)}
            style={getHeaderStyles(section.id)}
          >
            <Text style={getTextStyles(true)}>{section.title}</Text>
          </TouchableOpacity>
          {expandedSection === section.id && (
            <View style={getContentStyles()}>
              <Text style={getTextStyles(false)}>{section.content}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  section: {
    marginBottom: 12,
  },
  header: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  content: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default Accordion;
