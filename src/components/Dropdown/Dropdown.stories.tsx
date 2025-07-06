import React, { useState } from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';
import Typography from '../Typography/Typography';

const meta: Meta<typeof Dropdown> = {
  title: 'Form/Dropdown',
  component: Dropdown,
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
    label: {
      control: 'text',
      defaultValue: 'Select an option',
      description: 'Label text for the dropdown',
    },
    placeholder: {
      control: 'text',
      defaultValue: 'Choose...',
      description: 'Placeholder text when no option is selected',
    },

    backgroundColor: {
      control: 'color',
      description: 'Custom background color for the dropdown',
    },
    textColor: {
      control: 'color',
      description: 'Custom text color for the dropdown',
    },
  },
  args: {
    design: 'flat',
    label: 'Select an option',
    placeholder: 'Choose...',
    onSelect: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const sampleOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
const frameworkOptions = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'Gatsby'];
const colorOptions = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink'];

// Default Story
export const Default: Story = {
  args: {
    options: sampleOptions,
    label: 'Default Dropdown',
    placeholder: 'Choose an option...',
    design: 'flat',
    onSelect: () => {},
  },
};

// Design System Variations
export const Flat: Story = {
  args: {
    options: sampleOptions,
    label: 'Flat Design Dropdown',
    placeholder: 'Select option...',
    design: 'flat',
    onSelect: () => {},
  },
};

export const Neumorphic: Story = {
  args: {
    options: sampleOptions,
    label: 'Neumorphic Design Dropdown',
    placeholder: 'Select option...',
    design: 'neumorphic',
    onSelect: () => {},
  },
};

export const Skeuomorphic: Story = {
  args: {
    options: sampleOptions,
    label: 'Skeuomorphic Design Dropdown',
    placeholder: 'Select option...',
    design: 'skeuomorphic',
    onSelect: () => {},
  },
};

export const Glassmorphic: Story = {
  args: {
    options: sampleOptions,
    label: 'Glassmorphic Design Dropdown',
    placeholder: 'Select option...',
    design: 'glassmorphic',
    onSelect: () => {},
  },
};

export const GlassmorphicDark: Story = {
  args: {
    options: sampleOptions,
    label: 'Glassmorphic Dark Theme',
    placeholder: 'Select option...',
    design: 'glassmorphic',
    onSelect: () => {},
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

// Enhanced Glassmorphic Story Variations (Phase 7 - BAAPUI-8)
export const Playground: Story = {
  args: {
    options: sampleOptions,
    label: 'Playground Dropdown',
    placeholder: 'Interactive controls...',
    design: 'glassmorphic',
    onSelect: () => {},
  },
};

export const LightGlass: Story = {
  args: {
    options: frameworkOptions,
    label: 'Light Glass Dropdown',
    placeholder: 'Select framework...',
    design: 'glassmorphic',
    onSelect: () => {},
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
    options: frameworkOptions,
    label: 'Dark Glass Dropdown',
    placeholder: 'Select framework...',
    design: 'glassmorphic',
    onSelect: () => {},
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
    options: colorOptions,
    label: 'Colored Glass Dropdown',
    placeholder: 'Select color...',
    design: 'glassmorphic',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    onSelect: () => {},
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
    options: sampleOptions,
    label: 'High Blur Dropdown',
    placeholder: 'High blur intensity...',
    design: 'glassmorphic',
    onSelect: () => {},
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
    options: ['Yes', 'No', 'Maybe'],
    label: 'Minimal Glass Dropdown',
    placeholder: 'Simple choice...',
    design: 'glassmorphic',
    onSelect: () => {},
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
      <Dropdown
        options={frameworkOptions}
        label="Layered Glass Dropdown"
        placeholder="Select framework..."
        design="glassmorphic"
        onSelect={() => {}}
      />
    </View>
  ),
};

export const GlassmorphicInteractive: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    
    return (
      <View style={{ padding: 20, maxWidth: 400, gap: 16 }}>
        <Dropdown
          options={frameworkOptions}
          value={selectedValue}
          onSelect={setSelectedValue}
          label="Interactive Glass Dropdown"
          placeholder="Choose your framework..."
          design="glassmorphic"
        />
        {selectedValue && (
          <View style={{ 
            padding: 12, 
            backgroundColor: 'rgba(59, 130, 246, 0.1)', 
            borderRadius: 8,
            backdropFilter: 'blur(10px)'
          }}>
            <Typography variant="caption">Selected: {selectedValue}</Typography>
          </View>
        )}
      </View>
    );
  },
};

