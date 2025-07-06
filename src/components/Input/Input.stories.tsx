import React from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import Typography from '../Typography/Typography';
import { GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';

const meta: Meta<typeof Input> = {
  title: 'Core UI/Input',
  component: Input,
  decorators: [
    Story => (
      <View style={{ padding: 20 }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    design: {
      control: 'select',
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'],
      defaultValue: 'flat',
    },
    placeholder: {
      control: 'text',
      defaultValue: 'Enter text...',
    },
    label: {
      control: 'text',
      description: 'Label text for the input field',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    secureTextEntry: {
      control: 'boolean',
      defaultValue: false,
      description: 'Whether to hide text input (for passwords)',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color for the input',
    },
    textColor: {
      control: 'color',
      description: 'Custom text color for the input',
    },
    isFocused: {
      control: 'boolean',
      defaultValue: false,
      description: 'Whether the input should appear focused',
    },
  },
  args: {
    placeholder: 'Enter text...',
    design: 'flat',
    disabled: false,
    secureTextEntry: false,
    isFocused: false,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Default Story
export const Default: Story = {
  args: {
    placeholder: 'Default Input',
    design: 'flat',
  },
};

// Design System Variations
export const Flat: Story = {
  args: {
    placeholder: 'Flat Design Input',
    design: 'flat',
    label: 'Flat Input',
  },
};

export const Neumorphic: Story = {
  args: {
    placeholder: 'Neumorphic Design Input',
    design: 'neumorphic',
    label: 'Neumorphic Input',
  },
};

export const Skeuomorphic: Story = {
  args: {
    placeholder: 'Skeuomorphic Design Input',
    design: 'skeuomorphic',
    label: 'Skeuomorphic Input',
  },
};

// Glassmorphic Design Stories
export const Glassmorphic: Story = {
  args: {
    placeholder: 'Glassmorphic Design Input',
    design: 'glassmorphic',
    label: 'Glassmorphic Input',
  },
};

// State Variations
export const WithLabel: Story = {
  args: {
    placeholder: 'Enter your name',
    label: 'Full Name',
    design: 'flat',
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Enter valid email',
    label: 'Email Address',
    error: 'Please enter a valid email address',
    design: 'flat',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled Input',
    label: 'Disabled Field',
    disabled: true,
    design: 'flat',
  },
};

export const Focused: Story = {
  args: {
    placeholder: 'Focused Input',
    label: 'Focused Field',
    isFocused: true,
    design: 'flat',
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Enter password',
    label: 'Password',
    secureTextEntry: true,
    design: 'flat',
  },
};

// Design-specific State Combinations
export const NeumorphicWithError: Story = {
  args: {
    placeholder: 'Invalid input',
    label: 'Neumorphic Error',
    error: 'This field is required',
    design: 'neumorphic',
  },
};

export const SkeuomorphicPassword: Story = {
  args: {
    placeholder: 'Enter secure password',
    label: 'Secure Password',
    secureTextEntry: true,
    design: 'skeuomorphic',
  },
};

export const NeumorphicDisabled: Story = {
  args: {
    placeholder: 'Disabled neumorphic',
    label: 'Disabled Neumorphic',
    disabled: true,
    design: 'neumorphic',
  },
};

export const SkeuomorphicFocused: Story = {
  args: {
    placeholder: 'Focused skeuomorphic',
    label: 'Focused Skeuomorphic',
    isFocused: true,
    design: 'skeuomorphic',
  },
};

export const GlassmorphicWithError: Story = {
  args: {
    placeholder: 'Invalid glassmorphic input',
    label: 'Glassmorphic Error',
    error: 'This field is required',
    design: 'glassmorphic',
  },
};

export const GlassmorphicPassword: Story = {
  args: {
    placeholder: 'Enter secure password',
    label: 'Glassmorphic Password',
    secureTextEntry: true,
    design: 'glassmorphic',
  },
};

export const GlassmorphicFocused: Story = {
  args: {
    placeholder: 'Focused glassmorphic',
    label: 'Focused Glassmorphic',
    isFocused: true,
    design: 'glassmorphic',
  },
};

export const GlassmorphicDarkMode: Story = {
  args: {
    placeholder: 'Dark mode glassmorphic',
    label: 'Dark Mode Input',
    design: 'glassmorphic',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const GlassmorphicPlayground: Story = {
  args: {
    placeholder: 'Interactive glassmorphic input',
    label: 'Playground Input',
    design: 'glassmorphic',
  },
};

// Enhanced Glassmorphic Story Variations (Phase 7 - BAAPUI-8)
export const LightGlass: Story = {
  args: {
    placeholder: 'Light glass effect',
    label: 'Light Glass Input',
    design: 'glassmorphic',
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f0f0f0' },
      ],
    },
  },
};

export const DarkGlass: Story = {
  args: {
    placeholder: 'Dark glass effect',
    label: 'Dark Glass Input',
    design: 'glassmorphic',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
};

export const ColoredGlass: Story = {
  args: {
    placeholder: 'Colored glass effect',
    label: 'Colored Glass Input',
    design: 'glassmorphic',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
  },
  parameters: {
    backgrounds: {
      default: 'gradient',
      values: [
        { name: 'gradient', value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
      ],
    },
  },
};

export const HighBlur: Story = {
  args: {
    placeholder: 'High blur intensity',
    label: 'High Blur Input',
    design: 'glassmorphic',
  },
  parameters: {
    backgrounds: {
      default: 'pattern',
      values: [
        { name: 'pattern', value: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' },
      ],
    },
  },
};

export const MinimalGlass: Story = {
  args: {
    placeholder: 'Minimal glass effect',
    label: 'Minimal Glass Input',
    design: 'glassmorphic',
  },
  parameters: {
    backgrounds: {
      default: 'minimal',
      values: [
        { name: 'minimal', value: '#fafafa' },
      ],
    },
  },
};

export const LayeredGlass: Story = {
  render: () => (
    <View style={{ 
      padding: 40, 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: 20,
      position: 'relative'
    }}>
      <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 20,
        backdropFilter: 'blur(10px)'
      }} />
      <Input
        placeholder="Layered glass effect"
        label="Layered Glass Input"
        design="glassmorphic"
      />
    </View>
  ),
};

export const Interactive: Story = {
  render: () => (
    <View style={{ padding: 20, maxWidth: 400, gap: 16 }}>
      <Input
        placeholder="Type to see glassmorphic effects"
        label="Interactive Glass Input"
        design="glassmorphic"
      />
      <Input
        placeholder="Another interactive input"
        label="Secondary Glass Input"
        design="glassmorphic"
        isFocused={true}
      />
      <View style={{ 
        padding: 12, 
        backgroundColor: 'rgba(59, 130, 246, 0.1)', 
        borderRadius: 8,
        backdropFilter: 'blur(10px)'
      }}>
        <Typography variant="caption">Interactive glassmorphic inputs with focus effects</Typography>
      </View>
    </View>
  ),
};

// Custom Color Variations
export const CustomColors: Story = {
  args: {
    placeholder: 'Custom colored input',
    label: 'Custom Colors',
    backgroundColor: '#f0f8ff',
    textColor: '#2e8b57',
    design: 'flat',
  },
};

export const NeumorphicCustomColors: Story = {
  args: {
    placeholder: 'Custom neumorphic colors',
    label: 'Custom Neumorphic',
    backgroundColor: '#fdf6e3',
    textColor: '#586e75',
    design: 'neumorphic',
  },
};

// Showcase Stories
export const AllStates: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 16, maxWidth: 400 }}>
      <Input placeholder="Normal Input" label="Normal" />
      <Input placeholder="With Label" label="Labeled Input" />
      <Input placeholder="Focused Input" label="Focused" isFocused />
      <Input placeholder="Error Input" label="With Error" error="This field is required" />
      <Input placeholder="Disabled Input" label="Disabled" disabled />
      <Input placeholder="Password Input" label="Password" secureTextEntry />
    </View>
  ),
};

// All Design Systems Showcase (SINGLE VERSION - removed duplicate)
export const AllDesigns: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 20, maxWidth: 400 }}>
      <View>
        <Input
          placeholder="Flat design input"
          label="Flat Design"
          design="flat"
        />
      </View>
      <View>
        <Input
          placeholder="Neumorphic design input"
          label="Neumorphic Design"
          design="neumorphic"
        />
      </View>
      <View>
        <Input
          placeholder="Skeuomorphic design input"
          label="Skeuomorphic Design"
          design="skeuomorphic"
        />
      </View>
      <View>
        <Input
          placeholder="Glassmorphic design input"
          label="Glassmorphic Design"
          design="glassmorphic"
        />
      </View>
    </View>
  ),
};

// Form Example (SINGLE VERSION - removed duplicate)
export const FormExample: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 16, maxWidth: 400 }}>
      <Input
        placeholder="Enter your first name"
        label="First Name"
        design="neumorphic"
      />
      <Input
        placeholder="Enter your last name"
        label="Last Name"
        design="neumorphic"
      />
      <Input
        placeholder="Enter your email"
        label="Email Address"
        error="Please enter a valid email"
        design="neumorphic"
      />
      <Input
        placeholder="Create a password"
        label="Password"
        secureTextEntry
        design="neumorphic"
      />
      <Input
        placeholder="Additional notes"
        label="Notes (Optional)"
        disabled
        design="neumorphic"
      />
    </View>
  ),
};

// Responsive Showcase
export const ResponsiveInputs: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 16 }}>
      <View style={{ maxWidth: 200 }}>
        <Input placeholder="Small width" label="Small Container" design="flat" />
      </View>
      <View style={{ maxWidth: 400 }}>
        <Input placeholder="Medium width" label="Medium Container" design="neumorphic" />
      </View>
      <View style={{ maxWidth: 600 }}>
        <Input placeholder="Large width" label="Large Container" design="skeuomorphic" />
      </View>
    </View>
  ),
};
