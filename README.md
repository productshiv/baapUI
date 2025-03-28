# BaapUI - A Modern React Native UI Library

BaapUI is a beautiful, accessible, and performant UI library for React Native and React Native Web applications. Built with TypeScript and designed with modern applications in mind.

## Features

- 🎨 Beautiful, modern design system with multiple design languages
- 📱 Cross-platform support (iOS, Android, Web)
- 🔧 Highly customizable through theming
- 🎯 Written in TypeScript for type safety
- ♿️ Accessibility support
- 🌗 Light and dark mode support (coming soon)
- 🎭 Multiple design languages (Flat, Neumorphism, Glassmorphism, Material)

## Installation

```bash
npm install baapui
# or
yarn add baapui
```

## Quick Start

1. Wrap your app with the ThemeProvider:

```tsx
import { ThemeProvider } from 'baapui';

export default function App() {
  return (
    <ThemeProvider>
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

2. Start using components:

```tsx
import { Button } from 'baapui';

function MyComponent() {
  return (
    <Button 
      title="Click Me"
      variant="primary"
      onPress={() => console.log('Button pressed!')}
    />
  );
}
```

## Components

### Button

A versatile button component that supports multiple variants, sizes, states, and design languages.

```tsx
import { Button } from 'baapui';

// Basic usage
<Button 
  title="Click Me"
  onPress={() => {}}
/>

// Different variants
<Button variant="primary" title="Primary" />
<Button variant="secondary" title="Secondary" />
<Button variant="outline" title="Outline" />
<Button variant="ghost" title="Ghost" />

// Different sizes
<Button size="small" title="Small" />
<Button size="medium" title="Medium" />
<Button size="large" title="Large" />

// With icons
<Button 
  title="With Icons"
  leftIcon={<Icon name="star" />}
  rightIcon={<Icon name="arrow-right" />}
/>

// States
<Button loading={true} title="Loading" />
<Button disabled={true} title="Disabled" />
<Button fullWidth={true} title="Full Width" />
```

## Design Languages

BaapUI supports multiple design languages that can be configured through the theme:

### Flat (Default)
Clean and minimal design with solid colors and simple hover/press states.

### Neumorphism
Soft UI design with light and dark shadows, creating a subtle 3D effect.

```tsx
const theme = {
  components: {
    button: {
      designLanguage: 'neumorphism',
      neumorphism: {
        shadowLight: '#FFFFFF',
        shadowDark: '#D1D9E6',
        intensity: 0.15,
        blur: 15,
        distance: 5,
        pressed: {
          intensity: 0.25,
          blur: 10,
          distance: 2,
        },
      },
    },
  },
};
```

### Glassmorphism
Modern frosted glass effect with transparency and blur.

```tsx
const theme = {
  components: {
    button: {
      designLanguage: 'glassmorphism',
      glassmorphism: {
        blur: 10,
        opacity: 0.3,
        borderOpacity: 0.1,
      },
    },
  },
};
```

### Material
Following Material Design principles with elevation and state layers.

```tsx
const theme = {
  components: {
    button: {
      designLanguage: 'material',
      material: {
        elevation: 2,
        stateLayerOpacity: 0.12,
      },
    },
  },
};
```

## Theming

BaapUI comes with a default theme but is highly customizable. You can override the default theme:

```tsx
import { ThemeProvider } from 'baapui';

const customTheme = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    // ... other colors
  },
  components: {
    button: {
      designLanguage: 'neumorphism', // or 'flat', 'glassmorphism', 'material'
      // ... other button styles
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

## Development

To start developing the library:

```bash
# Clone the repository
git clone https://github.com/yourusername/baapui.git

# Install dependencies
cd baapui
npm install

# Start the development server
npm start
```

## Contributing

We welcome contributions! Please see our contributing guide for details.

## License

MIT © [Your Name]
