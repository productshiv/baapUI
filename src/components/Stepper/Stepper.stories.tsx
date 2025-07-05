import React, { useState } from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Stepper from './Stepper';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';

const meta: Meta<typeof Stepper> = {
  title: 'Form/Stepper',
  component: Stepper,
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
      description: 'Design system variant',
    },
    value: {
      control: 'number',
      defaultValue: 0,
      description: 'Current value of the stepper',
    },
    step: {
      control: 'number',
      defaultValue: 1,
      description: 'Step increment/decrement amount',
    },
    minimumValue: {
      control: 'number',
      defaultValue: 0,
      description: 'Minimum allowed value',
    },
    maximumValue: {
      control: 'number',
      defaultValue: 100,
      description: 'Maximum allowed value',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color',
    },
    textColor: {
      control: 'color',
      description: 'Custom text color',
    },
    buttonColor: {
      control: 'color',
      description: 'Custom button text color',
    },
  },
  args: {
    design: 'flat',
    value: 0,
    step: 1,
    minimumValue: 0,
    maximumValue: 100,
    onValueChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

// Default Story
export const Default: Story = {
  args: {
    value: 5,
    onValueChange: () => {},
  },
};

// Design System Variations
export const Flat: Story = {
  args: {
    value: 3,
    design: 'flat',
    onValueChange: () => {},
  },
};

export const Neumorphic: Story = {
  args: {
    value: 7,
    design: 'neumorphic',
    onValueChange: () => {},
  },
};

// Step Variations
export const SmallStep: Story = {
  args: {
    value: 0.5,
    step: 0.1,
    minimumValue: 0,
    maximumValue: 1,
    onValueChange: () => {},
  },
};

export const LargeStep: Story = {
  args: {
    value: 50,
    step: 10,
    minimumValue: 0,
    maximumValue: 100,
    onValueChange: () => {},
  },
};

export const CustomStep: Story = {
  args: {
    value: 15,
    step: 5,
    minimumValue: 0,
    maximumValue: 50,
    onValueChange: () => {},
  },
};

// Range Variations
export const SmallRange: Story = {
  args: {
    value: 2,
    step: 1,
    minimumValue: 0,
    maximumValue: 5,
    onValueChange: () => {},
  },
};

export const LargeRange: Story = {
  args: {
    value: 500,
    step: 50,
    minimumValue: 0,
    maximumValue: 1000,
    onValueChange: () => {},
  },
};

export const NegativeRange: Story = {
  args: {
    value: 0,
    step: 1,
    minimumValue: -10,
    maximumValue: 10,
    onValueChange: () => {},
  },
};

// Boundary States
export const AtMinimum: Story = {
  args: {
    value: 0,
    step: 1,
    minimumValue: 0,
    maximumValue: 10,
    onValueChange: () => {},
  },
};

export const AtMaximum: Story = {
  args: {
    value: 10,
    step: 1,
    minimumValue: 0,
    maximumValue: 10,
    onValueChange: () => {},
  },
};

// Custom Color Variations
export const CustomColors: Story = {
  args: {
    value: 5,
    backgroundColor: '#f0f8ff',
    textColor: '#2e8b57',
    buttonColor: '#ff6b6b',
    design: 'flat',
    onValueChange: () => {},
  },
};

export const NeumorphicCustomColors: Story = {
  args: {
    value: 8,
    backgroundColor: '#fdf6e3',
    textColor: '#8b4513',
    buttonColor: '#d2691e',
    design: 'neumorphic',
    onValueChange: () => {},
  },
};

// Interactive Examples
const BasicInteractiveExample = () => {
  const [value, setValue] = useState(5);

  return (
    <View style={{ gap: 16, alignItems: 'center', minWidth: 250 }}>
      <Typography variant="h6">Basic Counter: {value}</Typography>
      <Stepper
        value={value}
        onValueChange={setValue}
        step={1}
        minimumValue={0}
        maximumValue={10}
        design="flat"
      />
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <Button size="small" onPress={() => setValue(0)}>Reset</Button>
        <Button size="small" variant="outline" onPress={() => setValue(10)}>Max</Button>
      </View>
    </View>
  );
};

export const BasicInteractive: Story = {
  render: () => <BasicInteractiveExample />,
};

// Quantity Selector Example
const QuantitySelectorExample = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 29.99;

  return (
    <View style={{ gap: 16, alignItems: 'center', minWidth: 300 }}>
      <Typography variant="h6">Product Quantity</Typography>
      <View style={{ 
        padding: 16, 
        backgroundColor: '#f8f9fa', 
        borderRadius: 8, 
        alignItems: 'center',
        minWidth: 250,
        gap: 12
      }}>
        <Typography variant="body">Price: ${price.toFixed(2)} each</Typography>
        <Stepper
          value={quantity}
          onValueChange={setQuantity}
          step={1}
          minimumValue={1}
          maximumValue={99}
          design="neumorphic"
        />
        <Typography variant="h6" style={{ color: '#007bff' }}>
          Total: ${(quantity * price).toFixed(2)}
        </Typography>
      </View>
    </View>
  );
};

