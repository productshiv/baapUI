import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';
import Typography from '../Typography/Typography';
import Card from '../Card/Card';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    design: {
      control: { type: 'select' },
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'],
    },
    maxWidth: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
    },

    horizontalAlign: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'Horizontal alignment of content within container',
    },
    border: {
      control: { type: 'boolean' },
      description: 'Enable border around container',
    },
    borderWidth: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
      description: 'Border thickness in pixels',
      if: { arg: 'border', eq: true },
    },
    borderColor: {
      control: { type: 'color' },
      description: 'Border color',
      if: { arg: 'border', eq: true },
    },
    borderRadius: {
      control: { type: 'range', min: 0, max: 50, step: 1 },
      description: 'Border radius in pixels',
      if: { arg: 'border', eq: true },
    },
    borderStyle: {
      control: { type: 'select' },
      options: ['solid', 'dashed', 'dotted'],
      description: 'Border style',
      if: { arg: 'border', eq: true },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Background color of container',
    },
    verticalAlign: {
      control: { type: 'select' },
      options: ['top', 'center', 'bottom', 'stretch'],
      description: 'Vertical alignment of content within container (defaults to center)',
    },
    minHeight: {
      control: { type: 'number' },
      description: 'Minimum height in pixels',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    design: 'flat',
    maxWidth: 'lg',
    padding: 'medium',
    minHeight: 400,
    children: (
      <Card>
        <Typography variant="h3" style={{ marginBottom: 16 }}>
          Default Container (Centered)
        </Typography>
        <Typography variant="body">
          By default, containers now center content both horizontally and vertically! 
          This provides a better user experience with content naturally positioned in the center.
        </Typography>
      </Card>
    ),
  },
};

export const AlignmentOptions: Story = {
  render: () => (
    <Container backgroundColor="#f5f5f5" padding="medium" maxWidth="full">
      <Card style={{ 
        display: 'grid', 
        gap: 20, 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        backgroundColor: 'transparent',
        border: 'none',
        padding: 0
      }}>
        <Container 
          maxWidth={350} 
          padding="medium" 
          horizontalAlign="left"
          verticalAlign="top"
          minHeight={200}
          border={true}
          borderColor="#007AFF"
          backgroundColor="#f0f8ff"
        >
          <Typography variant="h6">Left + Top</Typography>
          <Typography variant="body2">Content aligned to left and top</Typography>
        </Container>
        
        <Container 
          maxWidth={350} 
          padding="medium" 
          horizontalAlign="center"
          verticalAlign="center"
          minHeight={200}
          border={true}
          borderColor="#FF3B30"
          backgroundColor="#fff0f0"
        >
          <Typography variant="h6">Center + Center (Default)</Typography>
          <Typography variant="body2">Content centered both ways</Typography>
        </Container>
        
        <Container 
          maxWidth={350} 
          padding="medium" 
          horizontalAlign="right"
          verticalAlign="bottom"
          minHeight={200}
          border={true}
          borderColor="#34C759"
          backgroundColor="#f0fff0"
        >
          <Typography variant="h6">Right + Bottom</Typography>
          <Typography variant="body2">Content aligned to right and bottom</Typography>
        </Container>
      </Card>
    </Container>
  ),
};



export const SmallContainer: Story = {
  args: {
    maxWidth: 'sm',
    padding: 'medium',

    children: (
      <Card>
        <Typography variant="h4" style={{ marginBottom: 16 }}>
          Small Container (640px)
        </Typography>
        <Typography variant="body">
          This container is perfect for forms, login pages, or content that should be narrow and focused.
        </Typography>
      </Card>
    ),
  },
  decorators: [
    (Story) => (
      <Container backgroundColor="#e3f2fd" padding="medium" maxWidth="full">
        <Story />
      </Container>
    ),
  ],
};

