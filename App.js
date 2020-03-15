import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import PoisScreen from './src/screens/PoisScreen';
import { Provider } from 'react-redux';
import storeConfiguration from './src/store/storeConfiguration';

const store = storeConfiguration();
const Stack = createStackNavigator();

function App() {
  
  return (
    <Provider store = { store }>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Points of Interest" component={PoisScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;