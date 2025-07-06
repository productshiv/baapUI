import React from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Core UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: { control: 'text' },
    design: {
      control: { type: 'select' },
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'],
    },
    textColor: { control: 'color' },
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

export const Neumorphic: Story = {
  args: {
    text: 'Neumorphic Label',
    design: 'neumorphic',
  },
};

export const Skeuomorphic: Story = {
  args: {
    text: 'Skeuomorphic Label',
    design: 'skeuomorphic',
  },
};

export const Glassmorphic: Story = {
  args: {
    text: 'Glassmorphic Label',
    design: 'glassmorphic',
  },
};

export const GlassmorphicCustomColor: Story = {
  args: {
    text: 'Custom Color Glassmorphic',
    design: 'glassmorphic',
    textColor: '#007AFF',
  },
};

export const AllDesigns: Story = {
  render: () => (
    <View style={{ gap: 12, padding: 20 }}>
      <Label text="Flat Design" design="flat" />
      <Label text="Neumorphic Design" design="neumorphic" />
      <Label text="Skeuomorphic Design" design="skeuomorphic" />
      <Label text="Glassmorphic Design" design="glassmorphic" />
    </View>
  ),
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
