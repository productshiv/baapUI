import React, { useState } from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';
import Typography from '../Typography/Typography';

const meta: Meta<typeof Accordion> = {
  title: 'Navigation/Accordion',
  component: Accordion,
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
      description: 'Design system variant',
    },
    expandedSection: {
      control: 'text',
      description: 'ID of the currently expanded section',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color',
    },
    textColor: {
      control: 'color',
      description: 'Custom text color',
    },
  },
  args: {
    design: 'flat',
    expandedSection: null,
    onToggle: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Sample data sets
const basicSections = [
  {
    id: '1',
    title: 'Section 1',
    content: 'This is the content for section 1. It contains basic information.',
  },
  {
    id: '2',
    title: 'Section 2',
    content: 'This is the content for section 2. It has different information.',
  },
  {
    id: '3',
    title: 'Section 3',
    content: 'This is the content for section 3. Each section can have unique content.',
  },
];

const faqSections = [
  {
    id: 'faq1',
    title: 'What is BaapUI?',
    content: 'BaapUI is a comprehensive multi-design UI framework that supports Flat, Neumorphic, Skeuomorphic, Glassmorphic, and Retro design systems.',
  },
  {
    id: 'faq2',
    title: 'How do I install BaapUI?',
    content: 'You can install BaapUI using npm: npm install baapui. Then import the components you need in your React or React Native project.',
  },
  {
    id: 'faq3',
    title: 'Is BaapUI free to use?',
    content: 'Yes, BaapUI is open source and free to use in both personal and commercial projects under the MIT license.',
  },
  {
    id: 'faq4',
    title: 'Which platforms are supported?',
    content: 'BaapUI supports React, React Native, Next.js, and Expo. It works seamlessly across Web, iOS, and Android platforms.',
  },
];

const featureSections = [
  {
    id: 'design',
    title: '🎨 Multiple Design Systems',
    content: 'Choose from 5 different design paradigms: Flat for modern minimalism, Neumorphic for soft depth, Skeuomorphic for realistic textures, Glassmorphic for translucent effects, and Retro for vintage aesthetics.',
  },
  {
    id: 'components',
    title: '🧩 Rich Component Library',
    content: 'Over 39 production-ready components including forms, navigation, feedback, data display, and layout components. Each component is carefully crafted with attention to detail.',
  },
  {
    id: 'customization',
    title: '⚙️ Extensive Customization',
    content: 'Every component supports custom colors, sizes, styles, and behaviors. Built-in theming system allows for global design consistency while maintaining flexibility.',
  },
  {
    id: 'performance',
    title: '⚡ Optimized Performance',
    content: 'Lightweight bundle size, lazy loading, efficient re-renders, and optimized animations ensure your app runs smoothly across all devices.',
  },
];

const documentationSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    content: 'Learn the basics of BaapUI installation, setup, and your first component implementation. Perfect for developers new to the framework.',
  },
  {
    id: 'theming',
    title: 'Theming Guide',
    content: 'Comprehensive guide to customizing themes, creating custom color palettes, and implementing dark mode support across your application.',
  },
  {
    id: 'components',
    title: 'Component Reference',
    content: 'Detailed documentation for all 39 components including props, examples, best practices, and integration patterns.',
  },
  {
    id: 'migration',
    title: 'Migration Guide',
    content: 'Step-by-step instructions for migrating from other UI libraries, updating between BaapUI versions, and handling breaking changes.',
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    content: 'Common issues, solutions, debugging tips, and community resources to help you resolve problems quickly.',
  },
];

// Default Story
export const Default: Story = {
  args: {
    sections: basicSections,
    expandedSection: null,
  },
};

// Design System Variations
export const Flat: Story = {
  args: {
    sections: basicSections,
    design: 'flat',
    expandedSection: '2',
  },
};

export const Neumorphic: Story = {
  args: {
    sections: basicSections,
    design: 'neumorphic',
    expandedSection: '2',
  },
};

export const Skeuomorphic: Story = {
  args: {
    sections: basicSections,
    design: 'skeuomorphic',
    expandedSection: '2',
  },
};

export const Glassmorphic: Story = {
  args: {
    sections: basicSections,
    design: 'glassmorphic',
    expandedSection: '2',
  },
};

export const GlassmorphicFAQ: Story = {
  args: {
    sections: faqSections.slice(0, 3),
    design: 'glassmorphic',
    expandedSection: 'faq2',
  },
};

