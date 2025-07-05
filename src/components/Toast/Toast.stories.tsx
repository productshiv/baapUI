import React, { useState } from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Toast from './Toast';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  decorators: [
    Story => (
      <View style={{ padding: 20 }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    design: {
      control: 'select',
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'],
      defaultValue: 'flat',
    },
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      defaultValue: 'info',
      description: 'Type of toast message',
    },
    visible: {
      control: 'boolean',
      defaultValue: false,
      description: 'Whether the toast is visible',
    },
    duration: {
      control: { type: 'range', min: 1000, max: 10000, step: 500 },
      defaultValue: 3000,
      description: 'Duration in milliseconds before auto-close',
    },
    message: {
      control: 'text',
      defaultValue: 'This is a toast message',
      description: 'Message text to display',
    },

  },
  args: {
    design: 'flat',
    type: 'info',
    visible: false,
    duration: 3000,
    message: 'This is a toast message',
    onClose: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

// Default Story
export const Default: Story = {
  args: {
    visible: true,
    message: 'Default toast message',
    type: 'info',
    design: 'flat',
  },
};

// Design System Variations
export const Flat: Story = {
  args: {
    visible: true,
    message: 'Flat design toast message',
    type: 'info',
    design: 'flat',
  },
};

export const Neumorphic: Story = {
  args: {
    visible: true,
    message: 'Neumorphic design toast message',
    type: 'info',
    design: 'neumorphic',
  },
};

export const Skeuomorphic: Story = {
  args: {
    visible: true,
    message: 'Skeuomorphic design toast message',
    type: 'info',
    design: 'skeuomorphic',
  },
};

export const Glassmorphic: Story = {
  args: {
    visible: true,
    message: 'Glassmorphic design toast message',
    type: 'info',
    design: 'glassmorphic',
  },
};

export const GlassmorphicTypes: Story = {
  render: () => (
    <View style={{ gap: 16, minWidth: 300 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Glassmorphic Toast Types</Typography>
      <ToastDemo design="glassmorphic" type="info" message="Information message" />
      <ToastDemo design="glassmorphic" type="success" message="Success message" />
      <ToastDemo design="glassmorphic" type="warning" message="Warning message" />
      <ToastDemo design="glassmorphic" type="error" message="Error message" />
    </View>
  ),
};

export const GlassmorphicDarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    visible: true,
    message: 'Glassmorphic toast in dark mode',
    type: 'success',
    design: 'glassmorphic',
  },
};

export const GlassmorphicPlayground: Story = {
  args: {
    visible: true,
    message: 'Interactive glassmorphic toast',
    type: 'info',
    design: 'glassmorphic',
    duration: 5000,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    duration: {
      control: { type: 'range', min: 1000, max: 10000, step: 500 },
    },
    message: {
      control: 'text',
    },
  },
};

export const GlassmorphicInteractive: Story = {
  render: () => <ToastDemo design="glassmorphic" type="success" message="Interactive glassmorphic toast" />,
};

export const GlassmorphicColoredGlass: Story = {
  render: () => (
    <View style={{ gap: 20, padding: 20 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Colored Glass Effects</Typography>
      <View style={{ backgroundColor: 'rgba(33, 150, 243, 0.1)', backdropFilter: 'blur(8px)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(33, 150, 243, 0.2)' }}>
        <ToastDemo design="glassmorphic" type="info" message="Blue tinted glass toast" />
      </View>
      <View style={{ backgroundColor: 'rgba(156, 39, 176, 0.1)', backdropFilter: 'blur(8px)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(156, 39, 176, 0.2)' }}>
        <ToastDemo design="glassmorphic" type="warning" message="Purple tinted glass toast" />
      </View>
      <View style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', backdropFilter: 'blur(8px)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(76, 175, 80, 0.2)' }}>
        <ToastDemo design="glassmorphic" type="success" message="Green tinted glass toast" />
      </View>
    </View>
  ),
};

export const GlassmorphicMinimalGlass: Story = {
  args: {
    visible: true,
    message: 'Minimal glass effect toast',
    type: 'info',
    design: 'glassmorphic',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
};

export const GlassmorphicLayeredGlass: Story = {
  render: () => (
    <View style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Layered Glass Effects</Typography>
      <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(4px)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <ToastDemo design="glassmorphic" type="success" message="Layered glass toast effect" />
        </View>
      </View>
    </View>
  ),
};

// Type Variations
export const InfoToast: Story = {
  args: {
    visible: true,
    message: 'This is an informational message',
    type: 'info',
    design: 'flat',
  },
};

export const SuccessToast: Story = {
  args: {
    visible: true,
    message: 'Operation completed successfully!',
    type: 'success',
    design: 'flat',
  },
};

export const WarningToast: Story = {
  args: {
    visible: true,
    message: 'Please review your input before proceeding',
    type: 'warning',
    design: 'flat',
  },
};

export const ErrorToast: Story = {
  args: {
    visible: true,
    message: 'An error occurred. Please try again.',
    type: 'error',
    design: 'flat',
  },
};

// Design-specific Type Variations
export const NeumorphicInfo: Story = {
  args: {
    visible: true,
    message: 'Neumorphic info message',
    type: 'info',
    design: 'neumorphic',
  },
};

export const NeumorphicSuccess: Story = {
  args: {
    visible: true,
    message: 'Neumorphic success message',
    type: 'success',
    design: 'neumorphic',
  },
};

export const NeumorphicWarning: Story = {
  args: {
    visible: true,
    message: 'Neumorphic warning message',
    type: 'warning',
    design: 'neumorphic',
  },
};

export const NeumorphicError: Story = {
  args: {
    visible: true,
    message: 'Neumorphic error message',
    type: 'error',
    design: 'neumorphic',
  },
};

// Message Length Variations
export const ShortMessage: Story = {
  args: {
    visible: true,
    message: 'Done!',
    type: 'success',
    design: 'flat',
  },
};

export const LongMessage: Story = {
  args: {
    visible: true,
    message: 'This is a very long toast message that demonstrates how the toast component handles longer text content and maintains proper formatting and readability.',
    type: 'info',
    design: 'flat',
  },
};

export const MultilineMessage: Story = {
  args: {
    visible: true,
    message: 'Line 1: First part of the message\nLine 2: Second part of the message\nLine 3: Third part with more details',
    type: 'warning',
    design: 'flat',
  },
};

// Duration Variations
export const QuickToast: Story = {
  args: {
    visible: true,
    message: 'Quick toast (1 second)',
    type: 'info',
    design: 'flat',
    duration: 1000,
  },
};

export const LongToast: Story = {
  args: {
    visible: true,
    message: 'Long duration toast (8 seconds)',
    type: 'warning',
    design: 'flat',
    duration: 8000,
  },
};

// Interactive Examples
interface ToastDemoProps {
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  type?: 'info' | 'success' | 'warning' | 'error';
  message?: string;
  duration?: number;
}

const ToastDemo = ({ 
  design = 'flat', 
  type = 'info', 
  message = `This is a ${type} message`,
  duration = 3000 
}: ToastDemoProps) => {
  const [visible, setVisible] = useState(false);

  const showToast = () => {
    setVisible(true);
  };

  return (
    <View style={{ minHeight: 120, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={showToast}>Show {type.charAt(0).toUpperCase() + type.slice(1)} Toast</Button>
      <Toast
        message={message}
        visible={visible}
        onClose={() => setVisible(false)}
        type={type}
        design={design}
        duration={duration}
      />
    </View>
  );
};

export const Interactive: Story = {
  render: () => <ToastDemo />,
};

// All Types Showcase
export const AllTypes: Story = {
  render: () => (
    <View style={{ gap: 16, minWidth: 300 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>All Toast Types</Typography>
      <ToastDemo type="info" message="Information message" />
      <ToastDemo type="success" message="Success message" />
      <ToastDemo type="warning" message="Warning message" />
      <ToastDemo type="error" message="Error message" />
    </View>
  ),
};

// All Design Systems Showcase
export const AllDesigns: Story = {
  render: () => (
    <View style={{ gap: 20, minWidth: 300 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Design Systems</Typography>
      <View style={{ gap: 12 }}>
        <View style={{ gap: 8 }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Flat Design</Typography>
          <ToastDemo design="flat" type="success" message="Flat design toast" />
        </View>
        <View style={{ gap: 8 }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Neumorphic Design</Typography>
          <ToastDemo design="neumorphic" type="success" message="Neumorphic design toast" />
        </View>
        <View style={{ gap: 8 }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Skeuomorphic Design</Typography>
          <ToastDemo design="skeuomorphic" type="success" message="Skeuomorphic design toast" />
        </View>
        <View style={{ gap: 8 }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Glassmorphic Design</Typography>
          <ToastDemo design="glassmorphic" type="success" message="Glassmorphic design toast" />
        </View>
      </View>
    </View>
  ),
};

// Real-world Examples
export const FormValidationExample: Story = {
  render: () => {
    const [email, setEmail] = useState('');
    const [toastConfig, setToastConfig] = useState<{
      visible: boolean;
      type: 'info' | 'success' | 'warning' | 'error';
      message: string;
    }>({
      visible: false,
      type: 'info',
      message: '',
    });

    const validateEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const handleSubmit = () => {
      if (!email) {
        setToastConfig({
          visible: true,
          type: 'warning',
          message: 'Please enter an email address',
        });
      } else if (!validateEmail(email)) {
        setToastConfig({
          visible: true,
          type: 'error',
          message: 'Please enter a valid email address',
        });
      } else {
        setToastConfig({
          visible: true,
          type: 'success',
          message: 'Email submitted successfully!',
        });
        setEmail('');
      }
    };

    return (
      <View style={{ gap: 16, alignItems: 'center', minWidth: 300 }}>
        <Typography variant="h6">Form Validation Example</Typography>
        <View style={{ gap: 8, width: '100%', maxWidth: 250 }}>
          <Typography variant="body2">Email Address:</Typography>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{
              padding: '8px 12px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '14px',
            }}
          />
        </View>
        <Button onPress={handleSubmit}>Submit</Button>
        <Toast
          visible={toastConfig.visible}
          type={toastConfig.type}
          message={toastConfig.message}
          design="neumorphic"
          onClose={() => setToastConfig(prev => ({ ...prev, visible: false }))}
        />
      </View>
    );
  },
};

// Action Feedback Example
export const ActionFeedbackExample: Story = {
  render: () => {
    const [toastConfig, setToastConfig] = useState<{
      visible: boolean;
      type: 'info' | 'success' | 'warning' | 'error';
      message: string;
    }>({
      visible: false,
      type: 'info',
      message: '',
    });

    const actions = [
      {
        label: 'Save Document',
        type: 'success' as const,
        message: 'Document saved successfully!',
      },
      {
        label: 'Delete Item',
        type: 'warning' as const,
        message: 'Item will be deleted permanently',
      },
      {
        label: 'Network Error',
        type: 'error' as const,
        message: 'Failed to connect to server',
      },
      {
        label: 'Loading Data',
        type: 'info' as const,
        message: 'Loading data, please wait...',
      },
    ];

    const handleAction = (action: typeof actions[0]) => {
      setToastConfig({
        visible: true,
        type: action.type,
        message: action.message,
      });
    };

    return (
      <View style={{ gap: 16, alignItems: 'center', minWidth: 300 }}>
        <Typography variant="h6">Action Feedback Example</Typography>
        <View style={{ gap: 8, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          {actions.map((action, index) => (
            <Button
              key={index}
              onPress={() => handleAction(action)}
              variant={action.type === 'error' ? 'secondary' : 'primary'}
            >
              {action.label}
            </Button>
          ))}
        </View>
        <Toast
          visible={toastConfig.visible}
          type={toastConfig.type}
          message={toastConfig.message}
          design="flat"
          onClose={() => setToastConfig(prev => ({ ...prev, visible: false }))}
        />
      </View>
    );
  },
};

// Auto-dismiss vs Manual Example
export const DismissalExample: Story = {
  render: () => {
    const [autoToast, setAutoToast] = useState(false);
    const [manualToast, setManualToast] = useState(false);

    return (
      <View style={{ gap: 16, alignItems: 'center', minWidth: 300 }}>
        <Typography variant="h6">Toast Dismissal Types</Typography>
        <View style={{ gap: 8, flexDirection: 'row' }}>
          <Button onPress={() => setAutoToast(true)}>Auto-dismiss (3s)</Button>
          <Button onPress={() => setManualToast(true)}>Manual dismiss</Button>
        </View>
        
        <Toast
          visible={autoToast}
          type="info"
          message="This toast will auto-dismiss in 3 seconds"
          design="flat"
          duration={3000}
          onClose={() => setAutoToast(false)}
        />
        
        <Toast
          visible={manualToast}
          type="warning"
          message="This toast requires manual dismissal"
          design="neumorphic"
          duration={0} // No auto-dismiss
          onClose={() => setManualToast(false)}
        />
      </View>
    );
  },
};

// Toast Queue Example
export const QueueExample: Story = {
  render: () => {
    const [toasts, setToasts] = useState<Array<{
      id: number;
      visible: boolean;
      type: 'info' | 'success' | 'warning' | 'error';
      message: string;
    }>>([]);

    const addToast = (type: 'info' | 'success' | 'warning' | 'error', message: string) => {
      const id = Date.now();
      setToasts(prev => [...prev, { id, visible: true, type, message }]);
    };

    const removeToast = (id: number) => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    const queueActions = [
      { type: 'info' as const, message: 'Info message added to queue' },
      { type: 'success' as const, message: 'Success message queued' },
      { type: 'warning' as const, message: 'Warning message in queue' },
      { type: 'error' as const, message: 'Error message queued' },
    ];

    return (
      <View style={{ gap: 16, alignItems: 'center', minWidth: 300 }}>
        <Typography variant="h6">Toast Queue Example</Typography>
        <View style={{ gap: 8, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          {queueActions.map((action, index) => (
            <Button
              key={index}
              onPress={() => addToast(action.type, action.message)}
              variant="outline"
            >
              Add {action.type}
            </Button>
          ))}
        </View>
        <Button onPress={() => setToasts([])} variant="secondary">Clear All</Button>
        
        {toasts.map((toast, index) => (
          <Toast
            key={toast.id}
            visible={toast.visible}
            type={toast.type}
            message={`${toast.message} (${index + 1})`}
            design="flat"
            duration={5000}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </View>
    );
  },
};
