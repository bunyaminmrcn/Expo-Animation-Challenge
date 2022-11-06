import React from 'react';
import { AppRegistry, View } from 'react-native';
import Navigator from './navigator';
import { registerRootComponent } from 'expo';


function App() {
  return (
    <View style={{ flex: 1 }}>
      <Navigator />
    </View>
  );
}

registerRootComponent(App)

//AppRegistry.registerComponent('xchallenge', () => App);