import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GamePage from '../pages/GamePage';
import Home from '../pages/Home/Home';

export default function Routes() {

    const Stack = createStackNavigator();

 return (
    <Stack.Navigator>

        <Stack.Screen
        name='Home'
        component={Home}
        
        options={{
            headerShown: false
        }}
        />

        <Stack.Screen
        name='GamePage'
        component={GamePage}

        options={{
            headerShown: false
        }}
        />

    </Stack.Navigator>
  );
}