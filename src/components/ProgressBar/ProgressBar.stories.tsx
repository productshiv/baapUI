import React, { useState, useEffect } from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './ProgressBar';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';

const meta: Meta<typeof ProgressBar> = {
  title: 'Feedback/ProgressBar',
  component: ProgressBar,
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
    progress: {
      control: { type: 'range', min: 0, max: 1, step: 0.05 },
      defaultValue: 0.5,
      description: 'Progress value between 0 and 1',
    },
    height: {
      control: { type: 'range', min: 4, max: 32, step: 2 },
      defaultValue: 12,
      description: 'Height of the progress bar in pixels',
    },
    width: {
      control: { type: 'range', min: 100, max: 600, step: 50 },
      defaultValue: 300,
      description: 'Width of the progress bar in pixels',
    },
    progressColor: {
      control: 'color',
      description: 'Color of the progress fill',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the progress bar',
    },
  },
  args: {
    design: 'flat',
    progress: 0.5,
    height: 12,
    width: 300,
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

// Default Story
export const Default: Story = {
  args: {
    progress: 0.5,
    height: 12,
    width: 300,
    design: 'flat',
  },
};

// Design System Variations
export const Flat: Story = {
  args: {
    progress: 0.6,
    design: 'flat',
    height: 12,
    width: 300,
  },
};

export const Neumorphic: Story = {
  args: {
    progress: 0.6,
    design: 'neumorphic',
    height: 12,
    width: 300,
  },
};

export const Skeuomorphic: Story = {
  args: {
    progress: 0.6,
    design: 'skeuomorphic',
    height: 12,
    width: 300,
  },
};

export const Glassmorphic: Story = {
  args: {
    progress: 0.6,
    design: 'glassmorphic',
    height: 12,
    width: 300,
  },
};

export const GlassmorphicSizes: Story = {
  render: () => (
    <View style={{ gap: 16, minWidth: 350 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Glassmorphic Size Variations</Typography>
      <View style={{ gap: 12 }}>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Thin (6px height)</Typography>
          <ProgressBar progress={0.6} height={6} width={300} design="glassmorphic" />
        </View>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Medium (12px height)</Typography>
          <ProgressBar progress={0.6} height={12} width={300} design="glassmorphic" />
        </View>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Large (20px height)</Typography>
          <ProgressBar progress={0.6} height={20} width={300} design="glassmorphic" />
        </View>
      </View>
    </View>
  ),
};

export const GlassmorphicDarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    progress: 0.7,
    design: 'glassmorphic',
    height: 14,
    width: 300,
  },
};

export const GlassmorphicPlayground: Story = {
  args: {
    progress: 0.65,
    design: 'glassmorphic',
    height: 16,
    width: 350,
    progressColor: '#4CAF50',
  },
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 1, step: 0.05 },
    },
    height: {
      control: { type: 'range', min: 6, max: 32, step: 2 },
    },
    width: {
      control: { type: 'range', min: 150, max: 500, step: 25 },
    },
    progressColor: {
      control: 'color',
    },
  },
};

