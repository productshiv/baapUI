import React, { useState } from 'react';
import { View, Text, TextInput } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
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
    visible: {
      control: 'boolean',
      defaultValue: false,
      description: 'Whether the modal is visible',
    },
    design: {
      control: 'select',
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'],
      defaultValue: 'flat',
      description: 'Design system variant',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color for the modal',
    },
    textColor: {
      control: 'color',
      description: 'Custom text color for the modal',
    },
    style: {
      control: 'object',
      description: 'Custom style for the modal content',
    },
  },
  args: {
    visible: false,
    design: 'flat',
    onClose: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Default Story
export const Default: Story = {
  args: {
    visible: true,
    children: (
      <View>
        <Typography variant="h6">Default Modal</Typography>
        <Typography style={{ marginVertical: 20 }}>
          This is a basic modal with default styling.
        </Typography>
        <Button onPress={() => {}}>Close</Button>
      </View>
    ),
  },
};

// Design System Variations
export const Flat: Story = {
  args: {
    visible: true,
    design: 'flat',
    children: (
      <View>
        <Typography variant="h6">Flat Design Modal</Typography>
        <Typography style={{ marginVertical: 20 }}>
          This modal uses the flat design system.
        </Typography>
        <Button onPress={() => {}}>Close</Button>
      </View>
    ),
  },
};

export const Neumorphic: Story = {
  args: {
    visible: true,
    design: 'neumorphic',
    children: (
      <View>
        <Typography variant="h6">Neumorphic Design Modal</Typography>
        <Typography style={{ marginVertical: 20 }}>
          This modal uses the neumorphic design system.
        </Typography>
        <Button onPress={() => {}}>Close</Button>
      </View>
    ),
  },
};

export const Skeuomorphic: Story = {
  args: {
    visible: true,
    design: 'skeuomorphic',
    children: (
      <View>
        <Typography variant="h6">Skeuomorphic Design Modal</Typography>
        <Typography style={{ marginVertical: 20 }}>
          This modal uses the skeuomorphic design system.
        </Typography>
        <Button onPress={() => {}}>Close</Button>
      </View>
    ),
  },
};

export const Glassmorphic: Story = {
  args: {
    visible: true,
    design: 'glassmorphic',
    children: (
      <View>
        <Typography variant="h6">Glassmorphic Design Modal</Typography>
        <Typography style={{ marginVertical: 20 }}>
          This modal uses the glassmorphic design system with glass-like transparency and blur effects.
        </Typography>
        <Button onPress={() => {}}>Close</Button>
      </View>
    ),
  },
};

// Glassmorphic Design Stories
export const GlassmorphicAlert: Story = {
  args: {
    visible: true,
    design: 'glassmorphic',
    children: (
      <View style={{ alignItems: 'center' }}>
        <Typography variant="h6" style={{ textAlign: 'center', marginBottom: 16 }}>⚠️ Glass Alert</Typography>
        <Typography style={{ textAlign: 'center', marginBottom: 20 }}>
          This is a glassmorphic alert modal with beautiful transparency effects.
        </Typography>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <Button variant="outline" onPress={() => {}}>Cancel</Button>
          <Button design="glassmorphic" onPress={() => {}}>Confirm</Button>
        </View>
      </View>
    ),
  },
};

export const GlassmorphicSuccess: Story = {
  args: {
    visible: true,
    design: 'glassmorphic',
    children: (
      <View style={{ alignItems: 'center' }}>
        <Typography variant="h6" style={{ textAlign: 'center', marginBottom: 16 }}>✨ Glass Success</Typography>
        <Typography style={{ textAlign: 'center', marginBottom: 20 }}>
          Your action completed successfully with elegant glass styling!
        </Typography>
        <Button design="glassmorphic" onPress={() => {}}>Perfect!</Button>
      </View>
    ),
  },
};

export const GlassmorphicPlayground: Story = {
  args: {
    visible: true,
    design: 'glassmorphic',
    children: (
      <View>
        <Typography variant="h6">Interactive Glass Modal</Typography>
        <Typography style={{ marginVertical: 20 }}>
          Customize this glassmorphic modal using the controls panel.
        </Typography>
        <Button design="glassmorphic" onPress={() => {}}>Glass Button</Button>
      </View>
    ),
  },
};

// Enhanced Glassmorphic Story Variations (Phase 7 - BAAPUI-8)
export const LightGlass: Story = {
  args: {
    visible: true,
    design: 'glassmorphic',
    children: (
      <View>
        <Typography variant="h6">Light Glass Modal</Typography>
        <Typography style={{ marginVertical: 20 }}>
          This modal showcases light glass effects with subtle transparency.
        </Typography>
        <Button design="glassmorphic" onPress={() => {}}>Light Glass Action</Button>
      </View>
    ),
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f0f0f0' },
      ],
    },
  },
};

