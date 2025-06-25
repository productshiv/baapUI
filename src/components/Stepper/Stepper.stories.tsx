import React, { useState } from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Stepper from './Stepper';
import Typography from '../Typography/Typography';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const meta: Meta<typeof Stepper> = {
  title: 'Form/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: { control: 'number' },
    step: { control: 'number' },
    minimumValue: { control: 'number' },
    maximumValue: { control: 'number' },
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {
    value: 0,
    onValueChange: () => {},
  },
};

export const CustomStep: Story = {
  args: {
    value: 0,
    step: 5,
    onValueChange: () => {},
  },
};

export const WithRange: Story = {
  args: {
    value: 50,
    minimumValue: 0,
    maximumValue: 100,
    onValueChange: () => {},
  },
};

// Interactive example with value display
const InteractiveStepperExample = () => {
  const [value, setValue] = useState(0);

  return (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <Typography>Value: {value}</Typography>
      <Stepper value={value} onValueChange={setValue} step={1} minimumValue={0} maximumValue={10} />
    </View>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveStepperExample />,
};

export const WithCustomRange: Story = {
  args: {
    value: 5,
    minimumValue: 0,
    maximumValue: 10,
    onValueChange: () => {},
  },
};

export const Neumorphic: Story = {
  args: {
    value: 0,
    minimumValue: 0,
    maximumValue: 10,
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
    textColor: NEUMORPHIC_COLORS.text,
    onValueChange: () => {},
  },
};
