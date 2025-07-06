import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Hero from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Layout/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    design: {
      control: { type: 'select' },
      options: ['flat', 'neumorphic', 'glassmorphic'],
    },
    alignment: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    maxWidth: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    backgroundColor: {
      control: { type: 'color' },
    },
    overlay: {
      control: { type: 'boolean' },
    },
    overlayOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Welcome to BaapUI',
    subtitle: 'Multi-Design UI Framework',
    description: 'Build beautiful, responsive applications with our comprehensive UI component library.',
    actions: [
      { label: 'Get Started', onPress: () => alert('Get Started clicked!'), variant: 'primary' },
      { label: 'View Components', onPress: () => alert('View Components clicked!'), variant: 'outline' },
    ],
    design: 'flat',
    alignment: 'center',
    backgroundColor: '#ffffff',
  },
};

export const Neumorphic: Story = {
  args: {
    title: 'Neumorphic Design',
    subtitle: 'Soft UI Experience',
    description: 'Experience the subtle beauty of neumorphic design with soft shadows and elegant depth.',
    actions: [
      { label: 'Explore Neumorphic', onPress: () => alert('Explore clicked!'), variant: 'primary' },
      { label: 'Learn More', onPress: () => alert('Learn More clicked!'), variant: 'text' },
    ],
    design: 'neumorphic',
    alignment: 'center',
  },
};

export const LeftAligned: Story = {
  args: {
    title: 'Left Aligned Hero',
    subtitle: 'Perfect for Landing Pages',
    description: 'This hero section is left-aligned, making it perfect for landing pages.',
    actions: [
      { label: 'Start Building', onPress: () => alert('Start Building clicked!'), variant: 'primary' },
    ],
    design: 'flat',
    alignment: 'left',
    backgroundColor: '#f8f9fa',
    maxWidth: 'lg',
  },
};

export const Glassmorphic: Story = {
  args: {
    title: 'Glassmorphic Hero',
    subtitle: 'Modern Glass Effect',
    description: 'Experience the modern glassmorphic design with beautiful transparency and blur effects.',
    actions: [
      { label: 'Explore Glass UI', onPress: () => alert('Explore Glass UI clicked!'), variant: 'primary' },
      { label: 'Learn More', onPress: () => alert('Learn More clicked!'), variant: 'outline' },
    ],
    design: 'glassmorphic',
    alignment: 'center',
  },
};

export const GlassmorphicDark: Story = {
  args: {
    title: 'Dark Glassmorphic',
    subtitle: 'Glass in Dark Mode',
    description: 'Beautiful glassmorphic effects work perfectly in dark themes too.',
    actions: [
      { label: 'Try Dark Mode', onPress: () => alert('Try Dark Mode clicked!'), variant: 'primary' },
    ],
    design: 'glassmorphic',
    alignment: 'center',
    backgroundColor: '#1a1a1a',
  },
};

export const AllDesigns: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Hero
        title="Flat Design"
        subtitle="Clean & Minimal"
        description="Simple, clean design without extra visual effects."
        actions={[{ label: 'Flat Action', onPress: () => alert('Flat clicked!'), variant: 'primary' }]}
        design="flat"
        minHeight={300}
      />
      <Hero
        title="Neumorphic Design"
        subtitle="Soft UI"
        description="Subtle shadows and soft, tactile appearance."
        actions={[{ label: 'Neumorphic Action', onPress: () => alert('Neumorphic clicked!'), variant: 'primary' }]}
        design="neumorphic"
        minHeight={300}
      />
      <Hero
        title="Glassmorphic Design"
        subtitle="Glass Effect"
        description="Modern transparency with beautiful blur effects."
        actions={[{ label: 'Glass Action', onPress: () => alert('Glassmorphic clicked!'), variant: 'primary' }]}
        design="glassmorphic"
        minHeight={300}
      />
    </div>
  ),
};