import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PoisList from '../components/PoisList';
import PoisMap from '../components/PoisMap';

// Create Tab Navigator
const Tab = createBottomTabNavigator();

export default function PoisScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#007aff',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Available pois" component={PoisList} />
      <Tab.Screen name="Pois locations" component={PoisMap} />
    </Tab.Navigator>
  );
}