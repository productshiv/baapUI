import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ButtonShowcaseScreen from './src/screens/ButtonShowcase';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <ButtonShowcaseScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
}); 