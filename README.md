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

## Component Usage Guide

### Basic Import
Import components individually from the package:
```tsx
import { Button, Card, Typography } from '@productshiv/baapuibeta';
```

### Core UI Components

#### Button
```tsx
// Basic Button
<Button onPress={() => console.log('Pressed!')}>Click Me</Button>

// Button with variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>

// Button with size
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// Disabled Button
<Button disabled>Disabled</Button>

// Loading Button
<Button loading>Loading</Button>
```

#### Input
```tsx
// Basic Input
<Input placeholder="Enter text" />

// Input with label
<Input 
  label="Username"
  placeholder="Enter username"
  onChangeText={(text) => console.log(text)}
/>

// Input with validation
<Input 
  label="Email"
  error="Invalid email format"
  onChangeText={(text) => validateEmail(text)}
/>
```

#### Checkbox
```tsx
// Basic Checkbox
<Checkbox 
  checked={isChecked}
  onChange={(checked) => setIsChecked(checked)}
/>

// Checkbox with label
<Checkbox 
  label="Accept terms"
  checked={isChecked}
  onChange={(checked) => setIsChecked(checked)}
/>
```

### Form Components

#### Dropdown
```tsx
// Basic Dropdown
<Dropdown
  options={['Option 1', 'Option 2', 'Option 3']}
  onSelect={(value) => console.log(value)}
/>

// Dropdown with placeholder
<Dropdown
  placeholder="Select an option"
  options={['Option 1', 'Option 2', 'Option 3']}
  onSelect={(value) => console.log(value)}
/>
```

#### ToggleSwitch
```tsx
// Basic Toggle
<ToggleSwitch
  value={isEnabled}
  onValueChange={(value) => setIsEnabled(value)}
/>

// Toggle with label
<ToggleSwitch
  label="Enable notifications"
  value={isEnabled}
  onValueChange={(value) => setIsEnabled(value)}
/>
```

### Feedback Components

#### Modal
```tsx
// Basic Modal
<Modal visible={isVisible} onClose={() => setIsVisible(false)}>
  <Text>Modal Content</Text>
</Modal>

// Modal with custom content
<Modal 
  visible={isVisible} 
  onClose={() => setIsVisible(false)}
  title="Confirmation"
>
  <View>
    <Text>Are you sure?</Text>
    <Button onPress={() => handleConfirm()}>Confirm</Button>
  </View>
</Modal>
```

#### Toast
```tsx
// Basic Toast
<Toast message="Operation successful!" />

// Toast with type
<Toast 
  message="Error occurred"
  type="error"
  duration={3000}
/>
```

### Data Display Components

#### Table
```tsx
// Basic Table
const columns = [
  { key: 'name', title: 'Name' },
  { key: 'age', title: 'Age' },
];

const data = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
];

<Table columns={columns} data={data} />

// Table with selection
<Table 
  columns={columns} 
  data={data}
  selectable
  onSelect={(selectedRows) => console.log(selectedRows)}
/>
```

#### Card
```tsx
// Basic Card
<Card>
  <Text>Card Content</Text>
</Card>

// Card with header
<Card
  header={<Text>Card Title</Text>}
  footer={<Button>Action</Button>}
>
  <Text>Card Content</Text>
</Card>
```

### Navigation Components

#### Tabs
```tsx
// Basic Tabs
const tabs = [
  { key: 'tab1', title: 'Tab 1', content: <Text>Content 1</Text> },
  { key: 'tab2', title: 'Tab 2', content: <Text>Content 2</Text> },
];

<Tabs
  tabs={tabs}
  activeTab={activeTab}
  onChange={(tab) => setActiveTab(tab)}
/>
```

#### Drawer
```tsx
// Basic Drawer
<Drawer
  visible={isVisible}
  onClose={() => setIsVisible(false)}
>
  <DrawerItem label="Home" onPress={() => navigate('Home')} />
  <DrawerItem label="Profile" onPress={() => navigate('Profile')} />
</Drawer>
```

### Utility Components

#### Typography
```tsx
// Different variants
<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="body">Body text</Typography>
<Typography variant="caption">Caption text</Typography>

// With custom styles
<Typography 
  variant="h1"
  style={{ color: 'blue', textAlign: 'center' }}
>
  Custom Styled Text
</Typography>
```

#### Grid
```tsx
// Basic Grid
<Grid columns={2}>
  <View style={styles.gridItem} />
  <View style={styles.gridItem} />
</Grid>

// Responsive Grid
<Grid 
  columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
  spacing={16}
>
  <View style={styles.gridItem} />
  <View style={styles.gridItem} />
  <View style={styles.gridItem} />
</Grid>
```

## Common Patterns

### Form Example
```tsx
const FormExample = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    acceptTerms: false
  });

  return (
    <Card>
      <Input
        label="Username"
        value={formData.username}
        onChangeText={(text) => setFormData({ ...formData, username: text })}
      />
      <Input
        label="Email"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
      />
      <Checkbox
        label="Accept Terms"
        checked={formData.acceptTerms}
        onChange={(checked) => setFormData({ ...formData, acceptTerms: checked })}
      />
      <Button onPress={() => handleSubmit(formData)}>Submit</Button>
    </Card>
  );
};
```

### Data Display Example
```tsx
const DataDisplayExample = () => {
  return (
    <Card>
      <Typography variant="h1">User Profile</Typography>
      <Avatar
        source={{ uri: 'https://example.com/avatar.jpg' }}
        size="large"
      />
      <Table
        columns={[
          { key: 'field', title: 'Field' },
          { key: 'value', title: 'Value' },
        ]}
        data={[
          { field: 'Name', value: 'John Doe' },
          { field: 'Email', value: 'john@example.com' },
        ]}
      />
    </Card>
  );
};
```

### Navigation Example
```tsx
const NavigationExample = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <>
      <Tabs
        tabs={[
          { key: 'home', title: 'Home' },
          { key: 'profile', title: 'Profile' },
          { key: 'settings', title: 'Settings' },
        ]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
      <Drawer>
        <DrawerItem label="Home" onPress={() => setActiveTab('home')} />
        <DrawerItem label="Profile" onPress={() => setActiveTab('profile')} />
        <DrawerItem label="Settings" onPress={() => setActiveTab('settings')} />
      </Drawer>
    </>
  );
};
```

## Component Props Reference

For detailed information about component props and customization options, run Storybook locally:
```bash
npm run storybook
```

This will open the Storybook interface where you can:
- View all available components
- See live examples
- Test different prop combinations
- View component documentation
- Copy example code

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
