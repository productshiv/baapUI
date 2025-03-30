# baapUI

## Overview

baapUI is a multi-design UI framework built with Expo, designed to support multiple design paradigms, including Neumorphism, Skeuomorphism, Flat Design, Material UI, and Simplistic Design. It aims to provide a versatile, scalable, and performant UI solution for Android, iOS, and Web applications.

## Installation

```bash
npm install @productshiv/baapuibeta
```

## Getting Started

### Running the Project

```bash
# Install dependencies
npm install

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on Web
npm run web

# Run Storybook
npm run storybook

# Build Storybook
npm run build-storybook

# Run Tests
npm test
```

## Available Components

### Core UI Components
- `Button` - Customizable button component with various styles
- `Input` - Text input field with customizable appearance
- `Label` - Text label component for form fields
- `Checkbox` - Selectable checkbox component
- `RadioButton` - Single-selection radio button component
- `Card` - Container component for grouping content

### Form Components
- `TextArea` - Multi-line text input component
- `ToggleSwitch` - On/off toggle switch component
- `Dropdown` - Selection dropdown menu
- `Slider` - Range selection component
- `Stepper` - Increment/decrement numeric input

### Navigation Components
- `Tabs` - Tab-based navigation component
- `Accordion` - Expandable/collapsible content sections
- `Breadcrumbs` - Navigation hierarchy component
- `Pagination` - Page navigation component
- `Drawer` - Slide-out navigation menu

### Feedback Components
- `Modal` - Dialog/popup window component
- `Toast` - Temporary notification component
- `Tooltip` - Informational hover tooltip
- `Badge` - Status/notification badge
- `ProgressBar` - Progress indicator component
- `SkeletonLoader` - Loading state placeholder

### Data Display Components
- `Avatar` - User profile image component
- `Chip` - Tag/label component
- `List` - Structured list component
- `Table` - Data table component
- `Carousel` - Scrollable content carousel
- `Divider` - Section separator component

### Utility Components
- `Spinner` - Loading spinner component
- `Typography` - Text styling system
- `Grid` - Layout grid system
- `BaapSafeArea` - Safe area wrapper component

## Component Usage

Each component is documented in its respective story file under `src/components/ComponentName/ComponentName.stories.tsx`. You can run Storybook to see live examples and documentation.

### Example Usage

```tsx
import React from 'react';
import { View } from 'react-native';
import { Button, Card, Typography } from '@productshiv/baapuibeta';

const Example = () => {
  return (
    <Card>
      <Typography variant="h1">Hello baapUI!</Typography>
      <Button 
        variant="primary"
        onPress={() => console.log('Pressed!')}
      >
        Click Me
      </Button>
    </Card>
  );
};
```

## Development

### Project Structure
```
baapUI/
│── src/
│   ├── components/      # UI components
│   │   ├── ComponentName/
│   │   │   ├── ComponentName.tsx
│   │   │   ├── ComponentName.stories.tsx
│   │   │   └── __tests__/
│   ├── themes/          # Theme definitions
│   └── utils/          # Helper functions
│── .storybook/         # Storybook configuration
│── jest.setup.ts       # Jest configuration
└── package.json
```

### Testing
Tests are written using Jest and React Native Testing Library. Run tests with:
```bash
npm test
```

### Storybook
Component documentation and examples are available in Storybook. Run it with:
```bash
npm run storybook
```

## Contributing
Please read our contributing guidelines before submitting pull requests.

## License
MIT License - see LICENSE file for details.

## Support
For issues and feature requests, please use the GitHub issue tracker.
