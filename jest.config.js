module.exports = {
  preset: 'jest-expo',
  setupFiles: [
    '<rootDir>/jest.setup.js'
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/jest.transformer.js'
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^react-native$': 'react-native-web'
  },
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/__tests__/**/*'
  ]
}; 