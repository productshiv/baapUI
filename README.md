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

### Input

The `Input` component is a customizable text input field. It supports all `TextInputProps` from React Native's `TextInput` and an optional `style` prop.

#### Example Usage

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Input from './components/Input';

const InputExample: React.FC = () => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter text"
        style={{
          borderColor: '#007bff',
          width: 200,
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

export default InputExample;
```

### Checkbox

The `Checkbox` component is a toggleable UI element. It supports the following properties:

- `checked`: Initial checked state (default is `false`).
- `onChange`: Callback function triggered when the checkbox is toggled.
- `style`: Optional style object to customize the checkbox's appearance.

#### Example Usage

```tsx
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Checkbox from './components/Checkbox';

const CheckboxExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox
        checked={isChecked}
        onChange={setIsChecked}
        style={{ marginBottom: 10 }}
      />
      <Text>{isChecked ? 'Checked' : 'Unchecked'}</Text>
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

export default CheckboxExample;
```

### RadioButton

The `RadioButton` component is used for selecting one option from a set. It supports the following properties:

- `selected`: Initial selected state (default is `false`).
- `onSelect`: Callback function triggered when the radio button is selected.
- `style`: Optional style object to customize the radio button's appearance.

#### Example Usage

```tsx
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import RadioButton from './components/RadioButton';

const RadioButtonExample: React.FC = () => {
  const [selected, setSelected] = useState(false);

  return (
    <View style={styles.container}>
      <RadioButton
        selected={selected}
        onSelect={() => setSelected(!selected)}
        style={{ marginBottom: 10 }}
      />
      <Text>{selected ? 'Selected' : 'Not Selected'}</Text>
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

export default RadioButtonExample;
```

### Card

The `Card` component is used to group related content with a styled container. It supports the following properties:

- `children`: Content to be displayed inside the card.
- `style`: Optional style object to customize the card's appearance.

#### Example Usage

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './components/Card';

const CardExample: React.FC = () => {
  return (
    <View style={styles.container}>
      <Card>
        <Text>This is a card component</Text>
      </Card>
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

export default CardExample;
```

### Modal

The `Modal` component is used to display overlay content like alerts or confirmations. It supports the following properties:

- `visible`: Controls the visibility of the modal.
- `onClose`: Callback function triggered when the modal is closed.
- `children`: Content to be displayed inside the modal.
- `style`: Optional style object to customize the modal's appearance.

#### Example Usage

```tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modal from './components/Modal';
import Button from './components/Button';

const ModalExample: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button label="Show Modal" onPress={() => setModalVisible(true)} />
      <Modal visible={isModalVisible} onClose={() => setModalVisible(false)}>
        <Text>This is a modal</Text>
      </Modal>
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

export default ModalExample;
```

### TextArea

The `TextArea` component is a customizable multiline text input field. It supports all `TextInputProps` from React Native's `TextInput` and an optional `style` prop.

#### Example Usage

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextArea from './components/TextArea';

const TextAreaExample: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextArea
        placeholder="Enter text here"
        style={{ borderColor: '#007bff', width: 200 }}
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

export default TextAreaExample;
```

### Dropdown

The `Dropdown` component allows users to select options from a list. It supports the following properties:

- `options`: Array of options to display in the dropdown.
- `onSelect`: Callback function triggered when an option is selected.
- `label`: Optional label for the dropdown.
- `style`: Optional style object to customize the dropdown's appearance.

#### Example Usage

```tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dropdown from './components/Dropdown';

const DropdownExample: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Dropdown
        options={["Option 1", "Option 2", "Option 3"]}
        onSelect={setSelectedOption}
        label="Dropdown"
      />
      <Text>Selected: {selectedOption}</Text>
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

export default DropdownExample;
```

### Label

The `Label` component is used to display text labels for form fields and other UI elements. It supports the following properties:

- `text`: The text content of the label.
- `style`: Optional style object to customize the label's appearance.
- `htmlFor`: Optional prop to associate the label with a form element for accessibility.

#### Example Usage

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Label from './components/Label';

const LabelExample: React.FC = () => {
  return (
    <View style={styles.container}>
      <Label text="Enter your name:" style={{ color: '#007bff' }} />
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

export default LabelExample;
```

### ToggleSwitch

The `ToggleSwitch` component is a customizable switch for toggling between on and off states. It supports the following properties:

- `initialValue`: The initial state of the switch (default is `false`).
- `onToggle`: Callback function triggered when the switch is toggled.
- `label`: Optional label displayed next to the switch.
- `style`: Optional style object to customize the switch's appearance.

#### Example Usage

```tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ToggleSwitch from './components/ToggleSwitch';

const ToggleSwitchExample: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <View style={styles.container}>
      <ToggleSwitch
        initialValue={isToggled}
        onToggle={setIsToggled}
        label="Toggle Switch"
        style={{ marginBottom: 10 }}
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

export default ToggleSwitchExample;
```

### Slider

The `Slider` component allows users to select a value from a range. It supports the following properties:

- `value`: The current value of the slider.
- `onValueChange`: Callback function triggered when the slider value changes.
- `minimumValue`: The minimum value of the slider (default is `0`).
- `maximumValue`: The maximum value of the slider (default is `100`).
- `style`: Optional style object to customize the slider's appearance.

#### Example Usage

```tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomSlider from './components/Slider';

const SliderExample: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <View style={styles.container}>
      <CustomSlider
        value={sliderValue}
        onValueChange={setSliderValue}
        minimumValue={0}
        maximumValue={100}
        style={{ width: 200 }}
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

export default SliderExample;
```

### Stepper

The `Stepper` component allows users to increment or decrement a value. It supports the following properties:

- `value`: The current value of the stepper.
- `onValueChange`: Callback function triggered when the value changes.
- `step`: The increment/decrement step size (default is `1`).
- `minimumValue`: The minimum value of the stepper (default is `0`).
- `maximumValue`: The maximum value of the stepper (default is `100`).
- `style`: Optional style object to customize the stepper's appearance.

#### Example Usage

```tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Stepper from './components/Stepper';

const StepperExample: React.FC = () => {
  const [stepperValue, setStepperValue] = useState(0);

  return (
    <View style={styles.container}>
      <Stepper
        value={stepperValue}
        onValueChange={setStepperValue}
        step={1}
        minimumValue={0}
        maximumValue={10}
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

export default StepperExample;
```

### Tabs

The `Tabs` component allows users to switch between different views. It supports the following properties:

- `tabs`: An array of tab objects, each with an `id` and `label`.
- `selectedTab`: The currently selected tab's `id`.
- `onSelect`: Callback function triggered when a tab is selected.
- `style`: Optional style object to customize the tabs' appearance.

#### Example Usage

```tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Tabs from './components/Tabs';

const TabsExample: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'Tab 1' },
    { id: 'tab2', label: 'Tab 2' },
    { id: 'tab3', label: 'Tab 3' },
  ];

  return (
    <View style={styles.container}>
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        onSelect={setSelectedTab}
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

export default TabsExample;
```

### Accordion

The `Accordion` component allows users to expand and collapse sections. It supports the following properties:

- `sections`: An array of section objects, each with an `id`, `title`, and `content`.
- `expandedSection`: The currently expanded section's `id`.
- `onToggle`: Callback function triggered when a section is toggled.
- `style`: Optional style object to customize the accordion's appearance.

#### Example Usage

```tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Accordion from './components/Accordion';

const AccordionExample: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    { id: 'section1', title: 'Section 1', content: 'Content for section 1' },
    { id: 'section2', title: 'Section 2', content: 'Content for section 2' },
    { id: 'section3', title: 'Section 3', content: 'Content for section 3' },
  ];

  const handleToggle = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <View style={styles.container}>
      <Accordion
        sections={sections}
        expandedSection={expandedSection}
        onToggle={handleToggle}
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

export default AccordionExample;
```

### Breadcrumbs

The `Breadcrumbs` component allows users to navigate through a series of hierarchical links. It supports the following properties:

- `items`: An array of breadcrumb items, each with an `id` and `label`.
- `currentItem`: The currently active breadcrumb's `id`.
- `onSelect`: Callback function triggered when a breadcrumb is selected.
- `style`: Optional style object to customize the breadcrumbs' appearance.

#### Example Usage

```tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Breadcrumbs from './components/Breadcrumbs';

const BreadcrumbsExample: React.FC = () => {
  const [currentBreadcrumb, setCurrentBreadcrumb] = useState('home');

  const breadcrumbItems = [
    { id: 'home', label: 'Home' },
    { id: 'category', label: 'Category' },
    { id: 'product', label: 'Product' },
  ];

  return (
    <View style={styles.container}>
      <Breadcrumbs
        items={breadcrumbItems}
        currentItem={currentBreadcrumb}
        onSelect={setCurrentBreadcrumb}
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

export default BreadcrumbsExample;
```

### Pagination

The `Pagination` component allows users to navigate through pages. It supports the following properties:

- `totalPages`: The total number of pages.
- `currentPage`: The currently active page.
- `onPageChange`: Callback function triggered when the page changes.
- `style`: Optional style object to customize the pagination's appearance.

#### Example Usage

```tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Pagination from './components/Pagination';

const PaginationExample: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <View style={styles.container}>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
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

export default PaginationExample;
```

### Drawer

The `Drawer` component allows users to navigate through a list of menu items. It supports the following properties:

- `items`: An array of drawer items, each with an `id` and `label`.
- `selectedItem`: The currently selected drawer item's `id`.
- `onSelect`: Callback function triggered when a drawer item is selected.
- `style`: Optional style object to customize the drawer's appearance.

The drawer is collapsible and can be toggled using a hamburger icon.

#### Example Usage

```tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Drawer from './components/Drawer';

const DrawerExample: React.FC = () => {
  const [selectedDrawerItem, setSelectedDrawerItem] = useState('home');

  const drawerItems = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <View style={styles.container}>
      <Drawer
        items={drawerItems}
        selectedItem={selectedDrawerItem}
        onSelect={setSelectedDrawerItem}
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

export default DrawerExample;
```

### Toast

The `Toast` component is used to display brief messages to the user. It supports the following properties:

- `message`: The message to display in the toast.
- `visible`: Controls the visibility of the toast.
- `onClose`: Callback function triggered when the toast is closed.
- `duration`: Optional duration for which the toast is visible (default is `3000` milliseconds).
- `style`: Optional style object to customize the toast's appearance.

#### Example Usage

```tsx
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Toast from './components/Toast';

const ToastExample: React.FC = () => {
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  return (
    <View style={styles.container}>
      <Button title="Show Toast" onPress={showToast} />
      <Toast
        message="This is a toast message!"
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
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

export default ToastExample;
```

### Tooltip

The `Tooltip` component is used to display additional information when a user hovers over or focuses on an element. It supports the following properties:

- `content`: The text to display inside the tooltip.
- `children`: The element that triggers the tooltip.
- `position`: The position of the tooltip relative to the children (`top`, `bottom`, `left`, `right`).
- `style`: Optional style object to customize the tooltip's appearance.

#### Example Usage

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tooltip from './components/Tooltip';

const TooltipExample: React.FC = () => {
  return (
    <View style={styles.container}>
      <Tooltip content="This is a tooltip!">
        <Text>Hover over me!</Text>
      </Tooltip>
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

export default TooltipExample;
```

### Carousel

The `Carousel` component displays a series of items in a sliding format. It supports the following properties:

- `items`: An array of items to display in the carousel.
- `currentIndex`: The index of the currently visible item.
- `onIndexChange`: Callback function triggered when the carousel index changes.
- `style`: Optional style object to customize the carousel's appearance.

#### Example Usage

```tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Carousel from './components/Carousel';

const CarouselExample: React.FC = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselItems = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <View style={styles.container}>
      <Carousel
        items={carouselItems}
        currentIndex={carouselIndex}
        onIndexChange={setCarouselIndex}
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

export default CarouselExample;
```

### ProgressBar

The `ProgressBar` component visually represents the progress of a task. It supports the following properties:

- `progress`: A number between 0 and 1 indicating the progress.
- `style`: Optional style object to customize the progress bar's appearance.

#### Example Usage

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProgressBar from './components/ProgressBar';

const ProgressBarExample: React.FC = () => {
  return (
    <View style={styles.container}>
      <ProgressBar progress={0.5} />
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

export default ProgressBarExample;
```

### Badge

The `Badge` component displays a small count indicator, often used for notifications. It supports the following properties:

- `count`: The number to display inside the badge.
- `style`: Optional style object to customize the badge's appearance.

#### Example Usage

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Badge from './components/Badge';

const BadgeExample: React.FC = () => {
  return (
    <View style={styles.container}>
      <Badge count={5} />
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

export default BadgeExample;
```

### SkeletonLoader

The `SkeletonLoader` component is used to display a shimmering placeholder for loading states. It supports the following properties:

- `width`: The width of the skeleton loader.
- `height`: The height of the skeleton loader.
- `style`: Optional style object to customize the skeleton's appearance.

#### Example Usage

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import SkeletonLoader from './components/SkeletonLoader';

const SkeletonLoaderExample: React.FC = () => {
  return (
    <View style={styles.container}>
      <SkeletonLoader width={200} height={20} />
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

export default SkeletonLoaderExample;
```

### Avatar

The `Avatar` component is used to display a circular image for user profiles. It supports the following properties:

- `imageUrl`: The URL of the image to display.
- `size`: The size of the avatar (width and height).
- `style`: Optional style object to customize the avatar's appearance.

#### Example Usage

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Avatar from './components/Avatar';

const AvatarExample: React.FC = () => {
  return (
    <View style={styles.container}>
      <Avatar imageUrl="https://via.placeholder.com/150" size={50} />
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

export default AvatarExample;
```

### Chip

The `Chip` component is used to display a small, clickable UI element for categorization. It supports the following properties:

- `label`: The text to display inside the chip.
- `onPress`: Callback function triggered when the chip is pressed.
- `style`: Optional style object to customize the chip's appearance.

#### Example Usage

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Chip from './components/Chip';

const ChipExample: React.FC = () => {
  const handleChipPress = () => {
    console.log('Chip pressed!');
  };

  return (
    <View style={styles.container}>
      <Chip label="Example Chip" onPress={handleChipPress} />
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

export default ChipExample;
```

### List

The `List` component is used to display a list of items. It supports the following properties:

- `items`: An array of items to display in the list.
- `renderItem`: A function that returns a React element for each item.
- `style`: Optional style object to customize the list's appearance.

#### Example Usage

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import List from './components/List';

const ListExample: React.FC = () => {
  const listItems = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <View style={styles.container}>
      <List
        items={listItems}
        renderItem={({ item }) => <Text>{item}</Text>}
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

export default ListExample;
```

### Table

The `Table` component is used to display data in a tabular format. It supports the following properties:

- `data`: An array of objects representing the table data.
- `columns`: An array of objects defining the table columns with `key` and `label`.
- `style`: Optional style object to customize the table's appearance.

#### Example Usage

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Table from './components/Table';

const TableExample: React.FC = () => {
  const tableData = [
    { name: 'John', age: 28 },
    { name: 'Jane', age: 32 },
  ];
  const tableColumns = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
  ];

  return (
    <View style={styles.container}>
      <Table data={tableData} columns={tableColumns} />
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

export default TableExample;
```

### Divider

The `Divider` component is used to display a horizontal line to separate content. It supports the following properties:

- `style`: Optional style object to customize the divider's appearance.

#### Example Usage

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Divider from './components/Divider';

const DividerExample: React.FC = () => {
  return (
    <View style={styles.container}>
      <Divider />
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

export default DividerExample;
```

## Contributing

Contributions are welcome! Please follow the guidelines outlined in the `devguides.mdc` for best practices.

## License

This project is licensed under the MIT License.
