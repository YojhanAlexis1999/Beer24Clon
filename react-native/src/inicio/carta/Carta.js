import React, { useEffect, useContext } from 'react'
import { SafeAreaView, ImageBackground, Text } from 'react-native'
import CartaContext from '../../context/carta/cartaContext'
import ImageBackgroundStyles from '../../styles/ImageBackgroundStyles'
import HeaderInicio from '../../components/HeaderInicio'
import Fondo from '../../assets/fondo_pantalla.jpg'

const Carta = ({ navigation }) => {

    const cartaContext = useContext(CartaContext)
    const { localizacion } = cartaContext

    useEffect(() => {
        console.log(localizacion)
    }, [])

    return (
        <SafeAreaView style={ImageBackgroundStyles.safeArea}>
            <ImageBackground
                source={Fondo}
                style={ImageBackgroundStyles.fondo}
            >
                <HeaderInicio navigation={navigation} />
                <Text style={{ color: '#fff' }}>{localizacion}</Text>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Carta
