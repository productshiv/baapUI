"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponsiveValue = exports.useBreakpoint = exports.getBreakpointFromWidth = exports.useWindowDimensions = exports.getWindowDimensions = exports.isWeb = void 0;
const react_native_1 = require("react-native");
const react_1 = require("react");
exports.isWeb = react_native_1.Platform.OS === 'web';
const getWindowDimensions = () => {
    return react_native_1.Dimensions.get('window');
};
exports.getWindowDimensions = getWindowDimensions;
const useWindowDimensions = () => {
    const [dimensions, setDimensions] = (0, react_1.useState)((0, exports.getWindowDimensions)());
    (0, react_1.useEffect)(() => {
        const onChange = ({ window }) => {
            setDimensions(window);
        };
        const subscription = react_native_1.Dimensions.addEventListener('change', onChange);
        return () => {
            if (subscription === null || subscription === void 0 ? void 0 : subscription.remove) {
                subscription.remove();
            }
        };
    }, []);
    return dimensions;
};
exports.useWindowDimensions = useWindowDimensions;
const getBreakpointFromWidth = (width, breakpoints) => {
    if (width >= breakpoints.xl)
        return 'xl';
    if (width >= breakpoints.lg)
        return 'lg';
    if (width >= breakpoints.md)
        return 'md';
    if (width >= breakpoints.sm)
        return 'sm';
    return 'xs';
};
exports.getBreakpointFromWidth = getBreakpointFromWidth;
const useBreakpoint = (breakpoints) => {
    const dimensions = (0, exports.useWindowDimensions)();
    return (0, exports.getBreakpointFromWidth)(dimensions.width, breakpoints);
};
exports.useBreakpoint = useBreakpoint;
const getResponsiveValue = (responsiveValue, currentBreakpoint) => {
    const breakpointOrder = ['xl', 'lg', 'md', 'sm', 'xs'];
    const breakpointIndex = breakpointOrder.indexOf(currentBreakpoint);
    for (let i = breakpointIndex; i < breakpointOrder.length; i++) {
        const breakpoint = breakpointOrder[i];
        if (responsiveValue[breakpoint] !== undefined) {
            return responsiveValue[breakpoint];
        }
    }
    return responsiveValue.base;
};
exports.getResponsiveValue = getResponsiveValue;
//# sourceMappingURL=responsive.js.map