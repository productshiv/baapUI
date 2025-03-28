import { ScaledSize } from 'react-native';
import { Breakpoints } from '../theme/types';
export declare const isWeb: boolean;
export declare const getWindowDimensions: () => ScaledSize;
export declare const useWindowDimensions: () => ScaledSize;
export declare const getBreakpointFromWidth: (width: number, breakpoints: Breakpoints) => keyof Breakpoints;
export declare const useBreakpoint: (breakpoints: Breakpoints) => keyof Breakpoints;
type ResponsiveValue<T> = {
    [K in keyof Breakpoints]?: T;
} & {
    base: T;
};
export declare const getResponsiveValue: <T>(responsiveValue: ResponsiveValue<T>, currentBreakpoint: keyof Breakpoints) => T;
export {};
