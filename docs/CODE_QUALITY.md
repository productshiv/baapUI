# BaapUI Code Quality & Testing Guide

This document outlines the code quality improvements, testing utilities, and best practices implemented in BaapUI.

## 🎯 Overview

BaapUI now includes comprehensive code quality tools and testing utilities to ensure:
- **Accessibility compliance** (WCAG 2.1 AA standards)
- **Performance optimization** with advanced caching
- **Type safety** with strict TypeScript configuration
- **Consistent code style** with ESLint rules
- **Automated testing** for components and themes

## 🔧 New Utilities

### 1. Accessibility Utilities (`src/utils/accessibility.ts`)

```typescript
import { checkColorContrast, validateThemeAccessibility } from '../utils/accessibility';

// Check color contrast ratio
const contrast = checkColorContrast('#000000', '#FFFFFF');
console.log(contrast.ratio); // 21:1
console.log(contrast.level); // 'AAA'

// Validate entire theme
const results = validateThemeAccessibility(theme.colors);
```

**Features:**
- WCAG 2.1 compliance checking
- Color contrast ratio calculation
- Automatic color suggestions
- Theme-wide accessibility validation

### 2. Advanced Style Caching (`src/utils/styleCache.ts`)

```typescript
import { useCachedStyle, clearCache } from '../utils/styleCache';

// Use cached styles in components
const styles = useCachedStyle(
  'Button',
  { variant, size, theme },
  () => createButtonStyles(variant, size, theme)
);
```

**Features:**
- Global style cache with automatic cleanup
- Component-specific caching
- LRU eviction policy
- Performance metrics tracking
- Memory-efficient WeakMap storage

### 3. Performance Monitoring (`src/utils/performance.ts`)

```typescript
import { performanceMonitor, measureStyleCalculation } from '../utils/performance';

// Monitor component performance
performanceMonitor.startRender('Button');
// ... component render logic
performanceMonitor.endRender('Button');

// Measure style calculation time
const styles = measureStyleCalculation('ButtonStyles', () => {
  return StyleSheet.create({ /* styles */ });
});
```

**Features:**
- Render time tracking
- Style calculation performance
- Memory usage monitoring
- Bundle size analysis
- Development warnings for slow operations

### 4. Theme Validation (`src/themes/validation.ts`)

```typescript
import { validateTheme, ThemeValidationError } from '../themes/validation';

try {
  const validatedTheme = validateTheme(myTheme);
  console.log('✅ Theme is valid');
} catch (error) {
  if (error instanceof ThemeValidationError) {
    console.error('Theme validation failed:', error.details);
  }
}
```

**Features:**
- Comprehensive theme structure validation
- Color format validation (hex, rgb, rgba)
- Typography consistency checks
- Shadow and spacing validation
- Accessibility compliance verification

### 5. Testing Utilities (`src/utils/testing.ts`)

```typescript
import { runComponentTestSuite, generateTestReport } from '../utils/testing';

// Run comprehensive tests
const testSuite = runComponentTestSuite(
  'Button',
  'primary',
  { backgroundColor: '#007AFF', textColor: '#FFFFFF' },
  renderFunction,
  styleCalculationFunction
);

// Generate report
const report = generateTestReport([testSuite]);
console.log(report);
```

**Features:**
- Automated accessibility testing
- Performance benchmarking
- Visual regression testing (placeholder)
- Component test suites
- Detailed reporting

## 🎨 Enhanced Retro Theme

The retro theme now includes accessibility improvements:

```typescript
import { 
  accessibleRetroNeon80s, 
  retroThemeUtils,
  createAccessibleRetroTheme 
} from '../themes/variants/retro';

// Use accessible retro themes
const theme = accessibleRetroNeon80s;

// Validate color combinations
const contrast = retroThemeUtils.validateColorCombination('#FF1493', '#0A0A0A');

// Get contrasting text color
const textColor = retroThemeUtils.getContrastingTextColor('#0A0A0A');
```

**Improvements:**
- WCAG AA compliant color palettes
- Automatic contrast validation
- Accessible theme variants for each era
- Utility functions for color management

## 📋 ESLint Configuration

New ESLint rules for BaapUI (`eslint-baapui.config.js`):

```javascript
// Custom rules for BaapUI
rules: {
  'baapui/theme-prop-deprecated': 'warn',
  'baapui/validate-color-contrast': 'error',
  '@typescript-eslint/strict-boolean-expressions': 'error',
  'react-hooks/exhaustive-deps': 'error',
  'jsx-a11y/color-contrast': 'error',
}
```

