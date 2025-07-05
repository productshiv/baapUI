import React from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import ToggleSwitch from './ToggleSwitch';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Form/ToggleSwitch',
  component: ToggleSwitch,
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
      options: ['flat', 'neumorphic', 'skeuomorphic'],
      defaultValue: 'flat',
    },
    initialValue: {
      control: 'boolean',
      defaultValue: false,
      description: 'Initial state of the toggle switch',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'Whether the toggle switch is disabled',
    },
    label: {
      control: 'text',
      defaultValue: 'Toggle Switch',
      description: 'Label text for the toggle switch',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color for the toggle switch',
    },
    textColor: {
      control: 'color',
      description: 'Custom text color for the label',
    },
  },
  args: {
    design: 'flat',
    initialValue: false,
    disabled: false,
    label: 'Toggle Switch',
    onToggle: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

// Default Story
export const Default: Story = {
  args: {
    label: 'Default Toggle Switch',
    initialValue: false,
    design: 'flat',
    onToggle: () => {},
  },
};

// Design System Variations
export const Flat: Story = {
  args: {
    label: 'Flat Design Toggle',
    design: 'flat',
    initialValue: false,
    onToggle: () => {},
  },
};

export const Neumorphic: Story = {
  args: {
    label: 'Neumorphic Design Toggle',
    design: 'neumorphic',
    initialValue: false,
    onToggle: () => {},
  },
};

export const Skeuomorphic: Story = {
  args: {
    label: 'Skeuomorphic Design Toggle',
    design: 'skeuomorphic',
  },
};

export const SkeuomorphicEnabled: Story = {
  args: {
    label: 'Skeuomorphic Enabled',
    design: 'skeuomorphic',
    initialValue: true,
  },
};

export const SkeuomorphicDisabled: Story = {
  args: {
    label: 'Skeuomorphic Disabled',
    design: 'skeuomorphic',
    disabled: true,
  },
};

// State Variations
export const Enabled: Story = {
  args: {
    label: 'Enabled Toggle',
    initialValue: true,
    design: 'flat',
    onToggle: () => {},
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Toggle (Off)',
    disabled: true,
    initialValue: false,
    design: 'flat',
    onToggle: () => {},
  },
};

export const DisabledEnabled: Story = {
  args: {
    label: 'Disabled Toggle (On)',
    disabled: true,
    initialValue: true,
    design: 'flat',
    onToggle: () => {},
  },
};

// Design-specific State Combinations
export const NeumorphicEnabled: Story = {
  args: {
    label: 'Neumorphic Enabled',
    design: 'neumorphic',
    initialValue: true,
    onToggle: () => {},
  },
};

export const NeumorphicDisabled: Story = {
  args: {
    label: 'Neumorphic Disabled',
    design: 'neumorphic',
    disabled: true,
    initialValue: false,
    onToggle: () => {},
  },
};

export const NeumorphicDisabledEnabled: Story = {
  args: {
    label: 'Neumorphic Disabled (On)',
    design: 'neumorphic',
    disabled: true,
    initialValue: true,
    onToggle: () => {},
  },
};

// Custom Color Variations
export const CustomColors: Story = {
  args: {
    label: 'Custom Colored Toggle',
    backgroundColor: '#e8f5e8',
    textColor: '#2e7d32',
    design: 'flat',
    initialValue: false,
    onToggle: () => {},
  },
};

export const NeumorphicCustomColors: Story = {
  args: {
    label: 'Custom Neumorphic Colors',
    backgroundColor: '#fdf6e3',
    textColor: '#8b4513',
    design: 'neumorphic',
    initialValue: true,
    onToggle: () => {},
  },
};

// Long Label Variations
export const LongLabel: Story = {
  args: {
    label: 'This is a very long toggle switch label that demonstrates how the component handles text wrapping and maintains proper alignment',
    design: 'flat',
    initialValue: false,
    onToggle: () => {},
  },
};

export const NeumorphicLongLabel: Story = {
  args: {
    label: 'This is a neumorphic toggle switch with a very long label to test text wrapping and visual alignment',
    design: 'neumorphic',
    initialValue: true,
    onToggle: () => {},
  },
};

// Interactive Examples
export const Interactive: Story = {
  render: () => {
    const [value1, setValue1] = React.useState(false);
    const [value2, setValue2] = React.useState(true);

    return (
      <View style={{ padding: 20, gap: 16, maxWidth: 400 }}>
        <ToggleSwitch
          label="Interactive Toggle 1"
          initialValue={value1}
          onToggle={() => setValue1(!value1)}
          design="flat"
        />
        <ToggleSwitch
          label="Interactive Toggle 2"
          initialValue={value2}
          onToggle={() => setValue2(!value2)}
          design="flat"
        />
      </View>
    );
  },
};

// All Design Systems Showcase
export const AllDesigns: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 16, maxWidth: 400 }}>
      <View>
        <ToggleSwitch
          label="Flat Design"
          design="flat"
          initialValue={false}
          onToggle={() => {}}
        />
      </View>
      <View>
        <ToggleSwitch
          label="Neumorphic Design"
          design="neumorphic"
          initialValue={false}
          onToggle={() => {}}
        />
      </View>
      <View>
        <ToggleSwitch
          label="Skeuomorphic Design"
          design="skeuomorphic"
          initialValue={false}
          onToggle={() => {}}
        />
      </View>
    </View>
  ),
};

