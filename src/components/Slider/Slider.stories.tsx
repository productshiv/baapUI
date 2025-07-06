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
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'],
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

export const Glassmorphic: Story = {
  args: {
    value: 80,
    minimumValue: 0,
    maximumValue: 100,
    design: 'glassmorphic',
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

export const GlassmorphicLowValue: Story = {
  args: {
    value: 20,
    minimumValue: 0,
    maximumValue: 100,
    design: 'glassmorphic',
    onValueChange: () => {},
  },
};

export const GlassmorphicHighValue: Story = {
  args: {
    value: 85,
    minimumValue: 0,
    maximumValue: 100,
    design: 'glassmorphic',
    onValueChange: () => {},
  },
};

export const GlassmorphicCustomColors: Story = {
  args: {
    value: 65,
    minimumValue: 0,
    maximumValue: 100,
    design: 'glassmorphic',
    minimumTrackTintColor: '#8b5cf6',
    maximumTrackTintColor: '#e5e7eb',
    thumbTintColor: '#7c3aed',
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    onValueChange: () => {},
  },
};

// Enhanced Glassmorphic Story Variations (Phase 7 - BAAPUI-8)
export const Playground: Story = {
  args: {
    value: 55,
    minimumValue: 0,
    maximumValue: 100,
    design: 'glassmorphic',
    onValueChange: () => {},
  },
};

export const LightGlass: Story = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f0f0f0' },
      ],
    },
  },
  args: {
    value: 45,
    minimumValue: 0,
    maximumValue: 100,
    design: 'glassmorphic',
    minimumTrackTintColor: 'rgba(33, 150, 243, 0.6)',
    maximumTrackTintColor: 'rgba(0, 0, 0, 0.1)',
    thumbTintColor: 'rgba(33, 150, 243, 0.8)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    onValueChange: () => {},
  },
};

export const DarkGlass: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
  args: {
    value: 75,
    minimumValue: 0,
    maximumValue: 100,
    design: 'glassmorphic',
    minimumTrackTintColor: 'rgba(255, 255, 255, 0.8)',
    maximumTrackTintColor: 'rgba(255, 255, 255, 0.2)',
    thumbTintColor: 'rgba(255, 255, 255, 0.9)',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    onValueChange: () => {},
  },
};

export const ColoredGlass: Story = {
  parameters: {
    backgrounds: {
      default: 'gradient',
      values: [
        { name: 'gradient', value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
      ],
    },
  },
  args: {
    value: 60,
    minimumValue: 0,
    maximumValue: 100,
    design: 'glassmorphic',
    minimumTrackTintColor: 'rgba(255, 193, 7, 0.8)',
    maximumTrackTintColor: 'rgba(255, 255, 255, 0.2)',
    thumbTintColor: 'rgba(255, 193, 7, 0.9)',
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    onValueChange: () => {},
  },
};

export const HighBlur: Story = {
  parameters: {
    backgrounds: {
      default: 'pattern',
      values: [
        { name: 'pattern', value: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' },
      ],
    },
  },
  args: {
    value: 85,
    minimumValue: 0,
    maximumValue: 100,
    design: 'glassmorphic',
    minimumTrackTintColor: 'rgba(156, 39, 176, 0.9)',
    maximumTrackTintColor: 'rgba(255, 255, 255, 0.3)',
    thumbTintColor: 'rgba(156, 39, 176, 1)',
    onValueChange: () => {},
  },
};

export const MinimalGlass: Story = {
  parameters: {
    backgrounds: {
      default: 'minimal',
      values: [
        { name: 'minimal', value: '#fafafa' },
      ],
    },
  },
  args: {
    value: 35,
    minimumValue: 0,
    maximumValue: 100,
    design: 'glassmorphic',
    minimumTrackTintColor: 'rgba(0, 0, 0, 0.4)',
    maximumTrackTintColor: 'rgba(0, 0, 0, 0.1)',
    thumbTintColor: 'rgba(0, 0, 0, 0.6)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    onValueChange: () => {},
  },
};

export const LayeredGlass: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    
    return (
      <View style={{ 
        position: 'relative',
        padding: 40,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 20,
        minHeight: 150,
        minWidth: 350
      }}>
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 20,
          backdropFilter: 'blur(10px)'
        }} />
        <View style={{ position: 'relative', zIndex: 10, alignItems: 'center', gap: 16 }}>
          <Typography variant="h6" style={{ color: 'white', textAlign: 'center' }}>
            Layered Glass Slider
          </Typography>
          <Slider
            value={value}
            minimumValue={0}
            maximumValue={100}
            design="glassmorphic"
            minimumTrackTintColor="rgba(255, 255, 255, 0.8)"
            maximumTrackTintColor="rgba(255, 255, 255, 0.2)"
            thumbTintColor="rgba(255, 255, 255, 0.9)"
            onValueChange={setValue}
            style={{ width: 250 }}
          />
          <Typography variant="body2" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Value: {Math.round(value)}
          </Typography>
        </View>
      </View>
    );
  },
};

