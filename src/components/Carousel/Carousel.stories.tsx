import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Carousel from './Carousel';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

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
      options: ['flat', 'neumorphic'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

interface CarouselDemoProps {
  design?: 'flat' | 'neumorphic';
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
    <CarouselDemo items={[
      'Dashboard',
      'User Management',
      'System Settings',
      'Notifications',
      'Account Details',
      'Help & Support',
    ]} />
  ),
};

export const Neumorphic: Story = {
  render: () => (
    <div style={{ 
      backgroundColor: NEUMORPHIC_COLORS.background,
      padding: '24px',
      borderRadius: '12px',
    }}>
      <CarouselDemo design="neumorphic" />
    </div>
  ),
};

export const NeumorphicWithCustomColors: Story = {
  render: () => (
    <div style={{ 
      backgroundColor: NEUMORPHIC_COLORS.background,
      padding: '24px',
      borderRadius: '12px',
    }}>
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