export const DarkGlass: Story = {
  args: {
    visible: true,
    design: 'glassmorphic',
    children: (
      <View>
        <Typography variant="h6">Dark Glass Modal</Typography>
        <Typography style={{ marginVertical: 20 }}>
          This modal demonstrates dark glass effects with enhanced contrast.
        </Typography>
        <Button design="glassmorphic" onPress={() => {}}>Dark Glass Action</Button>
      </View>
    ),
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
};

export const ColoredGlass: Story = {
  args: {
    visible: true,
    design: 'glassmorphic',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    children: (
      <View>
        <Typography variant="h6">Colored Glass Modal</Typography>
        <Typography style={{ marginVertical: 20 }}>
          This modal features colored glass effects with custom tinting.
        </Typography>
        <Button design="glassmorphic" onPress={() => {}}>Colored Glass Action</Button>
      </View>
    ),
  },
  parameters: {
    backgrounds: {
      default: 'gradient',
      values: [
        { name: 'gradient', value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
      ],
    },
  },
};

export const HighBlur: Story = {
  args: {
    visible: true,
    design: 'glassmorphic',
    children: (
      <View>
        <Typography variant="h6">High Blur Glass Modal</Typography>
        <Typography style={{ marginVertical: 20 }}>
          This modal demonstrates high blur intensity for maximum glass effect.
        </Typography>
        <Button design="glassmorphic" onPress={() => {}}>High Blur Action</Button>
      </View>
    ),
  },
  parameters: {
    backgrounds: {
      default: 'pattern',
      values: [
        { name: 'pattern', value: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' },
      ],
    },
  },
};

export const MinimalGlass: Story = {
  args: {
    visible: true,
    design: 'glassmorphic',
    style: { width: 280, padding: 16 },
    children: (
      <View style={{ alignItems: 'center' }}>
        <Typography variant="h6" style={{ textAlign: 'center', marginBottom: 16 }}>Minimal Glass</Typography>
        <Typography style={{ textAlign: 'center', marginBottom: 20 }}>
          Clean and minimal glass design.
        </Typography>
        <Button design="glassmorphic" onPress={() => {}}>OK</Button>
      </View>
    ),
  },
  parameters: {
    backgrounds: {
      default: 'minimal',
      values: [
        { name: 'minimal', value: '#fafafa' },
      ],
    },
  },
};

export const LayeredGlass: Story = {
  render: () => (
    <View style={{ 
      position: 'relative',
      width: '100%',
      height: 400,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: 20,
      padding: 40
    }}>
      <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 20,
        backdropFilter: 'blur(10px)'
      }} />
      <Modal
         visible={true}
         design="glassmorphic"
         style={{ position: 'relative', zIndex: 10 }}
         onClose={() => {}}
       >
        <View>
          <Typography variant="h6">Layered Glass Modal</Typography>
          <Typography style={{ marginVertical: 20 }}>
            Multiple glass layers create depth and visual interest.
          </Typography>
          <Button design="glassmorphic" onPress={() => {}}>Layered Action</Button>
        </View>
      </Modal>
    </View>
  ),
};

export const GlassmorphicInteractive: Story = {
  render: () => {
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState('');
    
    return (
      <View style={{ padding: 20, gap: 16 }}>
        <Button 
          design="glassmorphic" 
          onPress={() => setIsVisible(true)}
        >
          Open Interactive Glass Modal
        </Button>
        
        <Modal
           visible={isVisible}
           design="glassmorphic"
           onClose={() => setIsVisible(false)}
         >
          <View>
            <Typography variant="h6" style={{ marginBottom: 16 }}>Interactive Glass Modal</Typography>
            <Typography style={{ marginBottom: 16 }}>
              Type a message to see real-time interaction:
            </Typography>
            <TextInput
              value={message}
              onChangeText={setMessage}
              placeholder="Enter your message..."
              style={{
                borderWidth: 1,
                borderColor: 'rgba(255, 255, 255, 0.3)',
                borderRadius: 8,
                padding: 12,
                marginBottom: 16,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            />
            {message.length > 0 && (
              <View style={{
                padding: 8,
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                borderRadius: 6,
                marginBottom: 16,
                backdropFilter: 'blur(10px)'
              }}>
                <Typography variant="caption" style={{ color: '#059669' }}>
                  Preview: {message}
                </Typography>
              </View>
            )}
            <View style={{ flexDirection: 'row', gap: 12, justifyContent: 'flex-end' }}>
              <Button 
                variant="outline" 
                onPress={() => setIsVisible(false)}
              >
                Cancel
              </Button>
              <Button 
                design="glassmorphic" 
                onPress={() => {
                  setMessage('');
                  setIsVisible(false);
                }}
              >
                Submit
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    );
  },
};

// Size Variations
export const SmallModal: Story = {
  args: {
    visible: true,
    style: { width: 250, padding: 16 },
    children: (
      <View>
        <Typography variant="h6">Small Modal</Typography>
        <Typography style={{ marginVertical: 12 }}>
          Compact modal for simple messages.
        </Typography>
        <Button onPress={() => {}}>OK</Button>
      </View>
    ),
  },
};

export const LargeModal: Story = {
  args: {
    visible: true,
    style: { width: 500, maxHeight: 600, padding: 24 },
    children: (
      <View>
        <Typography variant="h6">Large Modal</Typography>
        <Typography style={{ marginVertical: 20 }}>
          This is a larger modal that can contain more content. It demonstrates how the modal adapts to different content sizes while maintaining proper spacing and layout.
        </Typography>
        <View style={{ gap: 12 }}>
          <Button onPress={() => {}}>Primary Action</Button>
          <Button variant="outline" onPress={() => {}}>Secondary Action</Button>
        </View>
      </View>
    ),
  },
};

// Content Type Variations
export const AlertModal: Story = {
  args: {
    visible: true,
    children: (
      <View style={{ alignItems: 'center' }}>
        <Typography variant="h6" style={{ textAlign: 'center', marginBottom: 16 }}>⚠️ Warning</Typography>
        <Typography style={{ textAlign: 'center', marginBottom: 20 }}>
          This action cannot be undone. Are you sure you want to continue?
        </Typography>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <Button variant="outline" onPress={() => {}}>Cancel</Button>
          <Button variant="secondary" onPress={() => {}}>Continue</Button>
        </View>
      </View>
    ),
  },
};

export const SuccessModal: Story = {
  args: {
    visible: true,
    children: (
      <View style={{ alignItems: 'center' }}>
        <Typography variant="h6" style={{ textAlign: 'center', marginBottom: 16 }}>✅ Success</Typography>
        <Typography style={{ textAlign: 'center', marginBottom: 20 }}>
          Your action has been completed successfully!
        </Typography>
        <Button onPress={() => {}}>Great!</Button>
      </View>
    ),
  },
};

export const ErrorModal: Story = {
  args: {
    visible: true,
    children: (
      <View style={{ alignItems: 'center' }}>
        <Typography variant="h6" style={{ textAlign: 'center', marginBottom: 16, color: '#f44336' }}>❌ Error</Typography>
        <Typography style={{ textAlign: 'center', marginBottom: 20 }}>
          Something went wrong. Please try again later.
        </Typography>
        <Button onPress={() => {}}>Try Again</Button>
      </View>
    ),
  },
};

export const InfoModal: Story = {
  args: {
    visible: true,
    children: (
      <View style={{ alignItems: 'center' }}>
        <Typography variant="h6" style={{ textAlign: 'center', marginBottom: 16 }}>ℹ️ Information</Typography>
        <Typography style={{ textAlign: 'center', marginBottom: 20 }}>
          Here's some important information you should know about this feature.
        </Typography>
        <Button onPress={() => {}}>Got it</Button>
      </View>
    ),
  },
};

// Interactive Examples
const BasicModalExample = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ alignItems: 'center' }}>
      <Button onPress={() => setVisible(true)}>Open Basic Modal</Button>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <Typography variant="h6">Basic Modal</Typography>
        <Typography style={{ marginVertical: 20 }}>
          This is a basic modal with interactive functionality.
        </Typography>
        <Button onPress={() => setVisible(false)}>Close Modal</Button>
      </Modal>
    </View>
  );
};

