import React from 'react'
import { 
    View,
    useWindowDimensions 
} from 'react-native'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import Inicio from '../inicio/Inicio'
import Preparacion from '../inicio/preparacion/Preparacion'
import Carta from '../inicio/carta/Carta'

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
            <Menu.Screen
                name="← Inicio"
                component={Inicio}
            />
            <Menu.Screen
                name="← Preparacion"
                component={Preparacion}
            />
            <Menu.Screen
                name="← Carta"
                component={Carta}
            />
        </Menu.Navigator>
    )
}

export default Drawer