import React from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Tabs from './Tabs';
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
      options: ['flat', 'neumorphic'],
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