export const Basic: Story = {
  render: () => <BasicModalExample />,
};

// Confirmation Dialog
const ConfirmationModalExample = () => {
  const [visible, setVisible] = useState(false);
  const [result, setResult] = useState<string>('');

  const handleConfirm = () => {
    setResult('Action confirmed!');
    setVisible(false);
    setTimeout(() => setResult(''), 3000);
  };

  const handleCancel = () => {
    setResult('Action cancelled.');
    setVisible(false);
    setTimeout(() => setResult(''), 3000);
  };

  return (
    <View style={{ gap: 20, alignItems: 'center' }}>
      <Button variant="secondary" onPress={() => setVisible(true)}>Delete Item</Button>
      {result && (
        <Typography style={{ 
          color: result.includes('confirmed') ? '#4CAF50' : '#ff9800',
          textAlign: 'center' 
        }}>
          {result}
        </Typography>
      )}
      <Modal visible={visible} onClose={handleCancel}>
        <Typography variant="h6">Confirm Delete</Typography>
        <Typography style={{ marginVertical: 20 }}>
          Are you sure you want to delete this item? This action cannot be undone.
        </Typography>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Button variant="outline" onPress={handleCancel}>Cancel</Button>
          <Button variant="secondary" onPress={handleConfirm}>Delete</Button>
        </View>
      </Modal>
    </View>
  );
};

