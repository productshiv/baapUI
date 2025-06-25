import React, { useState } from 'react';
import {
  Modal as RNModal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from '../../platform';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
  design?: 'flat' | 'neumorphic';
  backgroundColor?: string;
  textColor?: string;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  onClose,
  children,
  style,
  design = 'flat',
  backgroundColor = NEUMORPHIC_COLORS.background,
  textColor = NEUMORPHIC_COLORS.text,
}) => {
  const [isClosePressed, setIsClosePressed] = useState(false);

  const getModalStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.modal];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: false,
        customBackground: backgroundColor,
        customBorderRadius: 16,
      });

      baseStyles.push(...neumorphicStyles);
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const getCloseButtonStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [styles.closeButton];

    if (design === 'neumorphic') {
      const neumorphicStyles = getNeumorphicStyles({
        isPressed: isClosePressed,
        customBackground: backgroundColor,
        customBorderRadius: 8,
      });

      baseStyles.push(...neumorphicStyles);
    }

    return baseStyles;
  };

  return (
    <RNModal transparent visible={visible} animationType="slide">
      <View style={styles.overlay}>
        <View style={getModalStyles()}>
          {children}
          <TouchableOpacity
            onPress={onClose}
            style={getCloseButtonStyles()}
            onPressIn={() => setIsClosePressed(true)}
            onPressOut={() => setIsClosePressed(false)}
          >
            <Text
              style={[
                styles.closeButtonText,
                design === 'neumorphic' && {
                  color: textColor,
                  textShadowColor: NEUMORPHIC_COLORS.lightShadow,
                  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 1,
                },
              ]}
            >
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#007bff',
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Modal;
