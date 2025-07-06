import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';
import Button from '../Button/Button';

const meta: Meta<typeof Footer> = {
  title: 'Navigation/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    design: {
      control: { type: 'select' },
      options: ['flat', 'neumorphic', 'skeuomorphic', 'glassmorphic'],
    },
    maxWidth: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    backgroundColor: {
      control: { type: 'color' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleSections = [
  {
    title: 'Product',
    links: [
      { label: 'Features', onPress: () => alert('Features clicked') },
      { label: 'Pricing', onPress: () => alert('Pricing clicked') },
      { label: 'Documentation', onPress: () => alert('Docs clicked') },
      { label: 'API Reference', onPress: () => alert('API clicked') },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', onPress: () => alert('About clicked') },
      { label: 'Careers', onPress: () => alert('Careers clicked') },
      { label: 'Blog', onPress: () => alert('Blog clicked') },
      { label: 'Contact', onPress: () => alert('Contact clicked') },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', onPress: () => alert('Help clicked') },
      { label: 'Community', onPress: () => alert('Community clicked') },
      { label: 'Status', onPress: () => alert('Status clicked') },
    ],
  },
];

const socialLinks = (
  <div style={{ display: 'flex', gap: '12px' }}>
    <Button variant="text" size="small">GitHub</Button>
    <Button variant="text" size="small">Twitter</Button>
    <Button variant="text" size="small">Discord</Button>
  </div>
);

export const Default: Story = {
  args: {
    logoText: 'BaapUI',
    sections: sampleSections,
    socialLinks: socialLinks,
    copyright: '© 2024 BaapUI. All rights reserved.',
    design: 'flat',
  },
};

export const Neumorphic: Story = {
  args: {
    logoText: 'BaapUI',
    sections: sampleSections,
    socialLinks: (
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button variant="text" size="small" design="neumorphic">GitHub</Button>
        <Button variant="text" size="small" design="neumorphic">Twitter</Button>
        <Button variant="text" size="small" design="neumorphic">Discord</Button>
      </div>
    ),
    copyright: '© 2024 BaapUI. All rights reserved.',
    design: 'neumorphic',
  },
};

export const MinimalFooter: Story = {
  args: {
    logoText: 'Brand',
    copyright: '© 2024 Brand Inc.',
    design: 'flat',
    backgroundColor: '#ffffff',
  },
};

export const CompanyFooter: Story = {
  args: {
    logoText: 'TechCorp',
    sections: [
      {
        title: 'Solutions',
        links: [
          { label: 'Enterprise', onPress: () => alert('Enterprise clicked') },
          { label: 'Small Business', onPress: () => alert('SMB clicked') },
          { label: 'Developers', onPress: () => alert('Developers clicked') },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Documentation', onPress: () => alert('Docs clicked') },
          { label: 'Tutorials', onPress: () => alert('Tutorials clicked') },
          { label: 'Blog', onPress: () => alert('Blog clicked') },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', onPress: () => alert('Privacy clicked') },
          { label: 'Terms of Service', onPress: () => alert('Terms clicked') },
          { label: 'Cookie Policy', onPress: () => alert('Cookies clicked') },
        ],
      },
    ],
    socialLinks: socialLinks,
    copyright: '© 2024 TechCorp Inc. All rights reserved.',
    design: 'flat',
    backgroundColor: '#f8f9fa',
  },
};

export const Glassmorphic: Story = {
  args: {
    logoText: 'BaapUI',
    sections: sampleSections,
    socialLinks: (
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button variant="text" size="small" design="glassmorphic">GitHub</Button>
        <Button variant="text" size="small" design="glassmorphic">Twitter</Button>
        <Button variant="text" size="small" design="glassmorphic">Discord</Button>
      </div>
    ),
    copyright: '© 2024 BaapUI. All rights reserved.',
    design: 'glassmorphic',
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
    logoText: 'BaapUI',
    sections: [
      {
        title: 'Platform',
        links: [
          { label: 'Components', onPress: () => alert('Components clicked') },
          { label: 'Design System', onPress: () => alert('Design clicked') },
          { label: 'Templates', onPress: () => alert('Templates clicked') },
          { label: 'Themes', onPress: () => alert('Themes clicked') },
        ],
      },
      {
        title: 'Developers',
        links: [
          { label: 'Documentation', onPress: () => alert('Docs clicked') },
          { label: 'API Reference', onPress: () => alert('API clicked') },
          { label: 'GitHub', onPress: () => alert('GitHub clicked') },
          { label: 'Community', onPress: () => alert('Community clicked') },
        ],
      },
    ],
    socialLinks: (
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button variant="outline" size="small" design="glassmorphic">GitHub</Button>
        <Button variant="outline" size="small" design="glassmorphic">Discord</Button>
        <Button variant="outline" size="small" design="glassmorphic">Twitter</Button>
      </div>
    ),
    copyright: '© 2024 BaapUI. Building the future of UI.',
    design: 'glassmorphic',
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
      <Footer 
        design="flat" 
        logoText="Flat Design"
        sections={[
          {
            title: 'Links',
            links: [
              { label: 'Home', onPress: () => alert('Home') },
              { label: 'About', onPress: () => alert('About') },
            ],
          },
        ]}
        copyright="© 2024 Flat Design Footer"
        style={{ marginBottom: 24 }}
      />
      
      <Footer 
        design="neumorphic" 
        logoText="Neumorphic Design"
        sections={[
          {
            title: 'Links',
            links: [
              { label: 'Home', onPress: () => alert('Home') },
              { label: 'About', onPress: () => alert('About') },
            ],
          },
        ]}
        socialLinks={(
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button variant="text" size="small" design="neumorphic">GitHub</Button>
          </div>
        )}
        copyright="© 2024 Neumorphic Design Footer"
        style={{ marginBottom: 24 }}
      />
      
      <Footer 
        design="glassmorphic" 
        logoText="Glassmorphic Design"
        sections={[
          {
            title: 'Links',
            links: [
              { label: 'Home', onPress: () => alert('Home') },
              { label: 'About', onPress: () => alert('About') },
            ],
          },
        ]}
        socialLinks={(
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button variant="text" size="small" design="glassmorphic">GitHub</Button>
          </div>
        )}
        copyright="© 2024 Glassmorphic Design Footer"
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