// State Variations
export const WithValue: Story = {
  args: {
    options: sampleOptions,
    value: 'Option 2',
    label: 'Pre-selected Value',
    placeholder: 'Choose...',
    design: 'flat',
    onSelect: () => {},
  },
};

// Disabled stories removed - Dropdown component doesn't support disabled prop

// Design-specific State Combinations
export const NeumorphicWithValue: Story = {
  args: {
    options: frameworkOptions,
    value: 'React',
    label: 'Neumorphic with Value',
    placeholder: 'Select framework...',
    design: 'neumorphic',
    onSelect: () => {},
  },
};

export const SkeuomorphicWithValue: Story = {
  args: {
    options: frameworkOptions,
    value: 'Vue',
    label: 'Skeuomorphic with Value',
    placeholder: 'Select framework...',
    design: 'skeuomorphic',
    onSelect: () => {},
  },
};

// NeumorphicDisabled story removed - Dropdown component doesn't support disabled prop

// Custom Color Variations
export const CustomColors: Story = {
  args: {
    options: colorOptions,
    label: 'Custom Colored Dropdown',
    placeholder: 'Select color...',
    backgroundColor: '#f0f8ff',
    textColor: '#2e8b57',
    design: 'flat',
    onSelect: () => {},
  },
};

export const NeumorphicCustomColors: Story = {
  args: {
    options: colorOptions,
    label: 'Custom Neumorphic Colors',
    placeholder: 'Select color...',
    backgroundColor: '#fdf6e3',
    textColor: '#8b4513',
    design: 'neumorphic',
    onSelect: () => {},
  },
};

export const SkeuomorphicCustomColors: Story = {
  args: {
    options: colorOptions,
    label: 'Custom Skeuomorphic Colors',
    placeholder: 'Select color...',
    backgroundColor: '#f5f5dc',
    textColor: '#654321',
    design: 'skeuomorphic',
    onSelect: () => {},
  },
};

// Different Option Sets
export const ShortOptions: Story = {
  args: {
    options: ['Yes', 'No'],
    label: 'Binary Choice',
    placeholder: 'Select...',
    design: 'flat',
    onSelect: () => {},
  },
};

export const LongOptions: Story = {
  args: {
    options: [
      'Very Long Option Name That Might Wrap',
      'Another Extremely Long Option Name',
      'Short',
      'Medium Length Option',
      'Yet Another Very Long Option Name That Tests Wrapping'
    ],
    label: 'Long Option Names',
    placeholder: 'Select option...',
    design: 'neumorphic',
    onSelect: () => {},
  },
};

export const ManyOptions: Story = {
  args: {
    options: Array.from({ length: 20 }, (_, i) => `Option ${i + 1}`),
    label: 'Many Options (Scrollable)',
    placeholder: 'Select from many...',
    design: 'flat',
    onSelect: () => {},
  },
};

// Interactive Examples
const InteractiveDropdownExample = () => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <View style={{ width: 300, gap: 8 }}>
      <Dropdown
        options={frameworkOptions}
        value={value}
        onSelect={setValue}
        label="Choose Framework"
        placeholder="Select framework..."
        design="flat"
      />
      {value && (
        <View style={{ padding: 8, backgroundColor: '#e8f5e8', borderRadius: 4 }}>
          <Typography variant="caption">Selected: {value}</Typography>
        </View>
      )}
    </View>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveDropdownExample />,
};

