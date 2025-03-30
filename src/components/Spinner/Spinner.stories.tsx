import React from 'react';
import { View } from 'react-native';
import Spinner  from './Spinner';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Spinner> = {
  title: 'Utility/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'color',
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: 'medium',
  },
};

export const WithLabel: Story = {
  args: {
    size: 'medium',
    label: 'Loading...',
  },
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 32, padding: 20, alignItems: 'center' }}>
      <Spinner size="small" label="Small" />
      <Spinner size="medium" label="Medium" />
      <Spinner size="large" label="Large" />
    </View>
  ),
};

export const Colors: Story = {
  render: () => (
    <View style={{ gap: 32, padding: 20, alignItems: 'center' }}>
      <Spinner size="medium" color="#007AFF" label="Primary" />
      <Spinner size="medium" color="#34C759" label="Success" />
      <Spinner size="medium" color="#FF3B30" label="Error" />
      <Spinner size="medium" color="#FF9500" label="Warning" />
    </View>
  ),
}; 