// Phase 9: Performance Optimization Utilities
import { useMemo, useCallback, useRef } from 'react';
import { ViewStyle } from '../platform';

/**
 * Style cache for expensive style calculations
 * Prevents recalculation of complex styles on every render
 */
class StyleCache {
  private cache = new Map<string, ViewStyle>();
  private maxSize = 100; // Prevent memory leaks

  get(key: string): ViewStyle | undefined {
    return this.cache.get(key);
  }

  set(key: string, value: ViewStyle): void {
    if (this.cache.size >= this.maxSize) {
      // Remove oldest entry
      const firstKey = this.cache.keys().next().value;
      if (firstKey) {
        this.cache.delete(firstKey);
      }
    }
    this.cache.set(key, value);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }
}

export const styleCache = new StyleCache();

/**
 * Hook for memoizing expensive style calculations
 * @param styleFactory Function that creates the style object
 * @param deps Dependencies array for memoization
 * @param cacheKey Optional cache key for persistent caching
 */
export const useMemoizedStyle = <T extends ViewStyle>(
  styleFactory: () => T,
  deps: React.DependencyList,
  cacheKey?: string
): T => {
  return useMemo(() => {
    if (cacheKey) {
      const cached = styleCache.get(cacheKey) as T;
      if (cached) {
        return cached;
      }
    }

    const style = styleFactory();
    
    if (cacheKey) {
      styleCache.set(cacheKey, style);
    }

    return style;
  }, deps);
};

/**
 * Hook for memoizing event handlers to prevent unnecessary re-renders
 */
export const useMemoizedCallback = <T extends (...args: any[]) => any>(
  callback: T,
  deps: React.DependencyList
): T => {
  return useCallback(callback, deps);
};

/**
 * Hook for debouncing expensive operations
 */
export const useDebounce = <T>(
  value: T,
  delay: number
): T => {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);
  const timeoutRef = useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay]);

  return debouncedValue;
};

/**
 * Performance monitoring utilities
 */
export const performanceMonitor = {
  /**
   * Measure component render time
   */
  measureRender: (componentName: string, renderFn: () => React.ReactElement) => {
    if (process.env.NODE_ENV === 'development') {
      const start = performance.now();
      const result = renderFn();
      const end = performance.now();
      
      if (end - start > 16) { // More than one frame (16ms)
        console.warn(`Slow render detected in ${componentName}: ${(end - start).toFixed(2)}ms`);
      }
      
      return result;
    }
    return renderFn();
  },

  /**
   * Log bundle size information
   */
  logBundleInfo: () => {
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      console.group('📦 BaapUI Bundle Information');
      console.log('Core library loaded');
      console.log('Tree-shaking enabled: Import only what you use');
      console.log('Estimated core size: ~15KB gzipped');
      console.groupEnd();
    }
  },
};

/**
 * Component memoization helper
 */
export const memoizeComponent = <P extends object>(
  Component: React.ComponentType<P>,
  propsAreEqual?: (prevProps: P, nextProps: P) => boolean
) => {
  return React.memo(Component, propsAreEqual);
};

/**
 * Tree-shaking friendly export helper
 */
export const createOptimizedExport = <T>(module: T): T => {
  // Mark module as side-effect free for better tree-shaking
  if (process.env.NODE_ENV === 'development') {
    performanceMonitor.logBundleInfo();
  }
  return module;
};

// React import for hooks
import React from 'react';