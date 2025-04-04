import React from 'react';
import { View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const meta: Meta<typeof Input> = {
  title: 'Core UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic'],
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Neumorphic: Story = {
  args: {
    placeholder: 'Neumorphic Input',
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Error Input',
    error: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled Input',
    disabled: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 10 }}>
      <Input placeholder="Default Input" />
      <Input placeholder="With Error" error="Invalid input" />
      <Input placeholder="Disabled Input" disabled />
      <Input placeholder="Neumorphic Input" design="neumorphic" />
    </View>
  ),
};
