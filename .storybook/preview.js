import React from 'react';
import { ThemeProvider } from '../src/themes/ThemeContext';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
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
      <ThemeProvider initialDesign="flat" initialMode="light">
        <Story />
      </ThemeProvider>
    ),
  ],

  tags: ['autodocs']
};

export default preview;
