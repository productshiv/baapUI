import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const items = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'electronics', label: 'Electronics' },
  { id: 'phones', label: 'Phones' },
];

export const Default: Story = {
  args: {
    items,
    currentItem: 'phones',
    onSelect: () => {},
  },
};

export const ShortPath: Story = {
  args: {
    items: items.slice(0, 2),
    currentItem: 'products',
    onSelect: () => {},
  },
};

// Interactive example
const InteractiveBreadcrumbs = () => {
  const [currentItem, setCurrentItem] = React.useState('home');

  return (
    <View style={{ width: '100%', maxWidth: 600 }}>
      <Breadcrumbs
        items={items}
        currentItem={currentItem}
        onSelect={setCurrentItem}
      />
    </View>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveBreadcrumbs />,
}; 