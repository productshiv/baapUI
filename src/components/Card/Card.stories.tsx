import React from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Core UI/Card',
  component: Card,
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
    backgroundColor: {
      control: 'color',
      description: 'Custom background color for the card',
    },
    fullWidth: {
      control: 'boolean',
      defaultValue: false,
      description: 'Whether the card should take full width',
    },
    centered: {
      control: 'boolean',
      defaultValue: false,
      description: 'Whether the card should be centered',
    },
    maxWidth: {
      control: 'number',
      description: 'Maximum width of the card in pixels',
    },
    responsive: {
      control: 'boolean',
      defaultValue: false,
      description: 'Whether the card should be responsive',
    },
  },
  args: {
    design: 'flat',
    fullWidth: false,
    centered: false,
    responsive: false,
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// Default Story
export const Default: Story = {
  args: {
    design: 'flat',
    children: (
      <View style={{ padding: 16 }}>
        <Typography variant="h5">Default Card</Typography>
        <Typography variant="body" style={{ marginTop: 8 }}>
          This is a basic card with default styling.
        </Typography>
      </View>
    ),
  },
};

// Design System Variations
export const Flat: Story = {
  args: {
    design: 'flat',
    children: (
      <View style={{ padding: 16 }}>
        <Typography variant="h5">Flat Design Card</Typography>
        <Typography variant="body" style={{ marginTop: 8 }}>
          Clean and minimal flat design styling.
        </Typography>
      </View>
    ),
  },
};

export const Neumorphic: Story = {
  args: {
    design: 'neumorphic',
    children: (
      <View style={{ padding: 16 }}>
        <Typography variant="h5">Neumorphic Card</Typography>
        <Typography variant="body" style={{ marginTop: 8 }}>
          Soft shadows create a subtle, tactile appearance.
        </Typography>
      </View>
    ),
  },
};

export const Skeuomorphic: Story = {
  args: {
    design: 'skeuomorphic',
    children: (
      <View style={{ padding: 16 }}>
        <Typography variant="h5">Skeuomorphic Card</Typography>
        <Typography variant="body" style={{ marginTop: 8 }}>
          Rich textures and realistic shadows for depth.
        </Typography>
      </View>
    ),
  },
};

export const Glassmorphic: Story = {
  args: {
    design: 'glassmorphic',
    children: (
      <View style={{ padding: 16 }}>
        <Typography variant="h5">Glassmorphic Card</Typography>
        <Typography variant="body" style={{ marginTop: 8 }}>
          Translucent glass effect with backdrop blur.
        </Typography>
      </View>
    ),
  },
};

// Glassmorphic Story Variations (as per BAAPUI-8 requirements)
export const GlassmorphicInteractive: Story = {
  render: () => {
    const [isPressed, setIsPressed] = React.useState(false);
    return (
      <View style={{ gap: 16, alignItems: 'center' }}>
        <Typography variant="h6">Interactive Glassmorphic Card</Typography>
        <Card 
          design="glassmorphic" 
          onPress={() => setIsPressed(!isPressed)}
          style={{ transform: [{ scale: isPressed ? 0.98 : 1 }] }}
        >
          <View style={{ padding: 16 }}>
            <Typography variant="h6">Clickable Glass Card</Typography>
            <Typography variant="body2" style={{ marginTop: 8 }}>
              {isPressed ? 'Card is pressed!' : 'Click to interact'}
            </Typography>
          </View>
        </Card>
        <Typography variant="caption">Click the card to see interaction</Typography>
      </View>
    );
  },
};

export const GlassmorphicDarkMode: Story = {
  decorators: [
    Story => (
      <View style={{ padding: 20, backgroundColor: '#1a1a1a', minHeight: 300 }}>
        <Story />
      </View>
    ),
  ],
  args: {
    design: 'glassmorphic',
    children: (
      <View style={{ padding: 16 }}>
        <Typography variant="h5">Dark Mode Glass</Typography>
        <Typography variant="body" style={{ marginTop: 8 }}>
          Glassmorphic card optimized for dark backgrounds.
        </Typography>
      </View>
    ),
  },
};

export const GlassmorphicPlayground: Story = {
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    fullWidth: {
      control: 'boolean',
    },
    centered: {
      control: 'boolean',
    },
    maxWidth: {
      control: 'number',
    },
  },
  args: {
    design: 'glassmorphic',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    fullWidth: false,
    centered: true,
    maxWidth: 400,
    children: (
      <View style={{ padding: 16 }}>
        <Typography variant="h5">Playground Card</Typography>
        <Typography variant="body" style={{ marginTop: 8 }}>
          Experiment with different glassmorphic properties.
        </Typography>
      </View>
    ),
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
    design: 'glassmorphic',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    children: (
      <View style={{ padding: 16 }}>
        <Typography variant="h5">Light Glass</Typography>
        <Typography variant="body" style={{ marginTop: 8 }}>
          Subtle glass effect on light background.
        </Typography>
      </View>
    ),
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
    design: 'glassmorphic',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    children: (
      <View style={{ padding: 16 }}>
        <Typography variant="h5">Dark Glass</Typography>
        <Typography variant="body" style={{ marginTop: 8 }}>
          Prominent glass effect on dark background.
        </Typography>
      </View>
    ),
  },
};

