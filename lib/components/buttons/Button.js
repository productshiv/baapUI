"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ThemeProvider_1 = require("../../design-systems/theme/ThemeProvider");
const Button = (_a) => {
    var _b;
    var { title, variant = 'primary', size = 'medium', fullWidth = false, loading = false, disabled = false, leftIcon, rightIcon, onPress, style } = _a, props = __rest(_a, ["title", "variant", "size", "fullWidth", "loading", "disabled", "leftIcon", "rightIcon", "onPress", "style"]);
    const theme = (0, ThemeProvider_1.useTheme)();
    const buttonStyles = (_b = theme.components) === null || _b === void 0 ? void 0 : _b.button;
    const getButtonStyle = () => {
        var _a, _b, _c;
        const baseStyle = [
            styles.base,
            (_a = buttonStyles === null || buttonStyles === void 0 ? void 0 : buttonStyles.variants) === null || _a === void 0 ? void 0 : _a[variant],
            (_b = buttonStyles === null || buttonStyles === void 0 ? void 0 : buttonStyles.sizes) === null || _b === void 0 ? void 0 : _b[size],
            fullWidth === true && styles.fullWidth,
            (disabled || loading) && ((_c = buttonStyles === null || buttonStyles === void 0 ? void 0 : buttonStyles.states) === null || _c === void 0 ? void 0 : _c.disabled),
            style,
        ].filter(Boolean);
        return baseStyle;
    };
    const getTextStyle = () => {
        var _a, _b, _c;
        return [
            styles.text,
            (_a = buttonStyles === null || buttonStyles === void 0 ? void 0 : buttonStyles.textVariants) === null || _a === void 0 ? void 0 : _a[variant],
            (_b = buttonStyles === null || buttonStyles === void 0 ? void 0 : buttonStyles.textSizes) === null || _b === void 0 ? void 0 : _b[size],
            (disabled || loading) && ((_c = buttonStyles === null || buttonStyles === void 0 ? void 0 : buttonStyles.textStates) === null || _c === void 0 ? void 0 : _c.disabled),
        ].filter(Boolean);
    };
    const renderContent = () => {
        var _a;
        if (loading) {
            return (<react_native_1.ActivityIndicator testID="button-loading-indicator" color={(_a = buttonStyles === null || buttonStyles === void 0 ? void 0 : buttonStyles.loadingColor) === null || _a === void 0 ? void 0 : _a[variant]} size={size === 'small' ? 'small' : 'small'}/>);
        }
        return (<>
        {leftIcon && <>{leftIcon}</>}
        <react_native_1.Text style={getTextStyle()}>{title}</react_native_1.Text>
        {rightIcon && <>{rightIcon}</>}
      </>);
    };
    return (<react_native_1.Pressable style={({ pressed }) => {
            var _a;
            return [
                getButtonStyle(),
                pressed && !disabled && ((_a = buttonStyles === null || buttonStyles === void 0 ? void 0 : buttonStyles.states) === null || _a === void 0 ? void 0 : _a.pressed),
            ].filter(Boolean);
        }} onPress={onPress} disabled={disabled || loading} {...props}>
      {renderContent()}
    </react_native_1.Pressable>);
};
exports.Button = Button;
const styles = react_native_1.StyleSheet.create({
    base: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        alignSelf: 'flex-start',
    },
    fullWidth: {
        width: '100%',
        alignSelf: 'stretch',
    },
    text: {
        textAlign: 'center',
    },
});
//# sourceMappingURL=Button.js.map