export const GlassmorphicInteractive: Story = {
  render: () => {
    const [volume, setVolume] = useState(50);
    const [brightness, setBrightness] = useState(75);
    const [temperature, setTemperature] = useState(22);
    
    return (
      <View style={{ gap: 24, padding: 20, alignItems: 'center', minWidth: 350 }}>
        <Typography variant="h6">Interactive Glass Controls</Typography>
        
        <View style={{ gap: 16, width: '100%', maxWidth: 300 }}>
          <View style={{ gap: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Typography variant="body2">🔊 Volume</Typography>
              <Typography variant="caption" style={{ color: '#666' }}>
                {Math.round(volume)}%
              </Typography>
            </View>
            <Slider
              value={volume}
              minimumValue={0}
              maximumValue={100}
              design="glassmorphic"
              minimumTrackTintColor="rgba(33, 150, 243, 0.8)"
              maximumTrackTintColor="rgba(0, 0, 0, 0.1)"
              thumbTintColor="rgba(33, 150, 243, 0.9)"
              onValueChange={setVolume}
            />
          </View>
          
          <View style={{ gap: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Typography variant="body2">💡 Brightness</Typography>
              <Typography variant="caption" style={{ color: '#666' }}>
                {Math.round(brightness)}%
              </Typography>
            </View>
            <Slider
              value={brightness}
              minimumValue={0}
              maximumValue={100}
              design="glassmorphic"
              minimumTrackTintColor="rgba(255, 193, 7, 0.8)"
              maximumTrackTintColor="rgba(0, 0, 0, 0.1)"
              thumbTintColor="rgba(255, 193, 7, 0.9)"
              onValueChange={setBrightness}
            />
          </View>
          
          <View style={{ gap: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Typography variant="body2">🌡️ Temperature</Typography>
              <Typography variant="caption" style={{ color: '#666' }}>
                {Math.round(temperature)}°C
              </Typography>
            </View>
            <Slider
              value={temperature}
              minimumValue={16}
              maximumValue={30}
              design="glassmorphic"
              minimumTrackTintColor={temperature < 20 ? 'rgba(33, 150, 243, 0.8)' : temperature > 25 ? 'rgba(244, 67, 54, 0.8)' : 'rgba(76, 175, 80, 0.8)'}
              maximumTrackTintColor="rgba(0, 0, 0, 0.1)"
              thumbTintColor={temperature < 20 ? 'rgba(33, 150, 243, 0.9)' : temperature > 25 ? 'rgba(244, 67, 54, 0.9)' : 'rgba(76, 175, 80, 0.9)'}
              onValueChange={setTemperature}
            />
          </View>
        </View>
      </View>
    );
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
      <View style={{ gap: 8 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Glassmorphic Design</Typography>
        <Slider
          value={80}
          minimumValue={0}
          maximumValue={100}
          design="glassmorphic"
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