export const QuantitySelector: Story = {
  render: () => <QuantitySelectorExample />,
};

// Temperature Control Example
const TemperatureControlExample = () => {
  const [temperature, setTemperature] = useState(20);

  const getTemperatureColor = () => {
    if (temperature < 15) return '#0066cc';
    if (temperature < 25) return '#00cc66';
    if (temperature < 30) return '#ffcc00';
    return '#ff6600';
  };

  return (
    <View style={{ gap: 16, alignItems: 'center', minWidth: 300 }}>
      <Typography variant="h6">Thermostat Control</Typography>
      <View style={{ 
        padding: 20, 
        backgroundColor: '#f5f5f5', 
        borderRadius: 12, 
        alignItems: 'center',
        gap: 16
      }}>
        <Typography 
          variant="h2" 
          style={{ 
            color: getTemperatureColor(),
            fontSize: 48,
            fontWeight: 'bold'
          }}
        >
          {temperature}°C
        </Typography>
        <Stepper
          value={temperature}
          onValueChange={setTemperature}
          step={1}
          minimumValue={5}
          maximumValue={35}
          design="neumorphic"
          buttonColor={getTemperatureColor()}
        />
        <Typography variant="caption" style={{ textAlign: 'center' }}>
          {temperature < 15 ? '❄️ Cold' : 
           temperature < 25 ? '🌤️ Comfortable' : 
           temperature < 30 ? '☀️ Warm' : '🔥 Hot'}
        </Typography>
      </View>
    </View>
  );
};

export const TemperatureControl: Story = {
  render: () => <TemperatureControlExample />,
};

// Volume Control Example
const VolumeControlExample = () => {
  const [volume, setVolume] = useState(50);

  const getVolumeIcon = () => {
    if (volume === 0) return '🔇';
    if (volume < 30) return '🔈';
    if (volume < 70) return '🔉';
    return '🔊';
  };

  return (
    <View style={{ gap: 16, alignItems: 'center', minWidth: 300 }}>
      <Typography variant="h6">Volume Control</Typography>
      <View style={{ 
        padding: 16, 
        backgroundColor: '#2c3e50', 
        borderRadius: 8, 
        alignItems: 'center',
        gap: 12
      }}>
        <Typography variant="h3" style={{ color: 'white' }}>
          {getVolumeIcon()}
        </Typography>
        <Stepper
          value={volume}
          onValueChange={setVolume}
          step={5}
          minimumValue={0}
          maximumValue={100}
          design="neumorphic"
          backgroundColor="#34495e"
          textColor="white"
          buttonColor="#3498db"
        />
        <Typography variant="body" style={{ color: '#bdc3c7' }}>
          {volume}%
        </Typography>
      </View>
    </View>
  );
};

export const VolumeControl: Story = {
  render: () => <VolumeControlExample />,
};

// Rating System Example
const RatingSystemExample = () => {
  const [rating, setRating] = useState(3);

  const getRatingText = () => {
    switch (rating) {
      case 1: return '⭐ Poor';
      case 2: return '⭐⭐ Fair';
      case 3: return '⭐⭐⭐ Good';
      case 4: return '⭐⭐⭐⭐ Very Good';
      case 5: return '⭐⭐⭐⭐⭐ Excellent';
      default: return 'No Rating';
    }
  };

  return (
    <View style={{ gap: 16, alignItems: 'center', minWidth: 300 }}>
      <Typography variant="h6">Rate Your Experience</Typography>
      <View style={{ 
        padding: 16, 
        backgroundColor: '#fff3cd', 
        borderRadius: 8, 
        alignItems: 'center',
        gap: 12,
        borderWidth: 1,
        borderColor: '#ffeaa7'
      }}>
        <Typography variant="h5">{getRatingText()}</Typography>
        <Stepper
          value={rating}
          onValueChange={setRating}
          step={1}
          minimumValue={1}
          maximumValue={5}
          design="flat"
          buttonColor="#f39c12"
        />
        <Typography variant="caption" style={{ textAlign: 'center', color: '#856404' }}>
          Use + and - to adjust your rating
        </Typography>
      </View>
    </View>
  );
};