**Features:**
- TypeScript strict mode enforcement
- React and React Hooks best practices
- Accessibility linting (jsx-a11y)
- Import organization
- Performance-focused rules
- Custom BaapUI-specific rules

## 🧪 Testing Strategy

### Component Testing

1. **Accessibility Tests**
   - Color contrast validation
   - Keyboard navigation
   - Screen reader compatibility
   - ARIA attributes

2. **Performance Tests**
   - Render time benchmarks
   - Style calculation performance
   - Cache hit rate monitoring
   - Memory usage tracking

3. **Visual Regression Tests**
   - Screenshot comparison (planned)
   - Cross-platform consistency
   - Theme variant validation

### Usage Example

```typescript
import { testUtils, runComponentTestSuite } from '../utils/testing';

// Create test environment
const mockTheme = testUtils.createMockTheme({
  colors: { primary: '#007AFF', background: '#FFFFFF' }
});

const testProps = testUtils.createTestProps({
  variant: 'primary',
  size: 'large'
});

// Run tests
const results = runComponentTestSuite(
  'Button',
  'primary-large',
  { theme: mockTheme, ...testProps },
  () => renderButton(testProps),
  () => calculateButtonStyles(testProps)
);

// Check results
if (results.overall.passed) {
  console.log(`✅ All tests passed (${results.overall.score}% score)`);
} else {
  console.error(`❌ Tests failed: ${results.overall.summary}`);
}
```

## 🚀 Performance Optimizations

### Style Caching

- **Global Cache**: Shared across all components
- **Component Cache**: Isolated per component type
- **Theme Cache**: Optimized for theme switching
- **Automatic Cleanup**: Memory-efficient garbage collection

### Monitoring

- **Development Warnings**: Alerts for slow operations
- **Performance Metrics**: Detailed timing and memory data
- **Cache Statistics**: Hit rates and efficiency metrics
- **Bundle Analysis**: Size and dependency tracking

## 📊 Quality Metrics

### Accessibility
- ✅ WCAG 2.1 AA compliance
- ✅ Color contrast ratios ≥ 4.5:1
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility

### Performance
- ✅ Render times < 16ms (60fps)
- ✅ Style calculation < 5ms
- ✅ Cache hit rate > 80%
- ✅ Memory usage optimization

### Code Quality
- ✅ TypeScript strict mode
- ✅ 100% type coverage
- ✅ ESLint compliance
- ✅ Consistent code style

## 🔄 Migration Guide

### Updating Existing Components

1. **Replace old caching**:
   ```typescript
   // Old
   const styles = useMemoizedStyle(deps, factory);
   
   // New
   const styles = useCachedStyle('ComponentName', deps, factory);
   ```

2. **Add accessibility validation**:
   ```typescript
   import { checkColorContrast } from '../utils/accessibility';
   
   // Validate colors in component
   const contrast = checkColorContrast(textColor, backgroundColor);
   if (contrast.ratio < 4.5) {
     console.warn('Color contrast may not meet accessibility standards');
   }
   ```

3. **Use validated themes**:
   ```typescript
   // Old
   import { retroLightTheme } from '../themes/variants/retro';
   
   // New
   import { validatedRetroLightTheme } from '../themes/variants/retro';
   ```

### Testing Integration

1. **Add component tests**:
   ```typescript
   import { runComponentTestSuite } from '../utils/testing';
   
   // In your test files
   const testResults = runComponentTestSuite(
     'YourComponent',
     'variant',
     props,
     renderFn,
     styleFn
   );
   ```

2. **Enable performance monitoring**:
   ```typescript
   import { performanceMonitor } from '../utils/performance';
   
   // In development builds
   if (__DEV__) {
     performanceMonitor.startRender('YourComponent');
     // ... render logic
     performanceMonitor.endRender('YourComponent');
   }
   ```

## 🎯 Next Steps

1. **Visual Regression Testing**: Implement screenshot comparison
2. **Automated Testing**: CI/CD integration
3. **Performance Budgets**: Set and enforce performance limits
4. **Accessibility Automation**: Automated a11y testing in CI
5. **Documentation**: Interactive component documentation
6. **Design Tokens**: Systematic design token management

## 📚 Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [React Native Performance](https://reactnative.dev/docs/performance)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

---

*This guide is part of the BaapUI design system. For questions or contributions, please refer to the main documentation.*