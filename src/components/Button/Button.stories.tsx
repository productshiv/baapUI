import React from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Core UI/Button',
  component: Button,
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
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'text'],
      defaultValue: 'primary',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    design: {
      control: 'select',
      options: ['flat', 'neumorphic'],
      defaultValue: 'flat',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color for the button',
    },
    textColor: {
      control: 'color',
      description: 'Custom text color for the button',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    loading: {
      control: 'boolean',
      defaultValue: false,
    },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    design: 'flat',
    disabled: false,
    loading: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default Story
export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'primary',
    size: 'medium',
    design: 'flat',
  },
};

// Size Variations
export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'small',
    design: 'flat',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    variant: 'primary',
    size: 'medium',
    design: 'flat',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'large',
    design: 'flat',
  },
};

// Variant Variations
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    design: 'flat',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    design: 'flat',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    design: 'flat',
  },
};

export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text',
    design: 'flat',
  },
};

// Design Variations
export const Neumorphic: Story = {
  args: {
    children: 'Neumorphic Button',
    variant: 'primary',
    size: 'medium',
    design: 'neumorphic',
  },
};

// Color Variations
export const CustomColors: Story = {
  args: {
    children: 'Custom Colors',
    variant: 'primary',
    size: 'medium',
    design: 'flat',
    backgroundColor: '#FF6B6B',
    textColor: '#FFFFFF',
  },
};

export const NeumorphicCustom: Story = {
  args: {
    children: 'Custom Neumorphic',
    variant: 'primary',
    size: 'medium',
    design: 'neumorphic',
    backgroundColor: '#e8e8e8',
    textColor: '#FF6B6B',
  },
};

// State Variations
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'medium',
    design: 'flat',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    variant: 'primary',
    size: 'medium',
    design: 'flat',
    loading: true,
  },
};
