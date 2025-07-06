import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TwoColumn from './TwoColumn';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import Card from '../Card/Card';

const meta: Meta<typeof TwoColumn> = {
  title: 'Layout/TwoColumn',
  component: TwoColumn,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    design: {
      control: { type: 'radio' },
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'],
      description: 'Design system variant',
    },
    gap: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
      description: 'Gap between columns',
    },
    ratio: {
      control: { type: 'select' },
      options: ['1:1', '1:2', '2:1', '1:3', '3:1'],
      description: 'Column width ratio',
    },
    alignment: {
      control: { type: 'select' },
      options: ['top', 'center', 'bottom', 'stretch'],
      description: 'Vertical alignment of columns',
    },
    stackOnMobile: {
      control: { type: 'boolean' },
      description: 'Stack columns on mobile devices',
    },
    reverseOnMobile: {
      control: { type: 'boolean' },
      description: 'Reverse column order on mobile',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    design: 'flat',
    gap: 'medium',
    ratio: '1:1',
    stackOnMobile: true,
    alignment: 'top',
    left: (
      <Card>
        <Typography variant="h4" style={{ marginBottom: 16 }}>
          Left Column
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16 }}>
          This is the left column content. Both columns have equal width (1:1 ratio).
        </Typography>
        <Button variant="primary">Left Action</Button>
      </Card>
    ),
    right: (
      <Card>
        <Typography variant="h4" style={{ marginBottom: 16 }}>
          Right Column
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16 }}>
          This is the right column content. On mobile, columns will stack vertically.
        </Typography>
        <Button variant="outline">Right Action</Button>
      </Card>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
        <Story />
      </div>
    ),
  ],
};

// Phase 7 Story Requirements - Enhanced Glassmorphic Variations

export const Playground: Story = {
  args: {
    design: 'glassmorphic',
    gap: 'medium',
    ratio: '1:1',
    stackOnMobile: true,
    alignment: 'top',
    left: (
      <Card design="glassmorphic">
        <Typography variant="h4" style={{ marginBottom: 16 }} design="glassmorphic">
          Playground Left
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16 }} design="glassmorphic">
          Experiment with all TwoColumn controls in the Controls panel.
        </Typography>
        <Button variant="primary" design="glassmorphic">Interactive</Button>
      </Card>
    ),
    right: (
      <Card design="glassmorphic">
        <Typography variant="h4" style={{ marginBottom: 16 }} design="glassmorphic">
          Playground Right
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16 }} design="glassmorphic">
          Adjust gap, ratio, alignment, and other layout properties live.
        </Typography>
        <Button variant="outline" design="glassmorphic">Customize</Button>
      </Card>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <Story />
      </div>
    ),
  ],
};

export const LightGlass: Story = {
  args: {
    design: 'glassmorphic',
    gap: 'medium',
    ratio: '1:1',
    stackOnMobile: true,
    alignment: 'center',
    left: (
      <Card design="glassmorphic" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        <Typography variant="h4" style={{ marginBottom: 16, color: '#333' }}>
          Light Glass Effect
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16, color: '#555' }}>
          Subtle glassmorphic effect with minimal opacity and light tinting.
        </Typography>
        <Button variant="primary" design="glassmorphic">Light Action</Button>
      </Card>
    ),
    right: (
      <Card design="glassmorphic" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        <Typography variant="h4" style={{ marginBottom: 16, color: '#333' }}>
          Gentle Transparency
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16, color: '#555' }}>
          Perfect for light backgrounds with subtle glass aesthetics.
        </Typography>
        <Button variant="outline" design="glassmorphic">Explore</Button>
      </Card>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ 
        padding: '40px', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
      }}>
        <Story />
      </div>
    ),
  ],
};

