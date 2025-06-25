// Platform abstraction layer for cross-platform compatibility
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

// Platform detection using environment-specific globals
const PlatformInfo = {
  isReactNative:
    (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') ||
    (typeof global !== 'undefined' &&
      // @ts-ignore
      global.__DEV__ !== undefined &&
      typeof window === 'undefined'),
  isWeb: typeof window !== 'undefined' && typeof document !== 'undefined',
};

// Enhanced style conversion function
const convertRNStyleToCSS = (style: any): React.CSSProperties => {
  if (!style) return {};

  const cssStyle: any = { ...style };

  // Handle React Native specific properties
  if (style.paddingHorizontal !== undefined) {
    cssStyle.paddingLeft = style.paddingHorizontal;
    cssStyle.paddingRight = style.paddingHorizontal;
    delete cssStyle.paddingHorizontal;
  }

  if (style.paddingVertical !== undefined) {
    cssStyle.paddingTop = style.paddingVertical;
    cssStyle.paddingBottom = style.paddingVertical;
    delete cssStyle.paddingVertical;
  }

  if (style.marginHorizontal !== undefined) {
    cssStyle.marginLeft = style.marginHorizontal;
    cssStyle.marginRight = style.marginHorizontal;
    delete cssStyle.marginHorizontal;
  }

  if (style.marginVertical !== undefined) {
    cssStyle.marginTop = style.marginVertical;
    cssStyle.marginBottom = style.marginVertical;
    delete cssStyle.marginVertical;
  }

  // Handle text shadow properties
  if (style.textShadowColor || style.textShadowOffset || style.textShadowRadius) {
    const color = style.textShadowColor || 'rgba(0,0,0,0.3)';
    const offsetX = style.textShadowOffset?.width || 1;
    const offsetY = style.textShadowOffset?.height || 1;
    const radius = style.textShadowRadius || 1;
    cssStyle.textShadow = `${offsetX}px ${offsetY}px ${radius}px ${color}`;
    delete cssStyle.textShadowColor;
    delete cssStyle.textShadowOffset;
    delete cssStyle.textShadowRadius;
  }

  // Handle shadow properties
  if (style.shadowColor || style.shadowOffset || style.shadowRadius || style.shadowOpacity) {
    const color = style.shadowColor || 'rgba(0,0,0,0.3)';
    const offsetX = style.shadowOffset?.width || 0;
    const offsetY = style.shadowOffset?.height || 2;
    const radius = style.shadowRadius || 4;
    const opacity = style.shadowOpacity || 0.3;
    cssStyle.boxShadow = `${offsetX}px ${offsetY}px ${radius}px rgba(0,0,0,${opacity})`;
    delete cssStyle.shadowColor;
    delete cssStyle.shadowOffset;
    delete cssStyle.shadowRadius;
    delete cssStyle.shadowOpacity;
  }

  // Handle elevation (Android)
  if (style.elevation !== undefined) {
    cssStyle.boxShadow = `0px ${style.elevation}px ${style.elevation * 2}px rgba(0,0,0,0.2)`;
    delete cssStyle.elevation;
  }

  // Ensure color values are strings
  if (style.backgroundColor && typeof style.backgroundColor === 'object') {
    cssStyle.backgroundColor = String(style.backgroundColor);
  }

  if (style.color && typeof style.color === 'object') {
    cssStyle.color = String(style.color);
  }

  return cssStyle as React.CSSProperties;
};

// Style processing helper
const processStyle = (style: any): React.CSSProperties => {
  if (Array.isArray(style)) {
    return style.reduce((acc, s) => ({ ...acc, ...convertRNStyleToCSS(s) }), {});
  }
  return convertRNStyleToCSS(style);
};

// Mock Animated for web
const MockAnimated = {
  View: ({ style, children, ...props }: any) => {
    const processedStyle = processStyle(style);
    return React.createElement(
      'div',
      {
        style: processedStyle,
        ...props,
      },
      children
    );
  },
  Text: ({ style, children, ...props }: any) => {
    const processedStyle = processStyle(style);
    return React.createElement(
      'span',
      {
        style: processedStyle,
        ...props,
      },
      children
    );
  },
  Value: class MockValue {
    constructor(public value: number) {}
    setValue(value: number) {
      this.value = value;
    }
    addListener() {
      return 'mock-listener';
    }
    removeListener() {}
    interpolate(config: any) {
      // Simple mock interpolation for web
      return this.value;
    }
  },
  timing: (animatedValue: any, config: any) => ({
    start: (callback?: () => void) => {
      if (animatedValue && animatedValue.setValue) {
        animatedValue.setValue(config.toValue);
      }
      callback?.();
    },
  }),
  spring: (animatedValue: any, config: any) => ({
    start: (callback?: () => void) => {
      if (animatedValue && animatedValue.setValue) {
        animatedValue.setValue(config.toValue);
      }
      callback?.();
    },
  }),
  loop: (animation: any) => ({ start: () => {} }),
  sequence: (animations: any[]) => ({ start: (callback?: () => void) => callback?.() }),
  decay: () => ({ start: (callback?: () => void) => callback?.() }),
  parallel: (animations: any[]) => ({ start: (callback?: () => void) => callback?.() }),
  stagger: (time: number, animations: any[]) => ({
    start: (callback?: () => void) => callback?.(),
  }),
  delay: (time: number) => ({ start: (callback?: () => void) => callback?.() }),
};

// Web-only components (no React Native dependencies)
const WebComponents = {
  View: ({ style, children, onPress, ...props }: any) => {
    const processedStyle = processStyle(style);
    const webProps: any = { style: processedStyle, ...props };

    if (onPress) {
      webProps.onClick = onPress;
      webProps.style = {
        ...processedStyle,
        cursor: 'pointer',
        userSelect: 'none',
      };
      return React.createElement('button', webProps, children);
    }

    return React.createElement('div', webProps, children);
  },

  Text: ({
    style,
    children,
    numberOfLines,
    adjustsFontSizeToFit,
    minimumFontScale,
    ...props
  }: any) => {
    const processedStyle = processStyle(style);
    // Filter out React Native-specific props
    const webProps = { ...props };
    delete webProps.numberOfLines;
    delete webProps.adjustsFontSizeToFit;
    delete webProps.minimumFontScale;

    return React.createElement('span', { style: processedStyle, ...webProps }, children);
  },

  TextInput: ({
    style,
    value,
    onChangeText,
    placeholder,
    multiline,
    numberOfLines,
    ...props
  }: any) => {
    const processedStyle = processStyle(style);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onChangeText?.(e.target.value);
    };

    if (multiline) {
      return React.createElement('textarea', {
        style: { ...processedStyle, resize: 'vertical' },
        value,
        onChange: handleChange,
        placeholder,
        rows: numberOfLines || 4,
        ...props,
      });
    }

    return React.createElement('input', {
      style: processedStyle,
      type: 'text',
      value,
      onChange: handleChange,
      placeholder,
      ...props,
    });
  },

  TouchableOpacity: ({
    style,
    children,
    onPress,
    disabled,
    onPressIn,
    onPressOut,
    activeOpacity,
    ...props
  }: any) => {
    const processedStyle = processStyle(style);
    // Filter out React Native-specific props
    const webProps = { ...props };
    delete webProps.onPressIn;
    delete webProps.onPressOut;
    delete webProps.activeOpacity;

    return React.createElement(
      'button',
      {
        style: {
          ...processedStyle,
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1,
          border: 'none',
          background: 'transparent',
          padding: 0,
          userSelect: 'none',
        },
        onClick: disabled ? undefined : onPress,
        disabled,
        ...webProps,
      },
      children
    );
  },

  Pressable: ({ style, onPress, children, disabled, onPressIn, onPressOut, ...props }: any) => {
    const processedStyle = processStyle(style);
    // Filter out React Native-specific props
    const webProps = { ...props };
    delete webProps.onPressIn;
    delete webProps.onPressOut;

    return React.createElement(
      'button',
      {
        style: {
          ...processedStyle,
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1,
          background: 'transparent',
          border: 'none',
        },
        onClick: disabled ? undefined : onPress,
        disabled,
        ...webProps,
      },
      children
    );
  },

  ScrollView: ({ style, children, horizontal, ...props }: any) => {
    const processedStyle = processStyle(style);
    return React.createElement(
      'div',
      {
        style: {
          ...processedStyle,
          overflow: 'auto',
          display: horizontal ? 'flex' : 'block',
          flexDirection: horizontal ? 'row' : 'column',
        },
        ...props,
      },
      children
    );
  },

  SafeAreaView: ({ style, children, ...props }: any) => {
    const processedStyle = processStyle(style);
    return React.createElement(
      'div',
      {
        style: {
          ...processedStyle,
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
          paddingLeft: 'env(safe-area-inset-left)',
          paddingRight: 'env(safe-area-inset-right)',
        },
        ...props,
      },
      children
    );
  },

  Image: ({ style, source, ...props }: any) => {
    const processedStyle = processStyle(style);
    const src = typeof source === 'object' ? source.uri : source;
    return React.createElement('img', {
      style: processedStyle,
      src,
      ...props,
    });
  },

  ActivityIndicator: ({ color = '#000', size = 'medium', style }: any) => {
    const processedStyle = processStyle(style);
    const sizeValue = size === 'small' ? '16px' : size === 'large' ? '32px' : '24px';
    return React.createElement('div', {
      style: {
        ...processedStyle,
        width: sizeValue,
        height: sizeValue,
        border: `2px solid ${color}30`,
        borderTop: `2px solid ${color}`,
        borderRadius: '50%',
        animation: 'baap-spin 1s linear infinite',
      },
    });
  },

  Modal: ({ visible, transparent, animationType, onRequestClose, children, ...props }: any) => {
    // For React Native, this will be replaced by the actual RN Modal at runtime
    // For web, we use our custom modal implementation

    if (!visible) return null;

    return React.createElement(
      'div',
      {
        style: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: transparent ? 'transparent' : 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        },
        onClick: (e: React.MouseEvent) => {
          if (e.target === e.currentTarget) {
            onRequestClose?.();
          }
        },
        ...props,
      },
      children
    );
  },

  Animated: MockAnimated,
};

