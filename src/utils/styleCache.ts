/**
 * Global style cache system for performance optimization
 * Uses WeakMap for automatic garbage collection and memory efficiency
 */

import { ViewStyle, TextStyle } from '../platform';
import { Theme } from '../themes/types';

// Style cache types
type StyleKey = string;
type CachedStyle = ViewStyle | TextStyle;
type StyleCacheEntry = {
  style: CachedStyle;
  timestamp: number;
  hitCount: number;
};

// Global style caches
const STYLE_CACHE = new Map<StyleKey, StyleCacheEntry>();
const THEME_STYLE_CACHE = new WeakMap<Theme, Map<StyleKey, StyleCacheEntry>>();
const COMPONENT_CACHE = new WeakMap<object, Map<StyleKey, StyleCacheEntry>>();

// Cache configuration
const CACHE_CONFIG = {
  maxSize: 1000,
  maxAge: 5 * 60 * 1000, // 5 minutes
  cleanupInterval: 60 * 1000, // 1 minute
  enableMetrics: process.env.NODE_ENV === 'development',
} as const;

// Cache metrics for development
export interface CacheMetrics {
  hits: number;
  misses: number;
  evictions: number;
  size: number;
}

const CACHE_METRICS: CacheMetrics = {
  hits: 0,
  misses: 0,
  evictions: 0,
  size: 0,
};

/**
 * Generate a cache key from style parameters
 */
export function generateStyleKey(
  componentName: string,
  variant: string,
  props: Record<string, unknown>
): StyleKey {
  const sortedProps = Object.keys(props)
    .sort()
    .map(key => `${key}:${JSON.stringify(props[key])}`)
    .join('|');
  
  return `${componentName}-${variant}-${sortedProps}`;
}

/**
 * Generate a theme-specific cache key
 */
export function generateThemeStyleKey(
  theme: Theme,
  componentName: string,
  variant: string,
  props: Record<string, unknown>
): StyleKey {
  const baseKey = generateStyleKey(componentName, variant, props);
  return `${theme.design}-${theme.mode}-${baseKey}`;
}

/**
 * Clean expired entries from cache
 */
function cleanupCache(cache: Map<StyleKey, StyleCacheEntry>): number {
  const now = Date.now();
  let evicted = 0;
  
  for (const [key, entry] of cache.entries()) {
    if (now - entry.timestamp > CACHE_CONFIG.maxAge) {
      cache.delete(key);
      evicted++;
    }
  }
  
  return evicted;
}

/**
 * Evict least recently used entries when cache is full
 */
function evictLRU(cache: Map<StyleKey, StyleCacheEntry>): number {
  if (cache.size <= CACHE_CONFIG.maxSize) return 0;
  
  const entries = Array.from(cache.entries())
    .sort((a, b) => a[1].timestamp - b[1].timestamp);
  
  const toEvict = cache.size - CACHE_CONFIG.maxSize + 1;
  let evicted = 0;
  
  for (let i = 0; i < toEvict && i < entries.length; i++) {
    cache.delete(entries[i][0]);
    evicted++;
  }
  
  return evicted;
}

/**
 * Get style from global cache
 */
export function getStyleFromCache(key: StyleKey): CachedStyle | null {
  const entry = STYLE_CACHE.get(key);
  
  if (entry) {
    entry.hitCount++;
    entry.timestamp = Date.now(); // Update for LRU
    
    if (CACHE_CONFIG.enableMetrics) {
      CACHE_METRICS.hits++;
    }
    
    return entry.style;
  }
  
  if (CACHE_CONFIG.enableMetrics) {
    CACHE_METRICS.misses++;
  }
  
  return null;
}

/**
 * Set style in global cache
 */
export function setStyleInCache(key: StyleKey, style: CachedStyle): void {
  // Clean up expired entries periodically
  if (STYLE_CACHE.size > 0 && Math.random() < 0.1) {
    const evicted = cleanupCache(STYLE_CACHE);
    if (CACHE_CONFIG.enableMetrics) {
      CACHE_METRICS.evictions += evicted;
    }
  }
  
  // Evict LRU entries if cache is full
  const lruEvicted = evictLRU(STYLE_CACHE);
  if (CACHE_CONFIG.enableMetrics) {
    CACHE_METRICS.evictions += lruEvicted;
  }
  
  STYLE_CACHE.set(key, {
    style,
    timestamp: Date.now(),
    hitCount: 0,
  });
  
  if (CACHE_CONFIG.enableMetrics) {
    CACHE_METRICS.size = STYLE_CACHE.size;
  }
}

/**
 * Get style from theme-specific cache
 */