export const RatingSystem: Story = {
  render: () => <RatingSystemExample />,
};

// All Design Systems Showcase
export const AllDesigns: Story = {
  render: () => (
    <View style={{ gap: 20, minWidth: 300 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Design Systems</Typography>
      <View style={{ gap: 16 }}>
        <View style={{ gap: 8 }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Flat Design</Typography>
          <Stepper
            value={3}
            onValueChange={() => {}}
            step={1}
            minimumValue={0}
            maximumValue={10}
            design="flat"
          />
        </View>
        <View style={{ gap: 8 }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Neumorphic Design</Typography>
          <Stepper
            value={7}
            onValueChange={() => {}}
            step={1}
            minimumValue={0}
            maximumValue={10}
            design="neumorphic"
          />
        </View>
      </View>
    </View>
  ),
};

// Step Size Showcase
export const StepSizeShowcase: Story = {
  render: () => (
    <View style={{ gap: 20, minWidth: 350 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Step Size Variations</Typography>
      <View style={{ gap: 16 }}>
        <View style={{ gap: 8 }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Fine Control (0.1 steps)</Typography>
          <Stepper
            value={0.5}
            onValueChange={() => {}}
            step={0.1}
            minimumValue={0}
            maximumValue={1}
            design="neumorphic"
          />
        </View>
        <View style={{ gap: 8 }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Standard (1 step)</Typography>
          <Stepper
            value={5}
            onValueChange={() => {}}
            step={1}
            minimumValue={0}
            maximumValue={10}
            design="neumorphic"
          />
        </View>
        <View style={{ gap: 8 }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Large Steps (10 steps)</Typography>
          <Stepper
            value={50}
            onValueChange={() => {}}
            step={10}
            minimumValue={0}
            maximumValue={100}
            design="neumorphic"
          />
        </View>
      </View>
    </View>
  ),
};

// Boundary States Showcase
export const BoundaryStates: Story = {
  render: () => (
    <View style={{ gap: 20, minWidth: 350 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Boundary States</Typography>
      <View style={{ gap: 16 }}>
        <View style={{ gap: 8 }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>At Minimum (0)</Typography>
          <Stepper
            value={0}
            onValueChange={() => {}}
            step={1}
            minimumValue={0}
            maximumValue={10}
            design="flat"
          />
        </View>
        <View style={{ gap: 8 }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>At Maximum (10)</Typography>
          <Stepper
            value={10}
            onValueChange={() => {}}
            step={1}
            minimumValue={0}
            maximumValue={10}
            design="flat"
          />
        </View>
        <View style={{ gap: 8 }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Negative Range (-5 to 5)</Typography>
          <Stepper
            value={0}
            onValueChange={() => {}}
            step={1}
            minimumValue={-5}
            maximumValue={5}
            design="flat"
          />
        </View>
      </View>
    </View>
  ),
};

// Color Variations Showcase
export const ColorShowcase: Story = {
  render: () => (
    <View style={{ gap: 20, minWidth: 350 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Color Variations</Typography>
      <View style={{ gap: 16 }}>
        <View style={{ gap: 8 }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Blue Theme</Typography>
          <Stepper
            value={3}
            onValueChange={() => {}}
            backgroundColor="#e3f2fd"
            textColor="#1565c0"
            buttonColor="#2196f3"
            design="neumorphic"
          />
        </View>
        <View style={{ gap: 8 }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Green Theme</Typography>
          <Stepper
            value={5}
            onValueChange={() => {}}
            backgroundColor="#e8f5e8"
            textColor="#2e7d32"
            buttonColor="#4caf50"
            design="neumorphic"
          />
        </View>
        <View style={{ gap: 8 }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Orange Theme</Typography>
          <Stepper
            value={7}
            onValueChange={() => {}}
            backgroundColor="#fff3e0"
            textColor="#e65100"
            buttonColor="#ff9800"
            design="neumorphic"
          />
        </View>
      </View>
    </View>
  ),
};
