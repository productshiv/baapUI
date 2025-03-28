# BaapUI - A Modern React Native UI Library

BaapUI is a beautiful, accessible, and performant UI library for React Native and React Native Web applications. Built with TypeScript and designed with modern applications in mind.

## Features

- 🎨 Beautiful, modern design system
- 📱 Cross-platform support (iOS, Android, Web)
- 🔧 Highly customizable through theming
- 🎯 Written in TypeScript for type safety
- ♿️ Accessibility support
- 🌗 Light and dark mode support (coming soon)

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

A versatile button component that supports multiple variants, sizes, and states.

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

## Theming

BaapUI comes with a default theme but is highly customizable. You can override the default theme:

```tsx
import { ThemeProvider, defaultTheme } from 'baapui';

const customTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#007AFF',
    secondary: '#5856D6',
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
