import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    message: { control: 'text' },
    duration: { control: 'number' },
    visible: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    message: 'This is a toast message',
    visible: true,
    onClose: () => {},
  },
};

export const CustomDuration: Story = {
  args: {
    message: 'This toast will show for 5 seconds',
    visible: true,
    duration: 5000,
    onClose: () => {},
  },
};

// Interactive example with trigger button
const InteractiveToastExample = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <Button title="Show Toast" onPress={() => setVisible(true)} />
      <Toast
        message="Action completed successfully!"
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </View>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveToastExample />,
};

// Example with different styles
const MultipleToastsExample = () => {
  const [toasts, setToasts] = useState<Array<{ id: number; visible: boolean }>>([]);
  const [counter, setCounter] = useState(0);

  const showToast = (style: any) => {
    const id = counter;
    setCounter(prev => prev + 1);
    setToasts(prev => [...prev, { id, visible: true }]);
  };

  const hideToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <Button title="Success Toast" onPress={() => showToast({ backgroundColor: '#4CAF50' })} />
      <Button title="Error Toast" onPress={() => showToast({ backgroundColor: '#f44336' })} />
      <Button title="Info Toast" onPress={() => showToast({ backgroundColor: '#2196F3' })} />
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={`Toast message #${toast.id}`}
          visible={toast.visible}
          onClose={() => hideToast(toast.id)}
          style={{
            backgroundColor:
              toast.id % 3 === 0 ? '#4CAF50' : toast.id % 3 === 1 ? '#f44336' : '#2196F3',
          }}
        />
      ))}
    </View>
  );
};

export const MultipleStyles: Story = {
  render: () => <MultipleToastsExample />,
};
