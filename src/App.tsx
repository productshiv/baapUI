import React from 'react';
import { View } from './platform';
import SampleScreen from './screens/SampleScreen';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SampleScreen />
    </View>
  );
}