export const Confirmation: Story = {
  render: () => <ConfirmationModalExample />,
};

// Form Modal
const FormModalExample = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    if (name && email) {
      setVisible(false);
      setName('');
      setEmail('');
    }
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Button onPress={() => setVisible(true)}>Edit Profile</Button>
      <Modal visible={visible} onClose={() => setVisible(false)} style={{ width: 400 }}>
        <Typography variant="h6">Edit Profile</Typography>
        <View style={{ width: '100%', gap: 16, marginVertical: 20 }}>
          <View>
            <Typography variant="caption" style={{ marginBottom: 4 }}>Name</Typography>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 6,
                padding: 12,
                fontSize: 16,
              }}
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View>
            <Typography variant="caption" style={{ marginBottom: 4 }}>Email</Typography>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 6,
                padding: 12,
                fontSize: 16,
              }}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <Button variant="outline" onPress={() => setVisible(false)}>Cancel</Button>
          <Button 
            onPress={handleSave} 
            disabled={!name || !email}
          >
            Save Changes
          </Button>
        </View>
      </Modal>
    </View>
  );
};

export const Form: Story = {
  render: () => <FormModalExample />,
};

// Loading Modal
const LoadingModalExample = () => {
  const [visible, setVisible] = useState(false);

  const handleStartLoading = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 3000); // Auto-close after 3 seconds
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Button onPress={handleStartLoading}>Start Loading Process</Button>
      <Modal visible={visible} onClose={() => {}}>
        <View style={{ alignItems: 'center', padding: 20 }}>
          <Typography variant="h6" style={{ marginBottom: 20 }}>Processing...</Typography>
          <Typography style={{ textAlign: 'center' }}>
            Please wait while we process your request.
          </Typography>
        </View>
      </Modal>
    </View>
  );
};

