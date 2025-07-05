import React, { useState } from 'react';
import { View, StyleSheet } from '../platform';
import { ThemeProvider, useTheme } from '../themes/ThemeContext';
import { ThemeDesign } from '../themes/types';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';
import Typography from '../components/Typography/Typography';
import Input from '../components/Input/Input';

// Theme Switcher Component
const ThemeSwitcher: React.FC = () => {
  const { design, setDesign } = useTheme();
  
  const designs: ThemeDesign[] = ['flat', 'neumorphic', 'skeuomorphic'];
  
  return (
    <View style={styles.themeSwitcher}>
      <Typography variant="h6">Current Theme: {design}</Typography>
      <View style={styles.buttonRow}>
        {designs.map((themeDesign) => (
          <Button
            key={themeDesign}
            variant={design === themeDesign ? 'primary' : 'outline'}
            size="small"
            onPress={() => setDesign(themeDesign)}
          >
            {themeDesign.charAt(0).toUpperCase() + themeDesign.slice(1)}
          </Button>
        ))}
      </View>
    </View>
  );
};

// Demo Form Component
const DemoForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <Card style={styles.formCard}>
      <Typography variant="h2" align="center">Welcome Back</Typography>
      <Typography variant="body" align="center" style={styles.subtitle}>
        Sign in to your account
      </Typography>
      
      <Input
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        style={styles.input}
      />
      
      <Input
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        secureTextEntry
        style={styles.input}
      />
      
      <Button
        variant="primary"
        onPress={() => alert('Login attempted!')}
        style={styles.loginButton}
      >
        Sign In
      </Button>
      
      <Typography variant="caption" align="center">
        Forgot your password?
      </Typography>
    </Card>
  );
};

// Main App Component
const AppContent: React.FC = () => {
  const { design } = useTheme();
  
  return (
    <View style={[
      styles.container,
      design === 'neumorphic' ? styles.neumorphicBackground : styles.flatBackground
    ]}>
      <Typography variant="h1" align="center" style={styles.title}>
        🚀 BaapUI ThemeProvider Demo
      </Typography>
      
      <Typography variant="body" align="center" style={styles.description}>
        This demo shows how ThemeProvider eliminates the need to pass design props to each component.
        All components automatically inherit the current theme!
      </Typography>
      
      <ThemeSwitcher />
      
      <DemoForm />
      
      <View style={styles.infoSection}>
        <Typography variant="h3">✨ Key Benefits</Typography>
        <Typography variant="body">• Single source of truth for design system</Typography>
        <Typography variant="body">• Clean component code without repetitive design props</Typography>
        <Typography variant="body">• Easy theme switching (like dark/light mode)</Typography>
        <Typography variant="body">• Better developer experience</Typography>
        <Typography variant="body">• Scalable architecture</Typography>
      </View>
    </View>
  );
};

// Root App with ThemeProvider
const App: React.FC = () => {
  return (
    <ThemeProvider initialDesign="flat">
      <AppContent />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    minHeight: '100vh',
  },
  flatBackground: {
    backgroundColor: '#ffffff',
  },
  neumorphicBackground: {
    backgroundColor: '#f0f0f0',
  },
  title: {
    marginBottom: 16,
  },
  description: {
    marginBottom: 24,
    maxWidth: 600,
    alignSelf: 'center',
  },
  themeSwitcher: {
    alignItems: 'center',
    marginBottom: 32,
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },
  formCard: {
    maxWidth: 400,
    alignSelf: 'center',
    marginBottom: 32,
  },
  subtitle: {
    marginBottom: 24,
    opacity: 0.7,
  },
  input: {
    marginBottom: 16,
  },
  loginButton: {
    marginBottom: 16,
  },
  infoSection: {
    maxWidth: 600,
    alignSelf: 'center',
    padding: 20,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});

export default App;
