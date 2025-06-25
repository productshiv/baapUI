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
  design?: 'flat' | 'neumorphic';
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
  backgroundColor = NEUMORPHIC_COLORS.background,
  textColor = NEUMORPHIC_COLORS.text,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [pressedOption, setPressedOption] = useState<string | null>(null);

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

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: isOpen,
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });
      
      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        borderWidth: 0,
      });
    }

    if (dropdownStyle) {
      baseStyles.push(dropdownStyle);
    }

    return baseStyles;
  };

  const getOptionsContainerStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.optionsContainer];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: true,
        customBackground: backgroundColor,
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
    }

    return baseStyles;
  };

  const getOptionStyles = (option: string): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.option];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: pressedOption === option,
        customBackground: backgroundColor,
        customBorderRadius: 6,
      });
      
      if (pressedOption === option) {
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
    }

    if (optionStyle) {
      baseStyles.push(optionStyle);
    }

    return baseStyles;
  };

  const getTextStyles = (): TextStyle[] => {
    const baseStyles: TextStyle[] = [styles.text];

    if (design === 'neumorphic') {
      baseStyles.push({
        color: textColor,
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });
    }

    if (textStyle) {
      if (Array.isArray(textStyle)) {
        baseStyles.push(...textStyle);
      } else {
        baseStyles.push(textStyle);
      }
    }

    return baseStyles;
  };

  const getLabelStyles = (): TextStyle[] => {
    const baseStyles: TextStyle[] = [styles.label];

    if (design === 'neumorphic') {
      baseStyles.push({
        color: textColor,
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });
    }

    if (labelStyle) {
      if (Array.isArray(labelStyle)) {
        baseStyles.push(...labelStyle);
      } else {
        baseStyles.push(labelStyle);
      }
    }

    return baseStyles;
  };

  return (
    <View style={getContainerStyles()}>
      {label && (
        <Typography variant="subtitle2" style={getLabelStyles()}>
          {label}
        </Typography>
      )}
      <TouchableOpacity
        onPress={toggleDropdown}
        style={getDropdownStyles()}
        activeOpacity={0.7}
      >
        <Typography variant="body1" style={getTextStyles()}>
          {value || placeholder}
        </Typography>
        <Typography
          variant="body1"
          style={[
            styles.arrow,
            isOpen ? styles.arrowUp : undefined,
            design === 'neumorphic' && { color: textColor },
          ]}
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
            {options.map((option) => (
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
                <Typography variant="body1" style={getTextStyles()}>
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
