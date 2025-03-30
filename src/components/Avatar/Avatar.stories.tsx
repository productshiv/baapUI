import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    size: 50,
  },
};

export const LargeAvatar: Story = {
  args: {
    imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    size: 100,
  },
};

export const AvatarGroup: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: -10 }}>
      <Avatar imageUrl="https://randomuser.me/api/portraits/men/1.jpg" size={40} />
      <Avatar imageUrl="https://randomuser.me/api/portraits/women/2.jpg" size={40} />
      <Avatar imageUrl="https://randomuser.me/api/portraits/men/3.jpg" size={40} />
      <Avatar imageUrl="https://randomuser.me/api/portraits/women/4.jpg" size={40} />
    </View>
  ),
}; 