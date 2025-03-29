# baapUI

## Overview

baapUI is a multi-design UI framework built with Expo, designed to support multiple design paradigms, including Neumorphism, Skeuomorphism, Flat Design, Material UI, and Simplistic Design. It aims to provide a versatile, scalable, and performant UI solution for Android, iOS, and Web applications.

## Getting Started

To run the project, use the following commands:

- **iOS:** `npm run ios`
- **Android:** `npm run android`
- **Web:** `npm run web`

## Components

### Button

The `Button` component is a customizable UI element that can be styled using the `ButtonStyle` type. It supports the following properties:

- `label`: The text displayed on the button.
- `onPress`: The function to call when the button is pressed.
- `style`: An optional style object to customize the button's appearance, including:
  - `backgroundColor`: The background color of the button.
  - `width`: The width of the button.
  - `height`: The height of the button.
  - `borderRadius`: The border radius of the button.

#### Example Usage

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './components/Button';

const CustomButtonExample: React.FC = () => {
  return (
    <View style={styles.container}>
      <Button
        label="Custom Button"
        onPress={() => console.log('Custom Button Pressed')}
        style={{
          backgroundColor: '#ff6347',
          width: 200,
          height: 50,
          borderRadius: 10,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomButtonExample;
```

## Contributing

Contributions are welcome! Please follow the guidelines outlined in the `devguides.mdc` for best practices.

## License

This project is licensed under the MIT License.