export const DarkGlass: Story = {
  args: {
    design: 'glassmorphic',
    gap: 'large',
    ratio: '1:1',
    stackOnMobile: true,
    alignment: 'center',
    left: (
      <Card design="glassmorphic" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <Typography variant="h4" style={{ marginBottom: 16, color: 'white' }}>
          Dark Glass Effect
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16, color: 'rgba(255, 255, 255, 0.8)' }}>
          Prominent glassmorphic effect with dark tinting and strong contrast.
        </Typography>
        <Button variant="primary" design="glassmorphic">Dark Action</Button>
      </Card>
    ),
    right: (
      <Card design="glassmorphic" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <Typography variant="h4" style={{ marginBottom: 16, color: 'white' }}>
          Deep Transparency
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16, color: 'rgba(255, 255, 255, 0.8)' }}>
          Ideal for dark backgrounds with sophisticated glass effects.
        </Typography>
        <Button variant="outline" design="glassmorphic">Discover</Button>
      </Card>
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
  decorators: [
    (Story) => (
      <div style={{ 
        padding: '40px',
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)'
      }}>
        <Story />
      </div>
    ),
  ],
};

export const ColoredGlass: Story = {
  render: () => (
    <>
      {/* Blue Glass */}
      <TwoColumn 
        design="glassmorphic" 
        gap="medium" 
        ratio="1:1" 
        style={{ marginBottom: 24 }}
        left={(
          <Card design="glassmorphic" style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}>
            <Typography variant="h5" style={{ marginBottom: 12, color: 'white' }}>Blue Glass</Typography>
            <Typography variant="body" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Cool blue tinted glass effect.</Typography>
          </Card>
        )}
        right={(
          <Card design="glassmorphic" style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}>
            <Typography variant="h5" style={{ marginBottom: 12, color: 'white' }}>Ocean Vibes</Typography>
            <Typography variant="body" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Calming blue transparency.</Typography>
          </Card>
        )}
      />
      
      {/* Purple Glass */}
      <TwoColumn 
        design="glassmorphic" 
        gap="medium" 
        ratio="1:1" 
        style={{ marginBottom: 24 }}
        left={(
          <Card design="glassmorphic" style={{ backgroundColor: 'rgba(147, 51, 234, 0.2)' }}>
            <Typography variant="h5" style={{ marginBottom: 12, color: 'white' }}>Purple Glass</Typography>
            <Typography variant="body" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Elegant purple tinted glass.</Typography>
          </Card>
        )}
        right={(
          <Card design="glassmorphic" style={{ backgroundColor: 'rgba(147, 51, 234, 0.2)' }}>
            <Typography variant="h5" style={{ marginBottom: 12, color: 'white' }}>Royal Touch</Typography>
            <Typography variant="body" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Sophisticated purple hues.</Typography>
          </Card>
        )}
      />
      
      {/* Green Glass */}
      <TwoColumn 
        design="glassmorphic" 
        gap="medium" 
        ratio="1:1"
        left={(
          <Card design="glassmorphic" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)' }}>
            <Typography variant="h5" style={{ marginBottom: 12, color: 'white' }}>Green Glass</Typography>
            <Typography variant="body" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Fresh green tinted glass.</Typography>
          </Card>
        )}
        right={(
          <Card design="glassmorphic" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)' }}>
            <Typography variant="h5" style={{ marginBottom: 12, color: 'white' }}>Nature Inspired</Typography>
            <Typography variant="body" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Vibrant green transparency.</Typography>
          </Card>
        )}
      />
    </>
  ),
  decorators: [
    (Story) => (
      <div style={{ 
        padding: '20px', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
      }}>
        <Story />
      </div>
    ),
  ],
};

export const HighBlur: Story = {
  args: {
    design: 'glassmorphic',
    gap: 'large',
    ratio: '1:1',
    stackOnMobile: true,
    alignment: 'center',
    left: (
      <Card design="glassmorphic" style={{ 
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
      }}>
        <Typography variant="h4" style={{ marginBottom: 16, color: 'white' }}>
          Maximum Blur
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16, color: 'rgba(255, 255, 255, 0.8)' }}>
          Extreme blur effect for dramatic glassmorphic aesthetics.
        </Typography>
        <Button variant="primary" design="glassmorphic">High Blur</Button>
      </Card>
    ),
    right: (
      <Card design="glassmorphic" style={{ 
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
      }}>
        <Typography variant="h4" style={{ marginBottom: 16, color: 'white' }}>
          Intense Effect
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16, color: 'rgba(255, 255, 255, 0.8)' }}>
          Strong backdrop blur creates deep glass illusion.
        </Typography>
        <Button variant="outline" design="glassmorphic">Experience</Button>
      </Card>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ 
        padding: '40px',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        backgroundColor: '#667eea'
      }}>
        <Story />
      </div>
    ),
  ],
};

