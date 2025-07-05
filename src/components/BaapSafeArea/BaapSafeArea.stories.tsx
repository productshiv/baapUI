import React from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import BaapSafeArea from './BaapSafeArea';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import Card from '../Card/Card';

const meta: Meta<typeof BaapSafeArea> = {
  title: 'Utility/BaapSafeArea',
  component: BaapSafeArea,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    design: {
      control: 'select',
      options: ['flat', 'neumorphic'],
      defaultValue: 'flat',
      description: 'Design system variant',
    },
    disableScroll: {
      control: 'boolean',
      defaultValue: false,
      description: 'Disable scrolling functionality',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color',
    },
    contentContainerStyle: {
      control: 'object',
      description: 'Custom styles for the content container',
    },
  },
  args: {
    design: 'flat',
    disableScroll: false,
  },
};

export default meta;
type Story = StoryObj<typeof BaapSafeArea>;

// Sample content components
const SampleContent = ({ title, description }: { title: string; description: string }) => (
  <View style={{ padding: 16, gap: 12 }}>
    <Typography variant="h6">{title}</Typography>
    <Typography variant="body">{description}</Typography>
  </View>
);

const LongContent = () => (
  <View style={{ padding: 20, gap: 16 }}>
    <Typography variant="h4">Long Content Example</Typography>
    <Typography variant="body">
      This is an example of long content that demonstrates the scrolling capabilities of BaapSafeArea.
    </Typography>
    
    {Array.from({ length: 20 }, (_, i) => (
      <Card key={i} style={{ padding: 16 }}>
        <Typography variant="h6">Section {i + 1}</Typography>
        <Typography variant="body">
          This is section {i + 1} of the long content. Each section contains meaningful information
          that helps demonstrate how the BaapSafeArea component handles scrollable content while
          maintaining safe area boundaries on all devices.
        </Typography>
      </Card>
    ))}
    
    <Button onPress={() => alert('Bottom reached!')}>
      You've reached the bottom!
    </Button>
  </View>
);

// Default Story
export const Default: Story = {
  render: () => (
    <BaapSafeArea style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <SampleContent
        title="Default Safe Area"
        description="This content is rendered within safe area boundaries with default settings."
      />
    </BaapSafeArea>
  ),
};

// Design System Variations
export const Flat: Story = {
  render: () => (
    <BaapSafeArea design="flat" style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <SampleContent
        title="Flat Design Safe Area"
        description="Clean and modern flat design with minimal visual elements."
      />
    </BaapSafeArea>
  ),
};

export const Neumorphic: Story = {
  render: () => (
    <BaapSafeArea design="neumorphic" style={{ flex: 1 }}>
      <SampleContent
        title="Neumorphic Design Safe Area"
        description="Soft, subtle shadows create depth and dimension in the neumorphic style."
      />
    </BaapSafeArea>
  ),
};

// Scroll Mode Variations
export const WithScrolling: Story = {
  render: () => (
    <BaapSafeArea style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      <LongContent />
    </BaapSafeArea>
  ),
};

export const NoScrolling: Story = {
  render: () => (
    <BaapSafeArea disableScroll style={{ flex: 1, backgroundColor: '#e9ecef' }}>
      <SampleContent
        title="No Scrolling Mode"
        description="Content is displayed without scrolling. Perfect for fixed layouts."
      />
    </BaapSafeArea>
  ),
};

// Custom Styling Variations
export const CustomBackground: Story = {
  render: () => (
    <BaapSafeArea style={{ flex: 1, backgroundColor: '#e3f2fd' }}>
      <SampleContent
        title="Custom Background Color"
        description="Safe area with a custom light blue background color."
      />
    </BaapSafeArea>
  ),
};

export const CustomPadding: Story = {
  render: () => (
    <BaapSafeArea
      style={{ flex: 1, backgroundColor: '#fff3e0' }}
      contentContainerStyle={{ padding: 32 }}
    >
      <SampleContent
        title="Custom Content Padding"
        description="Safe area with custom padding applied to the content container."
      />
    </BaapSafeArea>
  ),
};

export const NeumorphicCustomColors: Story = {
  render: () => (
    <BaapSafeArea
      design="neumorphic"
      backgroundColor="#fdf6e3"
      style={{ flex: 1 }}
    >
      <SampleContent
        title="Neumorphic with Custom Colors"
        description="Neumorphic design with warm, custom background colors."
      />
    </BaapSafeArea>
  ),
};