export const Loading: Story = {
  render: () => <LoadingModalExample />,
};

// Multi-step Modal
const MultiStepModalExample = () => {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(1);

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);
  const handleClose = () => {
    setVisible(false);
    setStep(1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <View>
            <Typography variant="h6">Step 1: Welcome</Typography>
            <Typography style={{ marginVertical: 20 }}>
              Welcome to the setup wizard. We'll guide you through the process.
            </Typography>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Button onPress={handleNext}>Next</Button>
            </View>
          </View>
        );
      case 2:
        return (
          <View>
            <Typography variant="h6">Step 2: Configuration</Typography>
            <Typography style={{ marginVertical: 20 }}>
              Configure your preferences here.
            </Typography>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Button variant="outline" onPress={handlePrev}>Previous</Button>
              <Button onPress={handleNext}>Next</Button>
            </View>
          </View>
        );
      case 3:
        return (
          <View>
            <Typography variant="h6">Step 3: Complete</Typography>
            <Typography style={{ marginVertical: 20 }}>
              Setup is complete! You're ready to go.
            </Typography>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Button variant="outline" onPress={handlePrev}>Previous</Button>
              <Button onPress={handleClose}>Finish</Button>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Button onPress={() => setVisible(true)}>Start Setup Wizard</Button>
      <Modal visible={visible} onClose={handleClose} style={{ width: 400 }}>
        {renderStep()}
      </Modal>
    </View>
  );
};

export const MultiStep: Story = {
  render: () => <MultiStepModalExample />,
};

// All Designs Showcase
export const AllDesigns: Story = {
  render: () => {
    const [activeDesign, setActiveDesign] = useState<string | null>(null);

    return (
      <View style={{ padding: 20, gap: 12, alignItems: 'center' }}>
        <Typography variant="h6" style={{ marginBottom: 16 }}>Design Systems</Typography>
        
        <Button onPress={() => setActiveDesign('flat')}>Flat Design</Button>
        <Button onPress={() => setActiveDesign('neumorphic')}>Neumorphic Design</Button>
        <Button onPress={() => setActiveDesign('skeuomorphic')}>Skeuomorphic Design</Button>
        <Button onPress={() => setActiveDesign('glassmorphic')}>Glassmorphic Design</Button>

        {/* Flat Modal */}
        <Modal visible={activeDesign === 'flat'} design="flat" onClose={() => setActiveDesign(null)}>
          <View>
            <Typography variant="h6">Flat Design Modal</Typography>
            <Typography style={{ marginVertical: 20 }}>
              This modal demonstrates the flat design system with clean, minimalist styling.
            </Typography>
            <Button onPress={() => setActiveDesign(null)}>Close</Button>
          </View>
        </Modal>

        {/* Neumorphic Modal */}
        <Modal visible={activeDesign === 'neumorphic'} design="neumorphic" onClose={() => setActiveDesign(null)}>
          <View>
            <Typography variant="h6">Neumorphic Design Modal</Typography>
            <Typography style={{ marginVertical: 20 }}>
              This modal demonstrates the neumorphic design system with soft, extruded styling.
            </Typography>
            <Button onPress={() => setActiveDesign(null)}>Close</Button>
          </View>
        </Modal>

        {/* Skeuomorphic Modal */}
        <Modal visible={activeDesign === 'skeuomorphic'} design="skeuomorphic" onClose={() => setActiveDesign(null)}>
          <View>
            <Typography variant="h6">Skeuomorphic Design Modal</Typography>
            <Typography style={{ marginVertical: 20 }}>
              This modal demonstrates the skeuomorphic design system with realistic, textured styling.
            </Typography>
            <Button onPress={() => setActiveDesign(null)}>Close</Button>
          </View>
        </Modal>

        {/* Glassmorphic Modal */}
        <Modal visible={activeDesign === 'glassmorphic'} design="glassmorphic" onClose={() => setActiveDesign(null)}>
          <View>
            <Typography variant="h6">Glassmorphic Design Modal</Typography>
            <Typography style={{ marginVertical: 20 }}>
              This modal demonstrates the glassmorphic design system with glass-like transparency and blur effects.
            </Typography>
            <Button onPress={() => setActiveDesign(null)}>Close</Button>
          </View>
        </Modal>
      </View>
    );
  },
};

