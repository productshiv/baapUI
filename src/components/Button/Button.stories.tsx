import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Core UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const Variants: Story = {
  render: () => (
    <View style={{ gap: 16, padding: 20 }}>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="text">Text Button</Button>
    </View>
  ),
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16, padding: 20 }}>
      <Button size="small">Small Button</Button>
      <Button size="medium">Medium Button</Button>
      <Button size="large">Large Button</Button>
    </View>
  ),
};

export const States: Story = {
  render: () => (
    <View style={{ gap: 16, padding: 20 }}>
      <Button>Enabled Button</Button>
      <Button disabled>Disabled Button</Button>
      <Button loading>Loading Button</Button>
    </View>
  ),
}; 