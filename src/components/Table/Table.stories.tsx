import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';

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
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'],
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

export const Skeuomorphic: Story = {
  args: {
    columns,
    data: sampleData,
    design: 'skeuomorphic',
  },
};

export const SkeuomorphicCustom: Story = {
  render: () => (
    <div
      style={{
        backgroundColor: '#f0f0f0',
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
        design="skeuomorphic"
      />
    </div>
  ),
};

export const Glassmorphic: Story = {
  args: {
    columns,
    data: sampleData,
    design: 'glassmorphic',
    backgroundColor: GLASSMORPHIC_COLORS.light.background,
    textColor: GLASSMORPHIC_COLORS.light.text,
  },
};

export const GlassmorphicCustom: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 32,
        borderRadius: 16,
        width: 800,
        minHeight: 400,
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
        design="glassmorphic"
        backgroundColor={GLASSMORPHIC_COLORS.light.background}
        textColor={GLASSMORPHIC_COLORS.light.text}
        headerCellStyle={{
          color: GLASSMORPHIC_COLORS.light.text,
          fontSize: 16,
        }}
      />
    </div>
  ),
};

export const Playground: Story = {
  args: {
    columns,
    data: sampleData,
    design: 'glassmorphic',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    textColor: '#ffffff',
  },
  render: (args) => (
    <div
      style={{
        background: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
        padding: 32,
        borderRadius: 16,
        width: 800,
        minHeight: 400,
      }}
    >
      <Table {...args} />
    </div>
  ),
};

export const LightGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        padding: 32,
        borderRadius: 16,
        width: 800,
        minHeight: 400,
      }}
    >
      <Table
        columns={columns}
        data={sampleData}
        design="glassmorphic"
        backgroundColor="rgba(255, 255, 255, 0.3)"
        textColor="#333333"
        headerCellStyle={{
          color: '#222222',
          fontSize: 16,
          fontWeight: '600',
        }}
        cellStyle={{
          color: '#444444',
        }}
      />
    </div>
  ),
};

export const DarkGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        padding: 32,
        borderRadius: 16,
        width: 800,
        minHeight: 400,
      }}
    >
      <Table
        columns={columns}
        data={sampleData}
        design="glassmorphic"
        backgroundColor="rgba(0, 0, 0, 0.3)"
        textColor="#ffffff"
        headerCellStyle={{
          color: '#f8f9fa',
          fontSize: 16,
          fontWeight: '600',
        }}
        cellStyle={{
          color: '#e9ecef',
        }}
      />
    </div>
  ),
};

export const ColoredGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 32,
        borderRadius: 16,
        width: 800,
        minHeight: 400,
      }}
    >
      <Table
        columns={[
          { key: 'id', label: 'ID' },
          { key: 'name', label: 'Name' },
          { key: 'department', label: 'Department' },
          { key: 'status', label: 'Status' },
        ]}
        data={[
          { id: '1', name: 'Alice Johnson', department: 'Engineering', status: 'Active' },
          { id: '2', name: 'Bob Smith', department: 'Design', status: 'Away' },
          { id: '3', name: 'Carol Davis', department: 'Marketing', status: 'Active' },
        ]}
        design="glassmorphic"
        backgroundColor="rgba(0, 122, 255, 0.2)"
        textColor="#ffffff"
        headerCellStyle={{
          color: '#ffffff',
          fontSize: 16,
          fontWeight: '600',
        }}
      />
    </div>
  ),
};

export const HighBlur: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 32,
        borderRadius: 16,
        width: 800,
        minHeight: 400,
      }}
    >
      <Table
        columns={columns}
        data={sampleData}
        design="glassmorphic"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        textColor="#ffffff"
        style={{
          backdropFilter: 'blur(20px)',
        }}
        headerCellStyle={{
          color: '#ffffff',
          fontSize: 16,
          fontWeight: '600',
        }}
      />
    </div>
  ),
};

export const MinimalGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        padding: 32,
        borderRadius: 16,
        width: 800,
        minHeight: 400,
      }}
    >
      <Table
        columns={columns}
        data={sampleData}
        design="glassmorphic"
        backgroundColor="rgba(255, 255, 255, 0.1)"
        textColor="#ffffff"
        headerCellStyle={{
          color: '#ffffff',
          fontSize: 14,
          fontWeight: '500',
        }}
        cellStyle={{
          color: '#f8f9fa',
          fontSize: 13,
        }}
      />
    </div>
  ),
};

export const LayeredGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 32,
        borderRadius: 16,
        width: 800,
        minHeight: 400,
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          right: '10%',
          height: '60%',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 16,
          backdropFilter: 'blur(10px)',
        }}
      />
      <Table
        columns={columns}
        data={sampleData}
        design="glassmorphic"
        backgroundColor="rgba(255, 255, 255, 0.15)"
        textColor="#ffffff"
        style={{
          position: 'relative',
          zIndex: 2,
        }}
        headerCellStyle={{
          color: '#ffffff',
          fontSize: 16,
          fontWeight: '600',
        }}
      />
    </div>
  ),
};

export const GlassmorphicInteractive: Story = {
  render: () => {
    const [selectedRow, setSelectedRow] = React.useState<string | null>(null);
    
    const interactiveData = sampleData.map(item => ({
      ...item,
      onPress: () => setSelectedRow(selectedRow === item.id ? null : item.id),
      isSelected: selectedRow === item.id,
    }));

    return (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: 32,
          borderRadius: 16,
          width: 800,
          minHeight: 400,
        }}
      >
        <Table
          columns={[
            ...columns,
            { key: 'action', label: 'Action' },
          ]}
          data={interactiveData.map(item => ({
            ...item,
            action: item.isSelected ? 'Selected' : 'Click to select',
          }))}
          design="glassmorphic"
          backgroundColor="rgba(255, 255, 255, 0.2)"
          textColor="#ffffff"
          headerCellStyle={{
            color: '#ffffff',
            fontSize: 16,
            fontWeight: '600',
          }}
          rowStyle={{
            backgroundColor: selectedRow ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          }}
        />
        {selectedRow && (
          <div
            style={{
              marginTop: 16,
              padding: 16,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: 8,
              color: '#ffffff',
            }}
          >
            Selected Row ID: {selectedRow}
          </div>
        )}
      </div>
    );
  },
};

export const GlassmorphicDark: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        padding: 32,
        borderRadius: 16,
        width: 800,
        minHeight: 400,
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
        design="glassmorphic"
        backgroundColor={GLASSMORPHIC_COLORS.dark.background}
        textColor={GLASSMORPHIC_COLORS.dark.text}
        headerCellStyle={{
          color: GLASSMORPHIC_COLORS.dark.text,
          fontSize: 16,
        }}
      />
    </div>
  ),
};
