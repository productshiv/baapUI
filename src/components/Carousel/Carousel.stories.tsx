import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Carousel from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Data Display/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const basicItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

export const Default: Story = {
  args: {
    items: basicItems,
    currentIndex: 0,
    onIndexChange: () => {},
  },
};

export const WithCustomStyle: Story = {
  args: {
    items: basicItems,
    currentIndex: 0,
    onIndexChange: () => {},
    itemStyle: {
      backgroundColor: '#4A90E2',
      padding: 20,
      borderRadius: 8,
      minWidth: 200,
    },
    textStyle: { color: '#FFFFFF' },
    activeItemStyle: { backgroundColor: '#2962ff' },
  },
};

const contentItems = [
  'React Native',
  'TypeScript',
  'Storybook',
  'Components',
  'Documentation',
];

export const ContentCarousel: Story = {
  args: {
    items: contentItems,
    currentIndex: 0,
    onIndexChange: () => {},
    itemStyle: {
      padding: 16,
      minWidth: 150,
      backgroundColor: '#e3f2fd',
    },
    activeItemStyle: {
      backgroundColor: '#2196f3',
    },
    textStyle: { color: '#1976d2' },
    activeTextStyle: { color: '#ffffff' },
  },
}; 