import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PoisListScreen from './PoisListScreen';
import PoisMapScreen from './PoisMapScreen';

// Create Tab Navigator
const Tab = createBottomTabNavigator();

export default function TanNavigatorScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#007aff',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Available pois" component={PoisListScreen} />
      <Tab.Screen name="Pois locations" component={PoisMapScreen} />
    </Tab.Navigator>
  );
}