export const GlassmorphicDarkMode: Story = {
  args: {
    sections: basicSections,
    design: 'glassmorphic',
    expandedSection: '1',
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

export const GlassmorphicPlayground: Story = {
  args: {
    sections: featureSections,
    design: 'glassmorphic',
    expandedSection: 'design',
  },
};

// Enhanced Glassmorphic Story Variations (Phase 7 - BAAPUI-8)
export const LightGlass: Story = {
  args: {
    sections: basicSections,
    design: 'glassmorphic',
    expandedSection: '2',
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
    sections: basicSections,
    design: 'glassmorphic',
    expandedSection: '1',
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
    sections: [
      {
        id: '1',
        title: '🔵 Blue Glass Section',
        content: 'This section demonstrates blue-tinted glassmorphic effects.',
      },
      {
        id: '2',
        title: '🟣 Purple Glass Section',
        content: 'This section showcases purple-tinted glassmorphic styling.',
      },
      {
        id: '3',
        title: '🟢 Green Glass Section',
        content: 'This section features green-tinted glassmorphic design.',
      },
    ],
    design: 'glassmorphic',
    expandedSection: '2',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
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
    sections: [
      {
        id: '1',
        title: 'High Blur Glass Effect',
        content: 'This accordion demonstrates maximum blur intensity for enhanced glass effects on complex backgrounds.',
      },
      {
        id: '2',
        title: 'Enhanced Visual Depth',
        content: 'The high blur setting creates stronger visual separation and depth perception.',
      },
    ],
    design: 'glassmorphic',
    expandedSection: '1',
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
    sections: [
      {
        id: '1',
        title: 'Minimal Glass',
        content: 'Clean and subtle glass effect.',
      },
      {
        id: '2',
        title: 'Simple Design',
        content: 'Understated glassmorphic styling.',
      },
    ],
    design: 'glassmorphic',
    expandedSection: '1',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
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
  render: () => {
    const [expandedSection, setExpandedSection] = useState('layer1');
    
    return (
      <View style={{ 
        position: 'relative',
        padding: 40,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 20,
        minHeight: 400
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
        <View style={{ position: 'relative', zIndex: 10 }}>
          <Typography variant="h6" style={{ marginBottom: 20, textAlign: 'center', color: 'white' }}>
            Layered Glass Accordion
          </Typography>
          <Accordion
            sections={[
              {
                id: 'layer1',
                title: 'First Glass Layer',
                content: 'This accordion sits on multiple glass layers creating depth and visual interest.',
              },
              {
                id: 'layer2',
                title: 'Second Glass Layer',
                content: 'Each layer adds to the overall glassmorphic effect and visual hierarchy.',
              },
            ]}
            design="glassmorphic"
            expandedSection={expandedSection}
            onToggle={setExpandedSection}
          />
        </View>
      </View>
    );
  },
};

export const GlassmorphicInteractive: Story = {
  render: () => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    const [interactionCount, setInteractionCount] = useState(0);
    
    const handleToggle = (sectionId: string | null) => {
      setExpandedSection(expandedSection === sectionId ? null : sectionId);
      setInteractionCount(prev => prev + 1);
    };
    
    return (
      <View style={{ gap: 16, padding: 20 }}>
        <Typography variant="h6" style={{ textAlign: 'center' }}>
          Interactive Glass Accordion
        </Typography>
        <Typography variant="caption" style={{ textAlign: 'center', color: '#666' }}>
          Interactions: {interactionCount}
        </Typography>
        
        <Accordion
          sections={[
            {
              id: 'interactive1',
              title: '🎯 Interactive Section 1',
              content: `This section responds to user interactions. Current state: ${expandedSection === 'interactive1' ? 'Expanded' : 'Collapsed'}`,
            },
            {
              id: 'interactive2',
              title: '⚡ Dynamic Section 2',
              content: `Real-time content updates based on interactions. Total clicks: ${interactionCount}`,
            },
            {
              id: 'interactive3',
              title: '🔄 Responsive Section 3',
              content: `This content changes based on user behavior and demonstrates interactive glassmorphic design.`,
            },
          ]}
          design="glassmorphic"
          expandedSection={expandedSection}
          onToggle={handleToggle}
        />
        
        {expandedSection && (
          <View style={{
            padding: 12,
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
            borderRadius: 8,
            marginTop: 8,
            backdropFilter: 'blur(10px)'
          }}>
            <Typography variant="caption" style={{ color: '#059669', textAlign: 'center' }}>
              Currently viewing: {expandedSection}
            </Typography>
          </View>
        )}
      </View>
    );
   },
 };

// State Variations
export const Collapsed: Story = {
  args: {
    sections: basicSections,
    expandedSection: null,
    design: 'flat',
  },
};

export const FirstExpanded: Story = {
  args: {
    sections: basicSections,
    expandedSection: '1',
    design: 'flat',
  },
};

export const LastExpanded: Story = {
  args: {
    sections: basicSections,
    expandedSection: '3',
    design: 'flat',
  },
};

// Content Variations
export const ShortContent: Story = {
  args: {
    sections: [
      { id: '1', title: 'Short Section', content: 'Brief content.' },
      { id: '2', title: 'Another Short Section', content: 'Also brief.' },
    ],
    expandedSection: '1',
    design: 'flat',
  },
};

export const LongContent: Story = {
  args: {
    sections: [
      {
        id: '1',
        title: 'Detailed Information',
        content: 'This section contains much longer content that demonstrates how the accordion handles extensive text. It includes multiple sentences, detailed explanations, and comprehensive information that would typically be found in documentation or help sections. The accordion should gracefully expand to accommodate all this content while maintaining proper spacing and readability.',
      },
      {
        id: '2',
        title: 'Technical Specifications',
        content: 'Here we have another lengthy section with technical details, specifications, requirements, and implementation notes. This type of content is common in developer documentation, product specifications, and detailed feature descriptions. The accordion component should handle this content efficiently.',
      },
    ],
    expandedSection: '1',
    design: 'neumorphic',
  },
};

export const ManyItems: Story = {
  args: {
    sections: Array.from({ length: 8 }, (_, i) => ({
      id: `item-${i + 1}`,
      title: `Item ${i + 1}`,
      content: `This is the content for item ${i + 1}. Each item has unique content to demonstrate the accordion's capability with multiple sections.`,
    })),
    expandedSection: 'item-4',
    design: 'flat',
  },
};

// Custom Color Variations
export const CustomColors: Story = {
  args: {
    sections: basicSections,
    backgroundColor: '#f0f8ff',
    textColor: '#2e8b57',
    design: 'flat',
    expandedSection: '2',
  },
};

export const NeumorphicCustomColors: Story = {
  args: {
    sections: basicSections,
    backgroundColor: '#fdf6e3',
    textColor: '#8b4513',
    design: 'neumorphic',
    expandedSection: '2',
  },
};

// Interactive Examples
const BasicInteractiveExample = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('1');

  const handleToggle = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <View style={{ minWidth: 400 }}>
      <Typography variant="h6" style={{ marginBottom: 16 }}>
        Interactive Accordion
      </Typography>
      <Accordion
        sections={basicSections}
        expandedSection={expandedSection}
        onToggle={handleToggle}
        design="flat"
      />
    </View>
  );
};

export const BasicInteractive: Story = {
  render: () => <BasicInteractiveExample />,
};

// FAQ Example
const FAQExample = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <View style={{ minWidth: 500 }}>
      <Typography variant="h5" style={{ marginBottom: 20, textAlign: 'center' }}>
        Frequently Asked Questions
      </Typography>
      <Accordion
        sections={faqSections}
        expandedSection={expandedSection}
        onToggle={handleToggle}
        design="neumorphic"
      />
    </View>
  );
};

