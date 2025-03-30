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

## Getting the Most out of baapUI

## Quick Start Guide

1. **Installation**
```bash
# Install the package
npm install @productshiv/baapuibeta

# Install peer dependencies if not already installed
npm install react-native-web @expo/webpack-config
```

2. **Import Components**
```tsx
// Import only what you need to optimize bundle size
import { Button, Card, Typography } from '@productshiv/baapuibeta';
```

## Design System Integration

### 1. Theme Configuration
```tsx
// In your App.tsx or theme configuration file
import { ThemeProvider } from '@productshiv/baapuibeta';

const App = () => {
  return (
    <ThemeProvider
      theme={{
        // Your custom theme overrides
        colors: {
          primary: '#007AFF',
          secondary: '#5856D6',
          // ... other colors
        },
        spacing: {
          xs: 4,
          sm: 8,
          md: 16,
          // ... other spacing values
        }
      }}
    >
      <YourApp />
    </ThemeProvider>
  );
};
```

### 2. Design Paradigm Selection
```tsx
// Switch between different design paradigms
<ThemeProvider designSystem="flat"> // or "neumorphic", "material", "skeuomorphic"
  <YourApp />
</ThemeProvider>
```

## Best Practices

### 1. Component Composition
```tsx
// DO: Compose components for reusability
const CustomCard = ({ title, children, onAction }) => (
  <Card
    header={
      <Typography variant="h2">{title}</Typography>
    }
    footer={
      <Button variant="primary" onPress={onAction}>
        Take Action
      </Button>
    }
  >
    {children}
  </Card>
);

// DON'T: Repeat complex layouts
const RepeatedLayout = () => (
  <>
    <Card>
      <Typography variant="h2">Title 1</Typography>
      <Content1 />
      <Button>Action</Button>
    </Card>
    <Card>
      <Typography variant="h2">Title 2</Typography>
      <Content2 />
      <Button>Action</Button>
    </Card>
  </>
);
```

### 2. Form Handling
```tsx
// DO: Use form components together
const SmartForm = () => {
  const [form, setForm] = useState({});
  
  return (
    <Card>
      <Input
        label="Email"
        error={validateEmail(form.email)}
        onChangeText={(text) => setForm({ ...form, email: text })}
      />
      <ToggleSwitch
        label="Notifications"
        value={form.notifications}
        onValueChange={(value) => setForm({ ...form, notifications: value })}
      />
      {form.notifications && (
        <Dropdown
          label="Frequency"
          options={['Daily', 'Weekly', 'Monthly']}
          onSelect={(value) => setForm({ ...form, frequency: value })}
        />
      )}
    </Card>
  );
};
```

### 3. Responsive Design
```tsx
// DO: Use Grid for responsive layouts
const ResponsiveLayout = () => (
  <Grid
    columns={{
      xs: 1,    // 1 column on mobile
      sm: 2,    // 2 columns on tablet
      md: 3,    // 3 columns on desktop
      lg: 4     // 4 columns on large screens
    }}
    spacing={16}
  >
    {items.map(item => (
      <Card key={item.id}>
        <ItemContent {...item} />
      </Card>
    ))}
  </Grid>
);
```

### 4. Performance Optimization
```tsx
// DO: Lazy load components when needed
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

// DO: Use list virtualization for long lists
const OptimizedList = () => (
  <List
    data={longDataArray}
    renderItem={({ item }) => <ListItem {...item} />}
    virtualized
    windowSize={5}
  />
);
```

## Common Use Cases

### 1. Authentication Flow
```tsx
const LoginScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <Card style={styles.container}>
      <Typography variant="h1">Welcome Back</Typography>
      
      <Input
        label="Email"
        placeholder="Enter your email"
        autoCapitalize="none"
      />
      
      <Input
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
      />
      
      <Button
        variant="primary"
        loading={isLoading}
        onPress={handleLogin}
      >
        Login
      </Button>
      
      <Typography variant="caption">
        Don't have an account? Sign up
      </Typography>
    </Card>
  );
};
```

