import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const meta: Meta<typeof Accordion> = {
  title: 'Navigation/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const sampleSections = [
  {
    id: '1',
    title: 'Section 1',
    content: 'This is the content for section 1.',
  },
  {
    id: '2',
    title: 'Section 2',
    content: 'This is the content for section 2.',
  },
  {
    id: '3',
    title: 'Section 3',
    content: 'This is the content for section 3.',
  },
];

export const Default: Story = {
  args: {
    sections: sampleSections,
    expandedSection: null,
    onToggle: () => {},
  },
};

export const WithExpandedSection: Story = {
  args: {
    sections: sampleSections,
    expandedSection: '1',
    onToggle: () => {},
  },
};

export const Neumorphic: Story = {
  args: {
    sections: sampleSections,
    expandedSection: null,
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
    textColor: NEUMORPHIC_COLORS.text,
    onToggle: () => {},
  },
};
