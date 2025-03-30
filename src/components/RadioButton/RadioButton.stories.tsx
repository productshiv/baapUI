import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';
import Typography from '../Typography/Typography';

const meta: Meta<typeof RadioButton> = {
  title: 'Core UI/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    initialSelected: false,
    onToggle: () => {},
  },
};

export const Selected: Story = {
  args: {
    initialSelected: true,
    onToggle: () => {},
  },
};

// Interactive radio group example
const RadioGroupExample = () => {
  const [selected, setSelected] = useState('option1');
  
  return (
    <View style={{ gap: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <RadioButton
          initialSelected={selected === 'option1'}
          onToggle={() => setSelected('option1')}
        />
        <Typography>Option 1</Typography>
      </View>
      
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <RadioButton
          initialSelected={selected === 'option2'}
          onToggle={() => setSelected('option2')}
        />
        <Typography>Option 2</Typography>
      </View>
      
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <RadioButton
          initialSelected={selected === 'option3'}
          onToggle={() => setSelected('option3')}
        />
        <Typography>Option 3</Typography>
      </View>
    </View>
  );
};

export const RadioGroup: Story = {
  render: () => <RadioGroupExample />,
}; 