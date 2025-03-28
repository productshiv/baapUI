export declare const isPlatformWeb: boolean;
export declare const isPlatformIOS: boolean;
export declare const isPlatformAndroid: boolean;
export declare const isPlatformMobile: boolean;
export declare const selectPlatform: <T>(config: {
    web?: T;
    ios?: T;
    android?: T;
    default: T;
}) => T;
export declare const getPlatformFontFamily: (fontFamily: string) => string;
