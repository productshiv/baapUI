import React, { useState, useEffect } from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './ProgressBar';
import Typography from '../Typography/Typography';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const meta: Meta<typeof ProgressBar> = {
  title: 'Feedback/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic'],
    },
    height: {
      control: { type: 'range', min: 4, max: 24, step: 2 },
    },
    width: {
      control: { type: 'range', min: 100, max: 500, step: 50 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    progress: 0.4,
    height: 12,
    width: 300,
  },
};

export const ProgressStages: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ProgressBar progress={0.2} />
      <ProgressBar progress={0.4} />
      <ProgressBar progress={0.6} />
      <ProgressBar progress={0.8} />
      <ProgressBar progress={1} />
    </div>
  ),
};

export const CustomSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ProgressBar progress={0.6} height={8} width={200} />
      <ProgressBar progress={0.6} height={12} width={300} />
      <ProgressBar progress={0.6} height={16} width={400} />
    </div>
  ),
};

export const Neumorphic: Story = {
  args: {
    progress: 0.6,
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
    progressColor: '#2196f3',
    height: 12,
    width: 300,
  },
};

export const NeumorphicVariations: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        backgroundColor: NEUMORPHIC_COLORS.background,
        padding: '24px',
        borderRadius: '12px',
      }}
    >
      <ProgressBar progress={0.3} design="neumorphic" progressColor="#4caf50" />
      <ProgressBar progress={0.5} design="neumorphic" progressColor="#f50057" />
      <ProgressBar progress={0.7} design="neumorphic" progressColor="#ff9800" />
      <ProgressBar progress={0.9} design="neumorphic" progressColor="#9c27b0" />
    </div>
  ),
};

const AnimatedExample = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 0.1;
        return next > 1 ? 0 : next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ gap: 8, minWidth: 300 }}>
      <Typography>Progress: {Math.round(progress * 100)}%</Typography>
      <ProgressBar progress={progress} />
    </View>
  );
};

export const Animated: Story = {
  render: () => <AnimatedExample />,
};
