# BaapUI Library - AI Assistant Guide

## 🎯 Project Overview

**BaapUI** is a truly cross-platform UI component library that works seamlessly across React, Next.js, React Native, and Expo with 5 different design systems and global branding capabilities.

### Core Goals

- Build comprehensive UI components for all user needs
- Support 5 design systems: **Flat**, **Neumorphic**, **Skeuomorphic**, **Glassmorphic**, **Retro**
- Enable global branding with customizable colors and themes
- Maintain high code quality with TypeScript, testing, and documentation
- Provide seamless cross-platform compatibility (React Web, Next.js, React Native, Expo)

### Current Status (75% Complete) 🚀

- ✅ **30+ components** implemented with flat design
- ✅ **Cross-platform architecture** - Works on React, Next.js, React Native, Expo
- ✅ **Platform abstraction layer** with automatic environment detection
- ✅ **Intelligent prop filtering** to prevent React Native warnings on web
- ✅ **Flexible React support** - Compatible with React 16.8+ through React 19
- ✅ **Zero runtime dependencies** with eval-wrapped React Native imports
- ✅ **Storybook** setup for development and testing
- ✅ **TypeScript** configuration and testing infrastructure
- ✅ **Basic theming** system with neumorphic partially implemented
- ✅ **Published on npm** as `@productshiv/baapui@2.0.4`
- ❌ **Missing 3 design systems** (Skeuomorphic, Glassmorphic, Retro)
- ❌ **No global branding** system
- ❌ **Dark mode variants** incomplete

## 📁 Project Structure

```
baapUI/
├── ai.md                          # This file - AI assistant guide
├── src/
│   ├── components/                # 30+ UI components
│   │   ├── Button/
│   │   │   ├── Button.tsx         # Component implementation
│   │   │   └── Button.stories.tsx # Storybook stories
│   │   ├── Input/
│   │   ├── Modal/
│   │   └── ... (see full list below)
│   ├── platform/                  # 🚀 NEW: Cross-platform abstraction layer
│   │   └── index.ts              # Platform detection & component mapping
│   ├── themes/                    # Theme system
│   │   ├── ThemeContext.tsx       # Theme provider
│   │   ├── types.ts              # Theme type definitions
│   │   ├── variants/             # Design system implementations
│   │   │   ├── flat.ts           # ✅ Complete
│   │   │   └── neumorphic.ts     # 🔄 Partial
│   │   └── utils/                # Theme utilities
│   │       ├── neumorphic.ts     # Neumorphic helpers
│   │       └── useNeumorphicShadow.ts
│   ├── screens/                  # Example screens
│   │   └── SampleScreen.tsx
│   └── utils/                    # Shared utilities
│       └── codeGenerator.ts      # Code generation helpers
├── dist/                         # 🚀 NEW: Built package for npm
│   ├── index.js                  # CommonJS build
│   ├── index.esm.js             # ESM build
│   └── index.d.ts               # TypeScript definitions
├── rules/
│   ├── mistakes.mdc              # AI mistakes log
│   └── prd.mdc                   # Product requirements
├── __mocks__/                    # Jest mocks
├── rollup.config.js              # 🚀 NEW: Build configuration
├── jest.config.js                # Jest configuration
├── jest.setup.js                 # Jest setup
├── package.json                  # Dependencies and scripts
└── tsconfig.json                 # TypeScript configuration
```

### Available Components (30+)

- **Form Controls**: Button, Input, TextArea, Checkbox, RadioButton, ToggleSwitch, Slider
- **Navigation**: Breadcrumbs, Tabs, Pagination, Stepper
- **Layout**: Card, Grid, Divider, BaapSafeArea
- **Feedback**: Toast, Modal, Tooltip, Spinner, ProgressBar, SkeletonLoader
- **Data Display**: Table, List, Badge, Chip, Avatar, Typography
- **Interactive**: Dropdown, Drawer, Carousel, Accordion
- **Advanced**: Label (with design system support)

## 🌍 Cross-Platform Architecture (v2.0.4+)

