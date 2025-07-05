import React from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Core UI/RadioButton',
  component: RadioButton,
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
      options: ['flat', 'neumorphic'],
      defaultValue: 'flat',
    },
    initialSelected: {
      control: 'boolean',
      defaultValue: false,
      description: 'Whether the radio button is initially selected',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'Whether the radio button is disabled',
    },
    label: {
      control: 'text',
      defaultValue: 'Radio Button',
      description: 'Label text for the radio button',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color for the radio button',
    },
    textColor: {
      control: 'color',
      description: 'Custom text color for the label',
    },
  },
  args: {
    design: 'flat',
    initialSelected: false,
    disabled: false,
    label: 'Radio Button',
    onToggle: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

// Default Story
export const Default: Story = {
  args: {
    label: 'Default Radio Button',
    initialSelected: false,
    design: 'flat',
    onToggle: () => {},
  },
};

// Design System Variations
export const Flat: Story = {
  args: {
    label: 'Flat Design Radio Button',
    design: 'flat',
    initialSelected: false,
    onToggle: () => {},
  },
};

export const Neumorphic: Story = {
  args: {
    label: 'Neumorphic Design Radio Button',
    design: 'neumorphic',
    initialSelected: false,
    onToggle: () => {},
  },
};

// Skeuomorphic design not supported by RadioButton component

// State Variations
export const Selected: Story = {
  args: {
    label: 'Selected Radio Button',
    initialSelected: true,
    design: 'flat',
    onToggle: () => {},
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Radio Button',
    disabled: true,
    initialSelected: false,
    design: 'flat',
    onToggle: () => {},
  },
};

export const DisabledSelected: Story = {
  args: {
    label: 'Disabled Selected Radio Button',
    disabled: true,
    initialSelected: true,
    design: 'flat',
    onToggle: () => {},
  },
};

// Design-specific State Combinations
export const NeumorphicSelected: Story = {
  args: {
    label: 'Neumorphic Selected',
    design: 'neumorphic',
    initialSelected: true,
    onToggle: () => {},
  },
};

export const NeumorphicDisabled: Story = {
  args: {
    label: 'Neumorphic Disabled',
    design: 'neumorphic',
    disabled: true,
    initialSelected: false,
    onToggle: () => {},
  },
};

export const NeumorphicDisabledSelected: Story = {
  args: {
    label: 'Neumorphic Disabled Selected',
    design: 'neumorphic',
    disabled: true,
    initialSelected: true,
    onToggle: () => {},
  },
};

// Custom Color Variations
export const CustomColors: Story = {
  args: {
    label: 'Custom Colored Radio Button',
    backgroundColor: '#e8f5e8',
    textColor: '#2e7d32',
    design: 'flat',
    initialSelected: false,
    onToggle: () => {},
  },
};

export const NeumorphicCustomColors: Story = {
  args: {
    label: 'Custom Neumorphic Colors',
    backgroundColor: '#fdf6e3',
    textColor: '#8b4513',
    design: 'neumorphic',
    initialSelected: true,
    onToggle: () => {},
  },
};

// Long Label Variations
export const LongLabel: Story = {
  args: {
    label: 'This is a very long radio button label that demonstrates how the component handles text wrapping and maintains proper alignment',
    design: 'flat',
    initialSelected: false,
    onToggle: () => {},
  },
};

export const NeumorphicLongLabel: Story = {
  args: {
    label: 'This is a neumorphic radio button with a very long label to test text wrapping and visual alignment',
    design: 'neumorphic',
    initialSelected: true,
    onToggle: () => {},
  },
};

// Radio Group Examples
export const RadioGroup: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = React.useState('option1');

    return (
      <View style={{ padding: 20, gap: 12, maxWidth: 400 }}>
        <RadioButton
          label="Option 1"
          initialSelected={selectedValue === 'option1'}
          onToggle={() => setSelectedValue('option1')}
          design="flat"
        />
        <RadioButton
          label="Option 2"
          initialSelected={selectedValue === 'option2'}
          onToggle={() => setSelectedValue('option2')}
          design="flat"
        />
        <RadioButton
          label="Option 3"
          initialSelected={selectedValue === 'option3'}
          onToggle={() => setSelectedValue('option3')}
          design="flat"
        />
      </View>
    );
  },
};

