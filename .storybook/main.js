const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  webpackFinal: async (config) => {
    // Handle React Native Web
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native$': 'react-native-web',
      // Add Platform-specific module aliases
      './Platform': 'react-native-web/dist/exports/Platform',
      '../Utilities/Platform': 'react-native-web/dist/exports/Platform',
      // Add other necessary React Native module aliases
      'react-native/Libraries/Image/AssetSourceResolver': 'react-native-web/dist/exports/Image/AssetSourceResolver',
      'react-native/Libraries/vendor/emitter/EventEmitter': 'react-native-web/dist/vendor/react-native/emitter/EventEmitter',
      'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter': 'react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter',
      'react-native/Libraries/Core/Devtools/parseErrorStack': 'react-native-web/dist/modules/parseErrorStack',
      'react-native/Libraries/Core/Devtools/getDevServer': 'react-native-web/dist/modules/getDevServer',
    };

    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];

    // Handle platform-specific files
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules[/\\](?!react-native-)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          plugins: ['react-native-web']
        }
      }
    });

    return config;
  },
  docs: {
    autodocs: true
  }
}; 