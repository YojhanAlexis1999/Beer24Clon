
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './src/auth/Login'
import Registro from './src/auth/Registro'

import AuthState from './src/context/auth/authState'

const App = () => {

  const StackNavigator = createStackNavigator()

  return (
    <AuthState>
      <NavigationContainer>
        <StackNavigator.Navigator>
          <StackNavigator.Screen name="Login" component={Login} />
          <StackNavigator.Screen name="Registro" component={Registro} />
        </StackNavigator.Navigator>
      </NavigationContainer>
    </AuthState>
  );
}

export default App
