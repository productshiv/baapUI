"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = exports.ThemeProvider = void 0;
const react_1 = __importStar(require("react"));
const defaultTheme = {
    colors: {
        primary: '#007AFF',
        secondary: '#5856D6',
        success: '#34C759',
        warning: '#FF9500',
        error: '#FF3B30',
        info: '#5856D6',
        background: '#FFFFFF',
        surface: '#F2F2F7',
        text: '#000000',
        textSecondary: '#8E8E93',
        border: '#C6C6C8',
    },
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
    },
    radii: {
        xs: 4,
        sm: 8,
        md: 12,
        lg: 16,
        xl: 20,
        full: 9999,
    },
    components: {
        button: {
            variants: {
                primary: {
                    backgroundColor: '#007AFF',
                },
                secondary: {
                    backgroundColor: '#5856D6',
                },
                outline: {
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    borderColor: '#007AFF',
                },
                ghost: {
                    backgroundColor: 'transparent',
                },
            },
            sizes: {
                small: {
                    paddingVertical: 8,
                    paddingHorizontal: 12,
                },
                medium: {
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                },
                large: {
                    paddingVertical: 16,
                    paddingHorizontal: 20,
                },
            },
            states: {
                pressed: {
                    opacity: 0.8,
                },
                disabled: {
                    opacity: 0.5,
                },
            },
            textVariants: {
                primary: {
                    color: '#FFFFFF',
                },
                secondary: {
                    color: '#FFFFFF',
                },
                outline: {
                    color: '#007AFF',
                },
                ghost: {
                    color: '#007AFF',
                },
            },
            textSizes: {
                small: {
                    fontSize: 14,
                },
                medium: {
                    fontSize: 16,
                },
                large: {
                    fontSize: 18,
                },
            },
            textStates: {
                disabled: {
                    opacity: 0.5,
                },
            },
            loadingColor: {
                primary: '#FFFFFF',
                secondary: '#FFFFFF',
                outline: '#007AFF',
                ghost: '#007AFF',
            },
        },
    },
};
const ThemeContext = (0, react_1.createContext)(defaultTheme);
const ThemeProvider = ({ theme = {}, children, }) => {
    const mergedTheme = Object.assign(Object.assign(Object.assign({}, defaultTheme), theme), { colors: Object.assign(Object.assign({}, defaultTheme.colors), theme.colors), spacing: Object.assign(Object.assign({}, defaultTheme.spacing), theme.spacing), fontSizes: Object.assign(Object.assign({}, defaultTheme.fontSizes), theme.fontSizes), radii: Object.assign(Object.assign({}, defaultTheme.radii), theme.radii), components: Object.assign(Object.assign({}, defaultTheme.components), theme.components) });
    return (<ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>);
};
exports.ThemeProvider = ThemeProvider;
const useTheme = () => {
    const theme = (0, react_1.useContext)(ThemeContext);
    if (!theme) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return theme;
};
exports.useTheme = useTheme;
//# sourceMappingURL=ThemeProvider.js.map