### Platform Abstraction Layer

BaapUI now features a sophisticated platform abstraction layer (`src/platform/index.ts`) that:

- **Automatic Environment Detection**: Detects React Native vs Web at runtime
- **Component Mapping**: Maps React Native components to HTML elements on web
- **Style Translation**: Converts React Native styles to CSS automatically
- **Prop Filtering**: Removes React Native-specific props on web to prevent warnings
- **Zero Configuration**: No build-time setup required

### Supported Environments

| Platform           | Status | Notes                                        |
| ------------------ | ------ | -------------------------------------------- |
| **React Web Apps** | ✅     | Full support with automatic style conversion |
| **Next.js**        | ✅     | SSR compatible with runtime detection        |
| **React Native**   | ✅     | Native React Native components               |
| **Expo**           | ✅     | Full Expo compatibility                      |

### Installation & Usage

```bash
npm install @productshiv/baapui
```

**Same code works everywhere:**

```tsx
import { Button, Card, Typography, ThemeProvider } from '@productshiv/baapui';

function App() {
  return (
    <ThemeProvider>
      <Card>
        <Typography variant="h1">Cross-Platform!</Typography>
        <Button onPress={() => alert('Works everywhere!')}>Click Me</Button>
      </Card>
    </ThemeProvider>
  );
}
```

### Technical Implementation

- **Eval-wrapped React Native imports**: Prevents webpack bundling issues
- **Flexible peer dependencies**: React 16.8+ through React 19 support
- **Intelligent prop filtering**: Removes `numberOfLines`, `onPressIn`, `activeOpacity`, etc. on web
- **CSS animation fallbacks**: Replaces React Native Animated with CSS animations
- **Platform-specific optimizations**: Different rendering strategies per platform

## 🛠️ Development Workflow

### 1. Plane Integration (CRITICAL)

**Every AI working on BaapUI MUST follow this workflow:**

#### For New Components:

1. **Create Plane ticket FIRST** with component requirements
2. **Get user approval** for design and API approach
3. **Document progress** in ticket comments during development
4. **Update ticket status** when component is complete
5. **Link to related design system tickets**

#### For Design System Implementation:

1. **Create design system ticket** with visual examples
2. **Document color schemes** and styling approach
3. **Test across all existing components**
4. **Update theme documentation**

#### For Bug Fixes:

1. **Create bug ticket** with reproduction steps
2. **Document investigation** and root cause
3. **Test fix across all design systems**
4. **Update relevant tests**

#### Plane Project Details:

- **Project ID**: `6be3c1e0-eda3-4570-8ebc-855f74f300d8`
- **Project Name**: "BaapUI - Multi-Design UI Library"
- **Component Label**: Tag component-related tickets appropriately

### 2. Code Quality Standards

- **TypeScript**: All components must be properly typed with interfaces
- **Testing**: Components should have comprehensive tests
- **Storybook**: All components must have stories with all variants
- **Documentation**: Props and usage examples required
- **Design Systems**: All components must support theme variants
- **Accessibility**: Follow React Native accessibility guidelines

### 3. Component Development Pattern

```typescript
// Component structure template
interface ComponentProps {
  // Define all props with proper types
}

export const Component: React.FC<ComponentProps> = ({
  // Destructure props
}) => {
  const theme = useTheme(); // Use theme context

  // Component logic

  return (
    // JSX with theme-based styling
  );
};

// Export with proper typing
export type { ComponentProps };
```

## 🎨 Design System Implementation

### Priority Order:

1. **Flat Design** ✅ (Complete)
2. **Neumorphic** 🔄 (Partial - needs dark mode)
3. **Glassmorphic** 🚧 (High priority)
4. **Skeuomorphic** 🚧 (Medium priority)
5. **Retro** 🚧 (Low priority)

### Theme Structure:

```typescript
interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    border: string;
    // ... more colors
  };
  spacing: number[];
  typography: {
    fontFamily: string;
    fontSizes: number[];
    fontWeights: Record<string, string>;
  };
  shadows: {
    // Shadow definitions per design system
    small: ShadowStyle;
    medium: ShadowStyle;
    large: ShadowStyle;
  };
  borderRadius: number[];
}
```

