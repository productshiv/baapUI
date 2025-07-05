import React, { useState } from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Slider from './Slider';
import Typography from '../Typography/Typography';

const meta: Meta<typeof Slider> = {
  title: 'Form/Slider',
  component: Slider,
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
    value: {
      control: 'number',
      defaultValue: 50,
      description: 'Current value of the slider',
    },
    minimumValue: {
      control: 'number',
      defaultValue: 0,
      description: 'Minimum value of the slider',
    },
    maximumValue: {
      control: 'number',
      defaultValue: 100,
      description: 'Maximum value of the slider',
    },
    step: {
      control: 'number',
      description: 'Step increment for the slider',
    },
    minimumTrackTintColor: {
      control: 'color',
      description: 'Color of the track before the thumb',
    },
    maximumTrackTintColor: {
      control: 'color',
      description: 'Color of the track after the thumb',
    },
    thumbTintColor: {
      control: 'color',
      description: 'Color of the thumb',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color for neumorphic design',
    },
  },
  args: {
    design: 'flat',
    value: 50,
    minimumValue: 0,
    maximumValue: 100,
    onValueChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

// Default Story
export const Default: Story = {
  args: {
    value: 50,
    minimumValue: 0,
    maximumValue: 100,
    design: 'flat',
    onValueChange: () => {},
  },
};

// Design System Variations
export const Flat: Story = {
  args: {
    value: 40,
    minimumValue: 0,
    maximumValue: 100,
    design: 'flat',
    onValueChange: () => {},
  },
};

export const Neumorphic: Story = {
  args: {
    value: 60,
    minimumValue: 0,
    maximumValue: 100,
    design: 'neumorphic',
    onValueChange: () => {},
  },
};

export const Skeuomorphic: Story = {
  args: {
    value: 70,
    minimumValue: 0,
    maximumValue: 100,
    design: 'skeuomorphic',
    onValueChange: () => {},
  },
};

// Value Range Variations
export const LowValue: Story = {
  args: {
    value: 10,
    minimumValue: 0,
    maximumValue: 100,
    design: 'flat',
    onValueChange: () => {},
  },
};

export const HighValue: Story = {
  args: {
    value: 90,
    minimumValue: 0,
    maximumValue: 100,
    design: 'flat',
    onValueChange: () => {},
  },
};

export const MinimumValue: Story = {
  args: {
    value: 0,
    minimumValue: 0,
    maximumValue: 100,
    design: 'flat',
    onValueChange: () => {},
  },
};

export const MaximumValue: Story = {
  args: {
    value: 100,
    minimumValue: 0,
    maximumValue: 100,
    design: 'flat',
    onValueChange: () => {},
  },
};

// Custom Range Variations
export const CustomRange: Story = {
  args: {
    value: 25,
    minimumValue: 10,
    maximumValue: 50,
    design: 'flat',
    onValueChange: () => {},
  },
};

export const NegativeRange: Story = {
  args: {
    value: -10,
    minimumValue: -50,
    maximumValue: 50,
    design: 'flat',
    onValueChange: () => {},
  },
};

export const DecimalRange: Story = {
  args: {
    value: 2.5,
    minimumValue: 0,
    maximumValue: 5,
    step: 0.1,
    design: 'flat',
    onValueChange: () => {},
  },
};

// Step Variations
export const WithSteps: Story = {
  args: {
    value: 40,
    minimumValue: 0,
    maximumValue: 100,
    step: 20,
    design: 'flat',
    onValueChange: () => {},
  },
};

export const SmallSteps: Story = {
  args: {
    value: 50.5,
    minimumValue: 0,
    maximumValue: 100,
    step: 0.5,
    design: 'flat',
    onValueChange: () => {},
  },
};

// Custom Color Variations
export const WithCustomColors: Story = {
  args: {
    value: 40,
    minimumValue: 0,
    maximumValue: 100,
    minimumTrackTintColor: '#4CAF50',
    maximumTrackTintColor: '#E0E0E0',
    thumbTintColor: '#2196F3',
    design: 'flat',
    onValueChange: () => {},
  },
};

export const RedTheme: Story = {
  args: {
    value: 75,
    minimumValue: 0,
    maximumValue: 100,
    minimumTrackTintColor: '#f44336',
    maximumTrackTintColor: '#ffcdd2',
    thumbTintColor: '#d32f2f',
    design: 'flat',
    onValueChange: () => {},
  },
};

export const GreenTheme: Story = {
  args: {
    value: 65,
    minimumValue: 0,
    maximumValue: 100,
    minimumTrackTintColor: '#4caf50',
    maximumTrackTintColor: '#c8e6c9',
    thumbTintColor: '#388e3c',
    design: 'flat',
    onValueChange: () => {},
  },
};

// Design-specific Custom Colors
export const NeumorphicCustomColors: Story = {
  args: {
    value: 55,
    minimumValue: 0,
    maximumValue: 100,
    design: 'neumorphic',
    minimumTrackTintColor: '#6366f1',
    maximumTrackTintColor: '#e5e7eb',
    thumbTintColor: '#4f46e5',
    backgroundColor: '#f8fafc',
    onValueChange: () => {},
  },
};

// Interactive Examples
const InteractiveSliderExample = () => {
  const [value, setValue] = useState(50);

  return (
    <View style={{ gap: 16, alignItems: 'center', width: 300 }}>
      <Typography variant="h6">Value: {Math.round(value)}</Typography>
      <Slider 
        value={value} 
        onValueChange={setValue} 
        minimumValue={0} 
        maximumValue={100}
        design="flat"
      />
    </View>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveSliderExample />,
};

// Volume Control Example
const VolumeControlExample = () => {
  const [volume, setVolume] = useState(75);

  return (
    <View style={{ gap: 12, alignItems: 'center', width: 300 }}>
      <Typography variant="h6">🔊 Volume: {Math.round(volume)}%</Typography>
      <Slider
        value={volume}
        onValueChange={setVolume}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#4CAF50"
        maximumTrackTintColor="#E0E0E0"
        thumbTintColor="#2196F3"
        design="neumorphic"
      />
    </View>
  );
};

export const VolumeControl: Story = {
  render: () => <VolumeControlExample />,
};

// Temperature Control Example
const TemperatureControlExample = () => {
  const [temperature, setTemperature] = useState(22);

  const getColor = (temp: number) => {
    if (temp < 18) return '#2196F3'; // Cold - Blue
    if (temp > 25) return '#f44336'; // Hot - Red
    return '#4CAF50'; // Comfortable - Green
  };

  return (
    <View style={{ gap: 12, alignItems: 'center', width: 300 }}>
      <Typography variant="h6">🌡️ Temperature: {Math.round(temperature)}°C</Typography>
      <Slider
        value={temperature}
        onValueChange={setTemperature}
        minimumValue={10}
        maximumValue={35}
        step={1}
        minimumTrackTintColor={getColor(temperature)}
        maximumTrackTintColor="#E0E0E0"
        thumbTintColor={getColor(temperature)}
        design="neumorphic"
      />
      <Typography variant="caption" style={{ color: getColor(temperature) }}>
        {temperature < 18 ? 'Cold' : temperature > 25 ? 'Hot' : 'Comfortable'}
      </Typography>
    </View>
  );
};

export const TemperatureControl: Story = {
  render: () => <TemperatureControlExample />,
};

// All Design Systems Showcase
export const AllDesigns: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 20, maxWidth: 400 }}>
      <View style={{ gap: 8 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Flat Design</Typography>
        <Slider
          value={40}
          minimumValue={0}
          maximumValue={100}
          design="flat"
          onValueChange={() => {}}
        />
      </View>
      <View style={{ gap: 8 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Neumorphic Design</Typography>
        <Slider
          value={60}
          minimumValue={0}
          maximumValue={100}
          design="neumorphic"
          onValueChange={() => {}}
        />
      </View>
      <View style={{ gap: 8 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Skeuomorphic Design</Typography>
        <Slider
          value={70}
          minimumValue={0}
          maximumValue={100}
          design="skeuomorphic"
          onValueChange={() => {}}
        />
      </View>
    </View>
  ),
};

// Range Showcase
export const RangeShowcase: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 16, maxWidth: 400 }}>
      <View style={{ gap: 8 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Standard Range (0-100)</Typography>
        <Slider
          value={50}
          minimumValue={0}
          maximumValue={100}
          design="flat"
          onValueChange={() => {}}
        />
      </View>
      <View style={{ gap: 8 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Custom Range (10-50)</Typography>
        <Slider
          value={25}
          minimumValue={10}
          maximumValue={50}
          design="flat"
          onValueChange={() => {}}
        />
      </View>
      <View style={{ gap: 8 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Negative Range (-50 to 50)</Typography>
        <Slider
          value={-10}
          minimumValue={-50}
          maximumValue={50}
          design="flat"
          onValueChange={() => {}}
        />
      </View>
      <View style={{ gap: 8 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Decimal Steps (0-5, step 0.1)</Typography>
        <Slider
          value={2.5}
          minimumValue={0}
          maximumValue={5}
          step={0.1}
          design="flat"
          onValueChange={() => {}}
        />
      </View>
    </View>
  ),
};

// Settings Panel Example
export const SettingsPanel: Story = {
  render: () => {
    const [brightness, setBrightness] = useState(80);
    const [contrast, setContrast] = useState(60);
    const [saturation, setSaturation] = useState(75);

    return (
      <View style={{ padding: 20, gap: 16, maxWidth: 400 }}>
        <Typography variant="h6">Display Settings</Typography>
        
        <View style={{ gap: 8 }}>
          <Typography variant="body2">Brightness: {Math.round(brightness)}%</Typography>
          <Slider
            value={brightness}
            onValueChange={setBrightness}
            minimumValue={0}
            maximumValue={100}
            design="neumorphic"
            minimumTrackTintColor="#ffd54f"
            thumbTintColor="#ff9800"
          />
        </View>
        
        <View style={{ gap: 8 }}>
          <Typography variant="body2">Contrast: {Math.round(contrast)}%</Typography>
          <Slider
            value={contrast}
            onValueChange={setContrast}
            minimumValue={0}
            maximumValue={100}
            design="neumorphic"
            minimumTrackTintColor="#90a4ae"
            thumbTintColor="#607d8b"
          />
        </View>
        
        <View style={{ gap: 8 }}>
          <Typography variant="body2">Saturation: {Math.round(saturation)}%</Typography>
          <Slider
            value={saturation}
            onValueChange={setSaturation}
            minimumValue={0}
            maximumValue={100}
            design="neumorphic"
            minimumTrackTintColor="#e91e63"
            thumbTintColor="#c2185b"
          />
        </View>
      </View>
    );
  },
};
