import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import * as Linking from 'expo-linking';
import HeaderInicioStyles from '../styles/HeaderInicioStyles'
import MenuIcono from '../assets/menu.png'
import WhatsappIcono from '../assets/whatsapp.png'

const HeaderInicio = ({ navigation }) => {

    const DesplegarWhatsapp = async () => await Linking.openURL("https://wa.me//+573154255807")
    const DesplegarMenu = () => navigation.toggleDrawer()

    return (
        <View style={HeaderInicioStyles.menuBar}>
            <View style={HeaderInicioStyles.menuItem}>
                <TouchableOpacity onPress={DesplegarWhatsapp}>
                    <Image
                        source={WhatsappIcono}
                        style={HeaderInicioStyles.icono}
                    />
                </TouchableOpacity>
            </View>
            <View style={HeaderInicioStyles.menuItem}>
                <TouchableOpacity onPress={DesplegarMenu}>
                    <Image
                        source={MenuIcono}
                        style={HeaderInicioStyles.icono}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderInicio
