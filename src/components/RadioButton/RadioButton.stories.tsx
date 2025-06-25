import React from 'react';
import { View } from '../../platform';
import { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const meta: Meta<typeof RadioButton> = {
  title: 'Core UI/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic'],
    },
    initialSelected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: 'Default Radio Button',
    initialSelected: false,
    onToggle: () => {},
  },
};

export const Neumorphic: Story = {
  args: {
    label: 'Neumorphic Radio Button',
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
    initialSelected: false,
    onToggle: () => {},
  },
};

export const Selected: Story = {
  args: {
    label: 'Selected Radio Button',
    initialSelected: true,
    onToggle: () => {},
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Radio Button',
    disabled: true,
    initialSelected: false,
    onToggle: () => {},
  },
};

export const DisabledSelected: Story = {
  args: {
    label: 'Disabled Selected Radio Button',
    disabled: true,
    initialSelected: true,
    onToggle: () => {},
  },
};

export const RadioGroup: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = React.useState('option1');

    return (
      <View style={{ padding: 20, gap: 10 }}>
        <RadioButton
          label="Option 1"
          initialSelected={selectedValue === 'option1'}
          onToggle={() => setSelectedValue('option1')}
        />
        <RadioButton
          label="Option 2"
          initialSelected={selectedValue === 'option2'}
          onToggle={() => setSelectedValue('option2')}
        />
        <RadioButton
          label="Option 3"
          initialSelected={selectedValue === 'option3'}
          onToggle={() => setSelectedValue('option3')}
        />
      </View>
    );
  },
};

export const NeumorphicGroup: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = React.useState('option1');

    return (
      <View style={{ padding: 20, gap: 10 }}>
        <RadioButton
          label="Option 1"
          design="neumorphic"
          initialSelected={selectedValue === 'option1'}
          onToggle={() => setSelectedValue('option1')}
        />
        <RadioButton
          label="Option 2"
          design="neumorphic"
          initialSelected={selectedValue === 'option2'}
          onToggle={() => setSelectedValue('option2')}
        />
        <RadioButton
          label="Option 3"
          design="neumorphic"
          initialSelected={selectedValue === 'option3'}
          onToggle={() => setSelectedValue('option3')}
        />
      </View>
    );
  },
};
