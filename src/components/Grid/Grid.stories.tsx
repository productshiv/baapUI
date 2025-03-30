import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Grid from './Grid';
import Typography from '../Typography/Typography';

const meta: Meta<typeof Grid.Container> = {
  title: 'Utility/Grid',
  component: Grid.Container,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Grid.Container>;

// Helper component for grid items
const GridItem = ({ children }: { children: React.ReactNode }) => (
  <View style={{
    backgroundColor: '#e3f2fd',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }}>
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
        {[1, 2, 3, 4].map((num) => (
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