// Real-world Examples
const AppLayoutExample = () => (
  <BaapSafeArea style={{ flex: 1, backgroundColor: '#ffffff' }}>
    <View style={{ padding: 20, gap: 24 }}>
      {/* Header */}
      <View style={{ gap: 8 }}>
        <Typography variant="h4">My App</Typography>
        <Typography variant="body2" style={{ color: '#666' }}>
          Welcome to the main dashboard
        </Typography>
      </View>

      {/* Navigation Cards */}
      <View style={{ gap: 16 }}>
        <Card style={{ padding: 20 }}>
          <Typography variant="h6">🏠 Home</Typography>
          <Typography variant="body">Access your main dashboard and recent activity.</Typography>
        </Card>
        
        <Card style={{ padding: 20 }}>
          <Typography variant="h6">📊 Analytics</Typography>
          <Typography variant="body">View detailed analytics and performance metrics.</Typography>
        </Card>
        
        <Card style={{ padding: 20 }}>
          <Typography variant="h6">⚙️ Settings</Typography>
          <Typography variant="body">Customize your app preferences and account settings.</Typography>
        </Card>
      </View>

      {/* Action Buttons */}
      <View style={{ gap: 12, marginTop: 'auto' }}>
        <Button>Primary Action</Button>
        <Button variant="outline">Secondary Action</Button>
      </View>
    </View>
  </BaapSafeArea>
);

export const AppLayout: Story = {
  render: () => <AppLayoutExample />,
};

const ScrollableContentExample = () => (
  <BaapSafeArea style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
    <View style={{ padding: 20, gap: 16 }}>
      <Typography variant="h5">Article Title</Typography>
      <Typography variant="caption" style={{ color: '#6c757d' }}>
        Published on March 15, 2024
      </Typography>
      
      <Typography variant="body">
        This is the beginning of a long article that demonstrates how BaapSafeArea handles
        scrollable content. The safe area ensures that content is always visible and accessible,
        even on devices with notches, home indicators, or other screen interruptions.
      </Typography>

      {Array.from({ length: 15 }, (_, i) => (
        <View key={i} style={{ gap: 8 }}>
          <Typography variant="h6">Section {i + 1}</Typography>
          <Typography variant="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.
          </Typography>
        </View>
      ))}

      <View style={{ marginTop: 20, gap: 12 }}>
        <Button>Share Article</Button>
        <Button variant="outline">Save for Later</Button>
      </View>
    </View>
  </BaapSafeArea>
);

export const ScrollableContent: Story = {
  render: () => <ScrollableContentExample />,
};

const OnboardingScreenExample = () => (
  <BaapSafeArea design="neumorphic" style={{ flex: 1 }}>
    <View style={{ 
      flex: 1, 
      padding: 32, 
      justifyContent: 'center', 
      alignItems: 'center',
      gap: 32 
    }}>
      <View style={{ alignItems: 'center', gap: 16 }}>
        <Typography variant="h2" style={{ textAlign: 'center' }}>
          🎉
        </Typography>
        <Typography variant="h4" style={{ textAlign: 'center' }}>
          Welcome to BaapUI
        </Typography>
        <Typography variant="body" style={{ textAlign: 'center', color: '#666' }}>
          Build beautiful apps with our comprehensive UI framework
        </Typography>
      </View>

      <View style={{ gap: 16, width: '100%', maxWidth: 300 }}>
        <Button>Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </View>
    </View>
  </BaapSafeArea>
);

export const OnboardingScreen: Story = {
  render: () => <OnboardingScreenExample />,
};

