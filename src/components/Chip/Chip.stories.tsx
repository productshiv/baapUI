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
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'],
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

const ChipGroupDemo = ({ design = 'flat' }: { design?: 'flat' | 'neumorphic' | 'skeuomorphic' | 'glassmorphic' }) => {
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  const toggleChip = (chipId: string) => {
    setSelectedChips(prev =>
      prev.includes(chipId) ? prev.filter(id => id !== chipId) : [...prev, chipId]
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
    <div
      style={{
        backgroundColor: NEUMORPHIC_COLORS.background,
        padding: '24px',
        borderRadius: '12px',
        minWidth: '400px',
      }}
    >
      <ChipGroupDemo design="neumorphic" />
    </div>
  ),
};

export const Skeuomorphic: Story = {
  args: {
    label: 'Skeuomorphic Chip',
    design: 'skeuomorphic',
    onPress: () => console.log('Skeuomorphic chip pressed'),
  },
};

export const SkeuomorphicSelected: Story = {
  args: {
    label: 'Selected Chip',
    design: 'skeuomorphic',
    isSelected: true,
    onPress: () => console.log('Selected skeuomorphic chip pressed'),
  },
};

export const SkeuomorphicGroup: Story = {
  render: () => <ChipGroupDemo design="skeuomorphic" />,
};

export const ColorVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip label="Primary" onPress={() => {}} backgroundColor="#2196f3" textColor="#fff" />
      <Chip label="Success" onPress={() => {}} backgroundColor="#4caf50" textColor="#fff" />
      <Chip label="Warning" onPress={() => {}} backgroundColor="#ff9800" textColor="#fff" />
      <Chip label="Error" onPress={() => {}} backgroundColor="#f44336" textColor="#fff" />
    </div>
  ),
};

// Glassmorphic Design Stories
export const Glassmorphic: Story = {
  args: {
    label: 'Glassmorphic Chip',
    onPress: () => {},
    design: 'glassmorphic',
  },
};

export const GlassmorphicGroup: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '24px',
        borderRadius: '12px',
        minWidth: '400px',
      }}
    >
      <ChipGroupDemo design="glassmorphic" />
    </div>
  ),
};

export const GlassmorphicInteractive: Story = {
  render: () => {
    const [selectedChips, setSelectedChips] = useState<string[]>([]);
    const toggleChip = (chipId: string) => {
      setSelectedChips(prev =>
        prev.includes(chipId) ? prev.filter(id => id !== chipId) : [...prev, chipId]
      );
    };

    return (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '24px',
          borderRadius: '12px',
          minWidth: '400px',
        }}
      >
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['React', 'Vue', 'Angular', 'Svelte'].map(tech => (
            <Chip
              key={tech}
              label={tech}
              onPress={() => toggleChip(tech)}
              isSelected={selectedChips.includes(tech)}
              design="glassmorphic"
            />
          ))}
        </div>
      </div>
    );
  },
};

export const GlassmorphicDarkMode: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        padding: '24px',
        borderRadius: '12px',
        minWidth: '400px',
      }}
    >
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Chip label="Dark Glass" onPress={() => {}} design="glassmorphic" />
        <Chip label="Selected" onPress={() => {}} design="glassmorphic" isSelected={true} />
        <Chip label="Interactive" onPress={() => {}} design="glassmorphic" />
      </div>
    </div>
  ),
};

export const GlassmorphicPlayground: Story = {
  args: {
    label: 'Playground Chip',
    onPress: () => {},
    design: 'glassmorphic',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    textColor: 'rgba(255, 255, 255, 0.9)',
  },
  render: (args) => (
    <div
      style={{
        background: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
        padding: '24px',
        borderRadius: '12px',
        minWidth: '300px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Chip {...args} />
    </div>
  ),
};

export const GlassmorphicLightGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        padding: '24px',
        borderRadius: '12px',
        minWidth: '400px',
      }}
    >
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Chip label="Light" onPress={() => {}} design="glassmorphic" backgroundColor="rgba(255, 255, 255, 0.1)" />
        <Chip label="Subtle" onPress={() => {}} design="glassmorphic" backgroundColor="rgba(255, 255, 255, 0.15)" />
        <Chip label="Soft" onPress={() => {}} design="glassmorphic" backgroundColor="rgba(255, 255, 255, 0.2)" />
      </div>
    </div>
  ),
};

