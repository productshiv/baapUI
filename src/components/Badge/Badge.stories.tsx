import React, { useState } from 'react';
import { View } from '../../platform';
import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';

const meta: Meta<typeof Badge> = {
  title: 'Feedback/Badge',
  component: Badge,
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
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
      defaultValue: 'primary',
      description: 'Color variant of the badge',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      description: 'Size of the badge',
    },
    children: {
      control: 'text',
      defaultValue: '1',
      description: 'Content to display in the badge',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color for neumorphic design',
    },
    textColor: {
      control: 'color',
      description: 'Custom text color',
    },
  },
  args: {
    design: 'flat',
    variant: 'primary',
    size: 'medium',
    children: '1',
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Default Story
export const Default: Story = {
  args: {
    children: '1',
    variant: 'primary',
    size: 'medium',
    design: 'flat',
  },
};

// Design System Variations
export const Flat: Story = {
  args: {
    children: '1',
    variant: 'primary',
    size: 'medium',
    design: 'flat',
  },
};

export const Neumorphic: Story = {
  args: {
    children: '1',
    variant: 'primary',
    size: 'medium',
    design: 'neumorphic',
  },
};

export const Skeuomorphic: Story = {
  args: {
    children: '1',
    variant: 'primary',
    size: 'medium',
    design: 'skeuomorphic',
  },
};

export const Glassmorphic: Story = {
  args: {
    children: '1',
    variant: 'primary',
    size: 'medium',
    design: 'glassmorphic',
  },
};

// Glassmorphic Story Variations (as per BAAPUI-8 requirements)
export const GlassmorphicInteractive: Story = {
  render: () => {
    const [count, setCount] = React.useState(1);
    return (
      <View style={{ gap: 16, alignItems: 'center' }}>
        <Typography variant="h6">Interactive Glassmorphic Badge</Typography>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Button onPress={() => setCount(count - 1)} disabled={count <= 0}>-</Button>
          <Badge design="glassmorphic" variant="primary">{count}</Badge>
          <Button onPress={() => setCount(count + 1)}>+</Button>
        </View>
        <Typography variant="caption">Click buttons to change badge count</Typography>
      </View>
    );
  },
};

export const GlassmorphicDarkMode: Story = {
  decorators: [
    Story => (
      <View style={{ padding: 20, backgroundColor: '#1a1a1a', minHeight: 200 }}>
        <Story />
      </View>
    ),
  ],
  args: {
    children: 'DARK',
    variant: 'primary',
    size: 'medium',
    design: 'glassmorphic',
  },
};

export const GlassmorphicPlayground: Story = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    backgroundColor: {
      control: 'color',
    },
    textColor: {
      control: 'color',
    },
  },
  args: {
    children: 'PLAY',
    variant: 'primary',
    size: 'medium',
    design: 'glassmorphic',
  },
};

