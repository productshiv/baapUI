import React from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import Typography from '../Typography/Typography';

const meta: Meta<typeof Button> = {
  title: 'Core UI/Button',
  component: Button,
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
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'text'],
      defaultValue: 'primary',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    design: {
      control: 'select',
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic', 'retro'],
      defaultValue: 'flat',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color for the button',
    },
    textColor: {
      control: 'color',
      description: 'Custom text color for the button',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    loading: {
      control: 'boolean',
      defaultValue: false,
    },
    // Phase 8: Glassmorphic ArgTypes Configuration
    glassBlurIntensity: {
      control: { type: 'range', min: 0, max: 20, step: 1 },
      defaultValue: 10,
      description: 'Backdrop-filter blur intensity (0-20px)',
      if: { arg: 'design', eq: 'glassmorphic' },
    },
    glassTransparency: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      defaultValue: 0.2,
      description: 'Background opacity (0-1)',
      if: { arg: 'design', eq: 'glassmorphic' },
    },
    glassBorderOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      defaultValue: 0.3,
      description: 'Border transparency (0-1)',
      if: { arg: 'design', eq: 'glassmorphic' },
    },
    glassIntensity: {
      control: 'select',
      options: ['subtle', 'medium', 'strong'],
      defaultValue: 'medium',
      description: 'Glass effect intensity',
      if: { arg: 'design', eq: 'glassmorphic' },
    },
    glassBlur: {
      control: 'select',
      options: ['light', 'medium', 'heavy'],
      defaultValue: 'medium',
      description: 'Blur effect level',
      if: { arg: 'design', eq: 'glassmorphic' },
    },
    glassTheme: {
      control: 'select',
      options: ['light', 'dark'],
      defaultValue: 'light',
      description: 'Glass theme variant',
      if: { arg: 'design', eq: 'glassmorphic' },
    },
    glassTintColor: {
      control: 'color',
      description: 'Tint color for glass effect',
      if: { arg: 'design', eq: 'glassmorphic' },
    },
    glassBorderRadius: {
      control: { type: 'range', min: 0, max: 30, step: 1 },
      defaultValue: 12,
      description: 'Custom border radius (0-30px)',
      if: { arg: 'design', eq: 'glassmorphic' },
    },
    // Retro-specific ArgTypes
    retroEra: {
      control: 'select',
      options: ['neon80s', 'pastel90s', 'grunge90s', 'vintage70s', 'pixelArt', 'terminal'],
      defaultValue: 'neon80s',
      description: 'Retro era style',
      if: { arg: 'design', eq: 'retro' },
    },
    retroColorScheme: {
      control: 'select',
      options: ['bright', 'muted', 'monochrome', 'rainbow'],
      defaultValue: 'bright',
      description: 'Retro color scheme',
      if: { arg: 'design', eq: 'retro' },
    },
    retroBorderThickness: {
      control: 'select',
      options: ['thin', 'medium', 'thick', 'ultra'],
      defaultValue: 'thick',
      description: 'Retro border thickness',
      if: { arg: 'design', eq: 'retro' },
    },
    retroCornerRadius: {
      control: 'select',
      options: ['sharp', 'slight', 'rounded', 'pill'],
      defaultValue: 'slight',
      description: 'Retro corner radius',
      if: { arg: 'design', eq: 'retro' },
    },
    retroShadowStyle: {
      control: 'select',
      options: ['none', 'drop', 'neon', 'deep', 'box'],
      defaultValue: 'drop',
      description: 'Retro shadow style',
      if: { arg: 'design', eq: 'retro' },
    },
    retroGlowEffect: {
      control: 'boolean',
      defaultValue: false,
      description: 'Enable retro glow effect',
      if: { arg: 'design', eq: 'retro' },
    },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    design: 'flat',
    disabled: false,
    loading: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default Story
export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'primary',
    size: 'medium',
    design: 'flat',
  },
};

// Size Variations
export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'small',
    design: 'flat',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    variant: 'primary',
    size: 'medium',
    design: 'flat',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'large',
    design: 'flat',
  },
};

// Variant Variations
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    design: 'flat',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    design: 'flat',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    design: 'flat',
  },
};

export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text',
    design: 'flat',
  },
};

// Design Variations
export const Neumorphic: Story = {
  args: {
    children: 'Neumorphic Button',
    variant: 'primary',
    size: 'medium',
    design: 'neumorphic',
  },
};

export const Skeuomorphic: Story = {
  args: {
    children: 'Skeuomorphic Button',
    variant: 'primary',
    size: 'medium',
    design: 'skeuomorphic',
  },
};

