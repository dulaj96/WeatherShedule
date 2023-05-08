import { View, Text } from 'react-native';
import React from 'react';
import Home from '../screen/auth/Home';
import Details from '../screen/auth/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;