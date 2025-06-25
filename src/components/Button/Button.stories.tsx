import React from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ThemeProvider } from '../../themes/ThemeContext';

const meta: Meta<typeof Button> = {
  title: 'Core UI/Button',
  component: Button,
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
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    design: {
      control: 'select',
      options: ['flat', 'neumorphic'],
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
    },
    loading: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Size Variations
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'large',
  },
};

// Design Variations
export const FlatPrimary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    design: 'flat',
  },
};

export const FlatSecondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    design: 'flat',
  },
};

export const FlatOutline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    design: 'flat',
  },
};

export const NeumorphicDefault: Story = {
  args: {
    children: 'Neumorphic Button',
    design: 'neumorphic',
  },
};

// Color Variations
export const CustomColors: Story = {
  args: {
    children: 'Custom Colors',
    backgroundColor: '#FF6B6B',
    textColor: '#FFFFFF',
  },
};

export const NeumorphicCustom: Story = {
  args: {
    children: 'Custom Neumorphic',
    design: 'neumorphic',
    backgroundColor: '#e8e8e8',
    textColor: '#FF6B6B',
  },
};

// State Variations
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    loading: true,
  },
};