### 2. Data Dashboard
```tsx
const Dashboard = () => (
  <Grid columns={{ xs: 1, md: 2 }} spacing={16}>
    <Card>
      <Typography variant="h2">Statistics</Typography>
      <Table
        columns={statsColumns}
        data={statsData}
        sortable
        pagination
      />
    </Card>
    
    <Card>
      <Typography variant="h2">Quick Actions</Typography>
      <Button variant="primary">Generate Report</Button>
      <Button variant="secondary">Export Data</Button>
    </Card>
    
    <Card gridColumn="1 / -1">
      <Typography variant="h2">Recent Activity</Typography>
      <List
        data={activityData}
        renderItem={({ item }) => (
          <ActivityItem {...item} />
        )}
      />
    </Card>
  </Grid>
);
```

### 3. Settings Panel
```tsx
const Settings = () => (
  <Card>
    <Tabs
      tabs={[
        { key: 'general', title: 'General' },
        { key: 'notifications', title: 'Notifications' },
        { key: 'privacy', title: 'Privacy' }
      ]}
    >
      <TabPanel key="general">
        <ToggleSwitch
          label="Dark Mode"
          value={isDarkMode}
          onValueChange={toggleDarkMode}
        />
        <Dropdown
          label="Language"
          options={languages}
          onSelect={setLanguage}
        />
      </TabPanel>
      
      <TabPanel key="notifications">
        <ToggleSwitch
          label="Push Notifications"
          value={pushEnabled}
          onValueChange={togglePush}
        />
        <ToggleSwitch
          label="Email Notifications"
          value={emailEnabled}
          onValueChange={toggleEmail}
        />
      </TabPanel>
    </Tabs>
  </Card>
);
```

## Debugging Tips

1. **Component Inspector**
   - Use Storybook's inspector to examine component props and state
   - Enable React DevTools for component debugging

2. **Performance Monitoring**
   ```tsx
   import { Performance } from '@productshiv/baapuibeta';
   
   // Wrap performance-critical sections
   <Performance.Monitor>
     <YourComponent />
   </Performance.Monitor>
   ```

3. **Error Boundaries**
   ```tsx
   import { ErrorBoundary } from '@productshiv/baapuibeta';
   
   <ErrorBoundary
     fallback={<Typography>Something went wrong</Typography>}
   >
     <YourComponent />
   </ErrorBoundary>
   ```

## Platform-Specific Customization

```tsx
import { Platform } from 'react-native';

// Customize components per platform
<Button
  style={{
    ...Platform.select({
      ios: iosStyles,
      android: materialStyles,
      web: webStyles,
    })
  }}
>
  Platform Adaptive Button
</Button>
```

## Integration with Other Libraries

### 1. Navigation (React Navigation)
```tsx
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from '@productshiv/baapuibeta';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        header: (props) => <Header {...props} />
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
```

### 2. Forms (Formik)
```tsx
import { Formik } from 'formik';
import { Input, Button } from '@productshiv/baapuibeta';

const FormikForm = () => (
  <Formik
    initialValues={{ email: '' }}
    onSubmit={handleSubmit}
  >
    {({ handleChange, values }) => (
      <Input
        label="Email"
        value={values.email}
        onChangeText={handleChange('email')}
      />
    )}
  </Formik>
);
```

## Advanced Customization

### 1. Custom Component Variants
```tsx
const CustomButton = styled(Button)`
  border-radius: 20px;
  background-gradient: linear-gradient(...);
`;
```

### 2. Custom Animations
```tsx
import { Animated } from 'react-native';
import { Card } from '@productshiv/baapuibeta';

const AnimatedCard = Animated.createAnimatedComponent(Card);
```

## Support and Resources

1. Run Storybook locally for interactive documentation:
```bash
npm run storybook
```

2. Check component stories for implementation examples:
```
src/components/ComponentName/ComponentName.stories.tsx
```

3. Use the GitHub issue tracker for:
   - Bug reports
   - Feature requests
   - Documentation improvements

4. Join our community:
   - Discord channel
   - GitHub discussions
   - Stack Overflow tag: `baapui`

## Contributing
Please read our contributing guidelines before submitting pull requests.

## License
MIT License - see LICENSE file for details.

## Support
For issues and feature requests, please use the GitHub issue tracker.