export const GlassmorphicColoredGlass: Story = {
  render: () => (
    <View style={{ gap: 16, alignItems: 'center', padding: 20 }}>
      <Typography variant="h6">Colored Glass Card Variations</Typography>
      <View style={{ gap: 12, width: '100%', maxWidth: 400 }}>
        <Card design="glassmorphic" backgroundColor="rgba(0, 122, 255, 0.2)">
          <View style={{ padding: 16 }}>
            <Typography variant="h6">Blue Glass</Typography>
            <Typography variant="body2">Card with blue tinted glass</Typography>
          </View>
        </Card>
        <Card design="glassmorphic" backgroundColor="rgba(88, 86, 214, 0.2)">
          <View style={{ padding: 16 }}>
            <Typography variant="h6">Purple Glass</Typography>
            <Typography variant="body2">Card with purple tinted glass</Typography>
          </View>
        </Card>
        <Card design="glassmorphic" backgroundColor="rgba(52, 199, 89, 0.2)">
          <View style={{ padding: 16 }}>
            <Typography variant="h6">Green Glass</Typography>
            <Typography variant="body2">Card with green tinted glass</Typography>
          </View>
        </Card>
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
    design: 'glassmorphic',
    children: (
      <View style={{ padding: 16 }}>
        <Typography variant="h5">High Blur Glass</Typography>
        <Typography variant="body" style={{ marginTop: 8 }}>
          Maximum blur effect on colorful background.
        </Typography>
      </View>
    ),
  },
};

export const GlassmorphicMinimalGlass: Story = {
  args: {
    design: 'glassmorphic',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    children: (
      <View style={{ padding: 16 }}>
        <Typography variant="h5">Minimal Glass</Typography>
        <Typography variant="body" style={{ marginTop: 8 }}>
          Very subtle glassmorphic effect.
        </Typography>
      </View>
    ),
  },
};

export const GlassmorphicLayeredGlass: Story = {
  render: () => (
    <View style={{ gap: 16, alignItems: 'center', padding: 20 }}>
      <Typography variant="h6">Layered Glass Card Elements</Typography>
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
        <Card design="glassmorphic" style={{ position: 'relative', zIndex: 1 }}>
          <View style={{ padding: 16 }}>
            <Typography variant="h6">Nested Glass Card</Typography>
            <Typography variant="body2" style={{ marginTop: 8 }}>
              Multiple glass layers create depth
            </Typography>
          </View>
        </Card>
      </View>
    </View>
  ),
};

export const GlassmorphicProductCard: Story = {
  args: {
    design: 'glassmorphic',
    maxWidth: 300,
    children: (
      <View>
        <View style={{ 
          height: 180, 
          backgroundColor: 'rgba(245, 245, 245, 0.3)', 
          justifyContent: 'center', 
          alignItems: 'center',
          marginBottom: 12,
          borderRadius: 8
        }}>
          <Typography variant="body2" style={{ color: '#888' }}>
            Glass Product Image
          </Typography>
        </View>
        <View style={{ padding: 16, paddingTop: 0 }}>
          <Typography variant="h6">Glass Premium Product</Typography>
          <Typography variant="body2" style={{ marginTop: 4, color: '#666' }}>
            Elegant product with glassmorphic design
          </Typography>
          <Typography variant="h5" style={{ marginTop: 8, color: '#2e7d32' }}>
            $149.99
          </Typography>
          <View style={{ marginTop: 12 }}>
            <Button design="glassmorphic" size="small">
              Add to Cart
            </Button>
          </View>
        </View>
      </View>
    ),
  },
};

