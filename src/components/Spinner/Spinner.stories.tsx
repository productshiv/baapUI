import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
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
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'],
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

export const Skeuomorphic: Story = {
  args: {
    size: 'large',
    variant: 'primary',
    design: 'skeuomorphic',
    label: 'Loading...',
  },
};

export const AllDesigns: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <div>
        <h3 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Flat Design</h3>
        <Spinner size="large" variant="primary" design="flat" label="Loading..." />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Neumorphic Design</h3>
        <div style={{ backgroundColor: NEUMORPHIC_COLORS.background, padding: '16px', borderRadius: '8px' }}>
          <Spinner size="large" variant="primary" design="neumorphic" label="Loading..." />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Skeuomorphic Design</h3>
        <Spinner size="large" variant="primary" design="skeuomorphic" label="Loading..." />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Glassmorphic Design</h3>
        <div
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '16px',
            borderRadius: '8px',
          }}
        >
          <Spinner size="large" variant="primary" design="glassmorphic" label="Loading..." />
        </div>
      </div>
    </div>
  ),
};

// Glassmorphic Design Stories
export const Glassmorphic: Story = {
  args: {
    size: 'large',
    variant: 'primary',
    design: 'glassmorphic',
    label: 'Loading...',
  },
  render: (args) => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner {...args} />
    </div>
  ),
};

export const GlassmorphicSizes: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        gap: 32,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spinner size="small" design="glassmorphic" label="Small" />
      <Spinner size="medium" design="glassmorphic" label="Medium" />
      <Spinner size="large" design="glassmorphic" label="Large" />
    </div>
  ),
};

export const GlassmorphicVariants: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spinner variant="primary" design="glassmorphic" label="Primary" />
      <Spinner variant="success" design="glassmorphic" label="Success" />
      <Spinner variant="danger" design="glassmorphic" label="Danger" />
      <Spinner variant="warning" design="glassmorphic" label="Warning" />
    </div>
  ),
};

export const GlassmorphicDarkMode: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spinner size="small" design="glassmorphic" label="Small" />
      <Spinner size="medium" design="glassmorphic" label="Medium" />
      <Spinner size="large" design="glassmorphic" label="Large" />
    </div>
  ),
};

export const Playground: Story = {
  args: {
    size: 'large',
    variant: 'primary',
    design: 'glassmorphic',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    label: 'Custom Loading...',
  },
  render: (args) => (
    <div
      style={{
        background: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner {...args} />
    </div>
  ),
};

export const LightGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spinner
        size="medium"
        design="glassmorphic"
        backgroundColor="rgba(255, 255, 255, 0.3)"
        label="Light Glass"
      />
      <Spinner
        size="medium"
        design="glassmorphic"
        backgroundColor="rgba(255, 255, 255, 0.4)"
        variant="success"
        label="Success"
      />
      <Spinner
        size="medium"
        design="glassmorphic"
        backgroundColor="rgba(255, 255, 255, 0.5)"
        variant="info"
        label="Info"
      />
    </div>
  ),
};

export const DarkGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spinner
        size="medium"
        design="glassmorphic"
        backgroundColor="rgba(0, 0, 0, 0.3)"
        label="Dark Glass"
      />
      <Spinner
        size="medium"
        design="glassmorphic"
        backgroundColor="rgba(0, 0, 0, 0.4)"
        variant="warning"
        label="Warning"
      />
      <Spinner
        size="medium"
        design="glassmorphic"
        backgroundColor="rgba(0, 0, 0, 0.5)"
        variant="danger"
        label="Danger"
      />
    </div>
  ),
};

export const HighBlur: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spinner
        size="medium"
        design="glassmorphic"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        label="High Blur"
        style={{ backdropFilter: 'blur(20px)' }}
      />
      <Spinner
        size="medium"
        design="glassmorphic"
        backgroundColor="rgba(255, 255, 255, 0.25)"
        variant="success"
        label="Ultra Blur"
        style={{ backdropFilter: 'blur(30px)' }}
      />
      <Spinner
        size="medium"
        design="glassmorphic"
        backgroundColor="rgba(255, 255, 255, 0.3)"
        variant="info"
        label="Max Blur"
        style={{ backdropFilter: 'blur(40px)' }}
      />
    </div>
  ),
};

export const GlassmorphicPlayground: Story = {
  args: {
    size: 'large',
    variant: 'primary',
    design: 'glassmorphic',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    label: 'Custom Loading...',
  },
  render: (args) => (
    <div
      style={{
        background: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner {...args} />
    </div>
  ),
};

export const GlassmorphicInteractive: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spinner
        size="medium"
        design="glassmorphic"
        variant="primary"
        label="Processing..."
      />
      <Spinner
        size="medium"
        design="glassmorphic"
        variant="success"
        label="Uploading..."
      />
      <Spinner
        size="medium"
        design="glassmorphic"
        variant="info"
        label="Downloading..."
      />
    </div>
  ),
};

export const GlassmorphicColoredGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spinner
        size="medium"
        design="glassmorphic"
        backgroundColor="rgba(0, 122, 255, 0.2)"
        label="Blue Glass"
      />
      <Spinner
        size="medium"
        design="glassmorphic"
        backgroundColor="rgba(88, 86, 214, 0.2)"
        label="Purple Glass"
      />
      <Spinner
        size="medium"
        design="glassmorphic"
        backgroundColor="rgba(52, 199, 89, 0.2)"
        label="Green Glass"
      />
    </div>
  ),
};

export const GlassmorphicMinimalGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spinner
        size="medium"
        design="glassmorphic"
        backgroundColor="rgba(255, 255, 255, 0.05)"
        label="Subtle"
      />
      <Spinner
        size="medium"
        design="glassmorphic"
        backgroundColor="rgba(255, 255, 255, 0.1)"
        label="Light"
      />
      <Spinner
        size="medium"
        design="glassmorphic"
        backgroundColor="rgba(255, 255, 255, 0.15)"
        label="Medium"
      />
    </div>
  ),
};

export const GlassmorphicLayeredGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 32,
        borderRadius: 16,
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '20%',
          right: '20%',
          height: '60%',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 16,
          backdropFilter: 'blur(10px)',
        }}
      />
      <Spinner
        size="small"
        design="glassmorphic"
        label="Layer 1"
        style={{ position: 'relative', zIndex: 2 }}
      />
      <Spinner
        size="medium"
        design="glassmorphic"
        label="Layer 2"
        style={{ position: 'relative', zIndex: 2 }}
      />
      <Spinner
        size="large"
        design="glassmorphic"
        label="Layer 3"
        style={{ position: 'relative', zIndex: 2 }}
      />
    </div>
  ),
};
