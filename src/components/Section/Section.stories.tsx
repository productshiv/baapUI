import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Section from './Section';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import Card from '../Card/Card';

const meta: Meta<typeof Section> = {
  title: 'Layout/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    design: {
      control: { type: 'select' },
      options: ['flat', 'neumorphic', 'glassmorphic'],
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
    },
    backgroundColor: {
      control: { type: 'color' },
    },
    fullHeight: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    design: 'flat',
    padding: 'medium',
    children: (
      <>
        <Typography variant="h2" style={{ marginBottom: 16 }}>
          Section Title
        </Typography>
        <Typography variant="body" style={{ marginBottom: 24 }}>
          This is a section with medium padding. Sections are used to create consistent spacing and layout throughout your application.
        </Typography>
        <Button variant="primary">Get Started</Button>
      </>
    ),
  },
};

export const Neumorphic: Story = {
  args: {
    design: 'neumorphic',
    padding: 'medium',
    children: (
      <>
        <Typography variant="h2" style={{ marginBottom: 16 }} design="neumorphic">
          Neumorphic Section
        </Typography>
        <Typography variant="body" style={{ marginBottom: 24 }} design="neumorphic">
          This section uses the neumorphic design system with soft shadows and depth.
        </Typography>
        <Button variant="primary" design="neumorphic">Learn More</Button>
      </>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    design: 'flat',
    padding: 'none',
    backgroundColor: '#f8f9fa',
    children: (
      <Card style={{ margin: 0 }}>
        <Typography variant="h3" style={{ marginBottom: 12 }}>
          No Padding Section
        </Typography>
        <Typography variant="body">
          This section has no padding. The content goes edge to edge.
        </Typography>
      </Card>
    ),
  },
};

export const SmallPadding: Story = {
  args: {
    design: 'flat',
    padding: 'small',
    backgroundColor: '#e3f2fd',
    children: (
      <>
        <Typography variant="h3" style={{ marginBottom: 12 }}>
          Small Padding
        </Typography>
        <Typography variant="body">
          This section has small padding (16px vertical, 8px horizontal minimum).
        </Typography>
      </>
    ),
  },
};

export const LargePadding: Story = {
  args: {
    design: 'flat',
    padding: 'large',
    backgroundColor: '#fff3e0',
    children: (
      <>
        <Typography variant="h3" style={{ marginBottom: 12 }}>
          Large Padding
        </Typography>
        <Typography variant="body">
          This section has large padding (48px vertical, 24px horizontal minimum).
        </Typography>
      </>
    ),
  },
};

export const FullHeight: Story = {
  args: {
    design: 'flat',
    padding: 'large',
    fullHeight: true,
    backgroundColor: '#f3e5f5',
    children: (
      <>
        <Typography variant="h1" style={{ marginBottom: 24, textAlign: 'center' }}>
          Full Height Section
        </Typography>
        <Typography variant="body" style={{ textAlign: 'center', marginBottom: 32 }}>
          This section takes the full viewport height and centers its content vertically.
        </Typography>
        <div style={{ textAlign: 'center' }}>
          <Button variant="primary">Centered Action</Button>
        </div>
      </>
    ),
  },
};

export const Glassmorphic: Story = {
  args: {
    design: 'glassmorphic',
    padding: 'medium',
    children: (
      <>
        <Typography variant="h2" style={{ marginBottom: 16 }} design="glassmorphic">
          Glassmorphic Section
        </Typography>
        <Typography variant="body" style={{ marginBottom: 24 }} design="glassmorphic">
          This section uses the glassmorphic design system with translucent effects and blur.
        </Typography>
        <Button variant="primary" design="glassmorphic">Explore More</Button>
      </>
    ),
  },
};

export const GlassmorphicDark: Story = {
  args: {
    design: 'glassmorphic',
    padding: 'medium',
    children: (
      <>
        <Typography variant="h2" style={{ marginBottom: 16, color: 'white' }}>
          Glassmorphic Dark Section
        </Typography>
        <Typography variant="body" style={{ marginBottom: 24, color: 'rgba(255, 255, 255, 0.8)' }}>
          This section demonstrates glassmorphic design in dark theme with enhanced contrast.
        </Typography>
        <Button variant="primary" design="glassmorphic">Dark Action</Button>
      </>
    ),
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
};

export const MultipleSections: Story = {
  render: () => (
    <>
      <Section padding="large" backgroundColor="#fff">
        <Typography variant="h2" style={{ textAlign: 'center', marginBottom: 16 }}>
          Hero Section
        </Typography>
        <Typography variant="body" style={{ textAlign: 'center', marginBottom: 24 }}>
          Welcome to our amazing product. Start your journey today.
        </Typography>
        <div style={{ textAlign: 'center' }}>
          <Button variant="primary">Get Started</Button>
        </div>
      </Section>
      
      <Section padding="medium" backgroundColor="#f8f9fa">
        <Typography variant="h3" style={{ marginBottom: 16 }}>
          Features
        </Typography>
        <Typography variant="body" style={{ marginBottom: 20 }}>
          Our product offers amazing features that will help you succeed.
        </Typography>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Card style={{ flex: 1, minWidth: '200px' }}>
            <Typography variant="h6" style={{ marginBottom: 8 }}>Feature 1</Typography>
            <Typography variant="body2">Amazing feature description</Typography>
          </Card>
          <Card style={{ flex: 1, minWidth: '200px' }}>
            <Typography variant="h6" style={{ marginBottom: 8 }}>Feature 2</Typography>
            <Typography variant="body2">Another great feature</Typography>
          </Card>
        </div>
      </Section>
      
      <Section padding="large" backgroundColor="#e8f5e8">
        <Typography variant="h3" style={{ textAlign: 'center', marginBottom: 16 }}>
          Call to Action
        </Typography>
        <Typography variant="body" style={{ textAlign: 'center', marginBottom: 24 }}>
          Ready to get started? Join thousands of satisfied customers.
        </Typography>
        <div style={{ textAlign: 'center' }}>
          <Button variant="primary" style={{ marginRight: 12 }}>Sign Up Now</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </Section>
    </>
  ),
};

export const AllDesigns: Story = {
  render: () => (
    <>
      <Section design="flat" padding="medium" backgroundColor="#f8f9fa" style={{ marginBottom: 16 }}>
        <Typography variant="h4" style={{ marginBottom: 12 }}>Flat Design</Typography>
        <Typography variant="body">Clean and minimal flat design section.</Typography>
      </Section>
      
      <Section design="neumorphic" padding="medium" style={{ marginBottom: 16 }}>
        <Typography variant="h4" style={{ marginBottom: 12 }} design="neumorphic">Neumorphic Design</Typography>
        <Typography variant="body" design="neumorphic">Soft and tactile neumorphic design section.</Typography>
      </Section>
      
      <Section design="glassmorphic" padding="medium">
        <Typography variant="h4" style={{ marginBottom: 12 }} design="glassmorphic">Glassmorphic Design</Typography>
        <Typography variant="body" design="glassmorphic">Translucent and modern glassmorphic design section.</Typography>
      </Section>
    </>
  ),
};