import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Carousel from './Carousel';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';

const sampleItems = ['Home', 'Products', 'Services', 'About', 'Contact'];

const meta: Meta<typeof Carousel> = {
  title: 'Navigation/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

interface CarouselDemoProps {
  design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic';
  items?: string[];
}

const CarouselDemo = ({ design = 'flat', items = sampleItems }: CarouselDemoProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div style={{ width: '600px' }}>
      <Carousel
        items={items}
        currentIndex={currentIndex}
        onIndexChange={setCurrentIndex}
        design={design}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <CarouselDemo />,
};

export const WithLongItems: Story = {
  render: () => (
    <CarouselDemo
      items={[
        'Dashboard',
        'User Management',
        'System Settings',
        'Notifications',
        'Account Details',
        'Help & Support',
      ]}
    />
  ),
};

export const Neumorphic: Story = {
  render: () => (
    <div
      style={{
        backgroundColor: NEUMORPHIC_COLORS.background,
        padding: '24px',
        borderRadius: '12px',
      }}
    >
      <CarouselDemo design="neumorphic" />
    </div>
  ),
};

export const NeumorphicWithCustomColors: Story = {
  render: () => (
    <div
      style={{
        backgroundColor: NEUMORPHIC_COLORS.background,
        padding: '24px',
        borderRadius: '12px',
      }}
    >
      <Carousel
        items={sampleItems}
        currentIndex={0}
        onIndexChange={() => {}}
        design="neumorphic"
        backgroundColor={NEUMORPHIC_COLORS.background}
        textColor="#666"
        activeTextColor="#2196f3"
      />
    </div>
  ),
};

export const Skeuomorphic: Story = {
  render: () => <CarouselDemo design="skeuomorphic" />,
};

export const Glassmorphic: Story = {
  render: () => <CarouselDemo design="glassmorphic" />,
};

export const GlassmorphicWithLongItems: Story = {
  render: () => (
    <CarouselDemo
      design="glassmorphic"
      items={[
        'Dashboard',
        'User Management',
        'System Settings',
        'Notifications',
        'Account Details',
        'Help & Support',
      ]}
    />
  ),
};

export const GlassmorphicDarkMode: Story = {
  render: () => (
    <div style={{ backgroundColor: '#1a1a1a', padding: '24px', borderRadius: '12px' }}>
      <CarouselDemo design="glassmorphic" />
    </div>
  ),
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
};

export const Playground: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
        padding: 32,
        borderRadius: 16,
        minHeight: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CarouselDemo
        design="glassmorphic"
        items={['Features', 'Pricing', 'Documentation', 'Community', 'Support', 'Blog']}
      />
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
        minHeight: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CarouselDemo
        design="glassmorphic"
        items={['Home', 'About', 'Services', 'Portfolio', 'Contact']}
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
        minHeight: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CarouselDemo
        design="glassmorphic"
        items={['Dashboard', 'Analytics', 'Reports', 'Settings', 'Profile']}
      />
    </div>
  ),
};

export const ColoredGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 32,
        borderRadius: 16,
        minHeight: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CarouselDemo
        design="glassmorphic"
        items={['Projects', 'Team', 'Resources', 'Tools', 'Support']}
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
        minHeight: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ backdropFilter: 'blur(20px)' }}>
        <CarouselDemo
          design="glassmorphic"
          items={['Ultra', 'High', 'Blur', 'Effect', 'Demo']}
        />
      </div>
    </div>
  ),
};

export const MinimalGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        padding: 32,
        borderRadius: 16,
        minHeight: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CarouselDemo
        design="glassmorphic"
        items={['Minimal', 'Clean', 'Simple', 'Elegant']}
      />
    </div>
  ),
};

export const LayeredGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 32,
        borderRadius: 16,
        minHeight: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
      <div style={{ position: 'relative', zIndex: 2 }}>
        <CarouselDemo
          design="glassmorphic"
          items={['Layer', 'One', 'Two', 'Three', 'Four']}
        />
      </div>
    </div>
  ),
};

export const GlassmorphicInteractive: Story = {
  render: () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [message, setMessage] = useState('');
    
    const items = ['Interactive', 'Carousel', 'Demo', 'With', 'Feedback'];

    const handleIndexChange = (index: number) => {
      setCurrentIndex(index);
      setMessage(`Selected: ${items[index]}`);
      setTimeout(() => setMessage(''), 2000);
    };

    return (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: 32,
          borderRadius: 16,
          minHeight: 300,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <div style={{ width: '600px' }}>
          <Carousel
            items={items}
            currentIndex={currentIndex}
            onIndexChange={handleIndexChange}
            design="glassmorphic"
          />
        </div>
        {message && (
          <div
            style={{
              padding: 12,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: 8,
              color: '#ffffff',
              fontSize: 14,
            }}
          >
            {message}
          </div>
        )}
      </div>
    );
  },
};

export const GlassmorphicPlayground: Story = {
  render: () => (
    <CarouselDemo
      design="glassmorphic"
      items={['Features', 'Pricing', 'Documentation', 'Community', 'Support', 'Blog']}
    />
  ),
};

export const AllDesigns: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Flat Design</h3>
        <CarouselDemo design="flat" />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Neumorphic Design</h3>
        <div style={{ backgroundColor: NEUMORPHIC_COLORS.background, padding: '16px', borderRadius: '8px' }}>
          <CarouselDemo design="neumorphic" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Skeuomorphic Design</h3>
        <CarouselDemo design="skeuomorphic" />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Glassmorphic Design</h3>
        <CarouselDemo design="glassmorphic" />
      </div>
    </div>
  ),
};