export const ExtraLargeContainer: Story = {
  args: {
    maxWidth: 'xl',
    padding: 'large',
    children: (
      <Card>
        <Typography variant="h2" style={{ marginBottom: 16 }}>
          Extra Large Container (1280px)
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16 }}>
          This container is great for dashboards, data tables, or content that needs more space.
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <Card>
            <Typography variant="h6">Card 1</Typography>
            <Typography variant="body2">Content for card 1</Typography>
          </Card>
          <Card>
            <Typography variant="h6">Card 2</Typography>
            <Typography variant="body2">Content for card 2</Typography>
          </Card>
          <Card>
            <Typography variant="h6">Card 3</Typography>
            <Typography variant="body2">Content for card 3</Typography>
          </Card>
        </div>
      </Card>
    ),
  },
  decorators: [
    (Story) => (
      <Container backgroundColor="#fff3e0" padding="medium" maxWidth="full">
        <Story />
      </Container>
    ),
  ],
};

export const FullWidthContainer: Story = {
  args: {
    maxWidth: 'full',
    padding: 'medium',

    children: (
      <Card>
        <Typography variant="h3" style={{ marginBottom: 16 }}>
          Full Width Container
        </Typography>
        <Typography variant="body">
          This container takes the full width of its parent. It's useful for navigation bars, 
          footers, or sections that need to span the entire viewport.
        </Typography>
      </Card>
    ),
  },
  decorators: [
    (Story) => (
      <Container backgroundColor="#f3e5f5" padding="medium" maxWidth="full">
        <Story />
      </Container>
    ),
  ],
};

export const NoPadding: Story = {
  args: {
    maxWidth: 'md',
    padding: 'none',
    children: (
      <div style={{ backgroundColor: '#fff', border: '2px dashed #ccc', padding: '20px' }}>
        <Typography variant="h4" style={{ marginBottom: 16 }}>
          No Padding Container
        </Typography>
        <Typography variant="body">
          This container has no internal padding. The dashed border shows the container boundaries.
        </Typography>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <Container backgroundColor="#e8f5e8" padding="medium" maxWidth="full">
        <Story />
      </Container>
    ),
  ],
};

export const CustomMaxWidth: Story = {
  args: {
    maxWidth: 500,
    padding: 'medium',
    children: (
      <Card>
        <Typography variant="h4" style={{ marginBottom: 16 }}>
          Custom Max Width (500px)
        </Typography>
        <Typography variant="body">
          You can also specify a custom max-width in pixels for precise control over container sizing.
        </Typography>
      </Card>
    ),
  },
  decorators: [
    (Story) => (
      <Container backgroundColor="#fce4ec" padding="medium" maxWidth="full">
        <Story />
      </Container>
    ),
  ],
};

export const Glassmorphic: Story = {
  args: {
    design: 'glassmorphic',
    maxWidth: 'lg',
    padding: 'medium',
    children: (
      <div>
        <Typography variant="h3" style={{ marginBottom: 16, color: '#333' }}>
          Glassmorphic Container
        </Typography>
        <Typography variant="body" style={{ color: '#555' }}>
          This container features a beautiful glassmorphic design with backdrop blur effects,
          semi-transparent background, and subtle borders for a modern glass-like appearance.
        </Typography>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <Container 
        backgroundColor="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        padding="large"
        maxWidth="full"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Story />
      </Container>
    ),
  ],
};

export const GlassmorphicDark: Story = {
  args: {
    design: 'glassmorphic',
    maxWidth: 'md',
    padding: 'large',
    children: (
      <div>
        <Typography variant="h4" style={{ marginBottom: 16, color: '#fff' }}>
          Dark Glassmorphic Container
        </Typography>
        <Typography variant="body" style={{ color: '#e0e0e0' }}>
          Perfect for dark themes with enhanced glass effects and improved contrast.
        </Typography>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <Container 
        backgroundColor="linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
        padding="large"
        maxWidth="full"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Story />
      </Container>
    ),
  ],
};

