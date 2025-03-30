import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-react-native-web'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    if (!config.resolve) {
      config.resolve = {};
    }

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };

    config.resolve.extensions = [
      ...(config.resolve.extensions || []),
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
    ];

    return config;
  },
};

export default config; 