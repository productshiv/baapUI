import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        JSX: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        HTMLSpanElement: 'readonly',
        HTMLDivElement: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks,
      'storybook': storybook,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-empty-function': [
        'error',
        {
          allow: ['methods', 'arrowFunctions'],
        },
      ],
      '@typescript-eslint/no-explicit-any': ['warn'],
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['*.config.js', 'eslint.config.js', 'jest.setup.js', '.storybook/**/*'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    files: ['jest.setup.js', 'jest.setup.ts', '__mocks__/**/*', '**/*.test.{js,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      '@typescript-eslint/no-empty-function': 'off',
      'no-console': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    files: ['**/*.stories.tsx', '**/*.stories.ts'],
    plugins: {
      'storybook': storybook,
    },
    rules: {
      ...storybook.configs.recommended.rules,
      '@typescript-eslint/no-empty-function': 'off',
      'no-console': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'react/jsx-key': 'off',
    },
  },
  {
    files: ['scanner/**/*', 'src/utils/**/*'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-inner-declarations': 'off',
    },
  },
  {
    files: ['src/platform/**/*'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-function': 'off',
    },
  },
  {
    ignores: [
      'dist/',
      'public/',
      'node_modules/',
      '*.min.js',
      'storybook-static/',
      'public/sb-*',
      'public/*.bundle.js',
      'public/*.js.map',
      'public/main.*.js',
      'public/runtime*.js',
      'public/components-*.js',
      'public/*.iframe.bundle.js',
    ],
  },
]; 