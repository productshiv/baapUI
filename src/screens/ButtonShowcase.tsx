import React from 'react';
import { ScrollView, View, StyleSheet, Platform } from 'react-native';
import { Button } from '../components/buttons/Button';
import { ThemeProvider } from '../core/theme/ThemeProvider';
import { MaterialIcons } from '@expo/vector-icons';

const ButtonShowcaseScreen: React.FC = () => {
  return (
    <ThemeProvider>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Button 
            title="Primary Button" 
            onPress={() => alert('Primary Button Pressed')}
            style={styles.button}
          />
          <Button 
            title="Secondary Button" 
            variant="secondary"
            onPress={() => alert('Secondary Button Pressed')}
            style={styles.button}
          />
          <Button 
            title="Outline Button" 
            variant="outline"
            onPress={() => alert('Outline Button Pressed')}
            style={styles.button}
          />
          <Button 
            title="Ghost Button" 
            variant="ghost"
            onPress={() => alert('Ghost Button Pressed')}
            style={styles.button}
          />
        </View>

        <View style={styles.section}>
          <Button 
            title="Small Button" 
            size="small"
            onPress={() => {}}
            style={styles.button}
          />
          <Button 
            title="Medium Button" 
            size="medium"
            onPress={() => {}}
            style={styles.button}
          />
          <Button 
            title="Large Button" 
            size="large"
            onPress={() => {}}
            style={styles.button}
          />
        </View>

        <View style={styles.section}>
          <Button 
            title="With Left Icon" 
            leftIcon={<MaterialIcons name="favorite" size={24} color="white" />}
            onPress={() => {}}
            style={styles.button}
          />
          <Button 
            title="With Right Icon" 
            rightIcon={<MaterialIcons name="arrow-forward" size={24} color="white" />}
            onPress={() => {}}
            style={styles.button}
          />
          <Button 
            title="Both Icons" 
            leftIcon={<MaterialIcons name="star" size={24} color="white" />}
            rightIcon={<MaterialIcons name="arrow-forward" size={24} color="white" />}
            onPress={() => {}}
            style={styles.button}
          />
        </View>

        <View style={styles.section}>
          <Button 
            title="Disabled Button" 
            disabled={true}
            onPress={() => {}}
            style={styles.button}
          />
          <Button 
            title="Loading Button" 
            loading={true}
            onPress={() => {}}
            style={styles.button}
          />
          <Button 
            title="Full Width Button" 
            fullWidth={true}
            onPress={() => {}}
            style={styles.button}
          />
        </View>
      </ScrollView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: Platform.select({ web: 40, default: 16 }),
  },
  section: {
    marginBottom: 32,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    ...Platform.select({
      web: {
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      },
      default: {
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
    }),
  },
  button: {
    marginVertical: 8,
  },
});

export default ButtonShowcaseScreen; 