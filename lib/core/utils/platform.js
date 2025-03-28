"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlatformFontFamily = exports.selectPlatform = exports.isPlatformMobile = exports.isPlatformAndroid = exports.isPlatformIOS = exports.isPlatformWeb = void 0;
const react_native_1 = require("react-native");
exports.isPlatformWeb = react_native_1.Platform.OS === 'web';
exports.isPlatformIOS = react_native_1.Platform.OS === 'ios';
exports.isPlatformAndroid = react_native_1.Platform.OS === 'android';
exports.isPlatformMobile = exports.isPlatformIOS || exports.isPlatformAndroid;
const selectPlatform = (config) => {
    if (exports.isPlatformWeb && config.web !== undefined)
        return config.web;
    if (exports.isPlatformIOS && config.ios !== undefined)
        return config.ios;
    if (exports.isPlatformAndroid && config.android !== undefined)
        return config.android;
    return config.default;
};
exports.selectPlatform = selectPlatform;
const getPlatformFontFamily = (fontFamily) => {
    return exports.isPlatformAndroid ? `${fontFamily}.ttf` : fontFamily;
};
exports.getPlatformFontFamily = getPlatformFontFamily;
//# sourceMappingURL=platform.js.map