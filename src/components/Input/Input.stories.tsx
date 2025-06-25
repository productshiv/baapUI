import React from 'react';
import { View } from '../../platform';
import { Meta, StoryObj } from '@storybook/react-webpack5';
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
      defaultValue: 'flat',
    },
    placeholder: { 
      control: 'text',
      defaultValue: 'Enter text...',
    },
    disabled: { 
      control: 'boolean',
      defaultValue: false,
    },
    error: { control: 'text' },
  },
  args: {
    placeholder: 'Enter text...',
    design: 'flat',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    design: 'flat',
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
    design: 'flat',
    error: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled Input',
    design: 'flat',
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
