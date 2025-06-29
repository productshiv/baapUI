import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';
import Button from '../Button/Button';

const meta: Meta<typeof Navbar> = {
  title: 'Navigation/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    design: {
      control: { type: 'select' },
      options: ['flat', 'neumorphic'],
    },
    position: {
      control: { type: 'select' },
      options: ['static', 'fixed', 'sticky'],
    },
    maxWidth: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    backgroundColor: {
      control: { type: 'color' },
    },
    shadow: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleNavItems = [
  { label: 'Home', onPress: () => alert('Home clicked'), active: true },
  { label: 'Products', onPress: () => alert('Products clicked') },
  { label: 'About', onPress: () => alert('About clicked') },
  { label: 'Contact', onPress: () => alert('Contact clicked') },
];

const sampleActions = (
  <>
    <Button variant="text" size="small">Sign In</Button>
    <Button variant="primary" size="small">Get Started</Button>
  </>
);

export const Default: Story = {
  args: {
    logoText: 'BaapUI',
    items: sampleNavItems,
    actions: sampleActions,
    design: 'flat',
    position: 'static',
    shadow: true,
  },
};

export const Neumorphic: Story = {
  args: {
    logoText: 'BaapUI',
    items: sampleNavItems,
    actions: (
      <>
        <Button variant="text" size="small" design="neumorphic">Sign In</Button>
        <Button variant="primary" size="small" design="neumorphic">Get Started</Button>
      </>
    ),
    design: 'neumorphic',
    position: 'static',
    shadow: true,
  },
};

export const MinimalNavbar: Story = {
  args: {
    logoText: 'Brand',
    items: [
      { label: 'Features', onPress: () => alert('Features clicked') },
      { label: 'Pricing', onPress: () => alert('Pricing clicked') },
      { label: 'Docs', onPress: () => alert('Docs clicked') },
    ],
    design: 'flat',
    position: 'static',
    shadow: false,
    backgroundColor: '#ffffff',
  },
};

export const WithCustomActions: Story = {
  args: {
    logoText: 'MyApp',
    items: sampleNavItems,
    actions: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Button variant="outline" size="small">Login</Button>
        <Button variant="primary" size="small">Sign Up Free</Button>
      </div>
    ),
    design: 'flat',
    position: 'static',
    shadow: true,
    backgroundColor: '#f8f9fa',
  },
}; 