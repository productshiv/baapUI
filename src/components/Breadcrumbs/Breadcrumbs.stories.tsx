import React from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';
import Typography from '../Typography/Typography';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic', 'skeuomorphic'],
    },
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
      <Breadcrumbs items={items} currentItem={currentItem} onSelect={setCurrentItem} />
    </View>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveBreadcrumbs />,
};

export const CustomSeparator: Story = {
  args: {
    items: items,
    separator: '→',
  },
};

export const Neumorphic: Story = {
  args: {
    items: items,
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
    textColor: NEUMORPHIC_COLORS.text,
  },
};

export const Skeuomorphic: Story = {
  args: {
    items: items,
    currentItem: 'phones',
    design: 'skeuomorphic',
    onSelect: () => {},
  },
};

export const AllDesigns: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 20, maxWidth: 600 }}>
      <View style={{ gap: 8 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Flat Design</Typography>
        <Breadcrumbs
          items={items}
          currentItem="phones"
          design="flat"
          onSelect={() => {}}
        />
      </View>
      <View style={{ gap: 8 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Neumorphic Design</Typography>
        <Breadcrumbs
          items={items}
          currentItem="phones"
          design="neumorphic"
          onSelect={() => {}}
        />
      </View>
      <View style={{ gap: 8 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Skeuomorphic Design</Typography>
        <Breadcrumbs
          items={items}
          currentItem="phones"
          design="skeuomorphic"
          onSelect={() => {}}
        />
      </View>
    </View>
  ),
};
