import '@testing-library/jest-dom';

// Mock platform detection for tests
global.__DEV__ = true;

// Mock window and document for web compatibility
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock requestAnimationFrame
global.requestAnimationFrame = callback => setTimeout(callback, 0);
global.cancelAnimationFrame = id => clearTimeout(id);

// Mock console for cleaner test output
const originalConsoleWarn = console.warn;
console.warn = (...args) => {
  // Suppress specific React Native warnings during tests
  const message = args[0];
  if (
    typeof message === 'string' && 
    (message.includes('React Native not available') ||
     message.includes('componentWillReceiveProps'))
  ) {
    return;
  }
  originalConsoleWarn(...args);
};
