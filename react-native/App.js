import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Drawer from './src/drawer/Drawer'
import Producto from './src/inicio/carta/Producto'
import Invitado from './src/auth/Invitado'

import Login from './src/auth/Login'
import Registro from './src/auth/Registro'

import AuthState from './src/context/auth/authState'
import CartaState from './src/context/carta/cartaState'

const App = () => {

  const StackNavigator = createStackNavigator()

  const options = { headerShown: false }

  return (
    <AuthState>
      <CartaState>
        <NavigationContainer>
          <StackNavigator.Navigator>

            <StackNavigator.Screen name="Inicio" component={Drawer} options={options} />
            <StackNavigator.Screen name="Producto" component={Producto} options={options} />
            <StackNavigator.Screen name="Invitado" component={Invitado} options={options} />

            <StackNavigator.Screen name="Login" component={Login} options={options} />
            <StackNavigator.Screen name="Registro" component={Registro} options={options} />

          </StackNavigator.Navigator>
        </NavigationContainer>
      </CartaState>
    </AuthState>
  );
}

export default App
