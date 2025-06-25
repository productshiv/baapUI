import React, { useState } from 'react';
import { View, Text } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import TextArea from './TextArea';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const meta: Meta<typeof TextArea> = {
  title: 'Form/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: { control: 'text' },
    numberOfLines: { control: 'number' },
    maxLength: { control: 'number' },
    editable: { control: 'boolean' },
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your text here...',
  },
};

export const WithDefaultValue: Story = {
  args: {
    value: 'This is some default text that appears in the text area when it loads.',
    placeholder: 'Enter your text here...',
  },
};

export const CustomHeight: Story = {
  args: {
    placeholder: 'This text area is taller...',
    style: { height: 150 },
  },
};

export const Disabled: Story = {
  args: {
    value: 'This text area is disabled',
    editable: false,
    style: { backgroundColor: '#f5f5f5' },
  },
};

// Interactive example with character count
const InteractiveTextAreaExample = () => {
  const [text, setText] = useState('');
  const maxLength = 100;

  return (
    <View style={{ width: 300, gap: 8 }}>
      <TextArea
        value={text}
        onChangeText={setText}
        placeholder="Type something..."
        maxLength={maxLength}
      />
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={{ color: '#666' }}>
          {text.length}/{maxLength}
        </Text>
      </View>
    </View>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveTextAreaExample />,
};

export const WithValue: Story = {
  args: {
    value: 'This is some sample text in the text area.',
    placeholder: 'Enter your text here...',
    onChangeText: () => {},
  },
};

export const Neumorphic: Story = {
  args: {
    placeholder: 'Enter your text here...',
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
    textColor: NEUMORPHIC_COLORS.text,
    onChangeText: () => {},
  },
};
