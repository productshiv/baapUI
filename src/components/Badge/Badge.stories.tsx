import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const meta: Meta<typeof Badge> = {
  title: 'Feedback/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: '1',
    variant: 'primary',
    size: 'medium',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Badge variant="primary">1</Badge>
      <Badge variant="secondary">2</Badge>
      <Badge variant="success">3</Badge>
      <Badge variant="error">4</Badge>
      <Badge variant="warning">5</Badge>
      <Badge variant="info">6</Badge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Badge size="small">S</Badge>
      <Badge size="medium">M</Badge>
      <Badge size="large">L</Badge>
    </div>
  ),
};

export const Neumorphic: Story = {
  args: {
    children: '1',
    variant: 'primary',
    size: 'medium',
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
    textColor: NEUMORPHIC_COLORS.text,
  },
};

export const NeumorphicVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        backgroundColor: NEUMORPHIC_COLORS.background,
        padding: '16px',
        borderRadius: '8px',
      }}
    >
      <Badge variant="primary" design="neumorphic">
        1
      </Badge>
      <Badge variant="secondary" design="neumorphic">
        2
      </Badge>
      <Badge variant="success" design="neumorphic">
        3
      </Badge>
      <Badge variant="error" design="neumorphic">
        4
      </Badge>
      <Badge variant="warning" design="neumorphic">
        5
      </Badge>
      <Badge variant="info" design="neumorphic">
        6
      </Badge>
    </div>
  ),
};
