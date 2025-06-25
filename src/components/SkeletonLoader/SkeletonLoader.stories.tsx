import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SkeletonLoader from './SkeletonLoader';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const meta: Meta<typeof SkeletonLoader> = {
  title: 'Feedback/SkeletonLoader',
  component: SkeletonLoader,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic'],
    },
    borderRadius: {
      control: { type: 'range', min: 0, max: 24, step: 2 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SkeletonLoader>;

export const Default: Story = {
  args: {
    width: 200,
    height: 20,
    borderRadius: 4,
  },
};

export const TextPlaceholder: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
      <SkeletonLoader width={200} height={24} borderRadius={4} />
      <SkeletonLoader width={300} height={16} borderRadius={4} />
      <SkeletonLoader width={250} height={16} borderRadius={4} />
      <SkeletonLoader width={280} height={16} borderRadius={4} />
    </div>
  ),
};

export const CardPlaceholder: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
      <SkeletonLoader width={300} height={200} borderRadius={8} />
      <SkeletonLoader width={200} height={24} borderRadius={4} />
      <SkeletonLoader width={300} height={16} borderRadius={4} />
      <SkeletonLoader width={280} height={16} borderRadius={4} />
    </div>
  ),
};

export const Neumorphic: Story = {
  args: {
    width: 200,
    height: 20,
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
    borderRadius: 4,
  },
};

export const NeumorphicPlaceholders: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        backgroundColor: NEUMORPHIC_COLORS.background,
        padding: '24px',
        borderRadius: '12px',
        width: '300px',
      }}
    >
      <SkeletonLoader width={300} height={200} design="neumorphic" borderRadius={12} />
      <SkeletonLoader width={200} height={24} design="neumorphic" borderRadius={6} />
      <SkeletonLoader width={300} height={16} design="neumorphic" borderRadius={4} />
      <SkeletonLoader width={250} height={16} design="neumorphic" borderRadius={4} />
    </div>
  ),
};
