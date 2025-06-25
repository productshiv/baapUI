import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const sampleImageUrl = 'https://i.pravatar.cc/300';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'range', min: 32, max: 200, step: 8 },
    },
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic'],
    },
    borderWidth: {
      control: { type: 'range', min: 0, max: 8, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    imageUrl: sampleImageUrl,
    size: 64,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar imageUrl={sampleImageUrl} size={32} />
      <Avatar imageUrl={sampleImageUrl} size={48} />
      <Avatar imageUrl={sampleImageUrl} size={64} />
      <Avatar imageUrl={sampleImageUrl} size={96} />
      <Avatar imageUrl={sampleImageUrl} size={128} />
    </div>
  ),
};

export const WithBorder: Story = {
  args: {
    imageUrl: sampleImageUrl,
    size: 96,
    borderWidth: 4,
    borderColor: '#2196f3',
  },
};

export const Neumorphic: Story = {
  args: {
    imageUrl: sampleImageUrl,
    size: 96,
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
  },
};

export const NeumorphicVariations: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'center',
        backgroundColor: NEUMORPHIC_COLORS.background,
        padding: '32px',
        borderRadius: '16px',
      }}
    >
      <Avatar imageUrl={sampleImageUrl} size={64} design="neumorphic" />
      <Avatar
        imageUrl={sampleImageUrl}
        size={96}
        design="neumorphic"
        borderWidth={4}
        borderColor={NEUMORPHIC_COLORS.lightShadow}
      />
      <Avatar
        imageUrl={sampleImageUrl}
        size={128}
        design="neumorphic"
        borderWidth={6}
        borderColor="#2196f3"
      />
    </div>
  ),
};
