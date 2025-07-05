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
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'],
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

export const Skeuomorphic: Story = {
  args: {
    imageUrl: sampleImageUrl,
    size: 80,
    design: 'skeuomorphic',
  },
};

export const SkeuomorphicSizes: Story = {
  render: () => (
    <div
      style={{
        backgroundColor: '#f0f0f0',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        gap: 16,
        alignItems: 'center',
      }}
    >
      <Avatar imageUrl={sampleImageUrl} size={48} design="skeuomorphic" />
      <Avatar imageUrl={sampleImageUrl} size={64} design="skeuomorphic" />
      <Avatar imageUrl={sampleImageUrl} size={80} design="skeuomorphic" />
      <Avatar imageUrl={sampleImageUrl} size={120} design="skeuomorphic" />
    </div>
  ),
};

export const SkeuomorphicCustomBorder: Story = {
  render: () => (
    <div
      style={{
        backgroundColor: '#f0f0f0',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        gap: 16,
        alignItems: 'center',
      }}
    >
      <Avatar
        imageUrl={sampleImageUrl}
        size={80}
        design="skeuomorphic"
        borderWidth={2}
      />
      <Avatar
        imageUrl={sampleImageUrl}
        size={80}
        design="skeuomorphic"
        borderWidth={4}
      />
      <Avatar
        imageUrl={sampleImageUrl}
        size={80}
        design="skeuomorphic"
        borderWidth={6}
      />
    </div>
  ),
};

// Glassmorphic Design Stories
export const Glassmorphic: Story = {
  args: {
    imageUrl: sampleImageUrl,
    size: 96,
    design: 'glassmorphic',
  },
  render: (args) => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Avatar {...args} />
    </div>
  ),
};

export const GlassmorphicSizes: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Avatar imageUrl={sampleImageUrl} size={48} design="glassmorphic" />
      <Avatar imageUrl={sampleImageUrl} size={64} design="glassmorphic" />
      <Avatar imageUrl={sampleImageUrl} size={96} design="glassmorphic" />
      <Avatar imageUrl={sampleImageUrl} size={128} design="glassmorphic" />
    </div>
  ),
};

export const GlassmorphicDarkMode: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Avatar imageUrl={sampleImageUrl} size={64} design="glassmorphic" />
      <Avatar imageUrl={sampleImageUrl} size={96} design="glassmorphic" />
      <Avatar imageUrl={sampleImageUrl} size={128} design="glassmorphic" />
    </div>
  ),
};

export const GlassmorphicPlayground: Story = {
  args: {
    imageUrl: sampleImageUrl,
    size: 120,
    design: 'glassmorphic',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  render: (args) => (
    <div
      style={{
        background: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Avatar {...args} />
    </div>
  ),
};

export const GlassmorphicWithBorders: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Avatar
        imageUrl={sampleImageUrl}
        size={80}
        design="glassmorphic"
        borderWidth={1}
      />
      <Avatar
        imageUrl={sampleImageUrl}
        size={80}
        design="glassmorphic"
        borderWidth={3}
        borderColor="rgba(255, 255, 255, 0.4)"
      />
      <Avatar
        imageUrl={sampleImageUrl}
        size={80}
        design="glassmorphic"
        borderWidth={5}
        borderColor="rgba(0, 122, 255, 0.6)"
      />
    </div>
  ),
};

export const GlassmorphicColoredGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Avatar
        imageUrl={sampleImageUrl}
        size={80}
        design="glassmorphic"
        backgroundColor="rgba(0, 122, 255, 0.2)"
      />
      <Avatar
        imageUrl={sampleImageUrl}
        size={80}
        design="glassmorphic"
        backgroundColor="rgba(88, 86, 214, 0.2)"
      />
      <Avatar
        imageUrl={sampleImageUrl}
        size={80}
        design="glassmorphic"
        backgroundColor="rgba(52, 199, 89, 0.2)"
      />
      <Avatar
        imageUrl={sampleImageUrl}
        size={80}
        design="glassmorphic"
        backgroundColor="rgba(255, 59, 48, 0.2)"
      />
    </div>
  ),
};

export const GlassmorphicMinimalGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Avatar
        imageUrl={sampleImageUrl}
        size={80}
        design="glassmorphic"
        backgroundColor="rgba(255, 255, 255, 0.05)"
      />
      <Avatar
        imageUrl={sampleImageUrl}
        size={80}
        design="glassmorphic"
        backgroundColor="rgba(255, 255, 255, 0.08)"
      />
      <Avatar
        imageUrl={sampleImageUrl}
        size={80}
        design="glassmorphic"
        backgroundColor="rgba(255, 255, 255, 0.1)"
      />
    </div>
  ),
};

export const GlassmorphicLayeredGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '20%',
          right: '20%',
          height: '60%',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 16,
          backdropFilter: 'blur(10px)',
        }}
      />
      <Avatar
        imageUrl={sampleImageUrl}
        size={80}
        design="glassmorphic"
        style={{ position: 'relative', zIndex: 2 }}
      />
      <Avatar
        imageUrl={sampleImageUrl}
        size={96}
        design="glassmorphic"
        style={{ position: 'relative', zIndex: 2 }}
      />
      <Avatar
        imageUrl={sampleImageUrl}
        size={80}
        design="glassmorphic"
        style={{ position: 'relative', zIndex: 2 }}
      />
    </div>
  ),
};

export const AllDesigns: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, width: 600 }}>
      <div>
        <h3 style={{ marginBottom: 16 }}>Flat Design</h3>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <Avatar imageUrl={sampleImageUrl} size={64} design="flat" />
          <Avatar imageUrl={sampleImageUrl} size={80} design="flat" />
          <Avatar imageUrl={sampleImageUrl} size={96} design="flat" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: 16 }}>Neumorphic Design</h3>
        <div
          style={{
            backgroundColor: '#e0e5ec',
            padding: 16,
            borderRadius: 8,
            display: 'flex',
            gap: 16,
            alignItems: 'center',
          }}
        >
          <Avatar imageUrl={sampleImageUrl} size={64} design="neumorphic" />
          <Avatar imageUrl={sampleImageUrl} size={80} design="neumorphic" />
          <Avatar imageUrl={sampleImageUrl} size={96} design="neumorphic" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: 16 }}>Skeuomorphic Design</h3>
        <div
          style={{
            backgroundColor: '#f0f0f0',
            padding: 16,
            borderRadius: 8,
            display: 'flex',
            gap: 16,
            alignItems: 'center',
          }}
        >
          <Avatar imageUrl={sampleImageUrl} size={64} design="skeuomorphic" />
          <Avatar imageUrl={sampleImageUrl} size={80} design="skeuomorphic" />
          <Avatar imageUrl={sampleImageUrl} size={96} design="skeuomorphic" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: 16 }}>Glassmorphic Design</h3>
        <div
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: 16,
            borderRadius: 8,
            display: 'flex',
            gap: 16,
            alignItems: 'center',
          }}
        >
          <Avatar imageUrl={sampleImageUrl} size={64} design="glassmorphic" />
          <Avatar imageUrl={sampleImageUrl} size={80} design="glassmorphic" />
          <Avatar imageUrl={sampleImageUrl} size={96} design="glassmorphic" />
        </div>
      </div>
    </div>
  ),
};
