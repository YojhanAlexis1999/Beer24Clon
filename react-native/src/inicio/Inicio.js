import React from 'react'
import { View, Text, ImageBackground, SafeAreaView, Image } from 'react-native'
import ImageBackgroundStyles from '../styles/ImageBackgroundStyles'
import InicioStyles from '../styles/InicioStyles'
import Fondo from '../assets/fondo_pantalla.jpg'
import CartaIcono from '../assets/carta.png'
import PreparacionIcono from '../assets/preparacion.png'
import HeaderInicio from '../components/HeaderInicio'
import ButtonInicio from '../components/ButtonInicio'

const Inicio = ({ navigation }) => {

    const IrALaCarta = () => navigation.navigate("Carta")
    const IrALaPreparacion = () => navigation.navigate("Preparacion")

    return (
        <SafeAreaView style={ImageBackgroundStyles.safeArea}>
            <ImageBackground
                source={Fondo}
                style={ImageBackgroundStyles.fondo}
            >
                <HeaderInicio navigation={navigation} />
                <View style={InicioStyles.botonesInicio}>
                    <ButtonInicio
                        icono={CartaIcono}
                        label="Menu"
                        onPress={IrALaCarta} 
                    />
                    <ButtonInicio 
                        icono={PreparacionIcono}
                        label="Preparacion"
                        onPress={IrALaPreparacion} 
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Inicio