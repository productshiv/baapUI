import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';
import Typography from '../Typography/Typography';

const SAMPLE_TABS = [
  { id: 'tab1', label: 'Tab 1' },
  { id: 'tab2', label: 'Tab 2' },
  { id: 'tab3', label: 'Tab 3' },
];

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: SAMPLE_TABS,
    selectedTab: 'tab1',
    onSelect: () => {},
  },
};

// Interactive example with content
const InteractiveTabsExample = () => {
  const [selectedTab, setSelectedTab] = useState('tab1');
  
  const getContent = () => {
    switch (selectedTab) {
      case 'tab1':
        return 'Content for Tab 1';
      case 'tab2':
        return 'Content for Tab 2';
      case 'tab3':
        return 'Content for Tab 3';
      default:
        return '';
    }
  };
  
  return (
    <View style={{ gap: 16, width: 300 }}>
      <Tabs
        tabs={SAMPLE_TABS}
        selectedTab={selectedTab}
        onSelect={setSelectedTab}
      />
      <View style={{ padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8 }}>
        <Typography>{getContent()}</Typography>
      </View>
    </View>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveTabsExample />,
};

// Example with many tabs
export const ManyTabs: Story = {
  args: {
    tabs: [
      { id: 'home', label: 'Home' },
      { id: 'profile', label: 'Profile' },
      { id: 'messages', label: 'Messages' },
      { id: 'settings', label: 'Settings' },
      { id: 'help', label: 'Help' },
    ],
    selectedTab: 'home',
    onSelect: () => {},
  },
}; 