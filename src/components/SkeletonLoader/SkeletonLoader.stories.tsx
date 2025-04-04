import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import SkeletonLoader from './SkeletonLoader';

const meta: Meta<typeof SkeletonLoader> = {
  title: 'Feedback/SkeletonLoader',
  component: SkeletonLoader,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof SkeletonLoader>;

export const Default: Story = {
  args: {
    width: 200,
    height: 20,
  },
};

export const Rounded: Story = {
  args: {
    width: 200,
    height: 20,
    style: { borderRadius: 10 },
  },
};

// Multiple skeleton loaders to simulate content loading
export const ContentLoading: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      {/* Header */}
      <SkeletonLoader width={150} height={24} style={{ borderRadius: 4 }} />

      {/* Content lines */}
      <SkeletonLoader width={300} height={16} style={{ borderRadius: 4 }} />
      <SkeletonLoader width={280} height={16} style={{ borderRadius: 4 }} />
      <SkeletonLoader width={260} height={16} style={{ borderRadius: 4 }} />

      {/* Image placeholder */}
      <SkeletonLoader width={300} height={200} style={{ borderRadius: 8 }} />
    </View>
  ),
};
