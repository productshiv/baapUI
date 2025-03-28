import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native', () => require('react-native-web'));

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

global.window = {};
global.window = global;
global.WebSocket = require('ws');

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Mock StatusBar
jest.mock('react-native/Libraries/Components/StatusBar/StatusBar', () => 'StatusBar');

// Mock Platform.select
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'web',
  select: jest.fn((obj) => obj.web || obj.default),
})); 