export const GlassmorphicProgress: Story = {
  render: () => (
    <View style={{ gap: 16, minWidth: 350 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Glassmorphic Progress Levels</Typography>
      <View style={{ gap: 12 }}>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Low (25%)</Typography>
          <ProgressBar progress={0.25} width={300} height={12} design="glassmorphic" progressColor="#f44336" />
        </View>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Medium (50%)</Typography>
          <ProgressBar progress={0.5} width={300} height={12} design="glassmorphic" progressColor="#ff9800" />
        </View>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">High (75%)</Typography>
          <ProgressBar progress={0.75} width={300} height={12} design="glassmorphic" progressColor="#4CAF50" />
        </View>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Complete (100%)</Typography>
          <ProgressBar progress={1} width={300} height={12} design="glassmorphic" progressColor="#2196F3" />
        </View>
      </View>
    </View>
  ),
};

export const GlassmorphicColoredGlass: Story = {
  render: () => (
    <View style={{ gap: 16, minWidth: 350 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Glassmorphic Colored Progress</Typography>
      <View style={{ gap: 12 }}>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Blue Glass</Typography>
          <ProgressBar progress={0.7} width={300} height={14} design="glassmorphic" progressColor="rgba(33, 150, 243, 0.8)" />
        </View>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Purple Glass</Typography>
          <ProgressBar progress={0.6} width={300} height={14} design="glassmorphic" progressColor="rgba(156, 39, 176, 0.8)" />
        </View>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Green Glass</Typography>
          <ProgressBar progress={0.8} width={300} height={14} design="glassmorphic" progressColor="rgba(76, 175, 80, 0.8)" />
        </View>
      </View>
    </View>
  ),
};

export const GlassmorphicMinimalGlass: Story = {
  args: {
    progress: 0.6,
    design: 'glassmorphic',
    height: 8,
    width: 280,
    progressColor: 'rgba(255, 255, 255, 0.6)',
  },
};

export const GlassmorphicLayeredGlass: Story = {
  render: () => (
    <View style={{ gap: 20, minWidth: 350, padding: 20, backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: 12 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Layered Glass Progress</Typography>
      <View style={{ gap: 16 }}>
        <ProgressBar progress={0.3} width={300} height={16} design="glassmorphic" progressColor="rgba(255, 193, 7, 0.7)" />
        <ProgressBar progress={0.6} width={280} height={14} design="glassmorphic" progressColor="rgba(33, 150, 243, 0.7)" />
        <ProgressBar progress={0.9} width={260} height={12} design="glassmorphic" progressColor="rgba(76, 175, 80, 0.7)" />
      </View>
    </View>
  ),
};

// Additional Enhanced Glassmorphic Story Variations (Phase 7 - BAAPUI-8)
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
    progress: 0.65,
    design: 'glassmorphic',
    height: 14,
    width: 320,
    progressColor: 'rgba(33, 150, 243, 0.6)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
    progress: 0.75,
    design: 'glassmorphic',
    height: 14,
    width: 320,
    progressColor: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
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
    progress: 0.8,
    design: 'glassmorphic',
    height: 16,
    width: 300,
    progressColor: 'rgba(156, 39, 176, 0.9)',
  },
};

export const GlassmorphicInteractive: Story = {
  render: () => {
    const [progress, setProgress] = useState(0.5);
    const [isAnimating, setIsAnimating] = useState(false);
    
    const animateProgress = () => {
      setIsAnimating(true);
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 0.02;
        setProgress(currentProgress);
        if (currentProgress >= 1) {
          clearInterval(interval);
          setIsAnimating(false);
          setTimeout(() => setProgress(0.5), 1000);
        }
      }, 50);
    };
    
    return (
      <View style={{ gap: 20, alignItems: 'center', minWidth: 350 }}>
        <Typography variant="h6">Interactive Glass Progress</Typography>
        
        <View style={{ gap: 12, alignItems: 'center' }}>
          <ProgressBar 
            progress={progress} 
            width={320} 
            height={16} 
            design="glassmorphic" 
            progressColor={progress < 0.3 ? 'rgba(244, 67, 54, 0.8)' : progress < 0.7 ? 'rgba(255, 152, 0, 0.8)' : 'rgba(76, 175, 80, 0.8)'}
          />
          
          <Typography variant="body2" style={{ color: '#666' }}>
            Progress: {Math.round(progress * 100)}%
          </Typography>
          
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <Button 
              onPress={() => setProgress(Math.max(0, progress - 0.1))}
              disabled={isAnimating || progress <= 0}
              size="small"
            >
              -10%
            </Button>
            <Button 
              onPress={animateProgress}
              disabled={isAnimating}
              variant="primary"
              size="small"
            >
              {isAnimating ? 'Animating...' : 'Animate'}
            </Button>
            <Button 
              onPress={() => setProgress(Math.min(1, progress + 0.1))}
              disabled={isAnimating || progress >= 1}
              size="small"
            >
              +10%
            </Button>
          </View>
        </View>
      </View>
    );
  },
};

// Progress Level Variations
export const Empty: Story = {
  args: {
    progress: 0,
    height: 12,
    width: 300,
    design: 'flat',
  },
};

export const Quarter: Story = {
  args: {
    progress: 0.25,
    height: 12,
    width: 300,
    design: 'flat',
  },
};

export const Half: Story = {
  args: {
    progress: 0.5,
    height: 12,
    width: 300,
    design: 'flat',
  },
};

export const ThreeQuarters: Story = {
  args: {
    progress: 0.75,
    height: 12,
    width: 300,
    design: 'flat',
  },
};

export const Complete: Story = {
  args: {
    progress: 1,
    height: 12,
    width: 300,
    design: 'flat',
  },
};

// Size Variations
export const SmallHeight: Story = {
  args: {
    progress: 0.6,
    height: 6,
    width: 300,
    design: 'flat',
  },
};

export const MediumHeight: Story = {
  args: {
    progress: 0.6,
    height: 16,
    width: 300,
    design: 'flat',
  },
};

export const LargeHeight: Story = {
  args: {
    progress: 0.6,
    height: 24,
    width: 300,
    design: 'flat',
  },
};

export const ShortWidth: Story = {
  args: {
    progress: 0.6,
    height: 12,
    width: 150,
    design: 'flat',
  },
};

export const LongWidth: Story = {
  args: {
    progress: 0.6,
    height: 12,
    width: 500,
    design: 'flat',
  },
};

// Color Variations
export const GreenProgress: Story = {
  args: {
    progress: 0.7,
    progressColor: '#4CAF50',
    height: 12,
    width: 300,
    design: 'flat',
  },
};

export const RedProgress: Story = {
  args: {
    progress: 0.3,
    progressColor: '#f44336',
    height: 12,
    width: 300,
    design: 'flat',
  },
};

export const BlueProgress: Story = {
  args: {
    progress: 0.8,
    progressColor: '#2196F3',
    height: 12,
    width: 300,
    design: 'flat',
  },
};

export const OrangeProgress: Story = {
  args: {
    progress: 0.4,
    progressColor: '#ff9800',
    height: 12,
    width: 300,
    design: 'flat',
  },
};

export const PurpleProgress: Story = {
  args: {
    progress: 0.9,
    progressColor: '#9c27b0',
    height: 12,
    width: 300,
    design: 'flat',
  },
};

// Custom Background Colors
export const CustomBackground: Story = {
  args: {
    progress: 0.6,
    progressColor: '#4CAF50',
    backgroundColor: '#e8f5e8',
    height: 12,
    width: 300,
    design: 'flat',
  },
};

export const DarkBackground: Story = {
  args: {
    progress: 0.6,
    progressColor: '#64b5f6',
    backgroundColor: '#263238',
    height: 12,
    width: 300,
    design: 'flat',
  },
};

// Neumorphic Color Variations
export const NeumorphicGreen: Story = {
  args: {
    progress: 0.7,
    design: 'neumorphic',
    progressColor: '#4caf50',
    height: 12,
    width: 300,
  },
};

export const NeumorphicRed: Story = {
  args: {
    progress: 0.3,
    design: 'neumorphic',
    progressColor: '#f50057',
    height: 12,
    width: 300,
  },
};

export const NeumorphicBlue: Story = {
  args: {
    progress: 0.8,
    design: 'neumorphic',
    progressColor: '#2196f3',
    height: 12,
    width: 300,
  },
};

// Interactive Examples
const AnimatedProgressExample = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 0.05;
        return next > 1 ? 0 : next;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ gap: 12, minWidth: 350, alignItems: 'center' }}>
      <Typography variant="h6">Animated Progress: {Math.round(progress * 100)}%</Typography>
      <ProgressBar progress={progress} width={300} height={12} design="flat" />
    </View>
  );
};