// Web-only APIs
const WebAPIs = {
  StyleSheet: {
    create: <T extends { [key: string]: any }>(styles: T): T => {
      // For React Native, this will use the actual StyleSheet.create at runtime
      // For web, we just return the styles as-is
      return styles;
    },
    flatten: (style: any) => {
      if (Array.isArray(style)) {
        return style.reduce((acc, s) => ({ ...acc, ...s }), {});
      }
      return style || {};
    },
  },
  Platform: {
    OS: (() => {
      // For React Native, this will be replaced with actual Platform.OS at runtime
      // For web, we always return 'web'
      return 'web';
    })(),
    select: (options: { [key: string]: any }) => {
      const os = WebAPIs.Platform.OS;
      return options[os] || options.default;
    },
  },
  Dimensions: {
    get: (dimension: 'window' | 'screen') => {
      // For React Native, this will be replaced with actual Dimensions.get at runtime
      // For web, we use window dimensions
      if (typeof window !== 'undefined') {
        return {
          width: window.innerWidth,
          height: window.innerHeight,
        };
      }

      return { width: 375, height: 667 };
    },
  },
};

// Export platform components and APIs (always web components)
export const {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  SafeAreaView,
  Image,
  ActivityIndicator,
  Modal,
  Animated,
} = WebComponents;

export const { StyleSheet, Platform, Dimensions } = WebAPIs;

// Export types - flexible style types that work with both RN and CSS
export type ViewStyle = any;
export type TextStyle = any;
export type ImageStyle = any;
export type TextProps = React.HTMLAttributes<HTMLSpanElement>;
export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>;
export type ScrollViewProps = React.HTMLAttributes<HTMLDivElement>;
export type DimensionValue = string | number;
export type StyleProp<T> = T | T[] | null | undefined;

// Export platform info
export { PlatformInfo };

// Add CSS animation for spinner
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes baap-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}