### Adding New Design System:

1. Create theme file in `src/themes/variants/`
2. Define color palette and styling rules
3. Implement shadow/gradient systems
4. Test with existing components
5. Create Storybook examples
6. Document usage patterns

## 🚀 Getting Started (For New AI Assistants)

### 1. First Steps:

```bash
# Navigate to BaapUI library
cd baapUI

# Install dependencies
npm install

# Start Storybook for development
npm run storybook

# Run tests
npm test

# Build library
npm run build
```

### 2. Development Environment:

- **Storybook**: Main development interface at `http://localhost:6006`
- **Jest**: Testing framework with React Native Testing Library
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency

### 3. Component Development Flow:

1. Create component folder in `src/components/`
2. Implement component with TypeScript
3. Create comprehensive Storybook stories
4. Write unit tests
5. Test across all design systems
6. Document props and usage

## 📋 Current TODOs (High Priority)

### Design Systems:

1. **Complete neumorphic dark mode** - Finish the partial implementation
2. **Implement glassmorphic design** - High user demand, modern aesthetic
3. **Implement skeuomorphic design** - Rich, detailed textures
4. **Implement retro design** - Vintage, nostalgic styling
5. **Global branding system** - Allow runtime color customization

### Component Improvements:

1. **Accessibility compliance** - WCAG 2.1 standards
2. **Performance optimization** - Reduce bundle size
3. **Animation improvements** - Smooth transitions
4. **Cross-platform testing** - iOS, Android, Web compatibility

### Documentation:

1. **Component API documentation** - Detailed prop descriptions
2. **Design system guides** - Implementation and customization
3. **Migration guides** - Between design systems
4. **Best practices** - Usage patterns and recommendations

## 🔄 AI Workflow Checklist

Before starting any work on BaapUI, every AI must:

- [ ] Read this `ai.md` file completely
- [ ] Check current component status in Storybook
- [ ] Create Plane ticket for proposed work
- [ ] Get user approval before proceeding
- [ ] Test changes across all design systems
- [ ] Update component tests and stories
- [ ] Document progress in ticket comments
- [ ] Update this `ai.md` if structure changes

## 📝 Important Notes

### For AI Assistants:

- **ALWAYS** test components in Storybook first
- **NEVER** break existing design system compatibility
- **ALWAYS** follow the established component patterns
- **KEEP** TypeScript interfaces comprehensive
- **TEST** across iOS, Android, and Web platforms
- **DOCUMENT** all props and usage examples

### Component Guidelines:

- Use theme context for all styling
- Support all implemented design systems
- Include proper accessibility props
- Handle edge cases and error states
- Maintain consistent API patterns
- Follow React Native best practices

### Testing Requirements:

- Unit tests for component logic
- Snapshot tests for visual consistency
- Accessibility tests
- Cross-platform compatibility tests

---

_This document should be updated by every AI that works on the BaapUI library to reflect current state and learnings._

**Last Updated**: December 25, 2024 - Cross-platform migration completed (v2.0.4)
**Major Achievement**: ✅ True cross-platform compatibility achieved - works on React, Next.js, React Native, and Expo
**Next Update Needed**: After glassmorphic design system implementation

## 🏆 Recent Major Achievements (v2.0.4)

### Cross-Platform Migration (December 2024)

- ✅ **Resolved React Native import issues** using eval-wrapped requires
- ✅ **Fixed multiple React instances problem** with proper peer dependencies
- ✅ **Eliminated React Native prop warnings** with intelligent filtering
- ✅ **Published cross-platform package** to npm as `@productshiv/baapui@2.0.4`
- ✅ **Tested successfully** in React web environment with zero configuration
- ✅ **Achieved true "write once, run anywhere"** for React components

This represents a major milestone in React UI library development - BaapUI is now one of the first libraries to achieve seamless cross-platform compatibility without requiring different builds or configurations for different environments.
