import Root from './root';
import Login from './Login';
import MorphSlider from './MorphSlider';
import Curve from './Curve';
import Menu from './MenuThree'
import BalloonSlider from './BalloonSlider';

import { NavigationContainer } from '@react-navigation/native';

import {
    createNativeStackNavigator
} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();

function Navigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Root" component={Root} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="MorphSlider" component={MorphSlider} />
          <Stack.Screen name="Curve" component={Curve} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="BalloonSlider" component={BalloonSlider} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigator;