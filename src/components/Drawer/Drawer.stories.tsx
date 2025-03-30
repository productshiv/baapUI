import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Drawer from './Drawer';
import Button from '../Button/Button';

const meta: Meta<typeof Drawer> = {
  title: 'Navigation/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const drawerItems = [
  { id: 'home', label: 'Home' },
  { id: 'profile', label: 'Profile' },
  { id: 'settings', label: 'Settings' },
  { id: 'help', label: 'Help & Support' },
  { id: 'about', label: 'About' },
];

export const Default: Story = {
  args: {
    items: drawerItems,
    selectedItem: 'home',
    onSelect: () => {},
  },
};

// Interactive drawer example
const InteractiveDrawerExample = () => {
  const [selectedItem, setSelectedItem] = useState('home');

  return (
    <View style={{ width: '100%', height: 400 }}>
      <Drawer
        items={drawerItems}
        selectedItem={selectedItem}
        onSelect={setSelectedItem}
      />
    </View>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveDrawerExample />,
}; 