// Modal Showcase
export const ModalShowcase: Story = {
  render: () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    return (
      <View style={{ padding: 20, gap: 12, alignItems: 'center' }}>
        <Typography variant="h6" style={{ marginBottom: 16 }}>Modal Types</Typography>
        
        <Button onPress={() => setActiveModal('info')}>Info Modal</Button>
        <Button onPress={() => setActiveModal('success')}>Success Modal</Button>
        <Button onPress={() => setActiveModal('warning')}>Warning Modal</Button>
        <Button onPress={() => setActiveModal('error')}>Error Modal</Button>

        {/* Info Modal */}
        <Modal visible={activeModal === 'info'} onClose={() => setActiveModal(null)}>
          <View style={{ alignItems: 'center' }}>
            <Typography variant="h6" style={{ marginBottom: 16 }}>ℹ️ Information</Typography>
            <Typography style={{ textAlign: 'center', marginBottom: 20 }}>
              This is an informational modal.
            </Typography>
            <Button onPress={() => setActiveModal(null)}>OK</Button>
          </View>
        </Modal>

        {/* Success Modal */}
        <Modal visible={activeModal === 'success'} onClose={() => setActiveModal(null)}>
          <View style={{ alignItems: 'center' }}>
            <Typography variant="h6" style={{ marginBottom: 16, color: '#4CAF50' }}>✅ Success</Typography>
            <Typography style={{ textAlign: 'center', marginBottom: 20 }}>
              Operation completed successfully!
            </Typography>
            <Button onPress={() => setActiveModal(null)}>Great!</Button>
          </View>
        </Modal>

        {/* Warning Modal */}
        <Modal visible={activeModal === 'warning'} onClose={() => setActiveModal(null)}>
          <View style={{ alignItems: 'center' }}>
            <Typography variant="h6" style={{ marginBottom: 16, color: '#ff9800' }}>⚠️ Warning</Typography>
            <Typography style={{ textAlign: 'center', marginBottom: 20 }}>
              Please review before proceeding.
            </Typography>
            <View style={{ flexDirection: 'row', gap: 12 }}>
              <Button variant="outline" onPress={() => setActiveModal(null)}>Cancel</Button>
              <Button onPress={() => setActiveModal(null)}>Proceed</Button>
            </View>
          </View>
        </Modal>

        {/* Error Modal */}
        <Modal visible={activeModal === 'error'} onClose={() => setActiveModal(null)}>
          <View style={{ alignItems: 'center' }}>
            <Typography variant="h6" style={{ marginBottom: 16, color: '#f44336' }}>❌ Error</Typography>
            <Typography style={{ textAlign: 'center', marginBottom: 20 }}>
              An error occurred. Please try again.
            </Typography>
            <Button onPress={() => setActiveModal(null)}>Retry</Button>
          </View>
        </Modal>
      </View>
    );
  },
};
