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
const ThemeProvider_1 = require("../../core/theme/ThemeProvider");
const Button = (_a) => {
    var { title, variant = 'primary', size = 'medium', fullWidth = false, loading = false, disabled = false, leftIcon, rightIcon, onPress, style } = _a, props = __rest(_a, ["title", "variant", "size", "fullWidth", "loading", "disabled", "leftIcon", "rightIcon", "onPress", "style"]);
    const theme = (0, ThemeProvider_1.useTheme)();
    const buttonStyles = theme.components.button;
    const getButtonStyle = () => {
        const baseStyle = [
            styles.base,
            buttonStyles.variants[variant],
            buttonStyles.sizes[size],
            fullWidth && styles.fullWidth,
            (disabled || loading) && buttonStyles.states.disabled,
            style,
        ];
        return baseStyle;
    };
    const getTextStyle = () => {
        return [
            styles.text,
            buttonStyles.textVariants[variant],
            buttonStyles.textSizes[size],
            (disabled || loading) && buttonStyles.textStates.disabled,
        ];
    };
    const renderContent = () => {
        if (loading) {
            return (<react_native_1.ActivityIndicator color={buttonStyles.loadingColor[variant]} size={size === 'small' ? 'small' : 'small'}/>);
        }
        return (<>
        {leftIcon && <>{leftIcon}</>}
        <react_native_1.Text style={getTextStyle()}>{title}</react_native_1.Text>
        {rightIcon && <>{rightIcon}</>}
      </>);
    };
    return (<react_native_1.Pressable style={({ pressed }) => [
            getButtonStyle(),
            pressed && !disabled && buttonStyles.states.pressed,
        ]} onPress={onPress} disabled={disabled || loading} {...props}>
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
    },
    fullWidth: {
        width: '100%',
    },
    text: {
        textAlign: 'center',
    },
});
//# sourceMappingURL=Button.js.map