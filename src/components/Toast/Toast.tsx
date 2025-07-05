import React, { useEffect, useMemo } from 'react';
import { View, StyleSheet, Animated, ViewStyle, TextStyle } from '../../platform';
import Typography from '../Typography/Typography';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { getSkeuomorphicToastStyles, SKEUOMORPHIC_COLORS } from '../../themes/utils/skeuomorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';

interface ToastProps {
  message: string;
  visible: boolean;
  onClose: () => void;
  duration?: number;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  backgroundColor?: string;
  textColor?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}

const Toast: React.FC<ToastProps> = ({
  message,
  visible,
  onClose,
  duration = 3000,
  style,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  textColor = NEUMORPHIC_COLORS.text,
  type = 'info',
}) => {
  const themeContext = useThemeSafe();
  const fadeAnim = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(onClose);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, duration, fadeAnim, onClose]);

  const getToastStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.toast];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: backgroundColor,
        customBorderRadius: 12,
      });

      baseStyles.push(...neumorphicStyles);
      baseStyles.push({
        backgroundColor,
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 12,
      });

      // Add type-specific styles for neumorphic design
      switch (type) {
        case 'success':
          baseStyles.push({
            backgroundColor: '#E8F5E9',
            borderColor: '#81C784',
          });
          break;
        case 'warning':
          baseStyles.push({
            backgroundColor: '#FFF3E0',
            borderColor: '#FFB74D',
          });
          break;
        case 'error':
          baseStyles.push({
            backgroundColor: '#FFEBEE',
            borderColor: '#E57373',
          });
          break;
        default:
          baseStyles.push({
            backgroundColor: '#E3F2FD',
            borderColor: '#64B5F6',
          });
      }
    } else if (design === 'skeuomorphic') {
      const skeuomorphicStyles = getSkeuomorphicToastStyles(type);
      baseStyles.push(skeuomorphicStyles);
    } else if (design === 'glassmorphic') {
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
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 12,
      });

      // Add type-specific styles for glassmorphic design
      switch (type) {
        case 'success':
          baseStyles.push({
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            borderColor: 'rgba(76, 175, 80, 0.3)',
          });
          break;
        case 'warning':
          baseStyles.push({
            backgroundColor: 'rgba(255, 152, 0, 0.2)',
            borderColor: 'rgba(255, 152, 0, 0.3)',
          });
          break;
        case 'error':
          baseStyles.push({
            backgroundColor: 'rgba(244, 67, 54, 0.2)',
            borderColor: 'rgba(244, 67, 54, 0.3)',
          });
          break;
        default:
          baseStyles.push({
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            borderColor: 'rgba(33, 150, 243, 0.3)',
          });
      }
    } else {
      // Add type-specific styles for flat design
      switch (type) {
        case 'success':
          baseStyles.push(styles.successToast);
          break;
        case 'warning':
          baseStyles.push(styles.warningToast);
          break;
        case 'error':
          baseStyles.push(styles.errorToast);
          break;
        default:
          baseStyles.push(styles.infoToast);
      }
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getTextStyles = (): TextStyle => {
    const baseStyles: TextStyle = {
      ...styles.message,
    };

    if (design === 'neumorphic') {
      Object.assign(baseStyles, {
        color: textColor,
        fontSize: 14,
        fontWeight: '600',
        textShadowColor: NEUMORPHIC_COLORS.lightShadow,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });

      // Add type-specific text styles for neumorphic design
      switch (type) {
        case 'success':
          Object.assign(baseStyles, { color: '#2E7D32' });
          break;
        case 'warning':
          Object.assign(baseStyles, { color: '#F57C00' });
          break;
        case 'error':
          Object.assign(baseStyles, { color: '#C62828' });
          break;
        default:
          Object.assign(baseStyles, { color: '#1976D2' });
      }
    } else if (design === 'skeuomorphic') {
      Object.assign(baseStyles, {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        textShadowColor: SKEUOMORPHIC_COLORS.shadowLight,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
      });
    } else if (design === 'glassmorphic') {
      const themeMode = themeContext?.theme?.mode || 'light';
      Object.assign(baseStyles, {
        color: GLASSMORPHIC_COLORS[themeMode].text,
        fontSize: 14,
        fontWeight: '600',
      });

      // Add type-specific text styles for glassmorphic design
      switch (type) {
        case 'success':
          Object.assign(baseStyles, { color: '#2E7D32' });
          break;
        case 'warning':
          Object.assign(baseStyles, { color: '#F57C00' });
          break;
        case 'error':
          Object.assign(baseStyles, { color: '#C62828' });
          break;
        default:
          Object.assign(baseStyles, { color: '#1976D2' });
      }
    }

    return baseStyles;
  };

  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <Animated.View style={[getToastStyles(), { opacity: fadeAnim }]}>
        <Typography variant="body2" style={getTextStyles()}>
          {message}
        </Typography>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 9999,
  },
  toast: {
    backgroundColor: '#333333',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginBottom: 20,
    minWidth: 200,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  message: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  infoToast: {
    backgroundColor: '#2196F3',
  },
  successToast: {
    backgroundColor: '#4CAF50',
  },
  warningToast: {
    backgroundColor: '#FF9800',
  },
  errorToast: {
    backgroundColor: '#F44336',
  },
});

export default Toast;
