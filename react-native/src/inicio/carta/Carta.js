import React, { useEffect, useContext } from 'react'
import { SafeAreaView, ImageBackground, View, ScrollView, TouchableOpacity } from 'react-native'
import CartaContext from '../../context/carta/cartaContext'
import ImageBackgroundStyles from '../../styles/ImageBackgroundStyles'
import CartaStyles from '../../styles/CartaStyles'
import HeaderInicio from '../../components/HeaderInicio'
import Fondo from '../../assets/fondo_pantalla.jpg'

const Carta = ({ navigation }) => {

    const cartaContext = useContext(CartaContext)
    const { localizacion, ListarCategorias, categorias } = cartaContext

    useEffect(() => {
        ListarCategorias(localizacion)
    }, [localizacion])

    return (
        <SafeAreaView style={ImageBackgroundStyles.safeArea}>
            <ImageBackground
                source={Fondo}
                style={ImageBackgroundStyles.fondo}
            >
                <HeaderInicio navigation={navigation} />
                <ScrollView>
                    <View style={CartaStyles.container}>
                        {categorias ?
                            categorias.map(item => {
                                return (
                                    <View
                                        key={item.img}
                                        style={CartaStyles.categoria}
                                    >
                                        <TouchableOpacity onPress={() => navigation.navigate("Productos", { localizacion, categoria: item.id_categorias })}>
                                            <ImageBackground
                                                source={{ uri: item.img }}
                                                style={{ width: '100%', height: '100%' }}
                                            >
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                            : null}
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Carta
