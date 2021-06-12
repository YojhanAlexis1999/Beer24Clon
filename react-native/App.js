import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Drawer from './src/drawer/Drawer'
import Preparacion from './src/inicio/preparacion/Preparacion'
import Carta from './src/inicio/carta/Carta'
import Ubicacion from './src/inicio/ubicacion/Ubicacion'

import Login from './src/auth/Login'
import Registro from './src/auth/Registro'

import AuthState from './src/context/auth/authState'

const App = () => {

  const StackNavigator = createStackNavigator()

  const options = { headerShown: false }

  return (
    <AuthState>
      <NavigationContainer>
        <StackNavigator.Navigator>

          <StackNavigator.Screen name="Inicio" component={Drawer} options={options} />
          <StackNavigator.Screen name="Preparacion" component={Preparacion} options={options} />
          <StackNavigator.Screen name="Carta" component={Carta} options={options} />
          <StackNavigator.Screen name="Ubicacion" component={Ubicacion} options={options} />

          <StackNavigator.Screen name="Login" component={Login} />
          <StackNavigator.Screen name="Registro" component={Registro} />
          
        </StackNavigator.Navigator>
      </NavigationContainer>
    </AuthState>
  );
}

export default App
