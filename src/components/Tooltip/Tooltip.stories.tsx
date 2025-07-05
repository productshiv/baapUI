import React from 'react';
import { View, Text, TouchableOpacity } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    content: { control: 'text' },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="This is a tooltip">
      <Text>Hover me</Text>
    </Tooltip>
  ),
};

export const Positions: Story = {
  render: () => (
    <View style={{ gap: 50, alignItems: 'center' }}>
      <Tooltip content="Top tooltip" position="top">
        <Text>Top</Text>
      </Tooltip>

      <View style={{ flexDirection: 'row', gap: 50 }}>
        <Tooltip content="Left tooltip" position="left">
          <Text>Left</Text>
        </Tooltip>

        <Tooltip content="Right tooltip" position="right">
          <Text>Right</Text>
        </Tooltip>
      </View>

      <Tooltip content="Bottom tooltip" position="bottom">
        <Text>Bottom</Text>
      </Tooltip>
    </View>
  ),
};

export const WithButtons: Story = {
  render: () => (
    <View style={{ gap: 20 }}>
      <Tooltip content="Save your changes">
        <TouchableOpacity
          style={{
            backgroundColor: '#4CAF50',
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: 'white' }}>Save</Text>
        </TouchableOpacity>
      </Tooltip>

      <Tooltip content="Delete this item">
        <TouchableOpacity
          style={{
            backgroundColor: '#f44336',
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: 'white' }}>Delete</Text>
        </TouchableOpacity>
      </Tooltip>
    </View>
  ),
};

// Glassmorphic Design Stories
export const GlassmorphicDefault: Story = {
  render: () => (
    <Tooltip content="Glassmorphic tooltip" design="glassmorphic">
      <Text>Hover for glass effect</Text>
    </Tooltip>
  ),
};

export const GlassmorphicPositions: Story = {
  render: () => (
    <View style={{ gap: 50, alignItems: 'center' }}>
      <Tooltip content="Top glass tooltip" position="top" design="glassmorphic">
        <Text>Top Glass</Text>
      </Tooltip>

      <View style={{ flexDirection: 'row', gap: 50 }}>
        <Tooltip content="Left glass tooltip" position="left" design="glassmorphic">
          <Text>Left Glass</Text>
        </Tooltip>

        <Tooltip content="Right glass tooltip" position="right" design="glassmorphic">
          <Text>Right Glass</Text>
        </Tooltip>
      </View>

      <Tooltip content="Bottom glass tooltip" position="bottom" design="glassmorphic">
        <Text>Bottom Glass</Text>
      </Tooltip>
    </View>
  ),
};

export const GlassmorphicPlayground: Story = {
  args: {
    content: 'Interactive glassmorphic tooltip',
    design: 'glassmorphic',
    position: 'top',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Text>Customizable Glass Tooltip</Text>
    </Tooltip>
  ),
};

export const AllDesigns: Story = {
  render: () => (
    <View style={{ gap: 30, alignItems: 'center' }}>
      <Tooltip content="Flat design tooltip" design="flat">
        <Text>Flat Design</Text>
      </Tooltip>

      <Tooltip content="Neumorphic design tooltip" design="neumorphic">
        <Text>Neumorphic Design</Text>
      </Tooltip>

      <Tooltip content="Glassmorphic design tooltip" design="glassmorphic">
        <Text>Glassmorphic Design</Text>
      </Tooltip>
    </View>
  ),
};
