import React from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Grid from './Grid';
import Typography from '../Typography/Typography';

const meta: Meta<typeof Grid.Container> = {
  title: 'Utility/Grid',
  component: Grid.Container,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    design: {
      control: { type: 'select' },
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'],
    },
    backgroundColor: {
      control: { type: 'color' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid.Container>;

// Helper component for grid items
const GridItem = ({ children }: { children: React.ReactNode }) => (
  <View
    style={{
      backgroundColor: '#e3f2fd',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    }}
  >
    <Typography>{children}</Typography>
  </View>
);

export const TwoColumns: Story = {
  render: () => (
    <Grid.Container style={{ width: 400 }}>
      <Grid.Row columns={2} spacing={2}>
        <Grid.Col>
          <GridItem>Column 1</GridItem>
        </Grid.Col>
        <Grid.Col>
          <GridItem>Column 2</GridItem>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  ),
};

export const ThreeColumns: Story = {
  render: () => (
    <Grid.Container style={{ width: 600 }}>
      <Grid.Row columns={3} spacing={2}>
        <Grid.Col>
          <GridItem>Column 1</GridItem>
        </Grid.Col>
        <Grid.Col>
          <GridItem>Column 2</GridItem>
        </Grid.Col>
        <Grid.Col>
          <GridItem>Column 3</GridItem>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  ),
};

export const FourColumns: Story = {
  render: () => (
    <Grid.Container style={{ width: 800 }}>
      <Grid.Row columns={4} spacing={2}>
        {[1, 2, 3, 4].map(num => (
          <Grid.Col key={num}>
            <GridItem>Column {num}</GridItem>
          </Grid.Col>
        ))}
      </Grid.Row>
    </Grid.Container>
  ),
};

export const DynamicSizing: Story = {
  render: () => (
    <Grid.Container style={{ width: 800 }}>
      <Grid.Row columns={6} spacing={2}>
        <Grid.Col size={2}>
          <GridItem>Span 2</GridItem>
        </Grid.Col>
        <Grid.Col size={1}>
          <GridItem>Span 1</GridItem>
        </Grid.Col>
        <Grid.Col size={3}>
          <GridItem>Span 3</GridItem>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  ),
};

export const FlexibleColumns: Story = {
  render: () => (
    <Grid.Container style={{ width: 800 }}>
      <Grid.Row spacing={2}>
        <Grid.Col flex>
          <GridItem>Flex 1</GridItem>
        </Grid.Col>
        <Grid.Col flex>
          <GridItem>Flex 1</GridItem>
        </Grid.Col>
        <Grid.Col flex>
          <GridItem>Flex 1</GridItem>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row spacing={2} style={{ marginTop: 16 }}>
        <Grid.Col flex>
          <GridItem>Flex 1</GridItem>
        </Grid.Col>
        <Grid.Col size={2}>
          <GridItem>Fixed Width</GridItem>
        </Grid.Col>
        <Grid.Col flex>
          <GridItem>Flex 1</GridItem>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <Grid.Container style={{ width: '100%', maxWidth: 800 }}>
      <Grid.Row spacing={2}>
        <Grid.Col size={4}>
          <GridItem>Column 1</GridItem>
        </Grid.Col>
        <Grid.Col size={4}>
          <GridItem>Column 2</GridItem>
        </Grid.Col>
        <Grid.Col size={4}>
          <GridItem>Column 3</GridItem>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  ),
};

export const NestedGrid: Story = {
  render: () => (
    <Grid.Container style={{ width: '100%', maxWidth: 800 }}>
      <Grid.Row spacing={2}>
        <Grid.Col size={6}>
          <Grid.Row spacing={1}>
            <Grid.Col size={6}>
              <GridItem>Nested 1.1</GridItem>
            </Grid.Col>
            <Grid.Col size={6}>
              <GridItem>Nested 1.2</GridItem>
            </Grid.Col>
          </Grid.Row>
        </Grid.Col>
        <Grid.Col size={6}>
          <GridItem>Column 2</GridItem>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  ),
};

export const Glassmorphic: Story = {
  render: () => (
    <Grid.Container design="glassmorphic" style={{ width: 800 }}>
      <Grid.Row design="glassmorphic" spacing={2} elevated>
        <Grid.Col design="glassmorphic" elevated>
          <GridItem>Glassmorphic Column 1</GridItem>
        </Grid.Col>
        <Grid.Col design="glassmorphic" elevated>
          <GridItem>Glassmorphic Column 2</GridItem>
        </Grid.Col>
        <Grid.Col design="glassmorphic" elevated>
          <GridItem>Glassmorphic Column 3</GridItem>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  ),
};

export const GlassmorphicDark: Story = {
  render: () => (
    <Grid.Container design="glassmorphic" style={{ width: 800 }}>
      <Grid.Row design="glassmorphic" spacing={2} elevated>
        <Grid.Col design="glassmorphic" elevated>
          <GridItem>Glassmorphic Dark Column 1</GridItem>
        </Grid.Col>
        <Grid.Col design="glassmorphic" elevated>
          <GridItem>Glassmorphic Dark Column 2</GridItem>
        </Grid.Col>
        <Grid.Col design="glassmorphic" elevated>
          <GridItem>Glassmorphic Dark Column 3</GridItem>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  ),
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
};

export const AllDesigns: Story = {
  render: () => (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <Grid.Container design="flat" style={{ width: 800 }}>
        <Grid.Row design="flat" spacing={2}>
          <Grid.Col><GridItem>Flat Design</GridItem></Grid.Col>
          <Grid.Col><GridItem>Column 2</GridItem></Grid.Col>
          <Grid.Col><GridItem>Column 3</GridItem></Grid.Col>
        </Grid.Row>
      </Grid.Container>
      
      <Grid.Container design="neumorphic" style={{ width: 800 }}>
        <Grid.Row design="neumorphic" spacing={2} elevated>
          <Grid.Col design="neumorphic" elevated><GridItem>Neumorphic Design</GridItem></Grid.Col>
          <Grid.Col design="neumorphic" elevated><GridItem>Column 2</GridItem></Grid.Col>
          <Grid.Col design="neumorphic" elevated><GridItem>Column 3</GridItem></Grid.Col>
        </Grid.Row>
      </Grid.Container>
      
      <Grid.Container design="skeuomorphic" style={{ width: 800 }}>
        <Grid.Row design="skeuomorphic" spacing={2}>
          <Grid.Col><GridItem>Skeuomorphic Design</GridItem></Grid.Col>
          <Grid.Col><GridItem>Column 2</GridItem></Grid.Col>
          <Grid.Col><GridItem>Column 3</GridItem></Grid.Col>
        </Grid.Row>
      </Grid.Container>
      
      <Grid.Container design="glassmorphic" style={{ width: 800 }}>
        <Grid.Row design="glassmorphic" spacing={2} elevated>
          <Grid.Col design="glassmorphic" elevated><GridItem>Glassmorphic Design</GridItem></Grid.Col>
          <Grid.Col design="glassmorphic" elevated><GridItem>Column 2</GridItem></Grid.Col>
          <Grid.Col design="glassmorphic" elevated><GridItem>Column 3</GridItem></Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </View>
  ),
};
