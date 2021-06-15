import React from 'react'
import { SafeAreaView, Text, ImageBackground } from 'react-native'
import ImageBackgroundStyles from '../../styles/ImageBackgroundStyles'
import Fondo from '../../assets/fondo_pantalla.jpg'

const Preparacion = () => {
    return (
        <SafeAreaView style={ImageBackgroundStyles.safeArea}>
            <ImageBackground
                source={Fondo}
                style={ImageBackgroundStyles.fondo}
            >
                <Text>localizacion</Text>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Preparacion