export const AllDesigns: Story = {
  render: () => (
    <Container 
      backgroundColor="linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)"
      padding="medium"
      maxWidth="full"
    >
      <Card style={{ 
        display: 'grid', 
        gap: 20, 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        backgroundColor: 'transparent',
        border: 'none',
        padding: 0
      }}>
        <Container design="flat" maxWidth={400} padding="medium">
          <Card>
            <Typography variant="h6" style={{ marginBottom: 8 }}>Flat Design</Typography>
            <Typography variant="body2">Clean and minimal container styling</Typography>
          </Card>
        </Container>
        
        <Container design="neumorphic" maxWidth={400} padding="medium">
          <Card design="neumorphic">
            <Typography variant="h6" style={{ marginBottom: 8 }}>Neumorphic Design</Typography>
            <Typography variant="body2">Soft shadows and subtle depth</Typography>
          </Card>
        </Container>
        
        <Container design="skeuomorphic" maxWidth={400} padding="medium">
          <Card design="skeuomorphic">
            <Typography variant="h6" style={{ marginBottom: 8 }}>Skeuomorphic Design</Typography>
            <Typography variant="body2">Rich textures and realistic effects</Typography>
          </Card>
        </Container>
        
        <Container design="glassmorphic" maxWidth={400} padding="medium">
          <Card design="glassmorphic">
            <Typography variant="h6" style={{ marginBottom: 8, color: '#333' }}>Glassmorphic Design</Typography>
            <Typography variant="body2" style={{ color: '#555' }}>Glass-like transparency and blur</Typography>
          </Card>
        </Container>
      </Card>
    </Container>
  ),
};

export const ResponsiveDemo: Story = {
  render: () => (
    <Container backgroundColor="#f5f5f5" padding="medium" maxWidth="full">
      <Container maxWidth="sm" padding="small" style={{ marginBottom: 20 }}>
        <Card backgroundColor="#ffebee">
          <Typography variant="h6">Small Container (640px)</Typography>
          <Typography variant="body2">Perfect for mobile-first content</Typography>
        </Card>
      </Container>
      
      <Container maxWidth="md" padding="medium" style={{ marginBottom: 20 }}>
        <Card backgroundColor="#e3f2fd">
          <Typography variant="h6">Medium Container (768px)</Typography>
          <Typography variant="body2">Good for tablets and small desktops</Typography>
        </Card>
      </Container>
      
      <Container maxWidth="lg" padding="medium" style={{ marginBottom: 20 }}>
        <Card backgroundColor="#e8f5e8">
          <Typography variant="h6">Large Container (1024px)</Typography>
          <Typography variant="body2">Standard desktop content width</Typography>
        </Card>
      </Container>
      
      <Container maxWidth="xl" padding="large">
        <Card backgroundColor="#fff3e0">
          <Typography variant="h6">Extra Large Container (1280px)</Typography>
          <Typography variant="body2">For wide screens and dashboards</Typography>
        </Card>
      </Container>
    </Container>
  ),
};

export const WithBorder: Story = {
  args: {
    maxWidth: 500,
    padding: 'medium',
    border: true,
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 8,
    borderStyle: 'solid',
    children: (
      <div>
        <Typography variant="h4" style={{ marginBottom: 16 }}>
          Container with Border
        </Typography>
        <Typography variant="body">
          This container demonstrates the new border features including width, color, radius, and style options.
        </Typography>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <Container backgroundColor="#f8f9fa" padding="medium" maxWidth="full">
        <Story />
      </Container>
    ),
  ],
};

export const BorderStyles: Story = {
  render: () => (
    <Container backgroundColor="#f0f0f0" padding="medium" maxWidth="full">
      <Card style={{ 
        display: 'grid', 
        gap: 20, 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        backgroundColor: 'transparent',
        border: 'none',
        padding: 0
      }}>
        <Container 
          maxWidth={350} 
          padding="medium" 
          border={true} 
          borderWidth={2} 
          borderColor="#007AFF" 
          borderStyle="solid"
          borderRadius={8}
        >
          <Typography variant="h6" style={{ marginBottom: 8 }}>Solid Border</Typography>
          <Typography variant="body2">Clean solid border with rounded corners</Typography>
        </Container>
        
        <Container 
          maxWidth={350} 
          padding="medium" 
          border={true} 
          borderWidth={3} 
          borderColor="#FF3B30" 
          borderStyle="dashed"
          borderRadius={12}
        >
          <Typography variant="h6" style={{ marginBottom: 8 }}>Dashed Border</Typography>
          <Typography variant="body2">Stylish dashed border pattern</Typography>
        </Container>
        
        <Container 
          maxWidth={350} 
          padding="medium" 
          border={true} 
          borderWidth={4} 
          borderColor="#34C759" 
          borderStyle="dotted"
          borderRadius={16}
        >
          <Typography variant="h6" style={{ marginBottom: 8 }}>Dotted Border</Typography>
          <Typography variant="body2">Playful dotted border style</Typography>
        </Container>
      </Card>
    </Container>
  ),
};

