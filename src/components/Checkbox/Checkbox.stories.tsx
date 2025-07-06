import React from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Core UI/Checkbox',
  component: Checkbox,
  decorators: [
    Story => (
      <View style={{ padding: 20 }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    design: {
      control: 'select',
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'],
      defaultValue: 'flat',
    },
    checked: {
      control: 'boolean',
      defaultValue: false,
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'Whether the checkbox is disabled',
    },
    label: {
      control: 'text',
      defaultValue: 'Checkbox Label',
      description: 'Label text for the checkbox',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color for the checkbox',
    },
    textColor: {
      control: 'color',
      description: 'Custom text color for the label',
    },
  },
  args: {
    design: 'flat',
    checked: false,
    disabled: false,
    label: 'Checkbox Label',
    onChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Default Story
export const Default: Story = {
  args: {
    label: 'Default Checkbox',
    checked: false,
    design: 'flat',
    onChange: () => {},
  },
};

// Design System Variations
export const Flat: Story = {
  args: {
    label: 'Flat Design Checkbox',
    design: 'flat',
    checked: false,
    onChange: () => {},
  },
};

export const Neumorphic: Story = {
  args: {
    label: 'Neumorphic Design Checkbox',
    design: 'neumorphic',
    checked: false,
    onChange: () => {},
  },
};

export const Skeuomorphic: Story = {
  args: {
    label: 'Skeuomorphic Design Checkbox',
    design: 'skeuomorphic',
    checked: false,
    onChange: () => {},
  },
};

// State Variations
export const Checked: Story = {
  args: {
    label: 'Checked Checkbox',
    checked: true,
    design: 'flat',
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
    checked: false,
    design: 'flat',
    onChange: () => {},
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked Checkbox',
    disabled: true,
    checked: true,
    design: 'flat',
    onChange: () => {},
  },
};

// Design-specific State Combinations
export const NeumorphicChecked: Story = {
  args: {
    label: 'Neumorphic Checked',
    design: 'neumorphic',
    checked: true,
    onChange: () => {},
  },
};

export const SkeuomorphicChecked: Story = {
  args: {
    label: 'Skeuomorphic Checked',
    design: 'skeuomorphic',
    checked: true,
    onChange: () => {},
  },
};

export const NeumorphicDisabled: Story = {
  args: {
    label: 'Neumorphic Disabled',
    design: 'neumorphic',
    disabled: true,
    checked: false,
    onChange: () => {},
  },
};

export const SkeuomorphicDisabled: Story = {
  args: {
    label: 'Skeuomorphic Disabled',
    design: 'skeuomorphic',
    disabled: true,
    checked: false,
    onChange: () => {},
  },
};

export const NeumorphicDisabledChecked: Story = {
  args: {
    label: 'Neumorphic Disabled Checked',
    design: 'neumorphic',
    disabled: true,
    checked: true,
    onChange: () => {},
  },
};

export const SkeuomorphicDisabledChecked: Story = {
  args: {
    label: 'Skeuomorphic Disabled Checked',
    design: 'skeuomorphic',
    disabled: true,
    checked: true,
    onChange: () => {},
  },
};

// Custom Color Variations
export const CustomColors: Story = {
  args: {
    label: 'Custom Colored Checkbox',
    backgroundColor: '#e8f5e8',
    textColor: '#2e7d32',
    design: 'flat',
    checked: false,
    onChange: () => {},
  },
};

export const NeumorphicCustomColors: Story = {
  args: {
    label: 'Custom Neumorphic Colors',
    backgroundColor: '#fdf6e3',
    textColor: '#8b4513',
    design: 'neumorphic',
    checked: true,
    onChange: () => {},
  },
};

// Long Label Variations
export const LongLabel: Story = {
  args: {
    label: 'This is a very long checkbox label that demonstrates how the component handles text wrapping and maintains proper alignment',
    design: 'flat',
    checked: false,
    onChange: () => {},
  },
};

export const NeumorphicLongLabel: Story = {
  args: {
    label: 'This is a neumorphic checkbox with a very long label to test text wrapping and visual alignment',
    design: 'neumorphic',
    checked: true,
    onChange: () => {},
  },
};

// All States Showcase
export const AllStates: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 12, maxWidth: 400 }}>
      <Checkbox label="Unchecked" checked={false} onChange={() => {}} />
      <Checkbox label="Checked" checked={true} onChange={() => {}} />
      <Checkbox label="Disabled Unchecked" disabled checked={false} onChange={() => {}} />
      <Checkbox label="Disabled Checked" disabled checked={true} onChange={() => {}} />
    </View>
  ),
};