export const SkeuomorphicSecondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
    size: 'medium',
    design: 'skeuomorphic',
  },
};

export const SkeuomorphicOutline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
    size: 'medium',
    design: 'skeuomorphic',
  },
};

// Glassmorphic Design Stories
export const Glassmorphic: Story = {
  args: {
    children: 'Glassmorphic Button',
    variant: 'primary',
    size: 'medium',
    design: 'glassmorphic',
  },
};

export const GlassmorphicSecondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
    size: 'medium',
    design: 'glassmorphic',
  },
};

export const GlassmorphicOutline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
    size: 'medium',
    design: 'glassmorphic',
  },
};

export const GlassmorphicText: Story = {
  args: {
    children: 'Text',
    variant: 'text',
    size: 'medium',
    design: 'glassmorphic',
  },
};

// Glassmorphic Story Variations (as per BAAPUI-8 requirements)
export const GlassmorphicInteractive: Story = {
  render: () => {
    const [isPressed, setIsPressed] = React.useState(false);
    return (
      <View style={{ gap: 16, alignItems: 'center' }}>
        <Typography variant="h6">Interactive Glassmorphic Button</Typography>
        <Button 
          design="glassmorphic" 
          variant="primary"
          onPress={() => setIsPressed(!isPressed)}
        >
          {isPressed ? 'Pressed!' : 'Click Me'}
        </Button>
        <Typography variant="caption">Click to see interaction</Typography>
      </View>
    );
  },
};

export const GlassmorphicDarkMode: Story = {
  decorators: [
    Story => (
      <View style={{ padding: 20, backgroundColor: '#1a1a1a', minHeight: 200 }}>
        <Story />
      </View>
    ),
  ],
  args: {
    children: 'Dark Mode Glass',
    variant: 'primary',
    size: 'medium',
    design: 'glassmorphic',
  },
};

export const GlassmorphicPlayground: Story = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    backgroundColor: {
      control: 'color',
    },
    textColor: {
      control: 'color',
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
  args: {
    children: 'Playground Button',
    variant: 'primary',
    size: 'medium',
    design: 'glassmorphic',
    disabled: false,
    loading: false,
  },
};

export const GlassmorphicLightGlass: Story = {
  decorators: [
    Story => (
      <View style={{ padding: 20, backgroundColor: '#f0f0f0' }}>
        <Story />
      </View>
    ),
  ],
  args: {
    children: 'Light Glass',
    variant: 'primary',
    size: 'medium',
    design: 'glassmorphic',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
};

export const GlassmorphicDarkGlass: Story = {
  decorators: [
    Story => (
      <View style={{ padding: 20, backgroundColor: '#2a2a2a' }}>
        <Story />
      </View>
    ),
  ],
  args: {
    children: 'Dark Glass',
    variant: 'primary',
    size: 'medium',
    design: 'glassmorphic',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
};

export const GlassmorphicColoredGlass: Story = {
  render: () => (
    <View style={{ gap: 16, alignItems: 'center', padding: 20 }}>
      <Typography variant="h6">Colored Glass Variations</Typography>
      <View style={{ flexDirection: 'row', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button design="glassmorphic" backgroundColor="rgba(0, 122, 255, 0.2)">Blue Glass</Button>
        <Button design="glassmorphic" backgroundColor="rgba(88, 86, 214, 0.2)">Purple Glass</Button>
        <Button design="glassmorphic" backgroundColor="rgba(52, 199, 89, 0.2)">Green Glass</Button>
      </View>
    </View>
  ),
};

export const GlassmorphicHighBlur: Story = {
  decorators: [
    Story => (
      <View style={{ 
        padding: 20, 
        backgroundImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)',
        backgroundColor: '#ff6b6b' // fallback
      }}>
        <Story />
      </View>
    ),
  ],
  args: {
    children: 'High Blur Effect',
    variant: 'primary',
    size: 'medium',
    design: 'glassmorphic',
  },
};

export const GlassmorphicMinimalGlass: Story = {
  args: {
    children: 'Minimal Glass',
    variant: 'outline',
    size: 'medium',
    design: 'glassmorphic',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
};

export const GlassmorphicLayeredGlass: Story = {
  render: () => (
    <View style={{ gap: 16, alignItems: 'center', padding: 20 }}>
      <Typography variant="h6">Layered Glass Elements</Typography>
      <View style={{ 
        position: 'relative',
        padding: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)'
      }}>
        <View style={{
          position: 'absolute',
          top: 10,
          left: 10,
          right: 10,
          bottom: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: 12,
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.1)'
        }} />
        <Button design="glassmorphic" variant="primary">Layered Button</Button>
      </View>
    </View>
  ),
};

// Color Variations
export const CustomColors: Story = {
  args: {
    children: 'Custom Colors',
    variant: 'primary',
    size: 'medium',
    design: 'flat',
    backgroundColor: '#FF6B6B',
    textColor: '#FFFFFF',
  },
};

export const NeumorphicCustom: Story = {
  args: {
    children: 'Custom Neumorphic',
    variant: 'primary',
    size: 'medium',
    design: 'neumorphic',
    backgroundColor: '#e8e8e8',
    textColor: '#FF6B6B',
  },
};

// State Variations
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'medium',
    design: 'flat',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    variant: 'primary',
    size: 'medium',
    design: 'flat',
    loading: true,
  },
};

