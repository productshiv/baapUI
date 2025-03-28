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
exports.ButtonExamples = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const Button_1 = require("../Button");
const IconExample = () => <react_native_1.View style={styles.icon}/>;
const ButtonExamples = () => {
    const [loading, setLoading] = (0, react_1.useState)(false);
    const handleLoadingPress = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };
    return (<react_native_1.View style={styles.container}>
      {/* Basic Buttons */}
      <Button_1.Button title="Primary Button" onPress={() => { }} style={styles.button}/>
      <Button_1.Button title="Secondary Button" variant="secondary" onPress={() => { }} style={styles.button}/>
      <Button_1.Button title="Outline Button" variant="outline" onPress={() => { }} style={styles.button}/>
      <Button_1.Button title="Ghost Button" variant="ghost" onPress={() => { }} style={styles.button}/>

      {/* Size Variations */}
      <Button_1.Button title="Small Button" size="small" onPress={() => { }} style={styles.button}/>
      <Button_1.Button title="Large Button" size="large" onPress={() => { }} style={styles.button}/>

      {/* States */}
      <Button_1.Button title="Disabled Button" disabled={true} onPress={() => { }} style={styles.button}/>
      <Button_1.Button title={loading ? 'Loading...' : 'Click to Load'} loading={loading} onPress={handleLoadingPress} style={styles.button}/>

      {/* Icons */}
      <Button_1.Button title="Left Icon" leftIcon={<IconExample />} onPress={() => { }} style={styles.button}/>
      <Button_1.Button title="Right Icon" rightIcon={<IconExample />} onPress={() => { }} style={styles.button}/>
      <Button_1.Button title="Both Icons" leftIcon={<IconExample />} rightIcon={<IconExample />} onPress={() => { }} style={styles.button}/>

      {/* Full Width */}
      <Button_1.Button title="Full Width Button" fullWidth={true} onPress={() => { }} style={styles.button}/>
    </react_native_1.View>);
};
exports.ButtonExamples = ButtonExamples;
const styles = react_native_1.StyleSheet.create({
    container: {
        padding: 16,
        gap: 8,
    },
    button: {
        marginVertical: 4,
    },
    icon: {
        width: 16,
        height: 16,
        backgroundColor: 'currentColor',
        borderRadius: 8,
        marginHorizontal: 8,
    },
});
//# sourceMappingURL=ButtonExamples.js.map