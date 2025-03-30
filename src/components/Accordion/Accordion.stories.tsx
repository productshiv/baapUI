import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';
import Typography from '../Typography/Typography';

const meta: Meta<typeof Accordion> = {
  title: 'Navigation/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const sections = [
  {
    id: '1',
    title: 'What is React Native?',
    content: 'React Native is a framework for building mobile applications using React and native platform capabilities.',
  },
  {
    id: '2',
    title: 'How does it work?',
    content: 'It uses JavaScript/TypeScript to build native mobile apps by converting React components to native platform UI elements.',
  },
  {
    id: '3',
    title: 'Why use React Native?',
    content: 'React Native allows you to build mobile apps for multiple platforms using a single codebase, saving time and resources.',
  },
];

export const Default: Story = {
  args: {
    sections,
    expandedSection: '1',
    onToggle: () => {},
  },
};

// Interactive example
const InteractiveAccordion = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <View style={{ width: '100%', maxWidth: 600 }}>
      <Accordion
        sections={sections}
        expandedSection={expandedSection}
        onToggle={setExpandedSection}
      />
    </View>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveAccordion />,
}; 