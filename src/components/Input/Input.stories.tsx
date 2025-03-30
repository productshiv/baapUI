import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Core UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: { control: 'text' },
    label: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    secureTextEntry: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
  },
};

export const States: Story = {
  render: () => (
    <View style={{ gap: 16, padding: 20, width: 300 }}>
      <Input 
        label="Default"
        placeholder="Default input"
      />
      <Input 
        label="With Error"
        placeholder="Error state"
        error="This field is required"
      />
      <Input 
        label="Disabled"
        placeholder="Disabled input"
        disabled
      />
      <Input 
        label="Password"
        placeholder="Enter password"
        secureTextEntry
      />
    </View>
  ),
}; 