export const FAQ: Story = {
  render: () => <FAQExample />,
};

// Features Showcase Example
const FeaturesExample = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('design');

  const handleToggle = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <View style={{ minWidth: 500 }}>
      <Typography variant="h5" style={{ marginBottom: 20, textAlign: 'center' }}>
        BaapUI Features
      </Typography>
      <Accordion
        sections={featureSections}
        expandedSection={expandedSection}
        onToggle={handleToggle}
        design="neumorphic"
        backgroundColor="#f8f9fa"
        textColor="#495057"
      />
    </View>
  );
};

export const Features: Story = {
  render: () => <FeaturesExample />,
};

// Documentation Navigation Example
const DocumentationExample = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <View style={{ minWidth: 500 }}>
      <Typography variant="h5" style={{ marginBottom: 20, textAlign: 'center' }}>
        Documentation Sections
      </Typography>
      <Accordion
        sections={documentationSections}
        expandedSection={expandedSection}
        onToggle={handleToggle}
        design="flat"
      />
    </View>
  );
};

export const Documentation: Story = {
  render: () => <DocumentationExample />,
};

// Settings Panel Example
const SettingsExample = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('account');

  const settingsSections = [
    {
      id: 'account',
      title: '👤 Account Settings',
      content: 'Manage your profile information, email preferences, password, and account security settings. Update your personal details and privacy preferences.',
    },
    {
      id: 'notifications',
      title: '🔔 Notification Preferences',
      content: 'Configure email notifications, push notifications, and in-app alerts. Choose what updates you want to receive and how often.',
    },
    {
      id: 'appearance',
      title: '🎨 Appearance & Theme',
      content: 'Customize the look and feel of your interface. Switch between light and dark modes, choose accent colors, and adjust display settings.',
    },
    {
      id: 'privacy',
      title: '🔒 Privacy & Security',
      content: 'Control your privacy settings, manage data sharing preferences, enable two-factor authentication, and review security logs.',
    },
    {
      id: 'advanced',
      title: '⚙️ Advanced Options',
      content: 'Developer settings, API access, experimental features, and advanced configuration options for power users.',
    },
  ];

  const handleToggle = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <View style={{ minWidth: 500 }}>
      <Typography variant="h5" style={{ marginBottom: 20, textAlign: 'center' }}>
        Settings Panel
      </Typography>
      <Accordion
        sections={settingsSections}
        expandedSection={expandedSection}
        onToggle={handleToggle}
        design="neumorphic"
        backgroundColor="#f5f5f5"
        textColor="#333"
      />
    </View>
  );
};

