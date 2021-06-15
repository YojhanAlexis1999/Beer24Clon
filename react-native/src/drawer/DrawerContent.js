import React from 'react'
import { View } from 'react-native'
import { Drawer } from 'react-native-paper'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import DrawerContentStyles from '../styles/DrawerContentStyles'
import * as Linking from 'expo-linking';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const DrawerContent = (props) => {

    const AbrirSoporte = async () => await Linking.openURL("https://wa.me//+573154255807?text=Hola necesito ayuda!")

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <Drawer.Section style={DrawerContentStyles.drawerSection}>
                    <DrawerItem
                        icon={({size}) => (
                            <Icon
                                name="arrow-left"
                                color={'#fff'}
                                size={size}
                            />
                        )}
                        label="Inicio"
                        labelStyle={{ color: '#fff' }}
                        onPress={() => props.navigation.navigate("Index")}
                    />
                    <DrawerItem
                        icon={({size}) => (
                            <Icon
                                name="arrow-left"
                                color={'#fff'}
                                size={size}
                            />
                        )}
                        label="Preparacion"
                        labelStyle={{ color: '#fff' }}
                        onPress={() => props.navigation.navigate("Preparacion")}
                    />
                    <DrawerItem
                        icon={({size}) => (
                            <Icon
                                name="arrow-left"
                                color={'#fff'}
                                size={size}
                            />
                        )}
                        label="Carta"
                        labelStyle={{ color: '#fff' }}
                        onPress={() => props.navigation.navigate("Carta")}
                    />
                    <DrawerItem
                        icon={({size}) => (
                            <Icon
                                name="arrow-left"
                                color={'#fff'}
                                size={size}
                            />
                        )}
                        label="Soporte"
                        labelStyle={{ color: '#fff' }}
                        onPress={() => AbrirSoporte()}
                    />
                    <DrawerItem
                        icon={({size}) => (
                            <Icon
                                name="arrow-left"
                                color={'#fff'}
                                size={size}
                            />
                        )}
                        label="Ubicacion"
                        labelStyle={{ color: '#fff' }}
                        onPress={() => props.navigation.navigate("Ubicacion")}
                    />
                    <DrawerItem
                        icon={({size}) => (
                            <Icon
                                name="arrow-left"
                                color={'#fff'}
                                size={size}
                            />
                        )}
                        label="Mi Orden"
                        labelStyle={{ color: '#fff' }}
                        onPress={() => props.navigation.navigate("Orden")}
                    />
                    <DrawerItem
                        icon={({size}) => (
                            <Icon
                                name="arrow-left"
                                color={'#fff'}
                                size={size}
                            />
                        )}
                        label="Cambiar Ciudad"
                        labelStyle={{ color: '#fff' }}
                        onPress={() => props.navigation.navigate("CambioCiudad")}
                    />
                </Drawer.Section>
            </DrawerContentScrollView>
        </View>
    )
}

export default DrawerContent
