import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import ToggleSwitch from './ToggleSwitch';
import Typography from '../Typography/Typography';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Form/ToggleSwitch',
  component: ToggleSwitch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    initialValue: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  args: {
    label: 'Toggle Switch',
  },
};

export const InitiallyOn: Story = {
  args: {
    label: 'Toggle Switch',
    initialValue: true,
  },
};

export const CustomLabel: Story = {
  args: {
    label: 'Enable Notifications',
    initialValue: false,
  },
};

// Interactive example with state display
const InteractiveToggleSwitchExample = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <ToggleSwitch label="Interactive Toggle" initialValue={isEnabled} onToggle={setIsEnabled} />
      <Typography>Status: {isEnabled ? 'ON' : 'OFF'}</Typography>
    </View>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveToggleSwitchExample />,
};

// Multiple toggles example
export const MultipleToggles: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ToggleSwitch label="Notifications" />
      <ToggleSwitch label="Dark Mode" />
      <ToggleSwitch label="Auto-Update" />
      <ToggleSwitch label="Sound Effects" />
    </View>
  ),
};
