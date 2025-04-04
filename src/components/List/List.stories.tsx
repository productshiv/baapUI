import React from 'react';
import { View, Text } from 'react-native';
import { Meta, StoryObj } from '@storybook/react';
import List, { ListItem } from './List';
import Typography from '../Typography/Typography';

const meta: Meta<typeof List> = {
  title: 'Data Display/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof List>;

// Basic list with text items
export const Basic: Story = {
  args: {
    items: [
      <Typography>First Item</Typography>,
      <Typography>Second Item</Typography>,
      <Typography>Third Item</Typography>,
    ],
  },
};

// List with custom styled items
export const CustomStyled: Story = {
  args: {
    items: [
      <Typography>Custom Item 1</Typography>,
      <Typography>Custom Item 2</Typography>,
      <Typography>Custom Item 3</Typography>,
    ],
    containerStyle: {
      backgroundColor: '#f5f5f5',
      padding: 10,
      borderRadius: 8,
    },
    itemStyle: {
      backgroundColor: '#e3f2fd',
      borderRadius: 10,
      marginVertical: 6,
    },
  },
};

// List with complex content
export const ComplexContent: Story = {
  args: {
    items: [
      <View>
        <Typography style={{ fontWeight: 'bold' }}>Task 1</Typography>
        <Typography>Complete the project documentation</Typography>
        <Typography style={{ color: '#666' }}>Due: Tomorrow</Typography>
      </View>,
      <View>
        <Typography style={{ fontWeight: 'bold' }}>Task 2</Typography>
        <Typography>Review pull requests</Typography>
        <Typography style={{ color: '#666' }}>Due: Today</Typography>
      </View>,
      <View>
        <Typography style={{ fontWeight: 'bold' }}>Task 3</Typography>
        <Typography>Update dependencies</Typography>
        <Typography style={{ color: '#666' }}>Due: Next week</Typography>
      </View>,
    ],
    itemStyle: {
      padding: 20,
    },
  },
};

// Interactive list items
export const Interactive: Story = {
  args: {
    items: [
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography>Toggle Notifications</Typography>
        <Typography>→</Typography>
      </View>,
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography>Account Settings</Typography>
        <Typography>→</Typography>
      </View>,
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography>Privacy Policy</Typography>
        <Typography>→</Typography>
      </View>,
    ],
    itemStyle: {
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      borderRadius: 0,
    },
  },
};
