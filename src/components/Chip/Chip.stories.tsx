import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Chip from './Chip';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const meta: Meta<typeof Chip> = {
  title: 'Data Display/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic'],
    },
    isSelected: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: 'Basic Chip',
    onPress: () => {},
  },
};

const ChipGroupDemo = ({ design = 'flat' }: { design?: 'flat' | 'neumorphic' }) => {
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  const toggleChip = (chipId: string) => {
    setSelectedChips(prev => 
      prev.includes(chipId) 
        ? prev.filter(id => id !== chipId)
        : [...prev, chipId]
    );
  };

  const chips = [
    { id: 'react', label: 'React' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'javascript', label: 'JavaScript' },
    { id: 'node', label: 'Node.js' },
  ];

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {chips.map(chip => (
        <Chip
          key={chip.id}
          label={chip.label}
          onPress={() => toggleChip(chip.id)}
          isSelected={selectedChips.includes(chip.id)}
          design={design}
        />
      ))}
    </div>
  );
};

export const ChipGroup: Story = {
  render: () => <ChipGroupDemo />,
};

export const Neumorphic: Story = {
  args: {
    label: 'Neumorphic Chip',
    onPress: () => {},
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
    textColor: NEUMORPHIC_COLORS.text,
  },
};

export const NeumorphicGroup: Story = {
  render: () => (
    <div style={{ 
      backgroundColor: NEUMORPHIC_COLORS.background,
      padding: '24px',
      borderRadius: '12px',
      minWidth: '400px',
    }}>
      <ChipGroupDemo design="neumorphic" />
    </div>
  ),
};

export const ColorVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip
        label="Primary"
        onPress={() => {}}
        backgroundColor="#2196f3"
        textColor="#fff"
      />
      <Chip
        label="Success"
        onPress={() => {}}
        backgroundColor="#4caf50"
        textColor="#fff"
      />
      <Chip
        label="Warning"
        onPress={() => {}}
        backgroundColor="#ff9800"
        textColor="#fff"
      />
      <Chip
        label="Error"
        onPress={() => {}}
        backgroundColor="#f44336"
        textColor="#fff"
      />
    </div>
  ),
};
