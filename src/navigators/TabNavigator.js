import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PoisListScreen from '../screens/PoisListScreen';
import PoisMapScreen from '../screens/PoisMapScreen';

// Create Tab Navigator
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#007aff',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 20
        },
        tabStyle: {
          justifyContent: "center"
        },
        style: {
          backgroundColor: 'white',
        },
      }}
    >
      <Tab.Screen name="List" component={PoisListScreen} />
      <Tab.Screen name="Map" component={PoisMapScreen} />
    </Tab.Navigator>
  );
}