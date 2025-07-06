import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Drawer from './Drawer';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { SKEUOMORPHIC_COLORS } from '../../themes/utils/skeuomorphic';
import { GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';

const meta: Meta<typeof Drawer> = {
  title: 'Navigation/Drawer',
  component: Drawer,
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
type Story = StoryObj<typeof Drawer>;

const sampleItems = [
  { id: 'home', label: 'Home' },
  { id: 'profile', label: 'Profile' },
  { id: 'settings', label: 'Settings' },
  { id: 'help', label: 'Help' },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    selectedItem: 'home',
    onSelect: () => {},
  },
};

export const WithSelectedItem: Story = {
  args: {
    items: sampleItems,
    selectedItem: 'profile',
    onSelect: () => {},
  },
};

export const Neumorphic: Story = {
  args: {
    items: sampleItems,
    selectedItem: 'home',
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
    textColor: NEUMORPHIC_COLORS.text,
    onSelect: () => {},
  },
};

export const Skeuomorphic: Story = {
  args: {
    items: sampleItems,
    selectedItem: 'home',
    design: 'skeuomorphic',
    onSelect: () => {},
  },
};

export const SkeuomorphicWithSelectedProfile: Story = {
  args: {
    items: sampleItems,
    selectedItem: 'profile',
    design: 'skeuomorphic',
    onSelect: () => {},
  },
};

export const SkeuomorphicWithSelectedSettings: Story = {
  args: {
    items: sampleItems,
    selectedItem: 'settings',
    design: 'skeuomorphic',
    onSelect: () => {},
  },
};

export const Glassmorphic: Story = {
  args: {
    items: sampleItems,
    selectedItem: 'home',
    design: 'glassmorphic',
    onSelect: () => {},
  },
};

export const GlassmorphicWithSelectedProfile: Story = {
  args: {
    items: sampleItems,
    selectedItem: 'profile',
    design: 'glassmorphic',
    onSelect: () => {},
  },
};

export const GlassmorphicDarkMode: Story = {
  args: {
    items: sampleItems,
    selectedItem: 'settings',
    design: 'glassmorphic',
    onSelect: () => {},
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

export const GlassmorphicPlayground: Story = {
  args: {
    items: sampleItems,
    selectedItem: 'home',
    design: 'glassmorphic',
    onSelect: () => {},
  },
  argTypes: {
    selectedItem: {
      control: 'select',
      options: ['home', 'profile', 'settings', 'help'],
    },
  },
};

export const Playground: Story = {
  args: {
    items: sampleItems,
    selectedItem: 'home',
    design: 'glassmorphic',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    textColor: '#ffffff',
    onSelect: () => {},
  },
  render: (args) => (
    <div
      style={{
        background: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
        padding: 32,
        borderRadius: 16,
        minHeight: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Drawer {...args} />
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
        minHeight: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Drawer
        items={sampleItems}
        selectedItem="profile"
        design="glassmorphic"
        backgroundColor="rgba(255, 255, 255, 0.3)"
        textColor="#333333"
        onSelect={() => {}}
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
        minHeight: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Drawer
        items={sampleItems}
        selectedItem="settings"
        design="glassmorphic"
        backgroundColor="rgba(0, 0, 0, 0.3)"
        textColor="#ffffff"
        onSelect={() => {}}
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
        minHeight: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Drawer
        items={[
          { id: 'dashboard', label: 'Dashboard' },
          { id: 'analytics', label: 'Analytics' },
          { id: 'reports', label: 'Reports' },
          { id: 'users', label: 'Users' },
        ]}
        selectedItem="analytics"
        design="glassmorphic"
        backgroundColor="rgba(0, 122, 255, 0.2)"
        textColor="#ffffff"
        onSelect={() => {}}
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
        minHeight: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Drawer
        items={sampleItems}
        selectedItem="home"
        design="glassmorphic"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        textColor="#ffffff"
        style={{
          backdropFilter: 'blur(20px)',
        }}
        onSelect={() => {}}
      />
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
        minHeight: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Drawer
        items={sampleItems}
        selectedItem="profile"
        design="glassmorphic"
        backgroundColor="rgba(255, 255, 255, 0.1)"
        textColor="#ffffff"
        onSelect={() => {}}
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
        minHeight: 400,
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
      <Drawer
        items={sampleItems}
        selectedItem="settings"
        design="glassmorphic"
        backgroundColor="rgba(255, 255, 255, 0.15)"
        textColor="#ffffff"
        style={{
          position: 'relative',
          zIndex: 2,
        }}
        onSelect={() => {}}
      />
    </div>
  ),
};

export const GlassmorphicInteractive: Story = {
  render: () => {
    const [selectedItem, setSelectedItem] = React.useState('home');
    const [message, setMessage] = React.useState('');

    const handleSelect = (itemId: string) => {
      setSelectedItem(itemId);
      setMessage(`Selected: ${itemId}`);
      setTimeout(() => setMessage(''), 2000);
    };

    return (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: 32,
          borderRadius: 16,
          minHeight: 400,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <Drawer
          items={sampleItems}
          selectedItem={selectedItem}
          design="glassmorphic"
          backgroundColor="rgba(255, 255, 255, 0.2)"
          textColor="#ffffff"
          onSelect={handleSelect}
        />
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

export const AllDesigns: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <div>
        <h3>Flat Design</h3>
        <Drawer
          items={sampleItems}
          selectedItem="home"
          design="flat"
          onSelect={() => {}}
        />
      </div>
      <div>
        <h3>Neumorphic Design</h3>
        <Drawer
          items={sampleItems}
          selectedItem="profile"
          design="neumorphic"
          backgroundColor={NEUMORPHIC_COLORS.background}
          textColor={NEUMORPHIC_COLORS.text}
          onSelect={() => {}}
        />
      </div>
      <div>
        <h3>Skeuomorphic Design</h3>
        <Drawer
          items={sampleItems}
          selectedItem="settings"
          design="skeuomorphic"
          onSelect={() => {}}
        />
      </div>
      <div>
        <h3>Glassmorphic Design</h3>
        <Drawer
          items={sampleItems}
          selectedItem="help"
          design="glassmorphic"
          onSelect={() => {}}
        />
      </div>
    </div>
  ),
};
