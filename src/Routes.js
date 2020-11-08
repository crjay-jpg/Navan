import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';
import Login from './pages/Login';

const Stack = createStackNavigator();

function Routes() {
  <NavigationContainer>
      <Stack.Navigator initialRouteName="Navan">
        <Stack.Screen name="Navan" component={App} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
}

export default createAppContainer(Routes);