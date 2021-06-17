import React from 'react'
import { useWindowDimensions } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Inicio from '../inicio/Inicio'
import Preparacion from '../inicio/preparacion/Preparacion'
import Carta from '../inicio/carta/Carta'
import Ubicacion from '../inicio/ubicacion/Ubicacion'
import Orden from '../inicio/orden/Orden'
import CambioCiudad from '../inicio/cambio_ciudad/CambioCiudad'
import Productos from '../inicio/carta/Productos'

import DrawerContent from './DrawerContent';

const Drawer = ({ navigation }) => {

    const Menu = createDrawerNavigator();

    const dimensions = useWindowDimensions()

    const drawerType = dimensions.width >= 700 ? 'permanent' : 'front'

    return (
        <Menu.Navigator
            drawerPosition="right"
            drawerStyle={{
                width: 280,
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: '#fff',
            }}
            drawerType={drawerType}
            edgeWidth={100}
            drawerContent={props => <DrawerContent {...props} navigation={navigation} />}
        >
            <Menu.Screen name="Index" component={Inicio} />
            <Menu.Screen name="Preparacion" component={Preparacion} />
            <Menu.Screen name="Carta" component={Carta} />
            <Menu.Screen name="Ubicacion" component={Ubicacion} />
            <Menu.Screen name="Orden" component={Orden} />
            <Menu.Screen name="CambioCiudad" component={CambioCiudad} />
            <Menu.Screen name="Productos" component={Productos} />
        </Menu.Navigator>
    )
}

export default Drawer