export const MinimalGlass: Story = {
  args: {
    design: 'glassmorphic',
    gap: 'small',
    ratio: '1:1',
    stackOnMobile: true,
    alignment: 'top',
    left: (
      <Card design="glassmorphic" style={{ 
        backdropFilter: 'blur(2px)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <Typography variant="h4" style={{ marginBottom: 16, color: '#333' }}>
          Minimal Glass
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16, color: '#555' }}>
          Subtle glassmorphic effect with minimal blur and transparency.
        </Typography>
        <Button variant="primary" design="glassmorphic">Minimal</Button>
      </Card>
    ),
    right: (
      <Card design="glassmorphic" style={{ 
        backdropFilter: 'blur(2px)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <Typography variant="h4" style={{ marginBottom: 16, color: '#333' }}>
          Understated
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16, color: '#555' }}>
          Perfect for interfaces requiring subtle depth without distraction.
        </Typography>
        <Button variant="outline" design="glassmorphic">Refined</Button>
      </Card>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ 
        padding: '20px', 
        background: 'linear-gradient(45deg, #f0f0f0 0%, #e0e0e0 100%)' 
      }}>
        <Story />
      </div>
    ),
  ],
};

export const LayeredGlass: Story = {
  args: {
    design: 'glassmorphic',
    gap: 'medium',
    ratio: '1:1',
    stackOnMobile: true,
    alignment: 'center',
    left: (
      <div style={{ position: 'relative' }}>
        {/* Background layer */}
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          right: '-10px',
          bottom: '-10px',
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }} />
        {/* Foreground layer */}
        <Card design="glassmorphic" style={{ 
          position: 'relative',
          zIndex: 2,
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)'
        }}>
          <Typography variant="h4" style={{ marginBottom: 16, color: 'white' }}>
            Layered Glass
          </Typography>
          <Typography variant="body" style={{ marginBottom: 16, color: 'rgba(255, 255, 255, 0.9)' }}>
            Multiple glass layers create depth and visual hierarchy.
          </Typography>
          <Button variant="primary" design="glassmorphic">Layered</Button>
        </Card>
      </div>
    ),
    right: (
      <div style={{ position: 'relative' }}>
        {/* Background layer */}
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          right: '-10px',
          bottom: '-10px',
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }} />
        {/* Foreground layer */}
        <Card design="glassmorphic" style={{ 
          position: 'relative',
          zIndex: 2,
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)'
        }}>
          <Typography variant="h4" style={{ marginBottom: 16, color: 'white' }}>
            Stacked Effects
          </Typography>
          <Typography variant="body" style={{ marginBottom: 16, color: 'rgba(255, 255, 255, 0.9)' }}>
            Complex glassmorphic compositions with multiple transparent elements.
          </Typography>
          <Button variant="outline" design="glassmorphic">Complex</Button>
        </Card>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ 
        padding: '40px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <Story />
      </div>
    ),
  ],
};

