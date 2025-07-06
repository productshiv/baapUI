import React, { useState } from 'react';
import { View, Text } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Form/TextArea',
  component: TextArea,
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
    placeholder: {
      control: 'text',
      defaultValue: 'Enter your text here...',
      description: 'Placeholder text for the textarea',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters allowed',
    },

    backgroundColor: {
      control: 'color',
      description: 'Custom background color for the textarea',
    },
    textColor: {
      control: 'color',
      description: 'Custom text color for the textarea',
    },
  },
  args: {
    design: 'flat',
    placeholder: 'Enter your text here...',
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

// Default Story
export const Default: Story = {
  args: {
    placeholder: 'Default TextArea',
    design: 'flat',
  },
};

// Design System Variations
export const Flat: Story = {
  args: {
    placeholder: 'Flat design textarea - clean and minimal',
    design: 'flat',
  },
};

export const Neumorphic: Story = {
  args: {
    placeholder: 'Neumorphic design textarea - soft and tactile',
    design: 'neumorphic',
  },
};

export const Skeuomorphic: Story = {
  args: {
    placeholder: 'Skeuomorphic design textarea - realistic and textured',
    design: 'skeuomorphic',
  },
};

// Size Variations (using style for height)
export const Small: Story = {
  args: {
    placeholder: 'Small textarea',
    design: 'flat',
    style: { height: 60 },
  },
};

export const Medium: Story = {
  args: {
    placeholder: 'Medium textarea',
    design: 'flat',
    style: { height: 100 },
  },
};

export const Large: Story = {
  args: {
    placeholder: 'Large textarea',
    design: 'flat',
    style: { height: 150 },
  },
};

// State Variations
export const WithValue: Story = {
  args: {
    value: 'This textarea has some default text content that demonstrates how the component looks with actual content.',
    placeholder: 'Enter your text here...',
    design: 'flat',
  },
};

export const Disabled: Story = {
  args: {
    value: 'This textarea is disabled and cannot be edited',
    disabled: true,
    design: 'flat',
  },
};

export const WithMaxLength: Story = {
  args: {
    placeholder: 'Type something... (max 100 characters)',
    maxLength: 100,
    design: 'flat',
  },
};

// Design-specific State Combinations
export const NeumorphicWithValue: Story = {
  args: {
    value: 'This is a neumorphic textarea with some content to show how it looks with text.',
    design: 'neumorphic',
  },
};

export const NeumorphicDisabled: Story = {
  args: {
    value: 'This neumorphic textarea is disabled',
    disabled: true,
    design: 'neumorphic',
  },
};

// Custom Color Variations
export const CustomColors: Story = {
  args: {
    placeholder: 'Custom colored textarea',
    backgroundColor: '#f0f8ff',
    textColor: '#2e8b57',
    design: 'flat',
  },
};

export const NeumorphicCustomColors: Story = {
  args: {
    placeholder: 'Custom neumorphic colors',
    backgroundColor: '#fdf6e3',
    textColor: '#8b4513',
    design: 'neumorphic',
  },
};

// Interactive Examples
const InteractiveTextAreaExample = () => {
  const [text, setText] = useState('');
  const maxLength = 200;

  return (
    <View style={{ width: 400, gap: 8 }}>
      <TextArea
        value={text}
        onChange={(e: any) => setText(e.target.value)}
        placeholder="Type something... (with character counter)"
        maxLength={maxLength}
        design="neumorphic"
      />
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={{ color: '#666', fontSize: 12 }}>
          {text.length}/{maxLength} characters
        </Text>
      </View>
    </View>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveTextAreaExample />,
};

// Size Variations Showcase
export const SizeVariations: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 20, maxWidth: 500 }}>
      <View>
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>Small</Text>
        <TextArea
          placeholder="Small textarea"
          design="neumorphic"
          style={{ height: 60 }}
        />
      </View>
      <View>
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>Medium</Text>
        <TextArea
          placeholder="Medium textarea"
          design="neumorphic"
          style={{ height: 100 }}
        />
      </View>
      <View>
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>Large</Text>
        <TextArea
          placeholder="Large textarea"
          design="neumorphic"
          style={{ height: 150 }}
        />
      </View>
    </View>
  ),
};

// All Design Systems Showcase


// Form Example
export const FormExample: Story = {
  render: () => {
    const [feedback, setFeedback] = useState('');
    const [comments, setComments] = useState('');
    const [description, setDescription] = useState('');

    return (
      <View style={{ padding: 20, gap: 16, maxWidth: 500 }}>
        <View>
          <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>Feedback</Text>
          <TextArea
            value={feedback}
            onChange={(e: any) => setFeedback(e.target.value)}
            placeholder="Please share your feedback..."
            design="neumorphic"
            style={{ height: 80 }}
          />
        </View>
        <View>
          <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>Additional Comments</Text>
          <TextArea
            value={comments}
            onChange={(e: any) => setComments(e.target.value)}
            placeholder="Any additional comments?"
            design="neumorphic"
            maxLength={500}
            style={{ height: 120 }}
          />
        </View>
        <View>
          <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>Description (Read-only)</Text>
          <TextArea
            value="This field is read-only and cannot be edited by the user."
            readOnly={true}
            design="neumorphic"
            style={{ height: 60 }}
          />
        </View>
      </View>
    );
  },
};

