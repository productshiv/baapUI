import React from 'react';
import { View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react';
import ToggleSwitch from './ToggleSwitch';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Form/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  argTypes: {
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic'],
    },
    initialValue: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  args: {
    label: 'Default Toggle',
    initialValue: false,
    onToggle: () => {},
  },
};

export const Neumorphic: Story = {
  args: {
    label: 'Neumorphic Toggle',
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
    initialValue: false,
    onToggle: () => {},
  },
};

export const Enabled: Story = {
  args: {
    label: 'Enabled Toggle',
    initialValue: true,
    onToggle: () => {},
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Toggle',
    disabled: true,
    initialValue: false,
    onToggle: () => {},
  },
};

export const DisabledEnabled: Story = {
  args: {
    label: 'Disabled Enabled Toggle',
    disabled: true,
    initialValue: true,
    onToggle: () => {},
  },
};

export const Interactive: Story = {
  render: () => {
    const [value1, setValue1] = React.useState(false);
    const [value2, setValue2] = React.useState(true);

    return (
      <View style={{ padding: 20, gap: 10 }}>
        <ToggleSwitch
          label="Interactive Toggle 1"
          initialValue={value1}
          onToggle={() => setValue1(!value1)}
        />
        <ToggleSwitch
          label="Interactive Toggle 2"
          initialValue={value2}
          onToggle={() => setValue2(!value2)}
        />
      </View>
    );
  },
};

export const NeumorphicVariations: Story = {
  render: () => {
    const [value1, setValue1] = React.useState(false);
    const [value2, setValue2] = React.useState(true);

    return (
      <View style={{ padding: 20, gap: 10 }}>
        <ToggleSwitch
          label="Neumorphic Toggle 1"
          design="neumorphic"
          initialValue={value1}
          onToggle={() => setValue1(!value1)}
        />
        <ToggleSwitch
          label="Neumorphic Toggle 2"
          design="neumorphic"
          initialValue={value2}
          onToggle={() => setValue2(!value2)}
        />
        <ToggleSwitch
          label="Neumorphic Disabled"
          design="neumorphic"
          initialValue={false}
          disabled
          onToggle={() => {}}
        />
      </View>
    );
  },
};
