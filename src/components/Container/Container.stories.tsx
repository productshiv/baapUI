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
    center: {
      control: { type: 'boolean' },
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
    center: true,
    children: (
      <Card>
        <Typography variant="h3" style={{ marginBottom: 16 }}>
          Default Container (lg)
        </Typography>
        <Typography variant="body">
          This container has a max-width of 1024px and is centered on the page. 
          It includes medium padding (16px) and automatically adjusts to smaller screens.
        </Typography>
      </Card>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const SmallContainer: Story = {
  args: {
    maxWidth: 'sm',
    padding: 'medium',
    center: true,
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
      <div style={{ backgroundColor: '#e3f2fd', minHeight: '100vh', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ExtraLargeContainer: Story = {
  args: {
    maxWidth: 'xl',
    padding: 'large',
    center: true,
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
      <div style={{ backgroundColor: '#fff3e0', minHeight: '100vh', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const FullWidthContainer: Story = {
  args: {
    maxWidth: 'full',
    padding: 'medium',
    center: false,
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
      <div style={{ backgroundColor: '#f3e5f5', minHeight: '100vh', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const NoPadding: Story = {
  args: {
    maxWidth: 'md',
    padding: 'none',
    center: true,
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
      <div style={{ backgroundColor: '#e8f5e8', minHeight: '100vh', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const CustomMaxWidth: Story = {
  args: {
    maxWidth: 500,
    padding: 'medium',
    center: true,
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
      <div style={{ backgroundColor: '#fce4ec', minHeight: '100vh', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Glassmorphic: Story = {
  args: {
    design: 'glassmorphic',
    maxWidth: 'lg',
    padding: 'medium',
    center: true,
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
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh', 
        padding: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Story />
      </div>
    ),
  ],
};

export const GlassmorphicDark: Story = {
  args: {
    design: 'glassmorphic',
    maxWidth: 'md',
    padding: 'large',
    center: true,
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
      <div style={{ 
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        minHeight: '100vh', 
        padding: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Story />
      </div>
    ),
  ],
};

export const AllDesigns: Story = {
  render: () => (
    <div style={{ 
      background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
      minHeight: '100vh', 
      padding: '20px' 
    }}>
      <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <Container design="flat" maxWidth={400} padding="medium">
          <Card>
            <Typography variant="h6" style={{ marginBottom: 8 }}>Flat Design</Typography>
            <Typography variant="body2">Clean and minimal container styling</Typography>
          </Card>
        </Container>
        
        <Container design="neumorphic" maxWidth={400} padding="medium">
          <div style={{ padding: '16px' }}>
            <Typography variant="h6" style={{ marginBottom: 8 }}>Neumorphic Design</Typography>
            <Typography variant="body2">Soft shadows and subtle depth</Typography>
          </div>
        </Container>
        
        <Container design="skeuomorphic" maxWidth={400} padding="medium">
          <div style={{ padding: '16px' }}>
            <Typography variant="h6" style={{ marginBottom: 8 }}>Skeuomorphic Design</Typography>
            <Typography variant="body2">Rich textures and realistic effects</Typography>
          </div>
        </Container>
        
        <Container design="glassmorphic" maxWidth={400} padding="medium">
          <div style={{ padding: '16px' }}>
            <Typography variant="h6" style={{ marginBottom: 8, color: '#333' }}>Glassmorphic Design</Typography>
            <Typography variant="body2" style={{ color: '#555' }}>Glass-like transparency and blur</Typography>
          </div>
        </Container>
      </div>
    </div>
  ),
};

export const ResponsiveDemo: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
      <Container maxWidth="sm" padding="small" style={{ marginBottom: '20px' }}>
        <Card style={{ backgroundColor: '#ffebee' }}>
          <Typography variant="h6">Small Container (640px)</Typography>
          <Typography variant="body2">Perfect for mobile-first content</Typography>
        </Card>
      </Container>
      
      <Container maxWidth="md" padding="medium" style={{ marginBottom: '20px' }}>
        <Card style={{ backgroundColor: '#e3f2fd' }}>
          <Typography variant="h6">Medium Container (768px)</Typography>
          <Typography variant="body2">Good for tablets and small desktops</Typography>
        </Card>
      </Container>
      
      <Container maxWidth="lg" padding="medium" style={{ marginBottom: '20px' }}>
        <Card style={{ backgroundColor: '#e8f5e8' }}>
          <Typography variant="h6">Large Container (1024px)</Typography>
          <Typography variant="body2">Standard desktop content width</Typography>
        </Card>
      </Container>
      
      <Container maxWidth="xl" padding="large">
        <Card style={{ backgroundColor: '#fff3e0' }}>
          <Typography variant="h6">Extra Large Container (1280px)</Typography>
          <Typography variant="body2">For wide screens and dashboards</Typography>
        </Card>
      </Container>
    </div>
  ),
};