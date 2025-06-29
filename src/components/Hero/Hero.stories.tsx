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
      options: ['flat', 'neumorphic'],
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