// Interactive Story with hover effects
export const Interactive: Story = {
  args: {
    design: 'glassmorphic',
    gap: 'medium',
    ratio: '1:1',
    stackOnMobile: true,
    alignment: 'center',
    left: (
      <div 
        style={{ 
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
          const cardElement = e.currentTarget.querySelector('[data-card]') as HTMLElement;
          if (cardElement) {
            cardElement.style.transform = 'translateY(-5px)';
            cardElement.style.backdropFilter = 'blur(15px)';
          }
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
          const cardElement = e.currentTarget.querySelector('[data-card]') as HTMLElement;
          if (cardElement) {
            cardElement.style.transform = 'translateY(0)';
            cardElement.style.backdropFilter = 'blur(10px)';
          }
        }}
      >
        <Card 
          design="glassmorphic" 
          style={{ transition: 'all 0.3s ease' }}
          data-card="true"
        >
          <Typography variant="h4" style={{ marginBottom: 16, color: 'white' }}>
            Interactive Glass
          </Typography>
          <Typography variant="body" style={{ marginBottom: 16, color: 'rgba(255, 255, 255, 0.8)' }}>
            Hover to see dynamic glassmorphic effects and animations.
          </Typography>
          <Button variant="primary" design="glassmorphic">Hover Me</Button>
        </Card>
      </div>
    ),
    right: (
      <div 
        style={{ 
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
          const cardElement = e.currentTarget.querySelector('[data-card]') as HTMLElement;
          if (cardElement) {
            cardElement.style.transform = 'scale(1.05)';
            cardElement.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
          }
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
          const cardElement = e.currentTarget.querySelector('[data-card]') as HTMLElement;
          if (cardElement) {
            cardElement.style.transform = 'scale(1)';
            cardElement.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
          }
        }}
      >
        <Card 
          design="glassmorphic" 
          style={{ transition: 'all 0.3s ease' }}
          data-card="true"
        >
          <Typography variant="h4" style={{ marginBottom: 16, color: 'white' }}>
            Responsive Glass
          </Typography>
          <Typography variant="body" style={{ marginBottom: 16, color: 'rgba(255, 255, 255, 0.8)' }}>
            Interactive glassmorphic elements with smooth transitions.
          </Typography>
          <Button variant="outline" design="glassmorphic">Interact</Button>
        </Card>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ 
        padding: '40px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <Story />
      </div>
    ),
  ],
};

// Skeuomorphic story for completeness
export const Skeuomorphic: Story = {
  args: {
    design: 'skeuomorphic',
    gap: 'medium',
    ratio: '1:1',
    stackOnMobile: true,
    alignment: 'top',
    left: (
      <Card design="skeuomorphic">
        <Typography variant="h4" style={{ marginBottom: 16 }} design="skeuomorphic">
          Skeuomorphic Left
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16 }} design="skeuomorphic">
          Realistic textures and shadows create tactile, physical-like interfaces.
        </Typography>
        <Button variant="primary" design="skeuomorphic">Tactile Action</Button>
      </Card>
    ),
    right: (
      <Card design="skeuomorphic">
        <Typography variant="h4" style={{ marginBottom: 16 }} design="skeuomorphic">
          Skeuomorphic Right
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16 }} design="skeuomorphic">
          Rich visual depth with material-inspired design elements.
        </Typography>
        <Button variant="outline" design="skeuomorphic">Physical Feel</Button>
      </Card>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
        <Story />
      </div>
    ),
  ],
};

export const TextAndImage: Story = {
  args: {
    design: 'flat',
    gap: 'large',
    ratio: '1:1',
    stackOnMobile: true,
    alignment: 'center',
    left: (
      <div>
        <Typography variant="h2" style={{ marginBottom: 16 }}>
          Amazing Product
        </Typography>
        <Typography variant="body" style={{ marginBottom: 24, lineHeight: 1.6 }}>
          Discover our revolutionary product that will change the way you work. 
          With cutting-edge technology and intuitive design, we've created something 
          truly special for our users.
        </Typography>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button variant="primary">Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    ),
    right: (
      <div style={{ 
        height: '300px', 
        backgroundColor: '#e3f2fd', 
        borderRadius: '8px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        border: '2px dashed #90caf9'
      }}>
        <Typography variant="h6" style={{ color: '#1976d2' }}>
          Image Placeholder
        </Typography>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '40px', backgroundColor: '#fff' }}>
        <Story />
      </div>
    ),
  ],
};

export const Ratio2to1: Story = {
  args: {
    design: 'flat',
    gap: 'medium',
    ratio: '2:1',
    stackOnMobile: true,
    alignment: 'top',
    left: (
      <Card>
        <Typography variant="h3" style={{ marginBottom: 16 }}>
          Main Content (2x width)
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16 }}>
          This column takes up 2/3 of the available width, making it perfect for main content 
          areas while keeping a smaller sidebar on the right.
        </Typography>
        <Typography variant="body2" style={{ marginBottom: 16 }}>
          You can use this layout for blog posts with sidebars, product descriptions with 
          specifications, or any content where you need more space for the primary information.
        </Typography>
        <Button variant="primary">Read More</Button>
      </Card>
    ),
    right: (
      <Card>
        <Typography variant="h5" style={{ marginBottom: 12 }}>
          Sidebar (1x width)
        </Typography>
        <Typography variant="body2" style={{ marginBottom: 12 }}>
          This sidebar is narrower and perfect for:
        </Typography>
        <ul style={{ marginBottom: 16, paddingLeft: 20 }}>
          <li><Typography variant="body2">Related links</Typography></li>
          <li><Typography variant="body2">Quick facts</Typography></li>
          <li><Typography variant="body2">Call-to-action</Typography></li>
        </ul>
        <Button variant="outline" style={{ width: '100%' }}>
          Contact Us
        </Button>
      </Card>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <Story />
      </div>
    ),
  ],
};

