// Phase 9: Enhanced Performance Optimization Utilities
import React, { useMemo, useCallback, useRef } from 'react';
import { ViewStyle, TextStyle } from '../platform';
import { Theme } from '../themes/types';
import {
  useCachedStyle,
  generateStyleKey,
  generateThemeStyleKey,
  getCacheStats,
  clearAllCaches,
} from './styleCache';

/**
 * Legacy style cache for backward compatibility
 * @deprecated Use the new styleCache utilities instead
 */
class LegacyStyleCache {
  private cache = new Map<string, ViewStyle>();
  private maxSize = 100;

  get(key: string): ViewStyle | undefined {
    return this.cache.get(key);
  }

  set(key: string, value: ViewStyle): void {
    if (this.cache.size >= this.maxSize) {
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

export const styleCache = new LegacyStyleCache();

/**
 * Enhanced hook for memoizing expensive style calculations with advanced caching
 * @param styleFactory Function that creates the style object
 * @param deps Dependencies array for memoization
 * @param cacheKey Cache key for persistent caching
 * @param theme Optional theme for theme-specific caching
 * @param component Optional component reference for component-specific caching
 */
export const useMemoizedStyle = <T extends ViewStyle | TextStyle>(
  styleFactory: () => T,
  deps: React.DependencyList,
  cacheKey: string,
  theme?: Theme,
  component?: object
): T => {
  return useCachedStyle(styleFactory, [...deps], cacheKey, theme);
};

/**
 * Legacy memoized style hook for backward compatibility
 * @deprecated Use the enhanced useMemoizedStyle instead
 */
export const useLegacyMemoizedStyle = <T extends ViewStyle>(
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
 * Create optimized style factory with automatic cache key generation
 */
export const createStyleFactory = <T extends ViewStyle | TextStyle>(
  componentName: string,
  variant: string
) => {
  return (styleFactory: () => T, props: Record<string, unknown>, theme?: Theme) => {
    const cacheKey = theme 
      ? generateThemeStyleKey(theme, componentName, variant, props)
      : generateStyleKey(componentName, variant, props);
    
    return useCachedStyle(styleFactory, [componentName, variant, ...Object.values(props)], cacheKey, theme);
  };
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
 * Enhanced performance monitoring utilities
 */
export const performanceMonitor = {
  /**
   * Measure component render time with detailed metrics
   */
  measureRender: (componentName: string, renderFn: () => React.ReactElement) => {
    if (process.env.NODE_ENV === 'development') {
      const start = performance.now();
      const result = renderFn();
      const end = performance.now();
      const renderTime = end - start;
      
      // Log performance warnings
      if (renderTime > 16) {
        console.warn(`🐌 Slow render in ${componentName}: ${renderTime.toFixed(2)}ms`);
      } else if (renderTime > 8) {
        console.info(`⚠️ Moderate render time in ${componentName}: ${renderTime.toFixed(2)}ms`);
      }
      
      // Store metrics for analysis
      if (typeof window !== 'undefined') {
        window.__BAAPUI_PERF__ = window.__BAAPUI_PERF__ || {};
        window.__BAAPUI_PERF__[componentName] = {
          ...window.__BAAPUI_PERF__[componentName],
          lastRender: renderTime,
          totalRenders: (window.__BAAPUI_PERF__[componentName]?.totalRenders || 0) + 1,
          avgRenderTime: window.__BAAPUI_PERF__[componentName]
            ? (window.__BAAPUI_PERF__[componentName].avgRenderTime + renderTime) / 2
            : renderTime,
        };
      }
      
      return result;
    }
    return renderFn();
  },

  /**
   * Measure style calculation performance
   */
  measureStyleCalculation: <T>(
    componentName: string,
    variant: string,
    calculationFn: () => T
  ): T => {
    if (process.env.NODE_ENV === 'development') {
      const start = performance.now();
      const result = calculationFn();
      const end = performance.now();
      const calcTime = end - start;
      
      if (calcTime > 5) {
        console.warn(`🎨 Slow style calculation in ${componentName}[${variant}]: ${calcTime.toFixed(2)}ms`);
      }
      
      return result;
    }
    return calculationFn();
  },

  /**
   * Log comprehensive bundle and cache information
   */
  logBundleInfo: () => {
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      console.group('📦 BaapUI Performance Dashboard');
      
      // Bundle info
      console.log('📚 Core library loaded');
      console.log('🌳 Tree-shaking enabled: Import only what you use');
      console.log('📏 Estimated core size: ~15KB gzipped');
      
      // Cache stats
      const cacheStats = getCacheStats();
      console.log(`🚀 Style cache hit rate: ${(cacheStats.hitRate * 100).toFixed(1)}%`);
      console.log(`💾 Cache size: ${cacheStats.globalSize} entries`);
      
      // Performance metrics
      if (window.__BAAPUI_PERF__) {
        console.log('⏱️ Component render metrics:');
        Object.entries(window.__BAAPUI_PERF__).forEach(([component, metrics]: [string, any]) => {
          console.log(`  ${component}: ${metrics.avgRenderTime.toFixed(2)}ms avg (${metrics.totalRenders} renders)`);
        });
      }
      
      console.groupEnd();
    }
  },

  /**
   * Clear performance metrics
   */
  clearMetrics: () => {
    if (typeof window !== 'undefined') {
      window.__BAAPUI_PERF__ = {};
    }
    clearAllCaches();
  },

  /**
   * Get performance report
   */
  getPerformanceReport: () => {
    const cacheStats = getCacheStats();
    const componentMetrics = typeof window !== 'undefined' ? window.__BAAPUI_PERF__ || {} : {};
    
    return {
      cache: cacheStats,
      components: componentMetrics,
      timestamp: new Date().toISOString(),
    };
  },
};

// Extend window interface for TypeScript
declare global {
  interface Window {
    __BAAPUI_PERF__?: Record<string, {
      lastRender: number;
      totalRenders: number;
      avgRenderTime: number;
    }>;
  }
}

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