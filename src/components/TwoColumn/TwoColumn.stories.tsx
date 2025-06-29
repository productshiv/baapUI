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
      control: { type: 'select' },
      options: ['flat', 'neumorphic'],
    },
    gap: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
    },
    ratio: {
      control: { type: 'select' },
      options: ['1:1', '1:2', '2:1', '1:3', '3:1'],
    },
    alignment: {
      control: { type: 'select' },
      options: ['top', 'center', 'bottom', 'stretch'],
    },
    stackOnMobile: {
      control: { type: 'boolean' },
    },
    reverseOnMobile: {
      control: { type: 'boolean' },
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
        <Typography variant="body1" style={{ marginBottom: 16 }}>
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
        <Typography variant="body1" style={{ marginBottom: 16 }}>
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
        <Typography variant="body1" style={{ marginBottom: 24, lineHeight: 1.6 }}>
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
        <Typography variant="body1" style={{ marginBottom: 16 }}>
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
          <Typography variant="body1" style={{ textAlign: 'center' }}>
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
        <Typography variant="body1">
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
        <Typography variant="body1" style={{ marginBottom: 16 }}>
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
        <Typography variant="body1" style={{ marginBottom: 16 }}>
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
        <Typography variant="body1" style={{ marginBottom: 16 }}>
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