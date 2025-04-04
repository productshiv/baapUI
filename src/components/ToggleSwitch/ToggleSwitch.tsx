import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';

interface ToggleSwitchProps {
  initialValue?: boolean;
  onToggle?: (value: boolean) => void;
  label?: string;
  style?: object;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  initialValue = false,
  onToggle,
  label = 'Toggle',
  style,
}) => {
  const [value, setValue] = useState(initialValue);

  const toggleSwitch = () => {
    const newValue = !value;
    setValue(newValue);
    if (onToggle) {
      onToggle(newValue);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <Switch value={value} onValueChange={toggleSwitch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  label: {
    marginRight: 10,
    fontSize: 16,
  },
});

export default ToggleSwitch;
