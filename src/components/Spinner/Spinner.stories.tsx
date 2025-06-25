import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Spinner from './Spinner';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const meta: Meta<typeof Spinner> = {
  title: 'Feedback/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    },
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: 'medium',
    variant: 'primary',
  },
};

export const WithLabel: Story = {
  args: {
    size: 'medium',
    variant: 'primary',
    label: 'Loading...',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <Spinner size="small" label="Small" />
      <Spinner size="medium" label="Medium" />
      <Spinner size="large" label="Large" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <Spinner variant="primary" label="Primary" />
      <Spinner variant="secondary" label="Secondary" />
      <Spinner variant="success" label="Success" />
      <Spinner variant="danger" label="Danger" />
      <Spinner variant="warning" label="Warning" />
      <Spinner variant="info" label="Info" />
    </div>
  ),
};

export const CustomColor: Story = {
  args: {
    size: 'large',
    color: '#9c27b0',
    label: 'Custom Color',
  },
};

export const Neumorphic: Story = {
  args: {
    size: 'large',
    variant: 'primary',
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
    textColor: NEUMORPHIC_COLORS.text,
    label: 'Loading...',
  },
};

export const NeumorphicVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
        backgroundColor: NEUMORPHIC_COLORS.background,
        padding: '32px',
        borderRadius: '16px',
      }}
    >
      <Spinner variant="primary" design="neumorphic" label="Primary" />
      <Spinner variant="success" design="neumorphic" label="Success" />
      <Spinner variant="danger" design="neumorphic" label="Danger" />
    </div>
  ),
};
