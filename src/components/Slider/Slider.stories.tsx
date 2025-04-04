import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Slider from './Slider';
import Typography from '../Typography/Typography';

const meta: Meta<typeof Slider> = {
  title: 'Form/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: { control: 'number' },
    minimumValue: { control: 'number' },
    maximumValue: { control: 'number' },
    minimumTrackTintColor: { control: 'color' },
    maximumTrackTintColor: { control: 'color' },
    thumbTintColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    value: 50,
    onValueChange: () => {},
  },
};

export const WithCustomRange: Story = {
  args: {
    value: 5,
    minimumValue: 0,
    maximumValue: 10,
    onValueChange: () => {},
  },
};

export const CustomColors: Story = {
  args: {
    value: 50,
    minimumTrackTintColor: '#4CAF50',
    maximumTrackTintColor: '#E0E0E0',
    thumbTintColor: '#2196F3',
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
