import React from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

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
      options: ['flat', 'neumorphic', 'skeuomorphic'],
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

// Comprehensive State Showcase
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

// All Design Systems Showcase
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
    </View>
  ),
};

// Form Example
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
