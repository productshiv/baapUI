import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Table from './Table';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status' },
];

const sampleData = [
  { id: '1', name: 'John Doe', role: 'Developer', status: 'Active' },
  { id: '2', name: 'Jane Smith', role: 'Designer', status: 'Away' },
  { id: '3', name: 'Mike Johnson', role: 'Manager', status: 'Active' },
  { id: '4', name: 'Sarah Wilson', role: 'Developer', status: 'Busy' },
];

const meta: Meta<typeof Table> = {
  title: 'Data Display/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    columns,
    data: sampleData,
  },
};

export const CustomStyles: Story = {
  args: {
    columns,
    data: sampleData,
    style: {
      borderWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    headerStyle: {
      backgroundColor: '#f5f5f5',
    },
    rowStyle: {
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    headerCellStyle: {
      color: '#333',
      fontWeight: '700',
    },
    cellStyle: {
      color: '#666',
    },
  },
};

export const Neumorphic: Story = {
  args: {
    columns,
    data: sampleData,
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
    textColor: NEUMORPHIC_COLORS.text,
  },
};

export const NeumorphicCustom: Story = {
  render: () => (
    <div
      style={{
        backgroundColor: NEUMORPHIC_COLORS.background,
        padding: 32,
        borderRadius: 16,
        width: 800,
      }}
    >
      <Table
        columns={[
          { key: 'project', label: 'Project' },
          { key: 'progress', label: 'Progress' },
          { key: 'deadline', label: 'Deadline' },
          { key: 'priority', label: 'Priority' },
        ]}
        data={[
          {
            project: 'Website Redesign',
            progress: '75%',
            deadline: '2024-04-01',
            priority: 'High',
          },
          { project: 'Mobile App', progress: '45%', deadline: '2024-05-15', priority: 'Medium' },
          { project: 'API Integration', progress: '90%', deadline: '2024-03-20', priority: 'High' },
          { project: 'Documentation', progress: '30%', deadline: '2024-04-30', priority: 'Low' },
        ]}
        design="neumorphic"
        backgroundColor={NEUMORPHIC_COLORS.background}
        textColor={NEUMORPHIC_COLORS.text}
        headerCellStyle={{
          color: NEUMORPHIC_COLORS.primary,
          fontSize: 16,
        }}
      />
    </div>
  ),
};
