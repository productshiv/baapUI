import React, { useState } from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Pagination from './Pagination';
import Typography from '../Typography/Typography';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
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
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: () => {},
  },
};

export const WithLargeRange: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    onPageChange: () => {},
  },
};

export const Neumorphic: Story = {
  args: {
    totalPages: 5,
    currentPage: 3,
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
    textColor: NEUMORPHIC_COLORS.text,
    onPageChange: () => {}
  },
};

export const Skeuomorphic: Story = {
  args: {
    totalPages: 5,
    currentPage: 3,
    design: 'skeuomorphic',
    onPageChange: () => {}
  },
};

export const SkeuomorphicFirstPage: Story = {
  args: {
    totalPages: 10,
    currentPage: 1,
    design: 'skeuomorphic',
    onPageChange: () => {}
  },
};

export const SkeuomorphicLastPage: Story = {
  args: {
    totalPages: 10,
    currentPage: 10,
    design: 'skeuomorphic',
    onPageChange: () => {}
  },
};

export const Glassmorphic: Story = {
  args: {
    totalPages: 5,
    currentPage: 3,
    design: 'glassmorphic',
    onPageChange: () => {}
  },
};

export const GlassmorphicDark: Story = {
  args: {
    totalPages: 5,
    currentPage: 3,
    design: 'glassmorphic',
    onPageChange: () => {}
  },
  parameters: {
    backgrounds: { default: 'dark' },
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

export const AllDesigns: Story = {
  render: () => (
    <View style={{ gap: 30, padding: 20 }}>
      <View>
        <Typography variant="h6" style={{ marginBottom: 10 }}>Flat Design</Typography>
        <Pagination totalPages={5} currentPage={3} design="flat" onPageChange={() => {}} />
      </View>

      <View>
        <Typography variant="h6" style={{ marginBottom: 10 }}>Neumorphic Design</Typography>
        <Pagination totalPages={5} currentPage={3} design="neumorphic" onPageChange={() => {}} />
      </View>

      <View>
        <Typography variant="h6" style={{ marginBottom: 10 }}>Skeuomorphic Design</Typography>
        <Pagination totalPages={5} currentPage={3} design="skeuomorphic" onPageChange={() => {}} />
      </View>

      <View>
        <Typography variant="h6" style={{ marginBottom: 10 }}>Glassmorphic Design</Typography>
        <Pagination totalPages={5} currentPage={3} design="glassmorphic" onPageChange={() => {}} />
      </View>
    </View>
  ),
};
