import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../Button';

const IconExample = () => <View style={styles.icon} />;

export const ButtonExamples: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleLoadingPress = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <View style={styles.container}>
      {/* Basic Buttons */}
      <Button 
        title="Primary Button" 
        onPress={() => {}} 
        style={styles.button}
      />
      <Button 
        title="Secondary Button" 
        variant="secondary" 
        onPress={() => {}} 
        style={styles.button}
      />
      <Button 
        title="Outline Button" 
        variant="outline" 
        onPress={() => {}} 
        style={styles.button}
      />
      <Button 
        title="Ghost Button" 
        variant="ghost" 
        onPress={() => {}} 
        style={styles.button}
      />

      {/* Size Variations */}
      <Button 
        title="Small Button" 
        size="small" 
        onPress={() => {}} 
        style={styles.button}
      />
      <Button 
        title="Large Button" 
        size="large" 
        onPress={() => {}} 
        style={styles.button}
      />

      {/* States */}
      <Button 
        title="Disabled Button" 
        disabled={true} 
        onPress={() => {}} 
        style={styles.button}
      />
      <Button 
        title={loading ? 'Loading...' : 'Click to Load'} 
        loading={loading} 
        onPress={handleLoadingPress} 
        style={styles.button}
      />

      {/* Icons */}
      <Button 
        title="Left Icon" 
        leftIcon={<IconExample />} 
        onPress={() => {}} 
        style={styles.button}
      />
      <Button 
        title="Right Icon" 
        rightIcon={<IconExample />} 
        onPress={() => {}} 
        style={styles.button}
      />
      <Button 
        title="Both Icons" 
        leftIcon={<IconExample />} 
        rightIcon={<IconExample />} 
        onPress={() => {}} 
        style={styles.button}
      />

      {/* Full Width */}
      <Button 
        title="Full Width Button" 
        fullWidth={true} 
        onPress={() => {}} 
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 8,
  },
  button: {
    marginVertical: 4,
  },
  icon: {
    width: 16,
    height: 16,
    backgroundColor: 'currentColor',
    borderRadius: 8,
    marginHorizontal: 8,
  },
}); 