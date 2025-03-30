import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';

const SAMPLE_COLUMNS = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'city', label: 'City' },
];

const SAMPLE_DATA = [
  { id: '1', name: 'John Doe', age: '30', city: 'New York' },
  { id: '2', name: 'Jane Smith', age: '25', city: 'Los Angeles' },
  { id: '3', name: 'Bob Johnson', age: '35', city: 'Chicago' },
];

const meta: Meta<typeof Table> = {
  title: 'Data Display/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    columns: SAMPLE_COLUMNS,
    data: SAMPLE_DATA,
  },
};

export const CustomStyles: Story = {
  args: {
    columns: SAMPLE_COLUMNS,
    data: SAMPLE_DATA,
    headerStyle: {
      backgroundColor: '#e3f2fd',
    },
    headerCellStyle: {
      color: '#1976d2',
      fontWeight: '700',
    },
    rowStyle: {
      backgroundColor: '#fff',
    },
    cellStyle: {
      color: '#333',
    },
  },
};

// Example with many columns
const WIDE_COLUMNS = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'address', label: 'Address' },
  { key: 'city', label: 'City' },
  { key: 'country', label: 'Country' },
];

const WIDE_DATA = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 Main St',
    city: 'New York',
    country: 'USA',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '098-765-4321',
    address: '456 Oak Ave',
    city: 'Los Angeles',
    country: 'USA',
  },
];

export const WideTable: Story = {
  render: () => (
    <View style={{ width: 800, padding: 20 }}>
      <Table
        columns={WIDE_COLUMNS}
        data={WIDE_DATA}
      />
    </View>
  ),
}; 