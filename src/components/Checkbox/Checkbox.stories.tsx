import React from 'react';
import { View } from '../../platform';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import Checkbox from './Checkbox';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const meta: Meta<typeof Checkbox> = {
  title: 'Core UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic'],
    },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Default Checkbox',
    checked: false,
    onChange: () => {},
  },
};

export const Neumorphic: Story = {
  args: {
    label: 'Neumorphic Checkbox',
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
    checked: false,
    onChange: () => {},
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Checkbox',
    checked: true,
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
    checked: false,
    onChange: () => {},
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked Checkbox',
    disabled: true,
    checked: true,
    onChange: () => {},
  },
};

export const AllStates: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 10 }}>
      <Checkbox label="Default Checkbox" checked={false} onChange={() => {}} />
      <Checkbox label="Checked Checkbox" checked={true} onChange={() => {}} />
      <Checkbox
        label="Neumorphic Checkbox"
        design="neumorphic"
        checked={false}
        onChange={() => {}}
      />
      <Checkbox label="Neumorphic Checked" design="neumorphic" checked={true} onChange={() => {}} />
      <Checkbox label="Disabled Checkbox" disabled checked={false} onChange={() => {}} />
      <Checkbox label="Disabled Checked" disabled checked={true} onChange={() => {}} />
    </View>
  ),
};
