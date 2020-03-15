import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenNavigator from './src/navigators/ScreenNavigator';
import { Provider } from 'react-redux';
import storeConfiguration from './src/store/storeConfiguration';

const store = storeConfiguration();
const Stack = createStackNavigator();

function App() {
  
  return (
    <Provider store = { store }>
      <ScreenNavigator/>
    </Provider>
  );
}

export default App;