// State Showcase
export const StateShowcase: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 16, maxWidth: 500 }}>
      <View>
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>Normal State</Text>
        <TextArea
          placeholder="Normal editable textarea"
          design="flat"
        />
      </View>
      <View>
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>With Content</Text>
        <TextArea
          value="This textarea has some content already filled in."
          design="flat"
        />
      </View>
      <View>
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>Disabled State</Text>
        <TextArea
          value="This textarea is disabled and cannot be edited."
          readOnly={true}
          design="flat"
        />
      </View>
      <View>
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>With Character Limit</Text>
        <TextArea
          placeholder="Type here (max 50 characters)..."
          maxLength={50}
          design="flat"
        />
      </View>
    </View>
  ),
};

// New Glassmorphic Story
export const Glassmorphic: Story = {
  args: {
    placeholder: 'Glassmorphic design textarea - translucent and modern',
    design: 'glassmorphic',
  },
};

// Updated AllDesigns showcase
export const AllDesigns: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 20, maxWidth: 500 }}>
      <View>
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>Flat Design</Text>
        <TextArea
          placeholder="Flat design textarea"
          design="flat"
        />
      </View>
      <View>
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>Neumorphic Design</Text>
        <TextArea
          placeholder="Neumorphic design textarea"
          design="neumorphic"
        />
      </View>
      <View>
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>Skeuomorphic Design</Text>
        <TextArea
          placeholder="Skeuomorphic design textarea"
          design="skeuomorphic"
        />
      </View>
      <View>
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>Glassmorphic Design</Text>
        <TextArea
          placeholder="Glassmorphic design textarea"
          design="glassmorphic"
        />
      </View>
    </View>
  ),
};

// New Glassmorphic-specific stories
export const GlassmorphicWithValue: Story = {
  args: {
    value: 'This is a glassmorphic textarea with some content to show the translucent glass effect.',
    design: 'glassmorphic',
  },
};

export const GlassmorphicDisabled: Story = {
  args: {
    value: 'This glassmorphic textarea is disabled',
    disabled: true,
    design: 'glassmorphic',
  },
};

export const GlassmorphicCustomColors: Story = {
  args: {
    placeholder: 'Custom glassmorphic colors',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    textColor: '#ffffff',
    design: 'glassmorphic',
  },
};

// Enhanced Glassmorphic Story Variations (Phase 7 - BAAPUI-8)
export const Playground: Story = {
  args: {
    placeholder: 'Playground textarea with interactive controls...',
    design: 'glassmorphic',
    style: { height: 120 },
  },
};

export const LightGlass: Story = {
  args: {
    placeholder: 'Light glass effect textarea...',
    design: 'glassmorphic',
    style: { height: 100 },
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f0f0f0' },
      ],
    },
  },
};

export const DarkGlass: Story = {
  args: {
    placeholder: 'Dark glass effect textarea...',
    design: 'glassmorphic',
    style: { height: 100 },
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

export const ColoredGlass: Story = {
  args: {
    placeholder: 'Colored glass effect textarea...',
    design: 'glassmorphic',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    style: { height: 100 },
  },
  parameters: {
    backgrounds: {
      default: 'gradient',
      values: [
        { name: 'gradient', value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
      ],
    },
  },
};

export const HighBlur: Story = {
  args: {
    placeholder: 'High blur intensity textarea...',
    design: 'glassmorphic',
    style: { height: 100 },
  },
  parameters: {
    backgrounds: {
      default: 'pattern',
      values: [
        { name: 'pattern', value: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' },
      ],
    },
  },
};

export const MinimalGlass: Story = {
  args: {
    placeholder: 'Minimal glass effect...',
    design: 'glassmorphic',
    style: { height: 80 },
  },
  parameters: {
    backgrounds: {
      default: 'minimal',
      values: [
        { name: 'minimal', value: '#fafafa' },
      ],
    },
  },
};

export const LayeredGlass: Story = {
  render: () => (
    <View style={{ 
      padding: 40, 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: 20,
      position: 'relative'
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
      <TextArea
        placeholder="Layered glass effect textarea..."
        design="glassmorphic"
        style={{ height: 120 }}
      />
    </View>
  ),
};

export const GlassmorphicInteractive: Story = {
  render: () => {
    const [text, setText] = useState('');
    const maxLength = 150;
    
    return (
      <View style={{ padding: 20, maxWidth: 400, gap: 12 }}>
        <TextArea
          value={text}
          onChange={(e: any) => setText(e.target.value)}
          placeholder="Interactive glassmorphic textarea..."
          design="glassmorphic"
          maxLength={maxLength}
          style={{ height: 120 }}
        />
        <View style={{ 
          padding: 8, 
          backgroundColor: 'rgba(59, 130, 246, 0.1)', 
          borderRadius: 6,
          backdropFilter: 'blur(10px)',
          alignItems: 'flex-end'
        }}>
          <Text style={{ fontSize: 12, color: '#666' }}>
            {text.length}/{maxLength} characters
          </Text>
        </View>
        {text.length > 0 && (
          <View style={{ 
            padding: 8, 
            backgroundColor: 'rgba(34, 197, 94, 0.1)', 
            borderRadius: 6,
            backdropFilter: 'blur(10px)'
          }}>
            <Text style={{ fontSize: 12, color: '#059669' }}>
              Preview: {text.substring(0, 50)}{text.length > 50 ? '...' : ''}
            </Text>
          </View>
        )}
      </View>
    );
  },
};
