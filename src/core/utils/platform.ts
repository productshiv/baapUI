import { Platform } from 'react-native';

export const isPlatformWeb = Platform.OS === 'web';
export const isPlatformIOS = Platform.OS === 'ios';
export const isPlatformAndroid = Platform.OS === 'android';
export const isPlatformMobile = isPlatformIOS || isPlatformAndroid;

export const selectPlatform = <T>(config: {
  web?: T;
  ios?: T;
  android?: T;
  default: T;
}): T => {
  if (isPlatformWeb && config.web !== undefined) return config.web;
  if (isPlatformIOS && config.ios !== undefined) return config.ios;
  if (isPlatformAndroid && config.android !== undefined) return config.android;
  return config.default;
};

export const getPlatformFontFamily = (fontFamily: string): string => {
  return isPlatformAndroid ? `${fontFamily}.ttf` : fontFamily;
}; 