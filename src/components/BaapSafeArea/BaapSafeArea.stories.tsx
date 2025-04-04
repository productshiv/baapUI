import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import BaapSafeArea from './BaapSafeArea';
import Typography from '../Typography/Typography';

const meta: Meta<typeof BaapSafeArea> = {
  title: 'Utility/BaapSafeArea',
  component: BaapSafeArea,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BaapSafeArea>;

export const Default: Story = {
  render: () => (
    <BaapSafeArea style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={{ padding: 16 }}>
        <Typography variant="h6">Safe Area Content</Typography>
        <Typography>This content is rendered within safe area boundaries.</Typography>
      </View>
    </BaapSafeArea>
  ),
};

export const WithCustomStyle: Story = {
  render: () => (
    <BaapSafeArea
      style={{ flex: 1, backgroundColor: '#e3f2fd' }}
      contentContainerStyle={{ padding: 20 }}
    >
      <Typography variant="h6">Custom Styled Safe Area</Typography>
      <Typography>Content with custom padding and background color.</Typography>
    </BaapSafeArea>
  ),
};
