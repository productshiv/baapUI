import React from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Core UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'Default Label',
  },
};

export const Required: Story = {
  args: {
    text: 'Required Field *',
  },
};

export const LongLabel: Story = {
  args: {
    text: 'This is a very long label that might wrap to multiple lines',
  },
};

export const MultipleLabels: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      <Label text="First Name:" />
      <Label text="Last Name:" />
      <Label text="Email Address:" />
      <Label text="Phone Number:" />
    </View>
  ),
};
