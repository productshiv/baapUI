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
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'],
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

export const Skeuomorphic: Story = {
  args: {
    width: 200,
    height: 20,
    design: 'skeuomorphic',
    borderRadius: 4,
  },
};

export const Glassmorphic: Story = {
  args: {
    width: 200,
    height: 20,
    design: 'glassmorphic',
    borderRadius: 4,
  },
};

export const GlassmorphicPlaceholders: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        padding: '24px',
        borderRadius: '12px',
        width: '300px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <SkeletonLoader width={300} height={200} design="glassmorphic" borderRadius={12} />
      <SkeletonLoader width={200} height={24} design="glassmorphic" borderRadius={6} />
      <SkeletonLoader width={300} height={16} design="glassmorphic" borderRadius={4} />
      <SkeletonLoader width={250} height={16} design="glassmorphic" borderRadius={4} />
    </div>
  ),
};

export const GlassmorphicDarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    width: 250,
    height: 24,
    design: 'glassmorphic',
    borderRadius: 6,
  },
};

export const GlassmorphicSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Small</h4>
        <SkeletonLoader width={150} height={12} design="glassmorphic" borderRadius={2} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Medium</h4>
        <SkeletonLoader width={200} height={20} design="glassmorphic" borderRadius={4} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Large</h4>
        <SkeletonLoader width={300} height={32} design="glassmorphic" borderRadius={8} />
      </div>
    </div>
  ),
};

export const GlassmorphicPlayground: Story = {
  args: {
    width: 250,
    height: 24,
    design: 'glassmorphic',
    borderRadius: 8,
  },
  argTypes: {
    width: {
      control: { type: 'range', min: 50, max: 400, step: 10 },
    },
    height: {
      control: { type: 'range', min: 8, max: 100, step: 4 },
    },
    borderRadius: {
      control: { type: 'range', min: 0, max: 24, step: 2 },
    },
  },
};

export const GlassmorphicCardLayout: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        backdropFilter: 'blur(8px)',
        padding: '20px',
        borderRadius: '16px',
        width: '320px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <SkeletonLoader width={320} height={180} design="glassmorphic" borderRadius={12} />
      <SkeletonLoader width={220} height={28} design="glassmorphic" borderRadius={6} />
      <SkeletonLoader width={320} height={18} design="glassmorphic" borderRadius={4} />
      <SkeletonLoader width={280} height={18} design="glassmorphic" borderRadius={4} />
      <SkeletonLoader width={300} height={18} design="glassmorphic" borderRadius={4} />
      <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
        <SkeletonLoader width={80} height={32} design="glassmorphic" borderRadius={16} />
        <SkeletonLoader width={100} height={32} design="glassmorphic" borderRadius={16} />
      </div>
    </div>
  ),
};

export const GlassmorphicMinimalGlass: Story = {
  args: {
    width: 200,
    height: 16,
    design: 'glassmorphic',
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
};

export const GlassmorphicLayeredGlass: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <div
        style={{
          backgroundColor: 'rgba(33, 150, 243, 0.1)',
          backdropFilter: 'blur(6px)',
          padding: '16px',
          borderRadius: '12px',
          border: '1px solid rgba(33, 150, 243, 0.2)',
        }}
      >
        <SkeletonLoader width={280} height={20} design="glassmorphic" borderRadius={4} />
      </div>
      <div
        style={{
          backgroundColor: 'rgba(156, 39, 176, 0.1)',
          backdropFilter: 'blur(6px)',
          padding: '16px',
          borderRadius: '12px',
          border: '1px solid rgba(156, 39, 176, 0.2)',
        }}
      >
        <SkeletonLoader width={260} height={18} design="glassmorphic" borderRadius={4} />
      </div>
      <div
        style={{
          backgroundColor: 'rgba(76, 175, 80, 0.1)',
          backdropFilter: 'blur(6px)',
          padding: '16px',
          borderRadius: '12px',
          border: '1px solid rgba(76, 175, 80, 0.2)',
        }}
      >
        <SkeletonLoader width={240} height={16} design="glassmorphic" borderRadius={4} />
      </div>
    </div>
  ),
};

export const AllDesigns: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <div>
        <h3 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Flat Design</h3>
        <SkeletonLoader width={200} height={20} design="flat" borderRadius={4} />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Neumorphic Design</h3>
        <div style={{ backgroundColor: NEUMORPHIC_COLORS.background, padding: '16px', borderRadius: '8px' }}>
          <SkeletonLoader width={200} height={20} design="neumorphic" borderRadius={4} />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Skeuomorphic Design</h3>
        <SkeletonLoader width={200} height={20} design="skeuomorphic" borderRadius={4} />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Glassmorphic Design</h3>
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)', padding: '16px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <SkeletonLoader width={200} height={20} design="glassmorphic" borderRadius={4} />
        </div>
      </div>
    </div>
  ),
};
