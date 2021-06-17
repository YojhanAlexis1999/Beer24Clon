import React, { useContext } from 'react'
import { Text, ImageBackground, SafeAreaView, View } from 'react-native'
import CartaContext from '../../context/carta/cartaContext'
import ButtonCambioCiudad from '../../components/ButtonCambioCiudad'
import ImageBackgroundStyles from '../../styles/ImageBackgroundStyles'
import CambioCiudadStyles from '../../styles/CambioCiudadStyles'
import Fondo from '../../assets/fondo_pantalla.jpg'

const CambioCiudad = () => {

    const cartaContext = useContext(CartaContext)
    const { CambiarLocalizacion } = cartaContext

    return (
        <SafeAreaView style={ImageBackgroundStyles.safeArea}>
            <ImageBackground
                source={Fondo}
                style={ImageBackgroundStyles.fondo}
            >
                <View>
                    <Text style={CambioCiudadStyles.titulo}>SELECCIONA TU CIUDAD</Text>
                    <View style={{ marginTop: 250, marginLeft: 30 }}>
                        <ButtonCambioCiudad
                            onPress={() => CambiarLocalizacion(1)}
                            text="NEIVA"
                        />
                        <ButtonCambioCiudad
                            onPress={() => CambiarLocalizacion(2)}
                            text="FLORENCIA"
                        />
                        <ButtonCambioCiudad
                            onPress={() => CambiarLocalizacion(3)}
                            text="GARZON"
                        />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default CambioCiudad
