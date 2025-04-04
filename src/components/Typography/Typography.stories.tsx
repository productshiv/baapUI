import React from 'react';
import { View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';
import { NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';

const meta: Meta<typeof Typography> = {
  title: 'Utility/Typography',
  component: Typography,
  tags: ['autodocs'],
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
    design: {
      control: 'radio',
      options: ['flat', 'neumorphic'],
    },
    color: { control: 'color' },
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
    children: 'Hello World',
    variant: 'body1',
  },
};

export const Neumorphic: Story = {
  args: {
    children: 'Neumorphic Text',
    variant: 'h1',
    design: 'neumorphic',
    backgroundColor: NEUMORPHIC_COLORS.background,
  },
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 10 }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <Typography variant="caption">Caption Text</Typography>
      <Typography variant="overline">Overline Text</Typography>
    </View>
  ),
};

export const Alignments: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 10 }}>
      <Typography align="left">Left Aligned</Typography>
      <Typography align="center">Center Aligned</Typography>
      <Typography align="right">Right Aligned</Typography>
    </View>
  ),
};

export const Colors: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 10 }}>
      <Typography color={NEUMORPHIC_COLORS.primary}>Primary Color</Typography>
      <Typography color={NEUMORPHIC_COLORS.success}>Success Color</Typography>
      <Typography color={NEUMORPHIC_COLORS.danger}>Danger Color</Typography>
      <Typography color={NEUMORPHIC_COLORS.warning}>Warning Color</Typography>
      <Typography color={NEUMORPHIC_COLORS.info}>Info Color</Typography>
    </View>
  ),
};
