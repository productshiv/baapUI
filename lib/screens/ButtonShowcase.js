"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Button_1 = require("../components/buttons/Button");
const ThemeProvider_1 = require("../core/theme/ThemeProvider");
const vector_icons_1 = require("@expo/vector-icons");
const ButtonShowcaseScreen = () => {
    return (<ThemeProvider_1.ThemeProvider>
      <react_native_1.ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <react_native_1.View style={styles.section}>
          <Button_1.Button title="Primary Button" onPress={() => alert('Primary Button Pressed')} style={styles.button}/>
          <Button_1.Button title="Secondary Button" variant="secondary" onPress={() => alert('Secondary Button Pressed')} style={styles.button}/>
          <Button_1.Button title="Outline Button" variant="outline" onPress={() => alert('Outline Button Pressed')} style={styles.button}/>
          <Button_1.Button title="Ghost Button" variant="ghost" onPress={() => alert('Ghost Button Pressed')} style={styles.button}/>
        </react_native_1.View>

        <react_native_1.View style={styles.section}>
          <Button_1.Button title="Small Button" size="small" onPress={() => { }} style={styles.button}/>
          <Button_1.Button title="Medium Button" size="medium" onPress={() => { }} style={styles.button}/>
          <Button_1.Button title="Large Button" size="large" onPress={() => { }} style={styles.button}/>
        </react_native_1.View>

        <react_native_1.View style={styles.section}>
          <Button_1.Button title="With Left Icon" leftIcon={<vector_icons_1.MaterialIcons name="favorite" size={24} color="white"/>} onPress={() => { }} style={styles.button}/>
          <Button_1.Button title="With Right Icon" rightIcon={<vector_icons_1.MaterialIcons name="arrow-forward" size={24} color="white"/>} onPress={() => { }} style={styles.button}/>
          <Button_1.Button title="Both Icons" leftIcon={<vector_icons_1.MaterialIcons name="star" size={24} color="white"/>} rightIcon={<vector_icons_1.MaterialIcons name="arrow-forward" size={24} color="white"/>} onPress={() => { }} style={styles.button}/>
        </react_native_1.View>

        <react_native_1.View style={styles.section}>
          <Button_1.Button title="Disabled Button" disabled={true} onPress={() => { }} style={styles.button}/>
          <Button_1.Button title="Loading Button" loading={true} onPress={() => { }} style={styles.button}/>
          <Button_1.Button title="Full Width Button" fullWidth={true} onPress={() => { }} style={styles.button}/>
        </react_native_1.View>
      </react_native_1.ScrollView>
    </ThemeProvider_1.ThemeProvider>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        padding: react_native_1.Platform.select({ web: 40, default: 16 }),
    },
    section: Object.assign({ marginBottom: 32, backgroundColor: 'white', padding: 16, borderRadius: 8 }, react_native_1.Platform.select({
        web: {
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        default: {
            elevation: 2,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
        },
    })),
    button: {
        marginVertical: 8,
    },
});
exports.default = ButtonShowcaseScreen;
//# sourceMappingURL=ButtonShowcase.js.map