export const NeumorphicGroup: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = React.useState('option1');

    return (
      <View style={{ padding: 20, gap: 12, maxWidth: 400 }}>
        <RadioButton
          label="Option 1"
          design="neumorphic"
          initialSelected={selectedValue === 'option1'}
          onToggle={() => setSelectedValue('option1')}
        />
        <RadioButton
          label="Option 2"
          design="neumorphic"
          initialSelected={selectedValue === 'option2'}
          onToggle={() => setSelectedValue('option2')}
        />
        <RadioButton
          label="Option 3"
          design="neumorphic"
          initialSelected={selectedValue === 'option3'}
          onToggle={() => setSelectedValue('option3')}
        />
      </View>
    );
  },
};

// SkeuomorphicGroup removed - design not supported

// All Design Systems Showcase
export const AllDesigns: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 16, maxWidth: 400 }}>
      <View>
        <RadioButton
          label="Flat Design"
          design="flat"
          initialSelected={false}
          onToggle={() => {}}
        />
      </View>
      <View>
        <RadioButton
          label="Neumorphic Design"
          design="neumorphic"
          initialSelected={false}
          onToggle={() => {}}
        />
      </View>
    </View>
  ),
};

// Selected States Showcase
export const AllDesignsSelected: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 16, maxWidth: 400 }}>
      <View>
        <RadioButton
          label="Flat Design (Selected)"
          design="flat"
          initialSelected={true}
          onToggle={() => {}}
        />
      </View>
      <View>
        <RadioButton
          label="Neumorphic Design (Selected)"
          design="neumorphic"
          initialSelected={true}
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
      <RadioButton label="Unselected" initialSelected={false} onToggle={() => {}} />
      <RadioButton label="Selected" initialSelected={true} onToggle={() => {}} />
      <RadioButton label="Disabled Unselected" disabled initialSelected={false} onToggle={() => {}} />
      <RadioButton label="Disabled Selected" disabled initialSelected={true} onToggle={() => {}} />
    </View>
  ),
};

// Form Example
export const FormExample: Story = {
  render: () => {
    const [paymentMethod, setPaymentMethod] = React.useState('credit');
    const [deliveryMethod, setDeliveryMethod] = React.useState('standard');

    return (
      <View style={{ padding: 20, gap: 16, maxWidth: 400 }}>
        <View>
          <View style={{ marginBottom: 8 }}>
            <RadioButton
              label="Payment Method"
              disabled={true}
              initialSelected={false}
              onToggle={() => {}}
              design="neumorphic"
            />
          </View>
          <View style={{ gap: 8, paddingLeft: 20 }}>
            <RadioButton
              label="Credit Card"
              design="neumorphic"
              initialSelected={paymentMethod === 'credit'}
              onToggle={() => setPaymentMethod('credit')}
            />
            <RadioButton
              label="PayPal"
              design="neumorphic"
              initialSelected={paymentMethod === 'paypal'}
              onToggle={() => setPaymentMethod('paypal')}
            />
            <RadioButton
              label="Bank Transfer"
              design="neumorphic"
              initialSelected={paymentMethod === 'bank'}
              onToggle={() => setPaymentMethod('bank')}
            />
          </View>
        </View>
        
        <View>
          <View style={{ marginBottom: 8 }}>
            <RadioButton
              label="Delivery Method"
              disabled={true}
              initialSelected={false}
              onToggle={() => {}}
              design="neumorphic"
            />
          </View>
          <View style={{ gap: 8, paddingLeft: 20 }}>
            <RadioButton
              label="Standard Delivery (5-7 days)"
              design="neumorphic"
              initialSelected={deliveryMethod === 'standard'}
              onToggle={() => setDeliveryMethod('standard')}
            />
            <RadioButton
              label="Express Delivery (2-3 days)"
              design="neumorphic"
              initialSelected={deliveryMethod === 'express'}
              onToggle={() => setDeliveryMethod('express')}
            />
            <RadioButton
              label="Next Day Delivery"
              design="neumorphic"
              initialSelected={deliveryMethod === 'nextday'}
              onToggle={() => setDeliveryMethod('nextday')}
            />
          </View>
        </View>
      </View>
    );
  },
};