// All Design Systems Showcase


// Checked States Showcase
export const AllDesignsChecked: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 16, maxWidth: 400 }}>
      <View>
        <Checkbox
          label="Flat Design (Checked)"
          design="flat"
          checked={true}
          onChange={() => {}}
        />
      </View>
      <View>
        <Checkbox
          label="Neumorphic Design (Checked)"
          design="neumorphic"
          checked={true}
          onChange={() => {}}
        />
      </View>
      <View>
        <Checkbox
          label="Skeuomorphic Design (Checked)"
          design="skeuomorphic"
          checked={true}
          onChange={() => {}}
        />
      </View>
    </View>
  ),
};

// Form Example
export const FormExample: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 12, maxWidth: 400 }}>
      <Checkbox
        label="I agree to the terms and conditions"
        design="neumorphic"
        checked={false}
        onChange={() => {}}
      />
      <Checkbox
        label="Subscribe to newsletter"
        design="neumorphic"
        checked={true}
        onChange={() => {}}
      />
      <Checkbox
        label="Enable notifications"
        design="neumorphic"
        checked={false}
        onChange={() => {}}
      />
      <Checkbox
        label="Save my preferences"
        design="neumorphic"
        checked={true}
        onChange={() => {}}
      />
      <Checkbox
        label="Remember me (currently disabled)"
        design="neumorphic"
        disabled={true}
        checked={false}
        onChange={() => {}}
      />
    </View>
  ),
};

// Interactive Example
export const InteractiveExample: Story = {
  render: () => {
    const [checkboxStates, setCheckboxStates] = React.useState({
      option1: false,
      option2: true,
      option3: false,
    });

    const handleChange = (key: string) => (checked: boolean) => {
      setCheckboxStates(prev => ({ ...prev, [key]: checked }));
    };

    return (
      <View style={{ padding: 20, gap: 12, maxWidth: 400 }}>
        <Checkbox
          label="Option 1"
          design="skeuomorphic"
          checked={checkboxStates.option1}
          onChange={handleChange('option1')}
        />
        <Checkbox
          label="Option 2"
          design="skeuomorphic"
          checked={checkboxStates.option2}
          onChange={handleChange('option2')}
        />
        <Checkbox
          label="Option 3"
          design="skeuomorphic"
          checked={checkboxStates.option3}
          onChange={handleChange('option3')}
        />
      </View>
    );
  },
};

// New Glassmorphic Stories
export const Glassmorphic: Story = {
  args: {
    label: 'Glassmorphic Design Checkbox',
    design: 'glassmorphic',
    checked: false,
    onChange: () => {},
  },
};

export const GlassmorphicChecked: Story = {
  args: {
    label: 'Glassmorphic Checked',
    design: 'glassmorphic',
    checked: true,
    onChange: () => {},
  },
};

export const GlassmorphicDisabled: Story = {
  args: {
    label: 'Glassmorphic Disabled',
    design: 'glassmorphic',
    disabled: true,
    checked: false,
    onChange: () => {},
  },
};

export const GlassmorphicCustomColors: Story = {
  args: {
    label: 'Custom Glassmorphic Colors',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    textColor: '#ffffff',
    design: 'glassmorphic',
    checked: true,
    onChange: () => {},
  },
};

// Updated AllDesigns showcase
export const AllDesigns: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 16, maxWidth: 400 }}>
      <View>
        <Checkbox
          label="Flat Design"
          design="flat"
          checked={false}
          onChange={() => {}}
        />
      </View>
      <View>
        <Checkbox
          label="Neumorphic Design"
          design="neumorphic"
          checked={false}
          onChange={() => {}}
        />
      </View>
      <View>
        <Checkbox
          label="Skeuomorphic Design"
          design="skeuomorphic"
          checked={false}
          onChange={() => {}}
        />
      </View>
      <View>
        <Checkbox
          label="Glassmorphic Design"
          design="glassmorphic"
          checked={false}
          onChange={() => {}}
        />
      </View>
    </View>
  ),
};