export const Animated: Story = {
  render: () => <AnimatedProgressExample />,
};

// Manual Control Example
const ManualControlExample = () => {
  const [progress, setProgress] = useState(0.5);

  const increase = () => setProgress(prev => Math.min(prev + 0.1, 1));
  const decrease = () => setProgress(prev => Math.max(prev - 0.1, 0));
  const reset = () => setProgress(0);
  const complete = () => setProgress(1);

  return (
    <View style={{ gap: 16, alignItems: 'center', minWidth: 350 }}>
      <Typography variant="h6">Manual Control: {Math.round(progress * 100)}%</Typography>
      <ProgressBar progress={progress} width={300} height={12} design="neumorphic" />
      <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button onPress={decrease} disabled={progress <= 0}>-10%</Button>
        <Button onPress={increase} disabled={progress >= 1}>+10%</Button>
        <Button onPress={reset} variant="outline">Reset</Button>
        <Button onPress={complete} variant="outline">Complete</Button>
      </View>
    </View>
  );
};

export const ManualControl: Story = {
  render: () => <ManualControlExample />,
};

// Progress Stages Showcase
export const ProgressStages: Story = {
  render: () => (
    <View style={{ gap: 16, minWidth: 350 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Progress Stages</Typography>
      <View style={{ gap: 12 }}>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Empty (0%)</Typography>
          <ProgressBar progress={0} width={300} height={12} design="flat" />
        </View>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Low (20%)</Typography>
          <ProgressBar progress={0.2} width={300} height={12} design="flat" />
        </View>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Medium (40%)</Typography>
          <ProgressBar progress={0.4} width={300} height={12} design="flat" />
        </View>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">High (60%)</Typography>
          <ProgressBar progress={0.6} width={300} height={12} design="flat" />
        </View>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Very High (80%)</Typography>
          <ProgressBar progress={0.8} width={300} height={12} design="flat" />
        </View>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Complete (100%)</Typography>
          <ProgressBar progress={1} width={300} height={12} design="flat" />
        </View>
      </View>
    </View>
  ),
};

// Size Variations Showcase
export const SizeShowcase: Story = {
  render: () => (
    <View style={{ gap: 16, minWidth: 350 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Size Variations</Typography>
      <View style={{ gap: 12 }}>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Thin (6px height)</Typography>
          <ProgressBar progress={0.6} height={6} width={300} design="flat" />
        </View>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Small (8px height)</Typography>
          <ProgressBar progress={0.6} height={8} width={300} design="flat" />
        </View>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Medium (12px height)</Typography>
          <ProgressBar progress={0.6} height={12} width={300} design="flat" />
        </View>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Large (16px height)</Typography>
          <ProgressBar progress={0.6} height={16} width={300} design="flat" />
        </View>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Extra Large (24px height)</Typography>
          <ProgressBar progress={0.6} height={24} width={300} design="flat" />
        </View>
      </View>
    </View>
  ),
};

// All Design Systems Showcase
export const AllDesigns: Story = {
  render: () => (
    <View style={{ gap: 20, minWidth: 350 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Design Systems</Typography>
      <View style={{ gap: 12 }}>
        <View style={{ gap: 8 }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Flat Design</Typography>
          <ProgressBar progress={0.6} design="flat" width={300} height={12} />
        </View>
        <View style={{ gap: 8 }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Neumorphic Design</Typography>
          <ProgressBar progress={0.6} design="neumorphic" width={300} height={12} />
        </View>
        <View style={{ gap: 8 }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Skeuomorphic Design</Typography>
          <ProgressBar progress={0.6} design="skeuomorphic" width={300} height={12} />
        </View>
        <View style={{ gap: 8 }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Glassmorphic Design</Typography>
          <ProgressBar progress={0.6} design="glassmorphic" width={300} height={12} />
        </View>
      </View>
    </View>
  ),
};

// Color Palette Showcase
export const ColorShowcase: Story = {
  render: () => (
    <View style={{ gap: 16, minWidth: 350 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Color Variations</Typography>
      <View style={{ gap: 12 }}>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Success (Green)</Typography>
          <ProgressBar progress={0.8} progressColor="#4CAF50" width={300} height={12} design="flat" />
        </View>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Error (Red)</Typography>
          <ProgressBar progress={0.3} progressColor="#f44336" width={300} height={12} design="flat" />
        </View>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Warning (Orange)</Typography>
          <ProgressBar progress={0.5} progressColor="#ff9800" width={300} height={12} design="flat" />
        </View>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Info (Blue)</Typography>
          <ProgressBar progress={0.7} progressColor="#2196F3" width={300} height={12} design="flat" />
        </View>
        <View style={{ gap: 4 }}>
          <Typography variant="caption">Primary (Purple)</Typography>
          <ProgressBar progress={0.9} progressColor="#9c27b0" width={300} height={12} design="flat" />
        </View>
      </View>
    </View>
  ),
};

// Real-world Examples
export const FileUploadExample: Story = {
  render: () => {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const startUpload = () => {
      setIsUploading(true);
      setUploadProgress(0);
      
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          const next = prev + 0.1;
          if (next >= 1) {
            clearInterval(interval);
            setIsUploading(false);
            return 1;
          }
          return next;
        });
      }, 300);
    };

    const getProgressColor = () => {
      if (uploadProgress < 0.3) return '#ff9800'; // Orange for starting
      if (uploadProgress < 0.7) return '#2196F3'; // Blue for progress
      return '#4CAF50'; // Green for completion
    };

    return (
      <View style={{ gap: 16, alignItems: 'center', minWidth: 350 }}>
        <Typography variant="h6">File Upload Progress</Typography>
        <View style={{ gap: 8, width: '100%', alignItems: 'center' }}>
          <Typography variant="body2">
            {isUploading ? 'Uploading...' : uploadProgress === 1 ? 'Upload Complete!' : 'Ready to Upload'}
          </Typography>
          <ProgressBar 
            progress={uploadProgress} 
            width={300} 
            height={14} 
            design="neumorphic"
            progressColor={getProgressColor()}
          />
          <Typography variant="caption">{Math.round(uploadProgress * 100)}% Complete</Typography>
        </View>
        <Button 
          onPress={startUpload} 
          disabled={isUploading}
        >
          {isUploading ? 'Uploading...' : 'Start Upload'}
        </Button>
      </View>
    );
  },
};

// Skills Progress Example
export const SkillsExample: Story = {
  render: () => (
    <View style={{ gap: 16, minWidth: 350 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Skills Progress</Typography>
      <View style={{ gap: 12 }}>
        <View style={{ gap: 6 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography variant="body2">JavaScript</Typography>
            <Typography variant="caption">90%</Typography>
          </View>
          <ProgressBar progress={0.9} progressColor="#f7df1e" width={300} height={10} design="flat" />
        </View>
        <View style={{ gap: 6 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography variant="body2">React</Typography>
            <Typography variant="caption">85%</Typography>
          </View>
          <ProgressBar progress={0.85} progressColor="#61dafb" width={300} height={10} design="flat" />
        </View>
        <View style={{ gap: 6 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography variant="body2">TypeScript</Typography>
            <Typography variant="caption">75%</Typography>
          </View>
          <ProgressBar progress={0.75} progressColor="#3178c6" width={300} height={10} design="flat" />
        </View>
        <View style={{ gap: 6 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography variant="body2">Node.js</Typography>
            <Typography variant="caption">70%</Typography>
          </View>
          <ProgressBar progress={0.7} progressColor="#68a063" width={300} height={10} design="flat" />
        </View>
        <View style={{ gap: 6 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography variant="body2">Python</Typography>
            <Typography variant="caption">60%</Typography>
          </View>
          <ProgressBar progress={0.6} progressColor="#3776ab" width={300} height={10} design="flat" />
        </View>
      </View>
    </View>
  ),
};
