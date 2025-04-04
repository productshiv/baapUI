import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Slider from './Slider';
import Typography from '../Typography/Typography';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const meta: Meta<typeof Slider> = {
  title: 'Form/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    value: 50,
    minimumValue: 0,
    maximumValue: 100,
    onValueChange: () => {},
  },
};

export const WithCustomColors: Story = {
  args: {
    value: 40,
    minimumValue: 0,
    maximumValue: 100,
    minimumTrackTintColor: '#4CAF50',
    maximumTrackTintColor: '#E0E0E0',
    thumbTintColor: '#2196F3',
    onValueChange: () => {},
  },
};

export const WithSteps: Story = {
  args: {
    value: 40,
    minimumValue: 0,
    maximumValue: 100,
    step: 20,
    onValueChange: () => {},
  },
};

export const Neumorphic: Story = {
  args: {
    value: 60,
    minimumValue: 0,
    maximumValue: 100,
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
    minimumTrackTintColor: NEUMORPHIC_COLORS.primary,
    maximumTrackTintColor: NEUMORPHIC_COLORS.lightShadow,
    thumbTintColor: NEUMORPHIC_COLORS.primary,
    onValueChange: () => {},
  },
};

// Interactive example with value display
const InteractiveSliderExample = () => {
  const [value, setValue] = useState(50);

  return (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <Typography>Value: {Math.round(value)}</Typography>
      <Slider value={value} onValueChange={setValue} minimumValue={0} maximumValue={100} />
    </View>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveSliderExample />,
};
