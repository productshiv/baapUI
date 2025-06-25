import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Toast from './Toast';
import Button from '../Button/Button';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic'],
    },
    duration: {
      control: { type: 'range', min: 1000, max: 5000, step: 500 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

interface ToastDemoProps {
  design?: 'flat' | 'neumorphic';
  type?: 'info' | 'success' | 'warning' | 'error';
}

const ToastDemo = ({ design = 'flat', type = 'info' }: ToastDemoProps) => {
  const [visible, setVisible] = useState(false);

  const showToast = () => {
    setVisible(true);
  };

  return (
    <div
      style={{
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button onPress={showToast}>Show Toast</Button>
      <Toast
        message={`This is a ${type} message`}
        visible={visible}
        onClose={() => setVisible(false)}
        type={type}
        design={design}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <ToastDemo />,
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <ToastDemo type="info" />
      <ToastDemo type="success" />
      <ToastDemo type="warning" />
      <ToastDemo type="error" />
    </div>
  ),
};

export const Neumorphic: Story = {
  render: () => (
    <div
      style={{
        backgroundColor: NEUMORPHIC_COLORS.background,
        padding: '24px',
        borderRadius: '12px',
        minHeight: '200px',
      }}
    >
      <ToastDemo design="neumorphic" />
    </div>
  ),
};

export const NeumorphicTypes: Story = {
  render: () => (
    <div
      style={{
        backgroundColor: NEUMORPHIC_COLORS.background,
        padding: '24px',
        borderRadius: '12px',
        display: 'flex',
        gap: '16px',
        flexDirection: 'column',
      }}
    >
      <ToastDemo type="info" design="neumorphic" />
      <ToastDemo type="success" design="neumorphic" />
      <ToastDemo type="warning" design="neumorphic" />
      <ToastDemo type="error" design="neumorphic" />
    </div>
  ),
};
