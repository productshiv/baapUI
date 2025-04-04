import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { ThemeProvider } from '../../themes/ThemeContext';

const meta: Meta<typeof Input> = {
  title: 'Core UI/Input',
  component: Input,
  decorators: [
    Story => (
      <ThemeProvider>
        <View style={{ padding: 20 }}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: { control: 'text' },
    label: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    secureTextEntry: { control: 'boolean' },
    design: {
      control: 'select',
      options: ['flat', 'neumorphic'],
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color for neumorphic design',
    },
    textColor: {
      control: 'color',
      description: 'Custom text color for the input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Flat Design Stories
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    design: 'flat',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    design: 'flat',
  },
};

// Neumorphic Design Stories
export const NeumorphicDefault: Story = {
  args: {
    placeholder: 'Enter text...',
    design: 'neumorphic',
    backgroundColor: '#ffffff',
  },
};

export const NeumorphicWithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    design: 'neumorphic',
    backgroundColor: '#ffffff',
  },
};

export const NeumorphicCustomColors: Story = {
  args: {
    label: 'Custom Colors',
    placeholder: 'Type here...',
    design: 'neumorphic',
    backgroundColor: '#ffffff',
    textColor: '#000000',
  },
};

// State Variations
export const States: Story = {
  render: () => (
    <View style={{ gap: 16, padding: 20, width: 300 }}>
      <Input label="Flat Default" placeholder="Default input" design="flat" />
      <Input
        label="Neumorphic Default"
        placeholder="Neumorphic input"
        design="neumorphic"
        backgroundColor="#ffffff"
      />
      <Input
        label="With Error"
        placeholder="Error state"
        error="This field is required"
        design="neumorphic"
        backgroundColor="#ffffff"
      />
      <Input
        label="Disabled"
        placeholder="Disabled input"
        disabled
        design="neumorphic"
        backgroundColor="#ffffff"
      />
      <Input
        label="Password"
        placeholder="Enter password"
        secureTextEntry
        design="neumorphic"
        backgroundColor="#ffffff"
      />
    </View>
  ),
};
