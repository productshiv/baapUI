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
};

export default preview;
