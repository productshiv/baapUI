import '@testing-library/jest-native/extend-expect';

// Mock react-native
jest.mock('react-native', () => require('react-native-mock-render'), { virtual: true });

// Mock Expo constants
jest.mock('expo-constants', () => ({
  default: {
    manifest: {
      extra: {
        apiUrl: 'https://api.example.com',
      },
    },
  },
}));

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Mock asset requires
jest.mock('react-native/Libraries/Image/resolveAssetSource', () => ({
  default: () => ({
    uri: 'test-uri',
  }),
}));

// Mock Platform
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios',
  select: jest.fn(obj => obj.ios),
}));

// Mock Animated
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Mock console.error to fail tests on warnings
const originalConsoleError = console.error;
console.error = (...args) => {
  if (args[0].includes('Warning:')) {
    throw new Error(args[0]);
  }
  originalConsoleError(...args);
}; 