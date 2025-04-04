import React from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import Typography from '../Typography/Typography';
import { ThemeProvider } from '../../themes/ThemeContext';

const meta: Meta<typeof Card> = {
  title: 'Core UI/Card',
  component: Card,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <View style={{ padding: 20, alignItems: 'center' }}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    design: {
      control: 'select',
      options: ['flat', 'neumorphic'],
      defaultValue: 'flat',
    },
    backgroundColor: {
      control: 'color',
      defaultValue: '#ffffff',
    },
    style: {
      control: 'object',
      description: 'Additional styles for the card',
    },
    onPress: {
      action: 'pressed',
      description: 'Called when the card is pressed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// Flat Design Stories
export const Flat: Story = {
  args: {
    design: 'flat',
    children: 'Flat Card',
    style: { width: 200, alignItems: 'center' },
  },
};

// Neumorphic Design Stories
export const Neumorphic: Story = {
  args: {
    design: 'neumorphic',
    children: 'Neumorphic Card',
    backgroundColor: '#fff',
    style: { width: 200, alignItems: 'center' },
  },
};

export const Interactive: Story = {
  args: {
    design: 'neumorphic',
    children: 'Click Me',
    backgroundColor: '#fff',
    style: { width: 200, alignItems: 'center' },
    onPress: () => console.log('Card pressed'),
  },
};

// Variations
export const Variations: Story = {
  render: () => (
    <View style={{ gap: 20, maxWidth: 300 }}>
      <Card design="flat">
        <Text>Flat Card with Border</Text>
      </Card>
      
      <Card design="neumorphic" backgroundColor="#ffffff">
        <Text>Neumorphic Card</Text>
      </Card>
      
      <Card design="neumorphic" backgroundColor="#ffffff" onPress={() => console.log('Pressed')}>
        <Text>Interactive Neumorphic Card</Text>
      </Card>
    </View>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <View style={{ gap: 20, maxWidth: 300 }}>
      <Card design="flat">
        <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }}>
          <Typography variant="h6">Flat Card with Header</Typography>
        </View>
        <View style={{ padding: 16 }}>
          <Typography variant="body2">
            This card has a header section separated by a border.
          </Typography>
        </View>
      </Card>

      <Card design="neumorphic" backgroundColor="#fff">
        <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }}>
          <Typography variant="h6">Neumorphic Card with Header</Typography>
        </View>
        <View style={{ padding: 16 }}>
          <Typography variant="body2">
            This card has a header section separated by a border.
          </Typography>
        </View>
      </Card>
    </View>
  ),
}; 