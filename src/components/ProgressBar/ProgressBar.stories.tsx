import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './ProgressBar';
import Typography from '../Typography/Typography';

const meta: Meta<typeof ProgressBar> = {
  title: 'Feedback/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: 'Progress value between 0 and 1',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    progress: 0.4,
  },
};

export const States: Story = {
  render: () => (
    <View style={{ gap: 16, minWidth: 300 }}>
      <View>
        <Typography style={{ marginBottom: 8 }}>Empty (0%)</Typography>
        <ProgressBar progress={0} />
      </View>
      <View>
        <Typography style={{ marginBottom: 8 }}>Partial (40%)</Typography>
        <ProgressBar progress={0.4} />
      </View>
      <View>
        <Typography style={{ marginBottom: 8 }}>Half (50%)</Typography>
        <ProgressBar progress={0.5} />
      </View>
      <View>
        <Typography style={{ marginBottom: 8 }}>Almost (80%)</Typography>
        <ProgressBar progress={0.8} />
      </View>
      <View>
        <Typography style={{ marginBottom: 8 }}>Complete (100%)</Typography>
        <ProgressBar progress={1} />
      </View>
    </View>
  ),
};

const AnimatedExample = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
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