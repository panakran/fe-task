import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

function ScreenNavigator() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Points of Interest" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ScreenNavigator;