import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  ViewStyle,
  ScrollView,
  ScrollViewProps,
} from 'react-native';

interface BaapSafeAreaProps extends ScrollViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  disableScroll?: boolean;
}

const BaapSafeArea: React.FC<BaapSafeAreaProps> = ({
  children,
  style,
  contentContainerStyle,
  disableScroll = false,
  ...scrollViewProps
}) => {
  return (
    <SafeAreaView style={[styles.safeArea, style]}>
      {disableScroll ? (
        children
      ) : (
        <ScrollView
          {...scrollViewProps}
          contentContainerStyle={[styles.scrollContainer, contentContainerStyle]}
        >
          {children}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default BaapSafeArea;