export const CenterAlignment: Story = {
  args: {
    design: 'flat',
    gap: 'large',
    ratio: '1:1',
    stackOnMobile: true,
    alignment: 'center',
    left: (
      <div style={{ height: '200px', display: 'flex', alignItems: 'center' }}>
        <Card style={{ width: '100%' }}>
          <Typography variant="h4" style={{ textAlign: 'center', marginBottom: 12 }}>
            Centered Content
          </Typography>
          <Typography variant="body" style={{ textAlign: 'center' }}>
            This content is vertically centered with the right column.
          </Typography>
        </Card>
      </div>
    ),
    right: (
      <Card>
        <Typography variant="h5" style={{ marginBottom: 12 }}>
          Taller Content
        </Typography>
        <Typography variant="body2" style={{ marginBottom: 12 }}>
          This column has more content and is taller than the left column.
        </Typography>
        <Typography variant="body2" style={{ marginBottom: 12 }}>
          Notice how the left column content is vertically centered relative to this column.
        </Typography>
        <Typography variant="body2" style={{ marginBottom: 12 }}>
          This is useful when you have varying content heights but want visual balance.
        </Typography>
        <Button variant="primary">Action Button</Button>
      </Card>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', backgroundColor: '#fff3e0' }}>
        <Story />
      </div>
    ),
  ],
};

export const NoGap: Story = {
  args: {
    design: 'flat',
    gap: 'none',
    ratio: '1:1',
    stackOnMobile: true,
    alignment: 'stretch',
    left: (
      <div style={{ 
        backgroundColor: '#e8f5e8', 
        padding: '24px', 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Typography variant="h4" style={{ marginBottom: 16 }}>
          No Gap Layout
        </Typography>
        <Typography variant="body">
          These columns have no gap between them and stretch to equal heights.
        </Typography>
      </div>
    ),
    right: (
      <div style={{ 
        backgroundColor: '#fff3e0', 
        padding: '24px', 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Typography variant="h4" style={{ marginBottom: 16 }}>
          Adjacent Column
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16 }}>
          Perfect for creating seamless side-by-side sections.
        </Typography>
        <Button variant="primary">Get Started</Button>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
        <Story />
      </div>
    ),
  ],
};

export const MobileReverse: Story = {
  args: {
    design: 'flat',
    gap: 'medium',
    ratio: '1:1',
    stackOnMobile: true,
    reverseOnMobile: true,
    alignment: 'top',
    left: (
      <Card>
        <Typography variant="h4" style={{ marginBottom: 16 }}>
          First on Desktop
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16 }}>
          This content appears first on desktop but second on mobile due to the 
          reverseOnMobile prop being set to true.
        </Typography>
        <Typography variant="body2" style={{ color: '#666', fontStyle: 'italic' }}>
          Try resizing your browser to see the mobile behavior.
        </Typography>
      </Card>
    ),
    right: (
      <Card style={{ backgroundColor: '#e3f2fd' }}>
        <Typography variant="h4" style={{ marginBottom: 16 }}>
          Second on Desktop
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16 }}>
          This content appears second on desktop but first on mobile.
        </Typography>
        <Button variant="primary">Mobile First Action</Button>
      </Card>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
        <Typography variant="h6" style={{ marginBottom: 20, textAlign: 'center' }}>
          Resize browser to see mobile stacking behavior
        </Typography>
        <Story />
      </div>
    ),
  ],
};

