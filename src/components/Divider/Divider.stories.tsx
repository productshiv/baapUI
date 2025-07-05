import React from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Divider from './Divider';
import Typography from '../Typography/Typography';

const meta: Meta<typeof Divider> = {
  title: 'Data Display/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'],
    },
    thickness: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
    },
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

export const Skeuomorphic: Story = {
  render: () => (
    <View style={{ width: 300, gap: 16, backgroundColor: '#f0f0f0', padding: 20, borderRadius: 12 }}>
      <Typography>Content above skeuomorphic divider</Typography>
      <Divider design="skeuomorphic" />
      <Typography>Content below skeuomorphic divider</Typography>
    </View>
  ),
};

export const SkeuomorphicThick: Story = {
  render: () => (
    <View style={{ width: 300, gap: 16, backgroundColor: '#f0f0f0', padding: 20, borderRadius: 12 }}>
      <Typography variant="h6">Thick Skeuomorphic Dividers</Typography>
      <Typography>Section 1</Typography>
      <Divider design="skeuomorphic" thickness={3} />
      <Typography>Section 2</Typography>
      <Divider design="skeuomorphic" thickness={5} />
      <Typography>Section 3</Typography>
    </View>
  ),
};

// Glassmorphic Design Stories
export const Glassmorphic: Story = {
  render: () => (
    <View
      style={{
        width: 400,
        gap: 16,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 24,
        borderRadius: 12,
      }}
    >
      <Typography style={{ color: 'white' }}>Content above glassmorphic divider</Typography>
      <Divider design="glassmorphic" />
      <Typography style={{ color: 'white' }}>Content below glassmorphic divider</Typography>
    </View>
  ),
};

export const GlassmorphicSections: Story = {
  render: () => (
    <View
      style={{
        width: 400,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 24,
        borderRadius: 12,
      }}
    >
      <Typography variant="h6" style={{ color: 'white', marginBottom: 8 }}>Section 1</Typography>
      <Typography style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: 16 }}>Content for section 1</Typography>
      <Divider design="glassmorphic" />
      <Typography variant="h6" style={{ color: 'white', marginBottom: 8 }}>Section 2</Typography>
      <Typography style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: 16 }}>Content for section 2</Typography>
      <Divider design="glassmorphic" />
      <Typography variant="h6" style={{ color: 'white', marginBottom: 8 }}>Section 3</Typography>
      <Typography style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Content for section 3</Typography>
    </View>
  ),
};

export const GlassmorphicDarkMode: Story = {
  render: () => (
    <View
      style={{
        width: 400,
        gap: 16,
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        padding: 24,
        borderRadius: 12,
      }}
    >
      <Typography style={{ color: 'white' }}>Dark mode glassmorphic divider</Typography>
      <Divider design="glassmorphic" />
      <Typography style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Content below divider</Typography>
    </View>
  ),
};

