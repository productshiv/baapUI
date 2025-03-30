import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import Typography from '../Typography/Typography';

const meta: Meta<typeof Card> = {
  title: 'Core UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    elevation: { control: { type: 'range', min: 0, max: 5 } },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card style={{ padding: 16, width: 300 }}>
      <Typography variant="h6">Card Title</Typography>
      <Typography variant="body2">
        This is a basic card component with some content inside it.
      </Typography>
    </Card>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <Card style={{ width: 300 }}>
      <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
        <Typography variant="h6">Card Header</Typography>
      </View>
      <View style={{ padding: 16 }}>
        <Typography variant="body2">
          This card has a header section separated by a border.
        </Typography>
      </View>
    </Card>
  ),
};

export const Elevations: Story = {
  render: () => (
    <View style={{ gap: 16, padding: 20 }}>
      <Card elevation={1} style={{ padding: 16 }}>
        <Typography>Elevation 1</Typography>
      </Card>
      <Card elevation={2} style={{ padding: 16 }}>
        <Typography>Elevation 2</Typography>
      </Card>
      <Card elevation={3} style={{ padding: 16 }}>
        <Typography>Elevation 3</Typography>
      </Card>
    </View>
  ),
}; 