export const GlassmorphicDashboard: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 16 }}>
      <Typography variant="h6">Glassmorphic Dashboard Cards</Typography>
      <View style={{ flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
        <Card design="glassmorphic" style={{ flex: 1, minWidth: 200 }}>
          <View style={{ padding: 16 }}>
            <Typography variant="h4" style={{ color: '#2196f3' }}>2,468</Typography>
            <Typography variant="body2">Glass Users</Typography>
          </View>
        </Card>
        <Card design="glassmorphic" style={{ flex: 1, minWidth: 200 }}>
          <View style={{ padding: 16 }}>
            <Typography variant="h4" style={{ color: '#4caf50' }}>$24,690</Typography>
            <Typography variant="body2">Glass Revenue</Typography>
          </View>
        </Card>
        <Card design="glassmorphic" style={{ flex: 1, minWidth: 200 }}>
          <View style={{ padding: 16 }}>
            <Typography variant="h4" style={{ color: '#ff9800' }}>99.2%</Typography>
            <Typography variant="body2">Glass Uptime</Typography>
          </View>
        </Card>
      </View>
    </View>
  ),
};

// Layout Variations
export const FullWidth: Story = {
  args: {
    design: 'flat',
    fullWidth: true,
    children: (
      <View style={{ padding: 16 }}>
        <Typography variant="h5">Full Width Card</Typography>
        <Typography variant="body" style={{ marginTop: 8 }}>
          This card takes the full width of its container.
        </Typography>
      </View>
    ),
  },
};

export const Centered: Story = {
  args: {
    design: 'flat',
    centered: true,
    maxWidth: 400,
    children: (
      <View style={{ padding: 16 }}>
        <Typography variant="h5">Centered Card</Typography>
        <Typography variant="body" style={{ marginTop: 8 }}>
          This card is centered with a maximum width.
        </Typography>
      </View>
    ),
  },
};

export const Responsive: Story = {
  args: {
    design: 'flat',
    responsive: true,
    centered: true,
    maxWidth: 500,
    children: (
      <View style={{ padding: 16 }}>
        <Typography variant="h5">Responsive Card</Typography>
        <Typography variant="body" style={{ marginTop: 8 }}>
          This card adapts to different screen sizes responsively.
        </Typography>
      </View>
    ),
  },
};

// Content Variations
export const WithActions: Story = {
  args: {
    design: 'neumorphic',
    children: (
      <View style={{ padding: 16 }}>
        <Typography variant="h5">Interactive Card</Typography>
        <Typography variant="body" style={{ marginTop: 8, marginBottom: 16 }}>
          This card contains interactive elements and actions.
        </Typography>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <Button onPress={() => {}} design="neumorphic" size="small">
            Primary Action
          </Button>
          <Button onPress={() => {}} design="neumorphic" variant="secondary" size="small">
            Secondary
          </Button>
        </View>
      </View>
    ),
  },
};

export const WithImage: Story = {
  args: {
    design: 'flat',
    children: (
      <View>
        <View style={{ 
          height: 200, 
          backgroundColor: '#e0e0e0', 
          justifyContent: 'center', 
          alignItems: 'center',
          marginBottom: 16
        }}>
          <Typography variant="body2" style={{ color: '#666' }}>
            Image Placeholder
          </Typography>
        </View>
        <View style={{ padding: 16, paddingTop: 0 }}>
          <Typography variant="h5">Card with Image</Typography>
          <Typography variant="body" style={{ marginTop: 8 }}>
            This card includes an image at the top with content below.
          </Typography>
        </View>
      </View>
    ),
  },
};

export const ProductCard: Story = {
  args: {
    design: 'skeuomorphic',
    maxWidth: 300,
    children: (
      <View>
        <View style={{ 
          height: 180, 
          backgroundColor: '#f5f5f5', 
          justifyContent: 'center', 
          alignItems: 'center',
          marginBottom: 12
        }}>
          <Typography variant="body2" style={{ color: '#888' }}>
            Product Image
          </Typography>
        </View>
        <View style={{ padding: 16, paddingTop: 0 }}>
          <Typography variant="h6">Premium Product</Typography>
          <Typography variant="body2" style={{ marginTop: 4, color: '#666' }}>
            High-quality product with excellent features
          </Typography>
          <Typography variant="h5" style={{ marginTop: 8, color: '#2e7d32' }}>
            $99.99
          </Typography>
          <View style={{ marginTop: 12 }}>
            <Button onPress={() => {}} design="skeuomorphic" variant="primary" size="small">
              Add to Cart
            </Button>
          </View>
        </View>
      </View>
    ),
  },
};

// Custom Color Variations
export const CustomBackground: Story = {
  args: {
    design: 'flat',
    backgroundColor: '#f0f8ff',
    children: (
      <View style={{ padding: 16 }}>
        <Typography variant="h5">Custom Background</Typography>
        <Typography variant="body" style={{ marginTop: 8 }}>
          This card has a custom background color.
        </Typography>
      </View>
    ),
  },
};

