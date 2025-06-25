import React, { useState } from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Dropdown from './Dropdown';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const meta: Meta<typeof Dropdown> = {
  title: 'Form/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const sampleOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

export const Default: Story = {
  args: {
    options: sampleOptions,
    label: 'Select an option',
    placeholder: 'Choose...',
    onSelect: () => {},
  },
};

export const WithValue: Story = {
  args: {
    options: sampleOptions,
    value: 'Option 2',
    label: 'Selected option',
    placeholder: 'Choose...',
    onSelect: () => {},
  },
};

export const Neumorphic: Story = {
  args: {
    options: sampleOptions,
    label: 'Neumorphic Dropdown',
    placeholder: 'Choose...',
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
    textColor: NEUMORPHIC_COLORS.text,
    onSelect: () => {},
  },
};

// Interactive example with state management
const InteractiveDropdownExample = () => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <View style={{ width: 300 }}>
      <Dropdown
        options={['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'Gatsby']}
        value={value}
        onSelect={setValue}
        label="Choose Framework"
        placeholder="Select framework..."
      />
    </View>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveDropdownExample />,
};
