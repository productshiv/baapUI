import React from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { ThemeProvider } from '../../themes/ThemeContext';

const meta: Meta<typeof Typography> = {
  title: 'Typography/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'body2', 'caption', 'button', 'overline'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
    design: {
      control: { type: 'select' },
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic', 'retro'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'body',
  },
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ padding: 20, maxWidth: 600 }}>
      <Typography variant="h1">Heading 1 - Main Title</Typography>
      <Typography variant="h2">Heading 2 - Section Title</Typography>
      <Typography variant="h3">Heading 3 - Subsection</Typography>
      <Typography variant="h4">Heading 4 - Component Title</Typography>
      <Typography variant="h5">Heading 5 - Small Title</Typography>
      <Typography variant="h6">Heading 6 - Micro Title</Typography>
      <Typography variant="body">Body text - This is the main body text for paragraphs and content.</Typography>
      <Typography variant="body2">Body 2 - Smaller body text for secondary content.</Typography>
      <Typography variant="caption">Caption - Small text for captions and labels.</Typography>
      <Typography variant="button">Button Text</Typography>
      <Typography variant="overline">Overline Text</Typography>
    </View>
  ),
};

export const WithThemeProvider: Story = {
  render: () => (
    <ThemeProvider initialDesign="flat">
      <View style={{ padding: 20, maxWidth: 600 }}>
        <Typography variant="h2">Using ThemeProvider (Flat Design)</Typography>
        <Typography variant="body">
          This text automatically uses the flat design system from ThemeProvider.
          No need to pass design prop to each component!
        </Typography>
        <Typography variant="caption">Theme is managed globally</Typography>
      </View>
    </ThemeProvider>
  ),
};

export const WithNeumorphicTheme: Story = {
  render: () => (
    <ThemeProvider initialDesign="neumorphic">
      <View style={{ padding: 20, maxWidth: 600, backgroundColor: '#f0f0f0' }}>
        <Typography variant="h2">Using ThemeProvider (Neumorphic Design)</Typography>
        <Typography variant="body">
          This text automatically uses the neumorphic design system from ThemeProvider.
          Notice the subtle text shadows that give depth to the text.
        </Typography>
        <Typography variant="caption">Theme inheritance in action</Typography>
      </View>
    </ThemeProvider>
  ),
};

export const DesignComparison: Story = {
  render: () => (
    <View style={{ padding: 20, display: 'flex', gap: 20 }}>
      <View style={{ padding: 15, backgroundColor: '#ffffff', borderRadius: 8 }}>
        <Typography variant="h3" design="flat">Flat Design</Typography>
        <Typography variant="body" design="flat">Clean, minimal text without effects</Typography>
      </View>
      
      <View style={{ padding: 15, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
        <Typography variant="h3" design="neumorphic">Neumorphic Design</Typography>
        <Typography variant="body" design="neumorphic">Soft, subtle shadows for depth</Typography>
      </View>
      
      <View style={{ padding: 15, backgroundColor: '#e8e8e8', borderRadius: 8 }}>
        <Typography variant="h3" design="skeuomorphic">Skeuomorphic Design</Typography>
        <Typography variant="body" design="skeuomorphic">Realistic text with depth shadows</Typography>
      </View>
      
      <View style={{ padding: 15, backgroundColor: '#f5f5f5', borderRadius: 8 }}>
        <Typography variant="h3" design="glassmorphic">Glassmorphic Design</Typography>
        <Typography variant="body" design="glassmorphic">Glassy, translucent text effects</Typography>
      </View>
    </View>
  ),
};

export const ThemeProviderDemo: Story = {
  render: () => {
    const DemoSection = ({ design, title }: { design: any; title: string }) => (
      <ThemeProvider initialDesign={design}>
        <View style={{ 
          padding: 20, 
          margin: 10, 
          backgroundColor: design === 'neumorphic' ? '#f0f0f0' : '#ffffff',
          borderRadius: 12,
          borderWidth: 1,
          borderColor: '#e0e0e0'
        }}>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="body">
            All components automatically inherit the {design} design system.
          </Typography>
          <Typography variant="caption">
            No need to pass design props to individual components!
          </Typography>
        </View>
      </ThemeProvider>
    );

    return (
      <View style={{ padding: 10 }}>
        <Typography variant="h2" align="center" style={{ marginBottom: 20 }}>
          🎨 ThemeProvider Demo
        </Typography>
        <DemoSection design="flat" title="Flat Theme Section" />
        <DemoSection design="neumorphic" title="Neumorphic Theme Section" />
      </View>
    );
  },
};