export function getThemeStyleFromCache(
  theme: Theme,
  key: StyleKey
): CachedStyle | null {
  const themeCache = THEME_STYLE_CACHE.get(theme);
  if (!themeCache) return null;
  
  const entry = themeCache.get(key);
  if (entry) {
    entry.hitCount++;
    entry.timestamp = Date.now();
    return entry.style;
  }
  
  return null;
}

/**
 * Set style in theme-specific cache
 */
export function setThemeStyleInCache(
  theme: Theme,
  key: StyleKey,
  style: CachedStyle
): void {
  let themeCache = THEME_STYLE_CACHE.get(theme);
  
  if (!themeCache) {
    themeCache = new Map();
    THEME_STYLE_CACHE.set(theme, themeCache);
  }
  
  // Clean up and evict as needed
  cleanupCache(themeCache);
  evictLRU(themeCache);
  
  themeCache.set(key, {
    style,
    timestamp: Date.now(),
    hitCount: 0,
  });
}

/**
 * Get style from component-specific cache
 */
export function getComponentStyleFromCache(
  component: object,
  key: StyleKey
): CachedStyle | null {
  const componentCache = COMPONENT_CACHE.get(component);
  if (!componentCache) return null;
  
  const entry = componentCache.get(key);
  if (entry) {
    entry.hitCount++;
    entry.timestamp = Date.now();
    return entry.style;
  }
  
  return null;
}

/**
 * Set style in component-specific cache
 */
export function setComponentStyleInCache(
  component: object,
  key: StyleKey,
  style: CachedStyle
): void {
  let componentCache = COMPONENT_CACHE.get(component);
  
  if (!componentCache) {
    componentCache = new Map();
    COMPONENT_CACHE.set(component, componentCache);
  }
  
  cleanupCache(componentCache);
  evictLRU(componentCache);
  
  componentCache.set(key, {
    style,
    timestamp: Date.now(),
    hitCount: 0,
  });
}

/**
 * Enhanced memoized style hook with global caching
 */
export function useCachedStyle<T extends CachedStyle>(
  styleFactory: () => T,
  dependencies: unknown[],
  cacheKey: string,
  theme?: Theme,
  component?: object
): T {
  // Try different cache levels
  let cachedStyle: CachedStyle | null = null;
  
  if (component) {
    cachedStyle = getComponentStyleFromCache(component, cacheKey);
  }
  
  if (!cachedStyle && theme) {
    cachedStyle = getThemeStyleFromCache(theme, cacheKey);
  }
  
  if (!cachedStyle) {
    cachedStyle = getStyleFromCache(cacheKey);
  }
  
  if (cachedStyle) {
    return cachedStyle as T;
  }
  
  // Generate new style
  const newStyle = styleFactory();
  
  // Cache at appropriate level
  if (component) {
    setComponentStyleInCache(component, cacheKey, newStyle);
  } else if (theme) {
    setThemeStyleInCache(theme, cacheKey, newStyle);
  } else {
    setStyleInCache(cacheKey, newStyle);
  }
  
  return newStyle;
}

/**
 * Clear all caches
 */
export function clearAllCaches(): void {
  STYLE_CACHE.clear();
  // WeakMaps will be garbage collected automatically
  
  if (CACHE_CONFIG.enableMetrics) {
    CACHE_METRICS.hits = 0;
    CACHE_METRICS.misses = 0;
    CACHE_METRICS.evictions = 0;
    CACHE_METRICS.size = 0;
  }
}

/**
 * Clear theme-specific cache
 */
export function clearThemeCache(theme: Theme): void {
  THEME_STYLE_CACHE.delete(theme);
}

/**
 * Clear component-specific cache
 */
export function clearComponentCache(component: object): void {
  COMPONENT_CACHE.delete(component);
}

/**
 * Get cache metrics (development only)
 */
export function getCacheMetrics(): CacheMetrics {
  return { ...CACHE_METRICS };
}

/**
 * Get cache statistics
 */
export function getCacheStats(): {
  globalSize: number;
  hitRate: number;
  metrics: CacheMetrics;
} {
  const totalRequests = CACHE_METRICS.hits + CACHE_METRICS.misses;
  const hitRate = totalRequests > 0 ? CACHE_METRICS.hits / totalRequests : 0;
  
  return {
    globalSize: STYLE_CACHE.size,
    hitRate: Math.round(hitRate * 100) / 100,
    metrics: getCacheMetrics(),
  };
}

/**
 * Initialize cache cleanup interval
 */
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const evicted = cleanupCache(STYLE_CACHE);
    if (CACHE_CONFIG.enableMetrics && evicted > 0) {
      CACHE_METRICS.evictions += evicted;
      CACHE_METRICS.size = STYLE_CACHE.size;
    }
  }, CACHE_CONFIG.cleanupInterval);
}