// Retro Design Stories
export const RetroDefault: Story = {
  args: {
    design: 'retro',
    children: 'Retro Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default retro button with neon80s era styling.',
      },
    },
  },
};

export const RetroEras: Story = {
  render: () => (
    <View style={{ flexDirection: 'column', gap: 16 }}>
      <View style={{ flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
        <Button design="retro" retroEra="neon80s" variant="primary">
          Neon 80s
        </Button>
        <Button design="retro" retroEra="pastel90s" variant="primary">
          Pastel 90s
        </Button>
        <Button design="retro" retroEra="grunge90s" variant="primary">
          Grunge 90s
        </Button>
      </View>
      <View style={{ flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
        <Button design="retro" retroEra="vintage70s" variant="primary">
          Vintage 70s
        </Button>
        <Button design="retro" retroEra="pixelArt" variant="primary">
          Pixel Art
        </Button>
        <Button design="retro" retroEra="terminal" variant="primary">
          Terminal
        </Button>
      </View>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different retro eras showcasing various vintage design styles.',
      },
    },
  },
};

export const RetroColorSchemes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
      <Button design="retro" retroColorScheme="bright" variant="primary">
        Bright
      </Button>
      <Button design="retro" retroColorScheme="muted" variant="primary">
        Muted
      </Button>
      <Button design="retro" retroColorScheme="monochrome" variant="primary">
        Monochrome
      </Button>
      <Button design="retro" retroColorScheme="rainbow" variant="primary">
        Rainbow
      </Button>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different color schemes for retro buttons.',
      },
    },
  },
};

export const RetroVariants: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
      <Button design="retro" variant="primary">
        Primary
      </Button>
      <Button design="retro" variant="secondary">
        Secondary
      </Button>
      <Button design="retro" variant="outline">
        Outline
      </Button>
      <Button design="retro" variant="text">
        Text
      </Button>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different variants of retro buttons.',
      },
    },
  },
};

export const RetroSizes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button design="retro" size="small" variant="primary">
        Small
      </Button>
      <Button design="retro" size="medium" variant="primary">
        Medium
      </Button>
      <Button design="retro" size="large" variant="primary">
        Large
      </Button>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different sizes of retro buttons.',
      },
    },
  },
};

export const RetroWithGlow: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
      <Button design="retro" retroEra="neon80s" retroGlowEffect={true} variant="primary">
        Neon Glow
      </Button>
      <Button design="retro" retroEra="terminal" retroGlowEffect={true} variant="secondary">
        Terminal Glow
      </Button>
      <Button design="retro" retroEra="pixelArt" retroGlowEffect={true} variant="outline">
        Pixel Glow
      </Button>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Retro buttons with glow effects enabled.',
      },
    },
  },
};

export const RetroBorderStyles: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
      <Button design="retro" retroBorderThickness="thin" variant="outline">
        Thin Border
      </Button>
      <Button design="retro" retroBorderThickness="medium" variant="outline">
        Medium Border
      </Button>
      <Button design="retro" retroBorderThickness="thick" variant="outline">
        Thick Border
      </Button>
      <Button design="retro" retroBorderThickness="ultra" variant="outline">
        Ultra Border
      </Button>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different border thickness options for retro buttons.',
      },
    },
  },
};

export const RetroCornerStyles: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
      <Button design="retro" retroCornerRadius="sharp" variant="primary">
        Sharp
      </Button>
      <Button design="retro" retroCornerRadius="slight" variant="primary">
        Slight
      </Button>
      <Button design="retro" retroCornerRadius="rounded" variant="primary">
        Rounded
      </Button>
      <Button design="retro" retroCornerRadius="pill" variant="primary">
        Pill
      </Button>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different corner radius styles for retro buttons.',
      },
    },
  },
};

