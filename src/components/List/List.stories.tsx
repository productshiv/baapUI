import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import List, { ListItem } from './List';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const sampleItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'].map((text, index) => (
  <div key={index} style={{ padding: 8 }}>
    {text}
  </div>
));

const meta: Meta<typeof List> = {
  title: 'Data Display/List',
  component: List,
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
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

const complexItems = [
  {
    title: 'First Item',
    description: 'This is a description for the first item',
    icon: '📱',
  },
  {
    title: 'Second Item',
    description: 'This is a description for the second item',
    icon: '💻',
  },
  {
    title: 'Third Item',
    description: 'This is a description for the third item',
    icon: '🖥️',
  },
].map((item, index) => (
  <div key={index} style={{ padding: 8, display: 'flex', alignItems: 'center', gap: 12 }}>
    <div style={{ fontSize: 24 }}>{item.icon}</div>
    <div>
      <div style={{ fontWeight: 'bold' }}>{item.title}</div>
      <div style={{ color: '#666' }}>{item.description}</div>
    </div>
  </div>
));

export const ComplexItems: Story = {
  args: {
    items: complexItems,
    onItemPress: index => console.log(`Item ${index} clicked`),
  },
};

export const Neumorphic: Story = {
  args: {
    items: sampleItems,
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
  },
};

export const NeumorphicComplex: Story = {
  render: () => (
    <div
      style={{
        backgroundColor: NEUMORPHIC_COLORS.background,
        padding: 24,
        borderRadius: 12,
        width: 400,
      }}
    >
      <List
        items={complexItems}
        design="neumorphic"
        backgroundColor={NEUMORPHIC_COLORS.background}
        onItemPress={index => console.log(`Item ${index} clicked`)}
      />
    </div>
  ),
};

export const CustomStyles: Story = {
  args: {
    items: sampleItems,
    containerStyle: {
      backgroundColor: '#f5f5f5',
      padding: 16,
      borderRadius: 8,
    },
    itemStyle: {
      backgroundColor: '#fff',
      marginVertical: 8,
      borderRadius: 4,
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
  },
};

export const Skeuomorphic: Story = {
  args: {
    items: sampleItems,
    design: 'skeuomorphic',
  },
};

export const SkeuomorphicComplex: Story = {
  render: () => (
    <div
      style={{
        backgroundColor: '#f0f0f0',
        padding: 24,
        borderRadius: 12,
        width: 400,
      }}
    >
      <List
        items={complexItems}
        design="skeuomorphic"
        onItemPress={index => console.log(`Item ${index} clicked`)}
      />
    </div>
  ),
};

export const Glassmorphic: Story = {
  args: {
    items: sampleItems,
    design: 'glassmorphic',
  },
};

export const GlassmorphicComplex: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 24,
        borderRadius: 12,
        width: 400,
        minHeight: 300,
      }}
    >
      <List
        items={complexItems}
        design="glassmorphic"
        onItemPress={index => console.log(`Item ${index} clicked`)}
      />
    </div>
  ),
};

export const GlassmorphicDark: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        padding: 24,
        borderRadius: 12,
        width: 400,
        minHeight: 300,
      }}
    >
      <List
        items={complexItems}
        design="glassmorphic"
        onItemPress={index => console.log(`Item ${index} clicked`)}
      />
    </div>
  ),
};

export const AllDesigns: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 24 }}>
      <div>
        <h3>Flat Design</h3>
        <List items={sampleItems} design="flat" />
      </div>
      <div style={{ backgroundColor: '#f0f0f0', padding: 16, borderRadius: 8 }}>
        <h3>Neumorphic Design</h3>
        <List items={sampleItems} design="neumorphic" />
      </div>
      <div style={{ backgroundColor: '#e8e8e8', padding: 16, borderRadius: 8 }}>
        <h3>Skeuomorphic Design</h3>
        <List items={sampleItems} design="skeuomorphic" />
      </div>
      <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: 16, borderRadius: 8 }}>
        <h3 style={{ color: 'white' }}>Glassmorphic Design</h3>
        <List items={sampleItems} design="glassmorphic" />
      </div>
    </div>
  ),
};
