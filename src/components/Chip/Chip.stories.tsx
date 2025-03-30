import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Chip from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Data Display/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: 'Basic Chip',
    onPress: () => console.log('Chip pressed'),
  },
};

export const CustomStyle: Story = {
  args: {
    label: 'Custom Chip',
    onPress: () => console.log('Custom chip pressed'),
    style: {
      backgroundColor: '#4A90E2',
      paddingHorizontal: 16,
    },
  },
};

export const ChipGroup: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
      <Chip label="React" onPress={() => {}} />
      <Chip 
        label="TypeScript" 
        onPress={() => {}}
        style={{ backgroundColor: '#007ACC' }}
      />
      <Chip 
        label="JavaScript" 
        onPress={() => {}}
        style={{ backgroundColor: '#F7DF1E' }}
      />
      <Chip 
        label="Node.js" 
        onPress={() => {}}
        style={{ backgroundColor: '#339933' }}
      />
    </View>
  ),
}; 