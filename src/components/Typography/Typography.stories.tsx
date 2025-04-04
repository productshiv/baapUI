import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Utility/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'overline',
      ],
    },
    color: {
      control: 'color',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'Hello Typography',
    variant: 'body1',
  },
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 16, padding: 20 }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body 1 - Main content text</Typography>
      <Typography variant="body2">Body 2 - Secondary content text</Typography>
      <Typography variant="caption">Caption - Small text and labels</Typography>
      <Typography variant="overline">Overline Text</Typography>
    </View>
  ),
};