export const GlassmorphicDarkGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        padding: '24px',
        borderRadius: '12px',
        minWidth: '400px',
      }}
    >
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Chip label="Dark" onPress={() => {}} design="glassmorphic" backgroundColor="rgba(0, 0, 0, 0.1)" />
        <Chip label="Deep" onPress={() => {}} design="glassmorphic" backgroundColor="rgba(0, 0, 0, 0.2)" />
        <Chip label="Shadow" onPress={() => {}} design="glassmorphic" backgroundColor="rgba(0, 0, 0, 0.3)" />
      </div>
    </div>
  ),
};

export const GlassmorphicColoredGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '24px',
        borderRadius: '12px',
        minWidth: '400px',
      }}
    >
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Chip label="Blue" onPress={() => {}} design="glassmorphic" backgroundColor="rgba(0, 122, 255, 0.2)" />
        <Chip label="Purple" onPress={() => {}} design="glassmorphic" backgroundColor="rgba(88, 86, 214, 0.2)" />
        <Chip label="Green" onPress={() => {}} design="glassmorphic" backgroundColor="rgba(52, 199, 89, 0.2)" />
        <Chip label="Red" onPress={() => {}} design="glassmorphic" backgroundColor="rgba(255, 59, 48, 0.2)" />
      </div>
    </div>
  ),
};

export const GlassmorphicHighBlur: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
        padding: '24px',
        borderRadius: '12px',
        minWidth: '400px',
      }}
    >
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Chip label="High Blur" onPress={() => {}} design="glassmorphic" />
        <Chip label="Maximum" onPress={() => {}} design="glassmorphic" isSelected={true} />
        <Chip label="Effect" onPress={() => {}} design="glassmorphic" />
      </div>
    </div>
  ),
};

export const GlassmorphicMinimalGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        padding: '24px',
        borderRadius: '12px',
        minWidth: '400px',
      }}
    >
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Chip label="Minimal" onPress={() => {}} design="glassmorphic" backgroundColor="rgba(255, 255, 255, 0.05)" />
        <Chip label="Subtle" onPress={() => {}} design="glassmorphic" backgroundColor="rgba(255, 255, 255, 0.08)" />
        <Chip label="Clean" onPress={() => {}} design="glassmorphic" backgroundColor="rgba(255, 255, 255, 0.1)" />
      </div>
    </div>
  ),
};

export const GlassmorphicLayeredGlass: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '24px',
        borderRadius: '12px',
        minWidth: '400px',
        position: 'relative',
      }}
    >
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', position: 'relative', zIndex: 2 }}>
        <Chip label="Layer 1" onPress={() => {}} design="glassmorphic" />
        <Chip label="Layer 2" onPress={() => {}} design="glassmorphic" isSelected={true} />
        <Chip label="Layer 3" onPress={() => {}} design="glassmorphic" />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '60%',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          backdropFilter: 'blur(10px)',
          zIndex: 1,
        }}
      />
    </div>
  ),
};

export const AllDesigns: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3>Flat Design</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Chip label="Flat" onPress={() => {}} design="flat" />
          <Chip label="Selected" onPress={() => {}} design="flat" isSelected={true} />
        </div>
      </div>
      <div>
        <h3>Neumorphic Design</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', backgroundColor: '#e0e5ec', padding: '16px', borderRadius: '8px' }}>
          <Chip label="Neumorphic" onPress={() => {}} design="neumorphic" />
          <Chip label="Selected" onPress={() => {}} design="neumorphic" isSelected={true} />
        </div>
      </div>
      <div>
        <h3>Skeuomorphic Design</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Chip label="Skeuomorphic" onPress={() => {}} design="skeuomorphic" />
          <Chip label="Selected" onPress={() => {}} design="skeuomorphic" isSelected={true} />
        </div>
      </div>
      <div>
        <h3>Glassmorphic Design</h3>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '16px',
            borderRadius: '8px',
          }}
        >
          <Chip label="Glassmorphic" onPress={() => {}} design="glassmorphic" />
          <Chip label="Selected" onPress={() => {}} design="glassmorphic" isSelected={true} />
        </div>
      </div>
    </div>
  ),
};
