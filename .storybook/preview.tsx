import React from 'react';
import { View } from 'react-native';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'Core UI',
          'Form',
          'Navigation',
          'Feedback',
          'Data Display',
          'Utility',
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default preview; 