// Enabled States Showcase
export const AllDesignsEnabled: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 16, maxWidth: 400 }}>
      <View>
        <ToggleSwitch
          label="Flat Design (Enabled)"
          design="flat"
          initialValue={true}
          onToggle={() => {}}
        />
      </View>
      <View>
        <ToggleSwitch
          label="Neumorphic Design (Enabled)"
          design="neumorphic"
          initialValue={true}
          onToggle={() => {}}
        />
      </View>
      <View>
        <ToggleSwitch
          label="Skeuomorphic Design (Enabled)"
          design="skeuomorphic"
          initialValue={true}
          onToggle={() => {}}
        />
      </View>
    </View>
  ),
};

// State Showcase
export const StateShowcase: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 12, maxWidth: 400 }}>
      <ToggleSwitch label="Off State" initialValue={false} onToggle={() => {}} />
      <ToggleSwitch label="On State" initialValue={true} onToggle={() => {}} />
      <ToggleSwitch label="Disabled Off" disabled initialValue={false} onToggle={() => {}} />
      <ToggleSwitch label="Disabled On" disabled initialValue={true} onToggle={() => {}} />
    </View>
  ),
};

// Settings Form Example
export const SettingsForm: Story = {
  render: () => {
    const [notifications, setNotifications] = React.useState(true);
    const [darkMode, setDarkMode] = React.useState(false);
    const [autoSave, setAutoSave] = React.useState(true);
    const [analytics, setAnalytics] = React.useState(false);

    return (
      <View style={{ padding: 20, gap: 12, maxWidth: 400 }}>
        <ToggleSwitch
          label="Enable notifications"
          design="neumorphic"
          initialValue={notifications}
          onToggle={() => setNotifications(!notifications)}
        />
        <ToggleSwitch
          label="Dark mode"
          design="neumorphic"
          initialValue={darkMode}
          onToggle={() => setDarkMode(!darkMode)}
        />
        <ToggleSwitch
          label="Auto-save documents"
          design="neumorphic"
          initialValue={autoSave}
          onToggle={() => setAutoSave(!autoSave)}
        />
        <ToggleSwitch
          label="Share analytics data"
          design="neumorphic"
          initialValue={analytics}
          onToggle={() => setAnalytics(!analytics)}
        />
        <ToggleSwitch
          label="Beta features (disabled)"
          design="neumorphic"
          disabled={true}
          initialValue={false}
          onToggle={() => {}}
        />
      </View>
    );
  },
};

// Design Comparison
export const DesignComparison: Story = {
  render: () => {
    const [sharedState, setSharedState] = React.useState(true);

    return (
      <View style={{ padding: 20, gap: 20 }}>
        <View style={{ gap: 12 }}>
          <ToggleSwitch
            label="Flat Design Toggle"
            design="flat"
            initialValue={sharedState}
            onToggle={() => setSharedState(!sharedState)}
          />
          <ToggleSwitch
            label="Neumorphic Design Toggle"
            design="neumorphic"
            initialValue={sharedState}
            onToggle={() => setSharedState(!sharedState)}
          />
        </View>
      </View>
    );
  },
};