// All Design Systems Showcase
export const AllDesigns: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 20, maxWidth: 400 }}>
      <View>
        <Dropdown
          options={sampleOptions}
          label="Flat Design"
          placeholder="Select option..."
          design="flat"
          onSelect={() => {}}
        />
      </View>
      <View>
        <Dropdown
          options={sampleOptions}
          label="Neumorphic Design"
          placeholder="Select option..."
          design="neumorphic"
          onSelect={() => {}}
        />
      </View>
      <View>
        <Dropdown
          options={sampleOptions}
          label="Skeuomorphic Design"
          placeholder="Select option..."
          design="skeuomorphic"
          onSelect={() => {}}
        />
      </View>
      <View>
        <Dropdown
          options={sampleOptions}
          label="Glassmorphic Design"
          placeholder="Select option..."
          design="glassmorphic"
          onSelect={() => {}}
        />
      </View>
    </View>
  ),
};

// State Showcase
export const StateShowcase: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 16, maxWidth: 400 }}>
      <Dropdown
        options={sampleOptions}
        label="Normal State"
        placeholder="Select option..."
        design="flat"
        onSelect={() => {}}
      />
      <Dropdown
        options={sampleOptions}
        value="Option 2"
        label="With Selected Value"
        placeholder="Select option..."
        design="flat"
        onSelect={() => {}}
      />
      <Dropdown
        options={sampleOptions}
        label="Normal State (No Disabled Support)"
        placeholder="Select option..."
        design="flat"
        onSelect={() => {}}
      />
      <Dropdown
        options={sampleOptions}
        value="Option 3"
        label="With Value (No Disabled Support)"
        placeholder="Select option..."
        design="flat"
        onSelect={() => {}}
      />
    </View>
  ),
};

// Form Example
export const FormExample: Story = {
  render: () => {
    const [country, setCountry] = useState<string | null>(null);
    const [state, setState] = useState<string | null>(null);
    const [priority, setPriority] = useState<string | null>('Medium');

    const countries = ['United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Japan'];
    const states = ['California', 'New York', 'Texas', 'Florida', 'Illinois'];
    const priorities = ['Low', 'Medium', 'High', 'Critical'];

    return (
      <View style={{ padding: 20, gap: 16, maxWidth: 400 }}>
        <Dropdown
          options={countries}
          value={country}
          onSelect={setCountry}
          label="Country"
          placeholder="Select country..."
          design="neumorphic"
        />
        <Dropdown
          options={states}
          value={state}
          onSelect={setState}
          label="State/Province"
          placeholder="Select state..."
          design="neumorphic"
        />
        <Dropdown
          options={priorities}
          value={priority}
          onSelect={setPriority}
          label="Priority Level"
          placeholder="Select priority..."
          design="neumorphic"
        />
        <Dropdown
          options={['Option A', 'Option B']}
          label="Read-only Selection"
          value="Option A"
          placeholder="Select..."
          design="neumorphic"
          onSelect={() => {}}
        />
      </View>
    );
  },
};

// Category Selection Example
export const CategoryExample: Story = {
  render: () => {
    const [category, setCategory] = useState<string | null>(null);
    const [subcategory, setSubcategory] = useState<string | null>(null);

    const categories = {
      'Electronics': ['Phones', 'Laptops', 'Tablets', 'Accessories'],
      'Clothing': ['Shirts', 'Pants', 'Shoes', 'Accessories'],
      'Books': ['Fiction', 'Non-Fiction', 'Textbooks', 'Children'],
      'Sports': ['Equipment', 'Apparel', 'Footwear', 'Accessories']
    };

    const handleCategoryChange = (newCategory: string) => {
      setCategory(newCategory);
      setSubcategory(null); // Reset subcategory when category changes
    };

    return (
      <View style={{ padding: 20, gap: 16, maxWidth: 400 }}>
        <Dropdown
          options={Object.keys(categories)}
          value={category}
          onSelect={handleCategoryChange}
          label="Category"
          placeholder="Select category..."
          design="flat"
        />
        <Dropdown
          options={category ? categories[category as keyof typeof categories] : []}
          value={subcategory}
          onSelect={setSubcategory}
          label="Subcategory"
          placeholder="Select subcategory..."
          design="flat"
        />
        {category && subcategory && (
          <View style={{ padding: 12, backgroundColor: '#e3f2fd', borderRadius: 6 }}>
            <Typography variant="caption">
              Selected: {category} → {subcategory}
            </Typography>
          </View>
        )}
      </View>
    );
  },
};