export const NeumorphicCustom: Story = {
  args: {
    design: 'neumorphic',
    backgroundColor: '#fdf6e3',
    children: (
      <View style={{ padding: 16 }}>
        <Typography variant="h5">Custom Neumorphic</Typography>
        <Typography variant="body" style={{ marginTop: 8 }}>
          Neumorphic design with custom background color.
        </Typography>
      </View>
    ),
  },
};

// Size Variations
export const SmallCard: Story = {
  args: {
    design: 'flat',
    maxWidth: 250,
    children: (
      <View style={{ padding: 12 }}>
        <Typography variant="h6">Small Card</Typography>
        <Typography variant="body2" style={{ marginTop: 4 }}>
          Compact card with minimal content.
        </Typography>
      </View>
    ),
  },
};

export const LargeCard: Story = {
  args: {
    design: 'neumorphic',
    maxWidth: 600,
    children: (
      <View style={{ padding: 24 }}>
        <Typography variant="h4">Large Card</Typography>
        <Typography variant="body" style={{ marginTop: 12 }}>
          This is a larger card with more generous padding and content space. 
          It can accommodate more detailed information and multiple elements.
        </Typography>
        <View style={{ marginTop: 16, flexDirection: 'row', gap: 12 }}>
          <Button onPress={() => {}} design="neumorphic">
            Primary Action
          </Button>
          <Button onPress={() => {}} design="neumorphic" variant="outline">
            Secondary Action
          </Button>
        </View>
      </View>
    ),
  },
};

// All Design Systems Showcase
export const AllDesigns: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 20, maxWidth: 800 }}>
      <Card design="flat">
        <View style={{ padding: 16 }}>
          <Typography variant="h6">Flat Design</Typography>
          <Typography variant="body2">Clean and minimal styling</Typography>
        </View>
      </Card>
      <Card design="neumorphic">
        <View style={{ padding: 16 }}>
          <Typography variant="h6">Neumorphic Design</Typography>
          <Typography variant="body2">Soft shadows and subtle depth</Typography>
        </View>
      </Card>
      <Card design="skeuomorphic">
        <View style={{ padding: 16 }}>
          <Typography variant="h6">Skeuomorphic Design</Typography>
          <Typography variant="body2">Rich textures and realistic appearance</Typography>
        </View>
      </Card>
      <Card design="glassmorphic">
        <View style={{ padding: 16 }}>
          <Typography variant="h6">Glassmorphic Design</Typography>
          <Typography variant="body2">Translucent glass with backdrop blur</Typography>
        </View>
      </Card>
    </View>
  ),
};

// Layout Showcase
export const LayoutVariations: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 20 }}>
      <Card design="flat" maxWidth={300}>
        <View style={{ padding: 16 }}>
          <Typography variant="h6">Fixed Width (300px)</Typography>
          <Typography variant="body2">Card with specific maximum width</Typography>
        </View>
      </Card>
      <Card design="neumorphic" centered maxWidth={400}>
        <View style={{ padding: 16 }}>
          <Typography variant="h6">Centered Card</Typography>
          <Typography variant="body2">This card is centered in its container</Typography>
        </View>
      </Card>
      <Card design="skeuomorphic" fullWidth>
        <View style={{ padding: 16 }}>
          <Typography variant="h6">Full Width Card</Typography>
          <Typography variant="body2">This card takes the full width available</Typography>
        </View>
      </Card>
    </View>
  ),
};

// Dashboard Example
export const DashboardCards: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 16 }}>
      <View style={{ flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
        <Card design="neumorphic" style={{ flex: 1, minWidth: 200 }}>
          <View style={{ padding: 16 }}>
            <Typography variant="h4" style={{ color: '#2196f3' }}>1,234</Typography>
            <Typography variant="body2">Total Users</Typography>
          </View>
        </Card>
        <Card design="neumorphic" style={{ flex: 1, minWidth: 200 }}>
          <View style={{ padding: 16 }}>
            <Typography variant="h4" style={{ color: '#4caf50' }}>$12,345</Typography>
            <Typography variant="body2">Revenue</Typography>
          </View>
        </Card>
        <Card design="neumorphic" style={{ flex: 1, minWidth: 200 }}>
          <View style={{ padding: 16 }}>
            <Typography variant="h4" style={{ color: '#ff9800' }}>98.5%</Typography>
            <Typography variant="body2">Uptime</Typography>
          </View>
        </Card>
      </View>
    </View>
  ),
};
