module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'dist/',
    'public/',
    'node_modules/',
    '*.min.js',
    'storybook-static/',
    // Ignore generated Storybook files and build artifacts
    'public/sb-*',
    'public/*.bundle.js',
    'public/*.js.map',
    'public/main.*.js',
    'public/runtime*.js',
    'public/components-*.js',
    'public/*.iframe.bundle.js',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    // Allow empty functions in stories (they're placeholders for examples)
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['methods', 'arrowFunctions'],
      },
    ],
    // Allow any types in platform abstraction layer
    '@typescript-eslint/no-explicit-any': ['warn'],
    // Allow console warnings and errors, but warn on regular console.log
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
  },
  overrides: [
    {
      // Configuration files
      files: ['*.config.js', '.eslintrc.js', 'jest.setup.js'],
      env: {
        node: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      // Jest setup files
      files: ['jest.setup.js', 'jest.setup.ts', '__mocks__/**/*'],
      env: {
        jest: true,
        node: true,
      },
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        'no-console': 'off',
      },
    },
    {
      // Special rules for stories files
      files: ['**/*.stories.tsx', '**/*.stories.ts'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        'no-console': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'react-hooks/rules-of-hooks': 'off', // Stories can use hooks in render functions
        'react/jsx-key': 'off', // Stories often have example arrays without keys
      },
    },
    {
      // Special rules for scanner and development tools
      files: ['scanner/**/*', 'src/utils/**/*'],
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-inner-declarations': 'off',
      },
    },
    {
      // Special rules for platform abstraction layer
      files: ['src/platform/**/*'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
};