const SettingsScreenExample = () => (
  <BaapSafeArea style={{ flex: 1, backgroundColor: '#ffffff' }}>
    <View style={{ padding: 20, gap: 20 }}>
      <Typography variant="h5">Settings</Typography>
      
      <View style={{ gap: 16 }}>
        <Card style={{ padding: 16 }}>
          <Typography variant="h6">Account</Typography>
          <Typography variant="body2" style={{ color: '#666', marginTop: 4 }}>
            Manage your profile and account preferences
          </Typography>
        </Card>

        <Card style={{ padding: 16 }}>
          <Typography variant="h6">Notifications</Typography>
          <Typography variant="body2" style={{ color: '#666', marginTop: 4 }}>
            Configure how you receive notifications
          </Typography>
        </Card>

        <Card style={{ padding: 16 }}>
          <Typography variant="h6">Privacy</Typography>
          <Typography variant="body2" style={{ color: '#666', marginTop: 4 }}>
            Control your privacy and data sharing settings
          </Typography>
        </Card>

        <Card style={{ padding: 16 }}>
          <Typography variant="h6">About</Typography>
          <Typography variant="body2" style={{ color: '#666', marginTop: 4 }}>
            App version, terms of service, and support
          </Typography>
        </Card>
      </View>

      <View style={{ marginTop: 'auto', gap: 12 }}>
        <Button variant="outline" style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}>
          <Typography style={{ color: 'white' }}>Sign Out</Typography>
        </Button>
      </View>
    </View>
  </BaapSafeArea>
);

export const SettingsScreen: Story = {
  render: () => <SettingsScreenExample />,
};

// All Design Systems Showcase
export const AllDesigns: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', height: '100vh' }}>
      <View style={{ flex: 1 }}>
        <Typography variant="h6" style={{ padding: 16, backgroundColor: '#f8f9fa' }}>
          Flat Design
        </Typography>
        <BaapSafeArea design="flat" style={{ flex: 1, backgroundColor: '#ffffff' }}>
          <SampleContent
            title="Flat Design"
            description="Clean, minimal design with flat elements and no visual depth."
          />
        </BaapSafeArea>
      </View>
      
      <View style={{ flex: 1 }}>
        <Typography variant="h6" style={{ padding: 16, backgroundColor: '#f8f9fa' }}>
          Neumorphic Design
        </Typography>
        <BaapSafeArea design="neumorphic" style={{ flex: 1 }}>
          <SampleContent
            title="Neumorphic Design"
            description="Soft shadows and highlights create subtle depth and dimension."
          />
        </BaapSafeArea>
      </View>
    </View>
  ),
};

// Scroll Mode Showcase
export const ScrollModeShowcase: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', height: '100vh' }}>
      <View style={{ flex: 1 }}>
        <Typography variant="h6" style={{ padding: 16, backgroundColor: '#f8f9fa' }}>
          With Scrolling
        </Typography>
        <BaapSafeArea style={{ flex: 1, backgroundColor: '#ffffff' }}>
          <View style={{ padding: 20, gap: 16 }}>
            <Typography variant="h6">Scrollable Content</Typography>
            {Array.from({ length: 10 }, (_, i) => (
              <Card key={i} style={{ padding: 12 }}>
                <Typography variant="body">Item {i + 1}</Typography>
              </Card>
            ))}
          </View>
        </BaapSafeArea>
      </View>
      
      <View style={{ flex: 1 }}>
        <Typography variant="h6" style={{ padding: 16, backgroundColor: '#f8f9fa' }}>
          No Scrolling
        </Typography>
        <BaapSafeArea disableScroll style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
          <View style={{ padding: 20, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Typography variant="h6">Fixed Layout</Typography>
            <Typography variant="body" style={{ textAlign: 'center', marginTop: 8 }}>
              Content is displayed without scrolling
            </Typography>
          </View>
        </BaapSafeArea>
      </View>
    </View>
  ),
};

// Color Variations Showcase
export const ColorShowcase: Story = {
  render: () => (
    <View style={{ gap: 20, height: '100vh' }}>
      <Typography variant="h6" style={{ padding: 16, backgroundColor: '#f8f9fa' }}>
        Color Variations
      </Typography>
      
      <View style={{ flexDirection: 'row', flex: 1, gap: 20, padding: 20 }}>
        <BaapSafeArea design="neumorphic" backgroundColor="#e3f2fd" style={{ flex: 1 }}>
          <SampleContent
            title="Blue Theme"
            description="Cool blue background for a calming effect."
          />
        </BaapSafeArea>
        
        <BaapSafeArea design="neumorphic" backgroundColor="#e8f5e8" style={{ flex: 1 }}>
          <SampleContent
            title="Green Theme"
            description="Fresh green background for natural feel."
          />
        </BaapSafeArea>
        
        <BaapSafeArea design="neumorphic" backgroundColor="#fff3e0" style={{ flex: 1 }}>
          <SampleContent
            title="Orange Theme"
            description="Warm orange background for energetic vibe."
          />
        </BaapSafeArea>
      </View>
    </View>
  ),
};