export const Glassmorphic: Story = {
  args: {
    design: 'glassmorphic',
    gap: 'medium',
    ratio: '1:1',
    stackOnMobile: true,
    alignment: 'top',
    left: (
      <Card design="glassmorphic">
        <Typography variant="h4" style={{ marginBottom: 16 }} design="glassmorphic">
          Glassmorphic Left
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16 }} design="glassmorphic">
          This column uses the glassmorphic design system with translucent effects and blur.
        </Typography>
        <Button variant="primary" design="glassmorphic">Glass Action</Button>
      </Card>
    ),
    right: (
      <Card design="glassmorphic">
        <Typography variant="h4" style={{ marginBottom: 16 }} design="glassmorphic">
          Glassmorphic Right
        </Typography>
        <Typography variant="body" style={{ marginBottom: 16 }} design="glassmorphic">
          Both columns feature the modern glassmorphic aesthetic with backdrop blur.
        </Typography>
        <Button variant="outline" design="glassmorphic">Glass Outline</Button>
      </Card>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <Story />
      </div>
    ),
  ],
};

export const GlassmorphicDark: Story = {
  args: {
    design: 'glassmorphic',
    gap: 'large',
    ratio: '2:1',
    stackOnMobile: true,
    alignment: 'center',
    left: (
      <div style={{ padding: '24px' }}>
        <Typography variant="h3" style={{ marginBottom: 16, color: 'white' }}>
          Dark Glass Layout
        </Typography>
        <Typography variant="body" style={{ marginBottom: 24, color: 'rgba(255, 255, 255, 0.8)' }}>
          This glassmorphic layout demonstrates the dark theme with enhanced contrast and 
          beautiful translucent effects that work perfectly in dark environments.
        </Typography>
        <Button variant="primary" design="glassmorphic">Dark Action</Button>
      </div>
    ),
    right: (
      <div style={{ padding: '24px', textAlign: 'center' }}>
        <Typography variant="h5" style={{ marginBottom: 12, color: 'white' }}>
          Glass Sidebar
        </Typography>
        <Typography variant="body2" style={{ marginBottom: 16, color: 'rgba(255, 255, 255, 0.7)' }}>
          Perfect for modern interfaces with depth and sophistication.
        </Typography>
        <Button variant="outline" design="glassmorphic">Learn More</Button>
      </div>
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
  decorators: [
    (Story) => (
      <div style={{ padding: '40px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AllDesigns: Story = {
  render: () => (
    <>
      <TwoColumn 
        design="flat" 
        gap="medium" 
        ratio="1:1" 
        style={{ marginBottom: 24 }}
        left={(
          <Card>
            <Typography variant="h5" style={{ marginBottom: 12 }}>Flat Design</Typography>
            <Typography variant="body">Clean and minimal flat design layout.</Typography>
          </Card>
        )}
        right={(
          <Card>
            <Typography variant="h5" style={{ marginBottom: 12 }}>Flat Right</Typography>
            <Typography variant="body">Simple and straightforward styling.</Typography>
          </Card>
        )}
      />
      
      <TwoColumn 
        design="neumorphic" 
        gap="medium" 
        ratio="1:1" 
        style={{ marginBottom: 24 }}
        left={(
          <Card design="neumorphic">
            <Typography variant="h5" style={{ marginBottom: 12 }} design="neumorphic">Neumorphic Design</Typography>
            <Typography variant="body" design="neumorphic">Soft and tactile neumorphic layout.</Typography>
          </Card>
        )}
        right={(
          <Card design="neumorphic">
            <Typography variant="h5" style={{ marginBottom: 12 }} design="neumorphic">Neumorphic Right</Typography>
            <Typography variant="body" design="neumorphic">Subtle shadows and depth.</Typography>
          </Card>
        )}
      />
      
      <TwoColumn 
        design="glassmorphic" 
        gap="medium" 
        ratio="1:1"
        left={(
          <Card design="glassmorphic">
            <Typography variant="h5" style={{ marginBottom: 12 }} design="glassmorphic">Glassmorphic Design</Typography>
            <Typography variant="body" design="glassmorphic">Translucent and modern glassmorphic layout.</Typography>
          </Card>
        )}
        right={(
          <Card design="glassmorphic">
            <Typography variant="h5" style={{ marginBottom: 12 }} design="glassmorphic">Glassmorphic Right</Typography>
            <Typography variant="body" design="glassmorphic">Beautiful blur and transparency effects.</Typography>
          </Card>
        )}
      />
    </>
  ),
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
        <Story />
      </div>
    ),
  ],
};