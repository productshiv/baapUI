import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Feedback/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: '1',
    variant: 'primary',
  },
};

export const Variants: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16, padding: 20 }}>
      <Badge variant="primary">1</Badge>
      <Badge variant="secondary">2</Badge>
      <Badge variant="success">3</Badge>
      <Badge variant="error">4</Badge>
      <Badge variant="warning">5</Badge>
      <Badge variant="info">6</Badge>
    </View>
  ),
};

export const Sizes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16, padding: 20, alignItems: 'center' }}>
      <Badge size="small">S</Badge>
      <Badge size="medium">M</Badge>
      <Badge size="large">L</Badge>
    </View>
  ),
};

export const WithContent: Story = {
  render: () => (
    <View style={{ gap: 16, padding: 20 }}>
      <Badge>1</Badge>
      <Badge>99+</Badge>
      <Badge>New</Badge>
      <Badge>Hot</Badge>
    </View>
  ),
}; 