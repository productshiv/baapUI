import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Core UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Checkbox',
  },
};

export const States: Story = {
  render: () => (
    <View style={{ gap: 16, padding: 20 }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" checked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Checked & Disabled" checked disabled />
    </View>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <View style={{ gap: 16, padding: 20 }}>
      <Checkbox label="Accept terms and conditions" />
      <Checkbox label="Subscribe to newsletter" />
      <Checkbox label="Remember me" />
    </View>
  ),
};
