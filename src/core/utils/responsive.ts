import { Dimensions, Platform, ScaledSize } from 'react-native';
import { useEffect, useState } from 'react';
import { Breakpoints } from '../theme/types';

export const isWeb = Platform.OS === 'web';

export const getWindowDimensions = (): ScaledSize => {
  return Dimensions.get('window');
};

export const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const onChange = ({ window }: { window: ScaledSize }) => {
      setDimensions(window);
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => {
      if (subscription?.remove) {
        subscription.remove();
      }
    };
  }, []);

  return dimensions;
};

export const getBreakpointFromWidth = (
  width: number,
  breakpoints: Breakpoints
): keyof Breakpoints => {
  if (width >= breakpoints.xl) return 'xl';
  if (width >= breakpoints.lg) return 'lg';
  if (width >= breakpoints.md) return 'md';
  if (width >= breakpoints.sm) return 'sm';
  return 'xs';
};

export const useBreakpoint = (breakpoints: Breakpoints) => {
  const dimensions = useWindowDimensions();
  return getBreakpointFromWidth(dimensions.width, breakpoints);
};

type ResponsiveValue<T> = {
  [K in keyof Breakpoints]?: T;
} & {
  base: T;
};

export const getResponsiveValue = <T>(
  responsiveValue: ResponsiveValue<T>,
  currentBreakpoint: keyof Breakpoints
): T => {
  const breakpointOrder: (keyof Breakpoints)[] = ['xl', 'lg', 'md', 'sm', 'xs'];
  const breakpointIndex = breakpointOrder.indexOf(currentBreakpoint);

  for (let i = breakpointIndex; i < breakpointOrder.length; i++) {
    const breakpoint = breakpointOrder[i];
    if (responsiveValue[breakpoint] !== undefined) {
      return responsiveValue[breakpoint] as T;
    }
  }

  return responsiveValue.base;
}; 