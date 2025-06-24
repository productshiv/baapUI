// Platform abstraction layer for cross-platform compatibility
import React from 'react';

// Detect platform
const isReactNative = () => {
  try {
    return typeof require('react-native') !== 'undefined';
  } catch {
    return false;
  }
};

const isWeb = () => {
  return typeof window !== 'undefined';
};

// Platform-specific imports
let PlatformComponents: any = {};
let PlatformAPIs: any = {};

if (isReactNative()) {
  // React Native imports
  try {
    const RN = require('react-native');
    PlatformComponents = {
      View: RN.View,
      Text: RN.Text,
      TextInput: RN.TextInput,
      TouchableOpacity: RN.TouchableOpacity,
      Pressable: RN.Pressable,
      ScrollView: RN.ScrollView,
      Image: RN.Image,
      ActivityIndicator: RN.ActivityIndicator,
      Modal: RN.Modal,
      Animated: RN.Animated,
    };
    
    PlatformAPIs = {
      StyleSheet: RN.StyleSheet,
      Platform: RN.Platform,
      Dimensions: RN.Dimensions,
    };
  } catch (error) {
    console.warn('React Native not available, falling back to web components');
  }
}

if (!PlatformComponents.View) {
  // Web/React fallback components
  PlatformComponents = {
    View: ({ style, children, onPress, ...props }: any) => {
      const webStyle = convertRNStyleToWeb(style);
      return React.createElement(
        onPress ? 'button' : 'div',
        {
          style: webStyle,
          onClick: onPress,
          ...props,
        },
        children
      );
    },
    
    Text: ({ style, children, ...props }: any) => {
      const webStyle = convertRNStyleToWeb(style);
      return React.createElement('span', {
        style: webStyle,
        ...props,
      }, children);
    },
    
    TextInput: ({ style, onChangeText, value, placeholder, ...props }: any) => {
      const webStyle = convertRNStyleToWeb(style);
      return React.createElement('input', {
        type: 'text',
        style: webStyle,
        onChange: (e: any) => onChangeText?.(e.target.value),
        value,
        placeholder,
        ...props,
      });
    },
    
    TouchableOpacity: ({ style, onPress, children, disabled, ...props }: any) => {
      const webStyle = convertRNStyleToWeb(style);
      return React.createElement('button', {
        style: {
          ...webStyle,
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1,
        },
        onClick: disabled ? undefined : onPress,
        disabled,
        ...props,
      }, children);
    },
    
    Pressable: ({ style, onPress, children, disabled, ...props }: any) => {
      const webStyle = convertRNStyleToWeb(style);
      return React.createElement('button', {
        style: {
          ...webStyle,
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1,
        },
        onClick: disabled ? undefined : onPress,
        disabled,
        ...props,
      }, children);
    },
    
    ScrollView: ({ style, children, ...props }: any) => {
      const webStyle = convertRNStyleToWeb(style);
      return React.createElement('div', {
        style: {
          ...webStyle,
          overflow: 'auto',
        },
        ...props,
      }, children);
    },
    
    Image: ({ style, source, ...props }: any) => {
      const webStyle = convertRNStyleToWeb(style);
      const src = typeof source === 'object' ? source.uri : source;
      return React.createElement('img', {
        style: webStyle,
        src,
        ...props,
      });
    },
    
    ActivityIndicator: ({ color = '#000', size = 'medium', style }: any) => {
      const webStyle = convertRNStyleToWeb(style);
      const sizeValue = size === 'small' ? '16px' : size === 'large' ? '32px' : '24px';
      
      return React.createElement('div', {
        style: {
          ...webStyle,
          width: sizeValue,
          height: sizeValue,
          border: `2px solid ${color}30`,
          borderTop: `2px solid ${color}`,
          borderRadius: '50%',
          animation: 'baap-spin 1s linear infinite',
        },
      });
    },
    
    Modal: ({ visible, children, onRequestClose, ...props }: any) => {
      if (!visible) return null;
      
      return React.createElement('div', {
        style: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        },
        onClick: onRequestClose,
        ...props,
      }, React.createElement('div', {
        onClick: (e: any) => e.stopPropagation(),
      }, children));
    },
    
    Animated: {
      View: PlatformComponents.View || (() => null),
      Text: PlatformComponents.Text || (() => null),
    },
  };
  
  PlatformAPIs = {
    StyleSheet: {
      create: (styles: any) => styles,
    },
    Platform: {
      OS: isWeb() ? 'web' : 'unknown',
      select: (options: any) => options.web || options.default,
    },
    Dimensions: {
      get: () => ({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
      }),
    },
  };
}

// Convert React Native styles to web-compatible styles
function convertRNStyleToWeb(rnStyle: any): React.CSSProperties {
  if (!rnStyle) return {};
  
  const webStyle: any = { ...rnStyle };
  
  // Convert RN-specific style properties to web equivalents
  const conversions: Record<string, string> = {
    shadowColor: 'boxShadow',
    shadowOffset: 'boxShadow',
    shadowOpacity: 'boxShadow',
    shadowRadius: 'boxShadow',
    elevation: 'boxShadow',
  };
  
  // Handle shadow conversion
  if (webStyle.shadowColor || webStyle.elevation) {
    const shadowColor = webStyle.shadowColor || 'rgba(0,0,0,0.2)';
    const shadowOffset = webStyle.shadowOffset || { width: 0, height: 2 };
    const shadowOpacity = webStyle.shadowOpacity || 0.2;
    const shadowRadius = webStyle.shadowRadius || webStyle.elevation || 4;
    
    webStyle.boxShadow = `${shadowOffset.width}px ${shadowOffset.height}px ${shadowRadius}px ${shadowColor}`;
    
    // Clean up RN-specific properties
    delete webStyle.shadowColor;
    delete webStyle.shadowOffset;
    delete webStyle.shadowOpacity;
    delete webStyle.shadowRadius;
    delete webStyle.elevation;
  }
  
  // Handle flexbox differences
  if (webStyle.alignItems === 'stretch') {
    webStyle.alignItems = 'stretch';
  }
  
  // Add CSS animation keyframes if needed
  if (typeof document !== 'undefined' && !document.querySelector('#baap-animations')) {
    const style = document.createElement('style');
    style.id = 'baap-animations';
    style.textContent = `
      @keyframes baap-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }
  
  return webStyle;
}

// Export platform components and APIs
export const {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Image,
  ActivityIndicator,
  Modal,
  Animated,
} = PlatformComponents;

export const {
  StyleSheet,
  Platform,
  Dimensions,
} = PlatformAPIs;

// Export types based on platform
export type ViewStyle = any;
export type TextStyle = any;
export type ImageStyle = any;

// Platform detection utilities
export const PlatformInfo = {
  isReactNative: isReactNative(),
  isWeb: isWeb(),
  OS: PlatformAPIs.Platform.OS,
}; 