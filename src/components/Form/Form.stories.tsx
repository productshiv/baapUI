import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { View } from '../../platform';
import Form from './Form';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Label from '../Label/Label';

const meta: Meta<typeof Form> = {
  title: 'Layout/Form',
  component: Form,
  decorators: [
    Story => (
      <View style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
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
      control: { type: 'select' },
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'],
    },
    spacing: {
      control: { type: 'select' },
      options: ['compact', 'normal', 'relaxed'],
    },
    fullWidthButtons: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    design: 'flat',
    spacing: 'normal',
    fullWidthButtons: true,
    children: (
      <>
        <Label text="Email Address" />
        <Input placeholder="Enter your email" type="email" />
        <Label text="Password" />
        <Input placeholder="Enter your password" type="password" />
        <Button variant="primary">Sign In</Button>
        <Button variant="text">Forgot Password?</Button>
      </>
    ),
  },
};

export const Neumorphic: Story = {
  args: {
    design: 'neumorphic',
    spacing: 'normal',
    fullWidthButtons: true,
    children: (
      <>
        <Label text="Email Address" design="neumorphic" />
        <Input placeholder="Enter your email" type="email" design="neumorphic" />
        <Label text="Password" design="neumorphic" />
        <Input placeholder="Enter your password" type="password" design="neumorphic" />
        <Button variant="primary" design="neumorphic">Sign In</Button>
        <Button variant="text" design="neumorphic">Forgot Password?</Button>
      </>
    ),
  },
};

export const Glassmorphic: Story = {
  args: {
    design: 'glassmorphic',
    spacing: 'normal',
    fullWidthButtons: true,
    children: (
      <>
        <Label text="Email Address" design="glassmorphic" />
        <Input placeholder="Enter your email" type="email" design="glassmorphic" />
        <Label text="Password" design="glassmorphic" />
        <Input placeholder="Enter your password" type="password" design="glassmorphic" />
        <Button variant="primary" design="glassmorphic">Sign In</Button>
        <Button variant="text" design="glassmorphic">Forgot Password?</Button>
      </>
    ),
  },
};

export const GlassmorphicRegistration: Story = {
  args: {
    design: 'glassmorphic',
    spacing: 'normal',
    fullWidthButtons: true,
    children: (
      <>
        <Label text="Full Name" design="glassmorphic" />
        <Input placeholder="Enter your full name" design="glassmorphic" />
        <Label text="Email Address" design="glassmorphic" />
        <Input placeholder="Enter your email" type="email" design="glassmorphic" />
        <Label text="Password" design="glassmorphic" />
        <Input placeholder="Create a password" type="password" design="glassmorphic" />
        <Label text="Confirm Password" design="glassmorphic" />
        <Input placeholder="Confirm your password" type="password" design="glassmorphic" />
        <Button variant="primary" design="glassmorphic">Create Account</Button>
        <Button variant="text" design="glassmorphic">Already have an account?</Button>
      </>
    ),
  },
};

export const GlassmorphicCompact: Story = {
  args: {
    design: 'glassmorphic',
    spacing: 'compact',
    fullWidthButtons: true,
    children: (
      <>
        <Label text="Username" design="glassmorphic" />
        <Input placeholder="Enter username" design="glassmorphic" />
        <Label text="Password" design="glassmorphic" />
        <Input placeholder="Enter password" type="password" design="glassmorphic" />
        <Button variant="primary" design="glassmorphic">Login</Button>
      </>
    ),
  },
};

export const CompactSpacing: Story = {
  args: {
    design: 'flat',
    spacing: 'compact',
    fullWidthButtons: true,
    children: (
      <>
        <Label text="First Name" />
        <Input placeholder="John" />
        <Label text="Last Name" />
        <Input placeholder="Doe" />
        <Label text="Email" />
        <Input placeholder="john@example.com" type="email" />
        <Button variant="primary">Create Account</Button>
      </>
    ),
  },
};

export const RelaxedSpacing: Story = {
  args: {
    design: 'flat',
    spacing: 'relaxed',
    fullWidthButtons: true,
    children: (
      <>
        <Label text="Company Name" />
        <Input placeholder="Your company" />
        <Label text="Industry" />
        <Input placeholder="Technology, Healthcare, etc." />
        <Button variant="primary">Get Started</Button>
      </>
    ),
  },
};

export const WithoutFullWidthButtons: Story = {
  args: {
    design: 'flat',
    spacing: 'normal',
    fullWidthButtons: false,
    children: (
      <>
        <Label text="Search Query" />
        <Input placeholder="What are you looking for?" />
        <View style={{ flexDirection: 'row', gap: 12, justifyContent: 'center' }}>
          <Button variant="primary">Search</Button>
          <Button variant="outline">Clear</Button>
        </View>
      </>
    ),
  },
};