export const GlassmorphicLightGlass: Story = {
  decorators: [
    Story => (
      <View style={{ padding: 20, backgroundColor: '#f0f0f0' }}>
        <Story />
      </View>
    ),
  ],
  args: {
    children: 'LIGHT',
    variant: 'primary',
    size: 'medium',
    design: 'glassmorphic',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
};

export const GlassmorphicDarkGlass: Story = {
  decorators: [
    Story => (
      <View style={{ padding: 20, backgroundColor: '#2a2a2a' }}>
        <Story />
      </View>
    ),
  ],
  args: {
    children: 'DARK',
    variant: 'primary',
    size: 'medium',
    design: 'glassmorphic',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
};

export const GlassmorphicColoredGlass: Story = {
  render: () => (
    <View style={{ gap: 16, alignItems: 'center', padding: 20 }}>
      <Typography variant="h6">Colored Glass Badge Variations</Typography>
      <View style={{ flexDirection: 'row', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Badge design="glassmorphic" backgroundColor="rgba(0, 122, 255, 0.2)">BLUE</Badge>
        <Badge design="glassmorphic" backgroundColor="rgba(88, 86, 214, 0.2)">PURPLE</Badge>
        <Badge design="glassmorphic" backgroundColor="rgba(52, 199, 89, 0.2)">GREEN</Badge>
        <Badge design="glassmorphic" backgroundColor="rgba(255, 59, 48, 0.2)">RED</Badge>
        <Badge design="glassmorphic" backgroundColor="rgba(255, 149, 0, 0.2)">ORANGE</Badge>
      </View>
    </View>
  ),
};

export const GlassmorphicHighBlur: Story = {
  decorators: [
    Story => (
      <View style={{ 
        padding: 20, 
        backgroundImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)',
        backgroundColor: '#ff6b6b' // fallback
      }}>
        <Story />
      </View>
    ),
  ],
  args: {
    children: 'BLUR',
    variant: 'primary',
    size: 'medium',
    design: 'glassmorphic',
  },
};

export const GlassmorphicMinimalGlass: Story = {
  args: {
    children: 'MIN',
    variant: 'primary',
    size: 'medium',
    design: 'glassmorphic',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
};

export const GlassmorphicLayeredGlass: Story = {
  render: () => (
    <View style={{ gap: 16, alignItems: 'center', padding: 20 }}>
      <Typography variant="h6">Layered Glass Badge Elements</Typography>
      <View style={{ 
        position: 'relative',
        padding: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)'
      }}>
        <View style={{
          position: 'absolute',
          top: 10,
          left: 10,
          right: 10,
          bottom: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: 12,
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.1)'
        }} />
        <View style={{ flexDirection: 'row', gap: 8, justifyContent: 'center' }}>
          <Badge design="glassmorphic" variant="primary">1</Badge>
          <Badge design="glassmorphic" variant="success">2</Badge>
          <Badge design="glassmorphic" variant="warning">3</Badge>
        </View>
      </View>
    </View>
  ),
};

export const GlassmorphicAllVariants: Story = {
  render: () => (
    <View style={{ gap: 16, alignItems: 'center', padding: 20 }}>
      <Typography variant="h6">All Glassmorphic Badge Variants</Typography>
      <View style={{ flexDirection: 'row', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Badge variant="primary" design="glassmorphic">PRI</Badge>
        <Badge variant="secondary" design="glassmorphic">SEC</Badge>
        <Badge variant="success" design="glassmorphic">SUC</Badge>
        <Badge variant="error" design="glassmorphic">ERR</Badge>
        <Badge variant="warning" design="glassmorphic">WAR</Badge>
        <Badge variant="info" design="glassmorphic">INF</Badge>
      </View>
    </View>
  ),
};

export const GlassmorphicAllSizes: Story = {
  render: () => (
    <View style={{ gap: 16, alignItems: 'center', padding: 20 }}>
      <Typography variant="h6">All Glassmorphic Badge Sizes</Typography>
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <View style={{ alignItems: 'center', gap: 4 }}>
          <Badge size="small" design="glassmorphic">S</Badge>
          <Typography variant="caption">Small</Typography>
        </View>
        <View style={{ alignItems: 'center', gap: 4 }}>
          <Badge size="medium" design="glassmorphic">M</Badge>
          <Typography variant="caption">Medium</Typography>
        </View>
        <View style={{ alignItems: 'center', gap: 4 }}>
          <Badge size="large" design="glassmorphic">L</Badge>
          <Typography variant="caption">Large</Typography>
        </View>
      </View>
    </View>
  ),
};

export const SkeuomorphicVariants: Story = {
  render: () => (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <Typography variant="h6">Skeuomorphic Badge Variants</Typography>
      <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Badge variant="primary" design="skeuomorphic">1</Badge>
        <Badge variant="secondary" design="skeuomorphic">2</Badge>
        <Badge variant="success" design="skeuomorphic">✓</Badge>
        <Badge variant="error" design="skeuomorphic">!</Badge>
        <Badge variant="warning" design="skeuomorphic">⚠</Badge>
        <Badge variant="info" design="skeuomorphic">i</Badge>
      </View>
    </View>
  ),
};

// Variant Showcase
export const Primary: Story = {
  args: {
    children: '1',
    variant: 'primary',
    size: 'medium',
    design: 'flat',
  },
};

export const Secondary: Story = {
  args: {
    children: '2',
    variant: 'secondary',
    size: 'medium',
    design: 'flat',
  },
};

export const Success: Story = {
  args: {
    children: '✓',
    variant: 'success',
    size: 'medium',
    design: 'flat',
  },
};

export const Error: Story = {
  args: {
    children: '!',
    variant: 'error',
    size: 'medium',
    design: 'flat',
  },
};

export const Warning: Story = {
  args: {
    children: '⚠',
    variant: 'warning',
    size: 'medium',
    design: 'flat',
  },
};

export const Info: Story = {
  args: {
    children: 'i',
    variant: 'info',
    size: 'medium',
    design: 'flat',
  },
};

// Size Variations
export const SmallSize: Story = {
  args: {
    children: 'S',
    variant: 'primary',
    size: 'small',
    design: 'flat',
  },
};

export const MediumSize: Story = {
  args: {
    children: 'M',
    variant: 'primary',
    size: 'medium',
    design: 'flat',
  },
};

export const LargeSize: Story = {
  args: {
    children: 'L',
    variant: 'primary',
    size: 'large',
    design: 'flat',
  },
};

// Neumorphic Variants
export const NeumorphicPrimary: Story = {
  args: {
    children: '1',
    variant: 'primary',
    size: 'medium',
    design: 'neumorphic',
  },
};

export const NeumorphicSuccess: Story = {
  args: {
    children: '✓',
    variant: 'success',
    size: 'medium',
    design: 'neumorphic',
  },
};

export const NeumorphicError: Story = {
  args: {
    children: '!',
    variant: 'error',
    size: 'medium',
    design: 'neumorphic',
  },
};

export const NeumorphicWarning: Story = {
  args: {
    children: '⚠',
    variant: 'warning',
    size: 'medium',
    design: 'neumorphic',
  },
};

// Content Variations
export const NumberBadge: Story = {
  args: {
    children: '42',
    variant: 'primary',
    size: 'medium',
    design: 'flat',
  },
};

export const IconBadge: Story = {
  args: {
    children: '★',
    variant: 'warning',
    size: 'medium',
    design: 'flat',
  },
};

export const TextBadge: Story = {
  args: {
    children: 'NEW',
    variant: 'success',
    size: 'medium',
    design: 'flat',
  },
};

export const LongTextBadge: Story = {
  args: {
    children: 'PREMIUM',
    variant: 'primary',
    size: 'large',
    design: 'flat',
  },
};

export const EmptyBadge: Story = {
  args: {
    children: '',
    variant: 'error',
    size: 'small',
    design: 'flat',
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <Typography variant="h6">All Badge Variants</Typography>
      <View style={{ flexDirection: 'row', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Badge variant="primary">1</Badge>
        <Badge variant="secondary">2</Badge>
        <Badge variant="success">3</Badge>
        <Badge variant="error">4</Badge>
        <Badge variant="warning">5</Badge>
        <Badge variant="info">6</Badge>
      </View>
    </View>
  ),
};

// All Sizes Showcase
export const AllSizes: Story = {
  render: () => (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <Typography variant="h6">All Badge Sizes</Typography>
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <View style={{ alignItems: 'center', gap: 4 }}>
          <Badge size="small">S</Badge>
          <Typography variant="caption">Small</Typography>
        </View>
        <View style={{ alignItems: 'center', gap: 4 }}>
          <Badge size="medium">M</Badge>
          <Typography variant="caption">Medium</Typography>
        </View>
        <View style={{ alignItems: 'center', gap: 4 }}>
          <Badge size="large">L</Badge>
          <Typography variant="caption">Large</Typography>
        </View>
      </View>
    </View>
  ),
};

// All Design Systems Showcase
export const AllDesigns: Story = {
  render: () => (
    <View style={{ gap: 20, alignItems: 'center' }}>
      <Typography variant="h6">Design Systems</Typography>
      <View style={{ gap: 16 }}>
        <View style={{ gap: 8, alignItems: 'center' }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Flat Design</Typography>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Badge variant="primary" design="flat">1</Badge>
            <Badge variant="success" design="flat">2</Badge>
            <Badge variant="error" design="flat">3</Badge>
            <Badge variant="warning" design="flat">4</Badge>
          </View>
        </View>
        <View style={{ gap: 8, alignItems: 'center' }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Neumorphic Design</Typography>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Badge variant="primary" design="neumorphic">1</Badge>
            <Badge variant="success" design="neumorphic">2</Badge>
            <Badge variant="error" design="neumorphic">3</Badge>
            <Badge variant="warning" design="neumorphic">4</Badge>
          </View>
        </View>
        <View style={{ gap: 8, alignItems: 'center' }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Skeuomorphic Design</Typography>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Badge variant="primary" design="skeuomorphic">1</Badge>
            <Badge variant="success" design="skeuomorphic">2</Badge>
            <Badge variant="error" design="skeuomorphic">3</Badge>
            <Badge variant="warning" design="skeuomorphic">4</Badge>
          </View>
        </View>
        <View style={{ gap: 8, alignItems: 'center' }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Glassmorphic Design</Typography>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Badge variant="primary" design="glassmorphic">1</Badge>
            <Badge variant="success" design="glassmorphic">2</Badge>
            <Badge variant="error" design="glassmorphic">3</Badge>
            <Badge variant="warning" design="glassmorphic">4</Badge>
          </View>
        </View>
      </View>
    </View>
  ),
};

// Notification Badge Examples
export const NotificationExamples: Story = {
  render: () => (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <Typography variant="h6">Notification Badge Examples</Typography>
      <View style={{ gap: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Typography variant="body2">Messages</Typography>
          <Badge variant="primary" size="small">3</Badge>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Typography variant="body2">Unread Emails</Typography>
          <Badge variant="error" size="small">12</Badge>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Typography variant="body2">Notifications</Typography>
          <Badge variant="warning" size="small">99+</Badge>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Typography variant="body2">Updates Available</Typography>
          <Badge variant="info" size="small">5</Badge>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Typography variant="body2">Tasks Completed</Typography>
          <Badge variant="success" size="small">✓</Badge>
        </View>
      </View>
    </View>
  ),
};

// Status Badge Examples
export const StatusExamples: Story = {
  render: () => (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <Typography variant="h6">Status Badge Examples</Typography>
      <View style={{ gap: 12 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Typography variant="body2">Server Status:</Typography>
          <Badge variant="success" size="small">ONLINE</Badge>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Typography variant="body2">Build Status:</Typography>
          <Badge variant="error" size="small">FAILED</Badge>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Typography variant="body2">Deployment:</Typography>
          <Badge variant="warning" size="small">PENDING</Badge>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Typography variant="body2">Version:</Typography>
          <Badge variant="info" size="small">v2.1.0</Badge>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Typography variant="body2">Environment:</Typography>
          <Badge variant="secondary" size="small">PROD</Badge>
        </View>
      </View>
    </View>
  ),
};

// Interactive Counter Example
export const InteractiveCounter: Story = {
  render: () => {
    const [count, setCount] = useState(0);

    const getVariant = (count: number) => {
      if (count === 0) return 'secondary';
      if (count < 5) return 'info';
      if (count < 10) return 'warning';
      return 'error';
    };

    return (
      <View style={{ gap: 16, alignItems: 'center' }}>
        <Typography variant="h6">Interactive Counter Badge</Typography>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Typography variant="body2">Notifications:</Typography>
          <Badge variant={getVariant(count)} design="neumorphic">
            {count > 99 ? '99+' : count.toString()}
          </Badge>
        </View>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <Button onPress={() => setCount(Math.max(0, count - 1))} disabled={count === 0}>
            -1
          </Button>
          <Button onPress={() => setCount(count + 1)}>
            +1
          </Button>
          <Button onPress={() => setCount(0)} variant="outline">
            Reset
          </Button>
        </View>
      </View>
    );
  },
};

// Shopping Cart Badge Example
export const ShoppingCartExample: Story = {
  render: () => {
    const [cartItems, setCartItems] = useState(0);

    const addItem = () => setCartItems(prev => prev + 1);
    const removeItem = () => setCartItems(prev => Math.max(0, prev - 1));
    const clearCart = () => setCartItems(0);

    return (
      <View style={{ gap: 16, alignItems: 'center' }}>
        <Typography variant="h6">Shopping Cart Badge</Typography>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Typography variant="body2" style={{ fontSize: 24 }}>🛒</Typography>
          {cartItems > 0 && (
            <Badge variant="error" size="small" design="flat">
              {cartItems}
            </Badge>
          )}
        </View>
        <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button onPress={addItem}>Add Item</Button>
          <Button onPress={removeItem} disabled={cartItems === 0}>Remove Item</Button>
          <Button onPress={clearCart} variant="outline" disabled={cartItems === 0}>Clear Cart</Button>
        </View>
        <Typography variant="caption">
          {cartItems === 0 ? 'Cart is empty' : `${cartItems} item${cartItems > 1 ? 's' : ''} in cart`}
        </Typography>
      </View>
    );
  },
};

// User Profile Badge Example
export const UserProfileExample: Story = {
  render: () => (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <Typography variant="h6">User Profile Badges</Typography>
      <View style={{ gap: 12 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Typography variant="body2">👤 John Doe</Typography>
          <Badge variant="success" size="small">VERIFIED</Badge>
          <Badge variant="warning" size="small">PRO</Badge>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Typography variant="body2">👤 Jane Smith</Typography>
          <Badge variant="info" size="small">ADMIN</Badge>
          <Badge variant="primary" size="small">BETA</Badge>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Typography variant="body2">👤 Mike Johnson</Typography>
          <Badge variant="secondary" size="small">GUEST</Badge>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Typography variant="body2">👤 Sarah Wilson</Typography>
          <Badge variant="success" size="small">ONLINE</Badge>
          <Badge variant="error" size="small">BUSY</Badge>
        </View>
      </View>
    </View>
  ),
};

// Feature Badge Example
export const FeatureBadgeExample: Story = {
  render: () => (
    <View style={{ gap: 16, alignItems: 'center', maxWidth: 300 }}>
      <Typography variant="h6">Feature Badges</Typography>
      <View style={{ gap: 12, width: '100%' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2">Dark Mode</Typography>
          <Badge variant="success" size="small">NEW</Badge>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2">Push Notifications</Typography>
          <Badge variant="info" size="small">BETA</Badge>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2">Advanced Analytics</Typography>
          <Badge variant="warning" size="small">PREMIUM</Badge>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2">Two-Factor Auth</Typography>
          <Badge variant="error" size="small">REQUIRED</Badge>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2">API Access</Typography>
          <Badge variant="secondary" size="small">DISABLED</Badge>
        </View>
      </View>
    </View>
  ),
};

// Size Comparison with Content
export const SizeComparison: Story = {
  render: () => (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <Typography variant="h6">Size Comparison with Different Content</Typography>
      <View style={{ gap: 16 }}>
        <View style={{ gap: 8, alignItems: 'center' }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Numbers</Typography>
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <Badge size="small" variant="primary">1</Badge>
            <Badge size="medium" variant="primary">12</Badge>
            <Badge size="large" variant="primary">123</Badge>
          </View>
        </View>
        <View style={{ gap: 8, alignItems: 'center' }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Icons</Typography>
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <Badge size="small" variant="success">✓</Badge>
            <Badge size="medium" variant="warning">⚠</Badge>
            <Badge size="large" variant="error">✕</Badge>
          </View>
        </View>
        <View style={{ gap: 8, alignItems: 'center' }}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Text</Typography>
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <Badge size="small" variant="info">NEW</Badge>
            <Badge size="medium" variant="secondary">BETA</Badge>
            <Badge size="large" variant="warning">PREMIUM</Badge>
          </View>
        </View>
      </View>
    </View>
  ),
};
