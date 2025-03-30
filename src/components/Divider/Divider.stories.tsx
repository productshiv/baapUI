import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Divider from './Divider';
import Typography from '../Typography/Typography';

const meta: Meta<typeof Divider> = {
  title: 'Data Display/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: () => (
    <View style={{ width: 300, gap: 16 }}>
      <Typography>Content above divider</Typography>
      <Divider />
      <Typography>Content below divider</Typography>
    </View>
  ),
};

export const CustomStyle: Story = {
  render: () => (
    <View style={{ width: 300, gap: 16 }}>
      <Typography>Custom styled divider</Typography>
      <Divider style={{ borderColor: '#4A90E2', borderWidth: 2 }} />
      <Typography>Below custom divider</Typography>
    </View>
  ),
};

export const MultipleContent: Story = {
  render: () => (
    <View style={{ width: 300 }}>
      <Typography variant="h6">Section 1</Typography>
      <Typography>Content for section 1</Typography>
      <Divider style={{ marginVertical: 16 }} />
      <Typography variant="h6">Section 2</Typography>
      <Typography>Content for section 2</Typography>
      <Divider style={{ marginVertical: 16 }} />
      <Typography variant="h6">Section 3</Typography>
      <Typography>Content for section 3</Typography>
    </View>
  ),
}; 