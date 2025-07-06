import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ViewStyle,
  TextStyle,
  ScrollView,
} from '../../platform';
import Typography from '../Typography/Typography';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { getSkeuomorphicCardStyles, SKEUOMORPHIC_COLORS } from '../../themes/utils/skeuomorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

interface DropdownProps {
  options: string[];
  onSelect: (value: string) => void;
  label?: string;
  value?: string | null;
  placeholder?: string;
  style?: ViewStyle;
  dropdownStyle?: ViewStyle;
  optionStyle?: ViewStyle;
  labelStyle?: TextStyle | TextStyle[];
  textStyle?: TextStyle | TextStyle[];
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  backgroundColor?: string;
  textColor?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  label = 'Select',
  value,
  placeholder = 'Choose an option',
  style,
  dropdownStyle,
  optionStyle,
  labelStyle,
  textStyle,
  design = 'flat',
  backgroundColor,
  textColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [pressedOption, setPressedOption] = useState<string | null>(null);
  
  const themeContext = useThemeSafe();
  const activeDesign = design || themeContext?.design || 'flat';
  const themeMode = themeContext?.theme?.mode || 'light';

  const toggleDropdown = () => {
    const toValue = isOpen ? 0 : 1;
    setIsOpen(!isOpen);

    Animated.timing(animation, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const optionsHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Math.min(options.length * 48 + 16, 250)],
  });

  const getContainerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.container];

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getDropdownStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.dropdown];

    if (activeDesign === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: isOpen,
        customBackground: backgroundColor || NEUMORPHIC_COLORS.background,
        customBorderRadius: 8,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        borderWidth: 0,
      });
    } else if (activeDesign === 'skeuomorphic') {
      const skeuomorphicStyles = getSkeuomorphicCardStyles(!isOpen);
      baseStyles.push(skeuomorphicStyles);
      if (backgroundColor) {
        baseStyles.push({ backgroundColor });
      }
    } else if (activeDesign === 'glassmorphic') {
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: isOpen ? 'strong' : 'medium',
        blur: 'medium',
        theme: themeMode,
        customBorderRadius: 8,
      });

      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        borderWidth: 1,
        borderColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
      });
    }

    if (dropdownStyle) {
      baseStyles.push(dropdownStyle);
    }

    return baseStyles;
  };

  const getOptionsContainerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.optionsContainer];

    if (activeDesign === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: true,
        customBackground: backgroundColor || NEUMORPHIC_COLORS.background,
        customBorderRadius: 8,
      });

      baseStyles.push({
        shadowColor: neumorphicStyles[0].shadowColor,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        borderWidth: 0,
        marginTop: 8,
      });
    } else if (activeDesign === 'skeuomorphic') {
      const skeuomorphicStyles = getSkeuomorphicCardStyles(true);
      baseStyles.push({
        ...skeuomorphicStyles,
        marginTop: 8,
      });
      if (backgroundColor) {
        baseStyles.push({ backgroundColor });
      }
    } else if (activeDesign === 'glassmorphic') {
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: 'strong',
        blur: 'heavy',
        theme: themeMode,
        customBorderRadius: 8,
      });

      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        marginTop: 8,
        borderWidth: 1,
        borderColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
        shadowColor: themeMode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
      });
    }

    return baseStyles;
  };

  const getOptionStyles = (option: string): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.option];
    const isPressed = pressedOption === option;

    if (activeDesign === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: isPressed,
        customBackground: backgroundColor || NEUMORPHIC_COLORS.background,
        customBorderRadius: 6,
      });

      if (isPressed) {
        baseStyles.push({
          shadowColor: neumorphicStyles[0].shadowColor,
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.15,
          shadowRadius: 2,
          elevation: 2,
        });
      }

      baseStyles.push({
        margin: 4,
      });
    } else if (activeDesign === 'skeuomorphic') {
      const skeuomorphicStyles = getSkeuomorphicCardStyles(isPressed);
      baseStyles.push(skeuomorphicStyles);
      baseStyles.push({
        margin: 4,
      });
      if (backgroundColor) {
        baseStyles.push({ backgroundColor });
      }
    } else if (activeDesign === 'glassmorphic') {
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: isPressed ? 'strong' : 'subtle',
        blur: 'light',
        theme: themeMode,
        customBorderRadius: 6,
      });

      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        margin: 4,
        borderWidth: 1,
        borderColor: isPressed 
          ? (themeMode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)')
          : (themeMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'),
      });
    }

    if (optionStyle) {
      baseStyles.push(optionStyle);
    }

    return baseStyles;
  };

  const getTextStyles = (): TextStyle => {
    const baseStyles: TextStyle = {
      ...styles.text,
    };

    if (activeDesign === 'neumorphic') {
      Object.assign(baseStyles, {
        color: textColor || NEUMORPHIC_COLORS.text,
      });
    } else if (activeDesign === 'skeuomorphic') {
      Object.assign(baseStyles, {
        color: textColor || SKEUOMORPHIC_COLORS.onSurface,
      });
    } else if (activeDesign === 'glassmorphic') {
      const glassmorphicColors = GLASSMORPHIC_COLORS[themeMode];
      Object.assign(baseStyles, {
        color: textColor || glassmorphicColors.text,
        textShadowColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
        fontWeight: '500',
      });
    }

    if (textStyle) {
      if (Array.isArray(textStyle)) {
        textStyle.forEach(style => {
          if (style) Object.assign(baseStyles, style);
        });
      } else {
        Object.assign(baseStyles, textStyle);
      }
    }

    return baseStyles;
  };

  const getLabelStyles = (): TextStyle => {
    const baseStyles: TextStyle = {
      ...styles.label,
    };

    if (design === 'neumorphic') {
      Object.assign(baseStyles, {
        color: textColor || NEUMORPHIC_COLORS.text,
      });
    } else if (design === 'skeuomorphic') {
      Object.assign(baseStyles, {
        color: textColor || SKEUOMORPHIC_COLORS.onSurface,
      });
    }

    if (labelStyle) {
      if (Array.isArray(labelStyle)) {
        labelStyle.forEach(style => {
          if (style) Object.assign(baseStyles, style);
        });
      } else {
        Object.assign(baseStyles, labelStyle);
      }
    }

    return baseStyles;
  };

  return (
    <View style={getContainerStyles()}>
      {label && (
        <Typography variant="body2" style={getLabelStyles()}>
          {label}
        </Typography>
      )}
      <TouchableOpacity onPress={toggleDropdown} style={getDropdownStyles()} activeOpacity={0.7}>
        <Typography variant="body" style={getTextStyles()}>
          {value || placeholder}
        </Typography>
        <Typography
          variant="body"
          style={{
            ...styles.arrow,
            ...(isOpen ? styles.arrowUp : {}),
            ...(design === 'neumorphic' ? { color: textColor || NEUMORPHIC_COLORS.text } : {}),
            ...(design === 'skeuomorphic' ? { color: textColor || SKEUOMORPHIC_COLORS.onSurface } : {}),
          }}
        >
          ▼
        </Typography>
      </TouchableOpacity>
      {isOpen && (
        <Animated.View style={[getOptionsContainerStyles(), { maxHeight: optionsHeight }]}>
          <ScrollView
            showsVerticalScrollIndicator={true}
            bounces={false}
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
          >
            {options.map(option => (
              <TouchableOpacity
                key={option}
                onPress={() => {
                  onSelect(option);
                  toggleDropdown();
                }}
                onPressIn={() => setPressedOption(option)}
                onPressOut={() => setPressedOption(null)}
                style={getOptionStyles(option)}
              >
                <Typography variant="body" style={getTextStyles()}>
                  {option}
                </Typography>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    position: 'relative',
    zIndex: 1000,
  },
  label: {
    marginBottom: 6,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    zIndex: 1001,
  },
  text: {
    flex: 1,
  },
  arrow: {
    fontSize: 12,
    marginLeft: 8,
  },
  arrowUp: {
    transform: [{ rotate: '180deg' }],
  },
  optionsContainer: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    overflow: 'hidden',
    borderRadius: 8,
    marginTop: 4,
    zIndex: 1002,
  },
  scrollView: {
    maxHeight: 200,
  },
  scrollContent: {
    flexGrow: 1,
  },
  option: {
    padding: 12,
    borderRadius: 6,
  },
});

export default Dropdown;