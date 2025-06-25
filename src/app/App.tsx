import React from 'react';
import { Platform, View } from '../platform';
import SampleScreen from '../screens/SampleScreen';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <SampleScreen />
    </View>
  );
};

export default App;
