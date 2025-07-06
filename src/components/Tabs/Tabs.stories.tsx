import React, { useState } from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';
import Typography from '../Typography/Typography';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const sampleTabs = [
  { id: 'home', label: 'Home' },
  { id: 'profile', label: 'Profile' },
  { id: 'settings', label: 'Settings' },
];

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
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
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: sampleTabs,
    selectedTab: 'home',
    onSelect: () => {},
  },
};

export const WithManyTabs: Story = {
  args: {
    tabs: [
      ...sampleTabs,
      { id: 'notifications', label: 'Notifications' },
      { id: 'messages', label: 'Messages' },
      { id: 'bookmarks', label: 'Bookmarks' },
    ],
    selectedTab: 'notifications',
    onSelect: () => {},
  },
};

export const Neumorphic: Story = {
  args: {
    tabs: sampleTabs,
    selectedTab: 'home',
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
    textColor: NEUMORPHIC_COLORS.text,
    onSelect: () => {},
  },
};

export const Skeuomorphic: Story = {
  args: {
    tabs: sampleTabs,
    selectedTab: 'home',
    design: 'skeuomorphic',
    onSelect: () => {},
  },
};

export const SkeuomorphicManyTabs: Story = {
  args: {
    tabs: [
      ...sampleTabs,
      { id: 'notifications', label: 'Notifications' },
      { id: 'messages', label: 'Messages' },
      { id: 'bookmarks', label: 'Bookmarks' },
    ],
    selectedTab: 'notifications',
    design: 'skeuomorphic',
    onSelect: () => {},
  },
};

export const Glassmorphic: Story = {
  args: {
    tabs: sampleTabs,
    selectedTab: 'home',
    design: 'glassmorphic',
    onSelect: () => {},
  },
};

export const GlassmorphicDark: Story = {
  args: {
    tabs: sampleTabs,
    selectedTab: 'home',
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

export const GlassmorphicManyTabs: Story = {
  args: {
    tabs: [
      ...sampleTabs,
      { id: 'notifications', label: 'Notifications' },
      { id: 'messages', label: 'Messages' },
      { id: 'bookmarks', label: 'Bookmarks' },
    ],
    selectedTab: 'notifications',
    design: 'glassmorphic',
    onSelect: () => {},
  },
};

// Enhanced Glassmorphic Story Variations (Phase 7 - BAAPUI-8)
export const Playground: Story = {
  args: {
    tabs: sampleTabs,
    selectedTab: 'profile',
    design: 'glassmorphic',
    onSelect: () => {},
  },
};

export const LightGlass: Story = {
  args: {
    tabs: sampleTabs,
    selectedTab: 'home',
    design: 'glassmorphic',
    onSelect: () => {},
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
    tabs: sampleTabs,
    selectedTab: 'profile',
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

export const ColoredGlass: Story = {
  args: {
    tabs: [
      { id: 'blue', label: '🔵 Blue Tab' },
      { id: 'purple', label: '🟣 Purple Tab' },
      { id: 'green', label: '🟢 Green Tab' },
    ],
    selectedTab: 'purple',
    design: 'glassmorphic',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    onSelect: () => {},
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
    tabs: [
      { id: 'blur1', label: 'High Blur' },
      { id: 'blur2', label: 'Max Effect' },
      { id: 'blur3', label: 'Glass Pro' },
    ],
    selectedTab: 'blur2',
    design: 'glassmorphic',
    onSelect: () => {},
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
    tabs: [
      { id: 'min1', label: 'Minimal' },
      { id: 'min2', label: 'Clean' },
    ],
    selectedTab: 'min1',
    design: 'glassmorphic',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    onSelect: () => {},
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
  render: () => {
    const [selectedTab, setSelectedTab] = React.useState('layer1');
    
    return (
      <View style={{ 
        position: 'relative',
        padding: 40,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 20,
        minHeight: 200
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
        <View style={{ position: 'relative', zIndex: 10, alignItems: 'center' }}>
          <Tabs
            tabs={[
              { id: 'layer1', label: 'Layer 1' },
              { id: 'layer2', label: 'Layer 2' },
              { id: 'layer3', label: 'Layer 3' },
            ]}
            selectedTab={selectedTab}
            design="glassmorphic"
            onSelect={setSelectedTab}
          />
        </View>
      </View>
    );
  },
};

export const GlassmorphicInteractive: Story = {
  render: () => {
    const [selectedTab, setSelectedTab] = React.useState('tab1');
    const [clickCount, setClickCount] = React.useState(0);
    
    const handleTabSelect = (tabId: string) => {
      setSelectedTab(tabId);
      setClickCount(prev => prev + 1);
    };
    
    return (
      <View style={{ gap: 16, padding: 20, alignItems: 'center' }}>
        <View style={{ alignItems: 'center', marginBottom: 16 }}>
          <Typography variant="h6">Interactive Glass Tabs</Typography>
          <Typography variant="caption" style={{ color: '#666' }}>
            Tab switches: {clickCount}
          </Typography>
        </View>
        
        <Tabs
          tabs={[
            { id: 'tab1', label: '🎯 Interactive' },
            { id: 'tab2', label: '⚡ Dynamic' },
            { id: 'tab3', label: '🔄 Responsive' },
          ]}
          selectedTab={selectedTab}
          design="glassmorphic"
          onSelect={handleTabSelect}
        />
        
        <View style={{
          padding: 16,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 12,
          marginTop: 16,
          backdropFilter: 'blur(10px)',
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.2)'
        }}>
          <Typography variant="body2" style={{ textAlign: 'center' }}>
            {selectedTab === 'tab1' && 'Interactive tab content with real-time updates'}
            {selectedTab === 'tab2' && `Dynamic content - Clicked ${clickCount} times`}
            {selectedTab === 'tab3' && 'Responsive glassmorphic tab design showcase'}
          </Typography>
        </View>
      </View>
    );
  },
};

export const AllDesigns: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 20, maxWidth: 600 }}>
      <View>
        <Tabs
          tabs={sampleTabs}
          selectedTab="home"
          design="flat"
          onSelect={() => {}}
        />
      </View>
      <View>
        <Tabs
          tabs={sampleTabs}
          selectedTab="profile"
          design="neumorphic"
          onSelect={() => {}}
        />
      </View>
      <View>
        <Tabs
          tabs={sampleTabs}
          selectedTab="settings"
          design="skeuomorphic"
          onSelect={() => {}}
        />
      </View>
      <View>
        <Tabs
          tabs={sampleTabs}
          selectedTab="home"
          design="glassmorphic"
          onSelect={() => {}}
        />
      </View>
    </View>
  ),
};
