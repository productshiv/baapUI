import React from 'react';
import { View } from '../../platform';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import Card from './Card';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const meta: Meta<typeof Card> = {
  title: 'Core UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic'],
      defaultValue: 'flat',
    },
  },
  args: {
    design: 'flat',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    design: 'flat',
    children: (
      <View style={{ padding: 16 }}>
        <Typography variant="h5">Card Title</Typography>
        <Typography variant="body1" style={{ marginTop: 8 }}>
          This is a basic card with some content.
        </Typography>
      </View>
    ),
  },
};

export const Neumorphic: Story = {
  args: {
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
    children: (
      <View style={{ padding: 16 }}>
        <Typography variant="h5">Neumorphic Card</Typography>
        <Typography variant="body1" style={{ marginTop: 8 }}>
          This card uses neumorphic design.
        </Typography>
      </View>
    ),
  },
};

export const WithActions: Story = {
  render: () => (
    <View style={{ padding: 20, maxWidth: 400 }}>
      <Card design="neumorphic">
        <View style={{ padding: 16 }}>
          <Typography variant="h5">Interactive Card</Typography>
          <Typography variant="body1" style={{ marginTop: 8, marginBottom: 16 }}>
            This card contains interactive elements.
          </Typography>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Button onPress={() => {}} design="neumorphic">
              Action 1
            </Button>
            <Button onPress={() => {}} design="neumorphic" variant="secondary">
              Action 2
            </Button>
          </View>
        </View>
      </Card>
    </View>
  ),
};

export const WithShadow: Story = {
  args: {
    style: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    children: (
      <View style={{ padding: 16 }}>
        <Typography variant="h5">Card with Shadow</Typography>
        <Typography variant="body1" style={{ marginTop: 8 }}>
          This card has custom shadow styling.
        </Typography>
      </View>
    ),
  },
};

export const AllDesigns: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 20 }}>
      <Card>
        <View style={{ padding: 16 }}>
          <Typography variant="h6">Flat Design</Typography>
          <Typography variant="body2">Default card styling</Typography>
        </View>
      </Card>
      <Card design="neumorphic">
        <View style={{ padding: 16 }}>
          <Typography variant="h6">Neumorphic Design</Typography>
          <Typography variant="body2">With soft shadows</Typography>
        </View>
      </Card>
      <Card
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
        }}
      >
        <View style={{ padding: 16 }}>
          <Typography variant="h6">Shadow Design</Typography>
          <Typography variant="body2">With stronger shadows</Typography>
        </View>
      </Card>
    </View>
  ),
};