export const WithBackground: Story = {
  args: {
    maxWidth: 'lg',
    padding: 'large',
    backgroundColor: '#e3f2fd',
    border: true,
    borderWidth: 1,
    borderColor: '#1976d2',
    borderRadius: 12,
    children: (
      <div>
        <Typography variant="h3" style={{ marginBottom: 16, color: '#1565c0' }}>
          Container with Background
        </Typography>
        <Typography variant="body" style={{ color: '#0d47a1' }}>
          This container showcases the background color feature combined with border styling for enhanced visual appeal.
        </Typography>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <Container backgroundColor="#fafafa" padding="medium" maxWidth="full">
        <Story />
      </Container>
    ),
  ],
};

export const VerticalAlignment: Story = {
  render: () => (
    <Container backgroundColor="#f5f5f5" padding="medium" maxWidth="full">
      <Card style={{ 
        display: 'grid', 
        gap: 20, 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        backgroundColor: 'transparent',
        border: 'none',
        padding: 0
      }}>
        <Container 
          maxWidth={300} 
          padding="medium" 
          verticalAlign="top"
          minHeight={200}
          border={true}
          borderColor="#007AFF"
          backgroundColor="#f0f8ff"
        >
          <Typography variant="h6">Top Aligned</Typography>
          <Typography variant="body2">Content aligned to top</Typography>
        </Container>
        
        <Container 
          maxWidth={300} 
          padding="medium" 
          verticalAlign="center"
          minHeight={200}
          border={true}
          borderColor="#FF3B30"
          backgroundColor="#fff0f0"
        >
          <Typography variant="h6">Center Aligned</Typography>
          <Typography variant="body2">Content centered vertically</Typography>
        </Container>
        
        <Container 
          maxWidth={300} 
          padding="medium" 
          verticalAlign="bottom"
          minHeight={200}
          border={true}
          borderColor="#34C759"
          backgroundColor="#f0fff0"
        >
          <Typography variant="h6">Bottom Aligned</Typography>
          <Typography variant="body2">Content aligned to bottom</Typography>
        </Container>
        
        <Container 
          maxWidth={300} 
          padding="medium" 
          verticalAlign="stretch"
          minHeight={200}
          border={true}
          borderColor="#FF9500"
          backgroundColor="#fff8f0"
        >
          <Card style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            height: '100%',
            backgroundColor: 'transparent',
            border: 'none',
            padding: 0
          }}>
            <Typography variant="h6">Stretch Layout</Typography>
            <Typography variant="body2">Content distributed evenly</Typography>
          </Card>
        </Container>
      </Card>
    </Container>
  ),
};

export const AdvancedStyling: Story = {
  args: {
    maxWidth: 'lg',
    padding: 'large',
    border: true,
    borderWidth: 3,
    borderColor: '#6366f1',
    borderRadius: 20,
    borderStyle: 'solid',
    backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    verticalAlign: 'center',
    minHeight: 300,
    children: (
      <Card style={{ textAlign: 'center', backgroundColor: 'transparent', border: 'none' }}>
        <Typography variant="h2" style={{ marginBottom: 16, color: 'white' }}>
          Advanced Container
        </Typography>
        <Typography variant="body" style={{ color: '#e0e7ff', marginBottom: 24 }}>
          This container combines all new features: custom borders, gradient background, 
          vertical centering, and minimum height for a stunning visual effect.
        </Typography>
        <Card style={{ 
          display: 'inline-block', 
          padding: 12, 
          backgroundColor: 'rgba(255,255,255,0.2)', 
          borderRadius: 8,
          borderWidth: 1,
          borderColor: 'rgba(255,255,255,0.3)',
          maxWidth: 'auto'
        }}>
          <Typography variant="body2" style={{ color: 'white' }}>
            ✨ Enhanced Container Features ✨
          </Typography>
        </Card>
      </Card>
    ),
  },
  decorators: [
    (Story) => (
      <Container backgroundColor="#1f2937" padding="medium">
        <Story />
      </Container>
    ),
  ],
};