# 🚀 BaapUI - Truly Cross-Platform UI Library

A **truly cross-platform** multi-design UI component library that works seamlessly across **React**, **Next.js**, **React Native**, and any React-based framework.

![Version](https://img.shields.io/npm/v/@productshiv/baapui)
![License](https://img.shields.io/npm/l/@productshiv/baapui)
![Platform Support](https://img.shields.io/badge/platform-React%20%7C%20Next.js%20%7C%20React%20Native-blue)
![Design Systems](https://img.shields.io/badge/designs-5%20systems-purple)

## ✨ What Makes BaapUI Special?

🎯 **Framework Agnostic** - Works with React, Next.js, React Native, Remix, Gatsby, and more  
🎨 **5 Design Systems** - Flat, Neumorphic, Glassmorphic, Skeuomorphic, Retro  
📱 **Platform Detection** - Automatically adapts to web, mobile, and desktop  
🔧 **Zero Config** - No platform-specific setup required  
⚡ **Performance First** - Tree-shakeable with minimal bundle impact  
🧩 **30+ Components** - Complete UI component ecosystem

---

## 🏃‍♂️ Quick Start

### Install

```bash
npm install @productshiv/baapui
# or
yarn add @productshiv/baapui
# or
pnpm add @productshiv/baapui
```

### Basic Usage

```jsx
import React from 'react';
import { Button, Input, Card, ThemeProvider } from '@productshiv/baapui';

function App() {
  return (
    <ThemeProvider>
      <Card>
        <Input label="Email" placeholder="Enter email" />
        <Button variant="primary">Submit</Button>
      </Card>
    </ThemeProvider>
  );
}
```

**That's it!** The same code works in React, Next.js, React Native, and more.

---

## 🌍 Platform Support

### ✅ React Web

```jsx
import { Button, ThemeProvider } from '@productshiv/baapui';

function MyReactApp() {
  return (
    <ThemeProvider>
      <Button>Click me!</Button>
    </ThemeProvider>
  );
}
```

### ✅ Next.js (with SSR)

```jsx
// pages/index.tsx
import { Button, Card, ThemeProvider } from '@productshiv/baapui';

export default function Home() {
  return (
    <ThemeProvider>
      <Card>
        <Button>Server-rendered button!</Button>
      </Card>
    </ThemeProvider>
  );
}
```

### ✅ React Native

```jsx
import { Button, View, ThemeProvider } from '@productshiv/baapui';

export default function App() {
  return (
    <ThemeProvider>
      <View>
        <Button>Native button!</Button>
      </View>
    </ThemeProvider>
  );
}
```

### ✅ Expo

```jsx
// Works with Expo out of the box
import { Button, ThemeProvider } from '@productshiv/baapui';

export default function App() {
  return (
    <ThemeProvider>
      <Button>Expo button!</Button>
    </ThemeProvider>
  );
}
```

---

## 🎨 Design Systems

BaapUI supports 5 different design systems that can be switched dynamically:

### 1. Flat Design (Default)

```jsx
<Button design="flat">Flat Button</Button>
```

### 2. Neumorphic

```jsx
<Button design="neumorphic">Soft UI Button</Button>
<Input design="neumorphic" placeholder="Soft input" />
```

### 3. Glassmorphic _(Coming Soon)_

```jsx
<Button design="glassmorphic">Glass Button</Button>
```

### 4. Skeuomorphic _(Coming Soon)_

```jsx
<Button design="skeuomorphic">Realistic Button</Button>
```

### 5. Retro _(Coming Soon)_

```jsx
<Button design="retro">Vintage Button</Button>
```

---

## 🧩 Components

### Form Controls

- **Button** - Primary, secondary, outline, text variants
- **Input** - Text input with validation
- **TextArea** - Multi-line text input
- **Checkbox** - Single/multiple selection
- **RadioButton** - Single selection from group
- **ToggleSwitch** - On/off toggle
- **Slider** - Range selection
- **Dropdown** - Select from options
- **Stepper** - Increment/decrement values

### Navigation

- **Breadcrumbs** - Navigation hierarchy
- **Tabs** - Tab navigation
- **Pagination** - Page navigation
- **Drawer** - Side navigation
- **Accordion** - Expandable sections

### Layout

- **Card** - Content container
- **Grid** - Layout system
- **Divider** - Section separator
- **BaapSafeArea** - Safe area wrapper

### Feedback

- **Toast** - Temporary notifications
- **Modal** - Overlay dialogs
- **Tooltip** - Contextual help
- **Spinner** - Loading indicator
- **ProgressBar** - Progress indicator
- **SkeletonLoader** - Loading placeholder

### Data Display

- **Table** - Data tables
- **List** - Item lists
- **Badge** - Status indicators
- **Chip** - Compact elements
- **Avatar** - User representation
- **Typography** - Text styling
- **Carousel** - Image/content slider

---

## 🔧 API Reference

### ThemeProvider

Wrap your app with `ThemeProvider` to enable theming:

```jsx
import { ThemeProvider } from '@productshiv/baapui';

<ThemeProvider>
  <YourApp />
</ThemeProvider>;
```

### Platform Detection

```jsx
import { PlatformInfo } from '@productshiv/baapui';

console.log(PlatformInfo);
// {
//   isReactNative: false,
//   isWeb: true,
//   OS: 'web'
// }
```

### Component Props

All components support standard props plus design system variants:

```jsx
<Button
  variant="primary"
  size="medium"
  design="neumorphic"
  disabled={false}
  loading={false}
  onPress={() => console.log('Pressed!')}
>
  Click me
</Button>
```

---

## 🎯 Framework-Specific Setup

### React

No additional setup required! Just install and use.

### Next.js

Works with SSR out of the box. For better performance, add to `next.config.js`:

```js
module.exports = {
  transpilePackages: ['@productshiv/baapui'],
};
```

### React Native

For React Native projects, ensure you have these peer dependencies:

```bash
npm install react-native react-native-svg
```

### Expo

Works directly with Expo. No additional setup needed.

---

## 🚀 Advanced Usage

### Custom Themes

```jsx
import { ThemeProvider, createTheme } from '@productshiv/baapui';

const customTheme = createTheme({
  colors: {
    primary: '#your-color',
    secondary: '#your-secondary',
  },
  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
  },
});

<ThemeProvider theme={customTheme}>
  <YourApp />
</ThemeProvider>;
```

### Dynamic Design Switching

```jsx
import { useTheme } from '@productshiv/baapui';

function ThemeSwitcher() {
  const { setDesign } = useTheme();

  return (
    <div>
      <button onClick={() => setDesign('flat')}>Flat</button>
      <button onClick={() => setDesign('neumorphic')}>Neumorphic</button>
    </div>
  );
}
```

---

## 📦 Bundle Size

BaapUI is designed for optimal bundle size:

- **Core**: ~15KB gzipped
- **Individual Components**: ~2-5KB each
- **Tree Shakeable**: Import only what you use
- **Zero Dependencies**: No external runtime dependencies

```jsx
// Import only what you need
import { Button, Input } from '@productshiv/baapui';
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
git clone https://github.com/productshiv/baapui.git
cd baapui
npm install
npm run dev
```

### Running Storybook

```bash
npm run storybook
```

---

## 📄 License

MIT © [Shivam Srivastava](https://github.com/productshiv)

---

## 🔗 Links

- [Documentation](https://baapui.dev)
- [Storybook](https://storybook.baapui.dev)
- [GitHub](https://github.com/productshiv/baapui)
- [NPM](https://npmjs.com/package/@productshiv/baapui)

---

**Made with ❤️ for the React ecosystem**