export const GlassmorphicPlayground: Story = {
  args: {
    design: 'glassmorphic',
    thickness: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  render: (args) => (
    <View
      style={{
        width: 400,
        gap: 16,
        background: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
        padding: 24,
        borderRadius: 12,
      }}
    >
      <Typography style={{ color: 'white' }}>Playground Divider</Typography>
      <Divider {...args} />
      <Typography style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Customizable glassmorphic divider</Typography>
    </View>
  ),
};

export const GlassmorphicThickness: Story = {
  render: () => (
    <View
      style={{
        width: 400,
        background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        padding: 24,
        borderRadius: 12,
      }}
    >
      <Typography variant="h6" style={{ color: '#333', marginBottom: 8 }}>Different Thickness</Typography>
      <Typography style={{ color: '#666', marginBottom: 16 }}>Thin divider (1px)</Typography>
      <Divider design="glassmorphic" thickness={1} />
      <Typography style={{ color: '#666', marginBottom: 16 }}>Medium divider (3px)</Typography>
      <Divider design="glassmorphic" thickness={3} />
      <Typography style={{ color: '#666', marginBottom: 16 }}>Thick divider (5px)</Typography>
      <Divider design="glassmorphic" thickness={5} />
      <Typography style={{ color: '#666' }}>Extra thick divider (8px)</Typography>
      <Divider design="glassmorphic" thickness={8} />
    </View>
  ),
};

export const GlassmorphicColoredGlass: Story = {
  render: () => (
    <View
      style={{
        width: 400,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 24,
        borderRadius: 12,
      }}
    >
      <Typography style={{ color: 'white', marginBottom: 16 }}>Blue Glass</Typography>
      <Divider design="glassmorphic" backgroundColor="rgba(0, 122, 255, 0.3)" />
      <Typography style={{ color: 'white', marginBottom: 16 }}>Purple Glass</Typography>
      <Divider design="glassmorphic" backgroundColor="rgba(88, 86, 214, 0.3)" />
      <Typography style={{ color: 'white', marginBottom: 16 }}>Green Glass</Typography>
      <Divider design="glassmorphic" backgroundColor="rgba(52, 199, 89, 0.3)" />
      <Typography style={{ color: 'white', marginBottom: 16 }}>Red Glass</Typography>
      <Divider design="glassmorphic" backgroundColor="rgba(255, 59, 48, 0.3)" />
    </View>
  ),
};

export const GlassmorphicMinimalGlass: Story = {
  render: () => (
    <View
      style={{
        width: 400,
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        padding: 24,
        borderRadius: 12,
      }}
    >
      <Typography style={{ color: 'white', marginBottom: 16 }}>Minimal Glass Effect</Typography>
      <Divider design="glassmorphic" backgroundColor="rgba(255, 255, 255, 0.05)" />
      <Typography style={{ color: 'white', marginBottom: 16 }}>Subtle Glass Effect</Typography>
      <Divider design="glassmorphic" backgroundColor="rgba(255, 255, 255, 0.08)" />
      <Typography style={{ color: 'white', marginBottom: 16 }}>Clean Glass Effect</Typography>
      <Divider design="glassmorphic" backgroundColor="rgba(255, 255, 255, 0.1)" />
    </View>
  ),
};

export const GlassmorphicLayeredGlass: Story = {
  render: () => (
    <View
      style={{
        width: 400,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 24,
        borderRadius: 12,
        position: 'relative',
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: '30%',
          left: '10%',
          right: '10%',
          height: '40%',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 8,
          backdropFilter: 'blur(10px)',
        }}
      />
      <Typography style={{ color: 'white', marginBottom: 16, position: 'relative', zIndex: 2 }}>Layered Glass</Typography>
      <Divider design="glassmorphic" style={{ position: 'relative', zIndex: 2 }} />
      <Typography style={{ color: 'white', position: 'relative', zIndex: 2 }}>Multiple glass layers</Typography>
    </View>
  ),
};

export const AllDesigns: Story = {
  render: () => (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 500 }}>
      <View>
        <Typography variant="h6" style={{ marginBottom: 16 }}>Flat Design</Typography>
        <View style={{ gap: 8 }}>
          <Typography>Content above</Typography>
          <Divider design="flat" />
          <Typography>Content below</Typography>
        </View>
      </View>
      <View>
        <Typography variant="h6" style={{ marginBottom: 16 }}>Neumorphic Design</Typography>
        <View style={{ backgroundColor: '#e0e5ec', padding: 16, borderRadius: 8, gap: 8 }}>
          <Typography>Content above</Typography>
          <Divider design="neumorphic" />
          <Typography>Content below</Typography>
        </View>
      </View>
      <View>
        <Typography variant="h6" style={{ marginBottom: 16 }}>Skeuomorphic Design</Typography>
        <View style={{ backgroundColor: '#f0f0f0', padding: 16, borderRadius: 8, gap: 8 }}>
          <Typography>Content above</Typography>
          <Divider design="skeuomorphic" />
          <Typography>Content below</Typography>
        </View>
      </View>
      <View>
        <Typography variant="h6" style={{ marginBottom: 16 }}>Glassmorphic Design</Typography>
        <View
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: 16,
            borderRadius: 8,
            gap: 8,
          }}
        >
          <Typography style={{ color: 'white' }}>Content above</Typography>
          <Divider design="glassmorphic" />
          <Typography style={{ color: 'white' }}>Content below</Typography>
        </View>
      </View>
    </View>
  ),
};
