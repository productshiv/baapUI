import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Drawer from './Drawer';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const meta: Meta<typeof Drawer> = {
  title: 'Navigation/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic'],
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