export const Settings: Story = {
  render: () => <SettingsExample />,
};

// All Design Systems Showcase
export const AllDesigns: Story = {
  render: () => (
    <View style={{ gap: 30, minWidth: 500 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Design Systems</Typography>
      
      <View style={{ gap: 16 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Flat Design</Typography>
        <Accordion
          sections={basicSections.slice(0, 2)}
          expandedSection="1"
          onToggle={() => {}}
          design="flat"
        />
      </View>

      <View style={{ gap: 16 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Neumorphic Design</Typography>
        <Accordion
          sections={basicSections.slice(0, 2)}
          expandedSection="2"
          onToggle={() => {}}
          design="neumorphic"
        />
      </View>

      <View style={{ gap: 16 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Skeuomorphic Design</Typography>
        <Accordion
          sections={basicSections.slice(0, 2)}
          expandedSection="1"
          onToggle={() => {}}
          design="skeuomorphic"
        />
      </View>

      <View style={{ gap: 16 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Glassmorphic Design</Typography>
        <Accordion
          sections={basicSections.slice(0, 2)}
          expandedSection="2"
          onToggle={() => {}}
          design="glassmorphic"
        />
      </View>
    </View>
  ),
};

// State Showcase
export const StateShowcase: Story = {
  render: () => (
    <View style={{ gap: 30, minWidth: 500 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Accordion States</Typography>
      
      <View style={{ gap: 16 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>All Collapsed</Typography>
        <Accordion
          sections={basicSections}
          expandedSection={null}
          onToggle={() => {}}
          design="flat"
        />
      </View>

      <View style={{ gap: 16 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>First Section Expanded</Typography>
        <Accordion
          sections={basicSections}
          expandedSection="1"
          onToggle={() => {}}
          design="flat"
        />
      </View>

      <View style={{ gap: 16 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Middle Section Expanded</Typography>
        <Accordion
          sections={basicSections}
          expandedSection="2"
          onToggle={() => {}}
          design="flat"
        />
      </View>
    </View>
  ),
};

// Content Length Showcase
export const ContentLengthShowcase: Story = {
  render: () => (
    <View style={{ gap: 30, minWidth: 500 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Content Length Variations</Typography>
      
      <View style={{ gap: 16 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Short Content</Typography>
        <Accordion
          sections={[
            { id: '1', title: 'Brief Section', content: 'Short content.' },
            { id: '2', title: 'Quick Info', content: 'Minimal text.' },
          ]}
          expandedSection="1"
          onToggle={() => {}}
          design="neumorphic"
        />
      </View>

      <View style={{ gap: 16 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Long Content</Typography>
        <Accordion
          sections={[
            {
              id: '1',
              title: 'Detailed Section',
              content: 'This is a much longer piece of content that demonstrates how the accordion component handles extensive text. It includes multiple sentences and detailed information that would be typical in documentation or help sections.',
            },
          ]}
          expandedSection="1"
          onToggle={() => {}}
          design="neumorphic"
        />
      </View>
    </View>
  ),
};

// Color Variations Showcase
export const ColorShowcase: Story = {
  render: () => (
    <View style={{ gap: 30, minWidth: 500 }}>
      <Typography variant="h6" style={{ textAlign: 'center' }}>Color Variations</Typography>
      
      <View style={{ gap: 16 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Blue Theme</Typography>
        <Accordion
          sections={basicSections.slice(0, 2)}
          expandedSection="1"
          onToggle={() => {}}
          design="neumorphic"
          backgroundColor="#e3f2fd"
          textColor="#1565c0"
        />
      </View>

      <View style={{ gap: 16 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Green Theme</Typography>
        <Accordion
          sections={basicSections.slice(0, 2)}
          expandedSection="2"
          onToggle={() => {}}
          design="neumorphic"
          backgroundColor="#e8f5e8"
          textColor="#2e7d32"
        />
      </View>

      <View style={{ gap: 16 }}>
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>Orange Theme</Typography>
        <Accordion
          sections={basicSections.slice(0, 2)}
          expandedSection="1"
          onToggle={() => {}}
          design="neumorphic"
          backgroundColor="#fff3e0"
          textColor="#e65100"
        />
      </View>
    </View>
  ),
};