export const RetroShadowStyles: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
      <Button design="retro" retroShadowStyle="none" variant="primary">
        No Shadow
      </Button>
      <Button design="retro" retroShadowStyle="drop" variant="primary">
        Drop Shadow
      </Button>
      <Button design="retro" retroShadowStyle="neon" variant="primary">
        Neon Shadow
      </Button>
      <Button design="retro" retroShadowStyle="deep" variant="primary">
        Deep Shadow
      </Button>
      <Button design="retro" retroShadowStyle="box" variant="primary">
        Box Shadow
      </Button>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different shadow styles for retro buttons.',
      },
    },
  },
};

export const RetroInteractive: Story = {
  render: () => (
    <View style={{ flexDirection: 'column', gap: 16 }}>
      <View style={{ flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
        <Button design="retro" variant="primary" onPress={() => console.log('Pressed!')}>
          Press Me
        </Button>
        <Button design="retro" variant="secondary" disabled>
          Disabled
        </Button>
        <Button design="retro" variant="outline" loading>
          Loading
        </Button>
      </View>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive states of retro buttons including pressed, disabled, and loading.',
      },
    },
  },
};

export const RetroShowcase: Story = {
  render: () => (
    <View style={{ flexDirection: 'column', gap: 24, padding: 16 }}>
      <View style={{ flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
        <Button 
          design="retro" 
          retroEra="neon80s" 
          retroGlowEffect={true}
          retroShadowStyle="neon"
          variant="primary"
        >
          🌈 Neon Dreams
        </Button>
        <Button 
          design="retro" 
          retroEra="vintage70s" 
          retroColorScheme="muted"
          retroCornerRadius="rounded"
          variant="secondary"
        >
          ✨ Vintage Vibes
        </Button>
        <Button 
          design="retro" 
          retroEra="pixelArt" 
          retroCornerRadius="sharp"
          retroBorderThickness="thick"
          variant="outline"
        >
          🎮 Pixel Perfect
        </Button>
      </View>
      <View style={{ flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
        <Button 
          design="retro" 
          retroEra="terminal" 
          retroColorScheme="monochrome"
          retroShadowStyle="box"
          variant="text"
        >
          💻 Terminal Style
        </Button>
        <Button 
          design="retro" 
          retroEra="grunge90s" 
          retroColorScheme="muted"
          retroBorderThickness="ultra"
          variant="primary"
        >
          🎸 Grunge Era
        </Button>
        <Button 
          design="retro" 
          retroEra="pastel90s" 
          retroColorScheme="bright"
          retroCornerRadius="pill"
          variant="secondary"
        >
          🌸 Pastel Dreams
        </Button>
      </View>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of various retro button combinations with different eras and styling options.',
      },
    },
  },
};

// All Designs Showcase
export const AllDesigns: Story = {
  render: () => (
    <View style={{ gap: 20, minWidth: 300, alignItems: 'center' }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Design Systems</Typography>
      <View style={{ gap: 12, alignItems: 'center' }}>
        <View style={{ gap: 8, alignItems: 'center' }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Flat Design</Typography>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Button design="flat" variant="primary">Primary</Button>
            <Button design="flat" variant="secondary">Secondary</Button>
            <Button design="flat" variant="outline">Outline</Button>
          </View>
        </View>
        <View style={{ gap: 8, alignItems: 'center' }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Neumorphic Design</Typography>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Button design="neumorphic" variant="primary">Primary</Button>
            <Button design="neumorphic" variant="secondary">Secondary</Button>
            <Button design="neumorphic" variant="outline">Outline</Button>
          </View>
        </View>
        <View style={{ gap: 8, alignItems: 'center' }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Skeuomorphic Design</Typography>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Button design="skeuomorphic" variant="primary">Primary</Button>
            <Button design="skeuomorphic" variant="secondary">Secondary</Button>
            <Button design="skeuomorphic" variant="outline">Outline</Button>
          </View>
        </View>
        <View style={{ gap: 8, alignItems: 'center' }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Glassmorphic Design</Typography>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Button design="glassmorphic" variant="primary">Primary</Button>
            <Button design="glassmorphic" variant="secondary">Secondary</Button>
            <Button design="glassmorphic" variant="outline">Outline</Button>
          </View>
        </View>
        <View style={{ gap: 8, alignItems: 'center' }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Retro Design</Typography>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Button design="retro" variant="primary">Primary</Button>
            <Button design="retro" variant="secondary">Secondary</Button>
            <Button design="retro" variant="outline">Outline</Button>
          </View>
        </View>
      </View>
    </View>
  ),
};
