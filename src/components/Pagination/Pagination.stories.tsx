import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Pagination from './Pagination';
import Typography from '../Typography/Typography';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    totalPages: { control: 'number' },
    currentPage: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    totalPages: 5,
    currentPage: 1,
    onPageChange: () => {},
  },
};

export const ManyPages: Story = {
  args: {
    totalPages: 10,
    currentPage: 5,
    onPageChange: () => {},
  },
};

// Interactive example with content
const InteractivePaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const getContent = () => {
    switch (currentPage) {
      case 1:
        return 'First page content';
      case 2:
        return 'Second page content';
      case 3:
        return 'Third page content';
      case 4:
        return 'Fourth page content';
      case 5:
        return 'Fifth page content';
      default:
        return '';
    }
  };

  return (
    <View style={{ gap: 20, alignItems: 'center' }}>
      <View
        style={{
          padding: 20,
          backgroundColor: '#f5f5f5',
          borderRadius: 8,
          minWidth: 200,
          alignItems: 'center',
        }}
      >
        <Typography>{getContent()}</Typography>
      </View>

      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </View>
  );
};

export const Interactive: Story = {
  render: () => <InteractivePaginationExample />,
};

// Example with different states
export const States: Story = {
  render: () => (
    <View style={{ gap: 20 }}>
      <View>
        <Typography variant="caption">First page</Typography>
        <Pagination totalPages={5} currentPage={1} onPageChange={() => {}} />
      </View>

      <View>
        <Typography variant="caption">Middle page</Typography>
        <Pagination totalPages={5} currentPage={3} onPageChange={() => {}} />
      </View>

      <View>
        <Typography variant="caption">Last page</Typography>
        <Pagination totalPages={5} currentPage={5} onPageChange={() => {}} />
      </View>
    </View>
  ),
};
