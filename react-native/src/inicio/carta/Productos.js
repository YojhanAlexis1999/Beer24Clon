import React, { useEffect, useContext } from 'react'
import { SafeAreaView, Text, ImageBackground, ScrollView, View, TouchableOpacity, Image } from 'react-native'
import CartaContext from '../../context/carta/cartaContext'
import HeaderInicio from '../../components/HeaderInicio'
import ImageBackgroundStyles from '../../styles/ImageBackgroundStyles'
import CartaStyles from '../../styles/CartaStyles'
import Fondo from '../../assets/fondo_pantalla.jpg'

const Productos = ({ navigation, route }) => {

    const cartaContext = useContext(CartaContext)
    const { ListarProductos, productos } = cartaContext

    const { localizacion, categoria } = route.params

    useEffect(() => {
        ListarProductos(categoria, localizacion)
    }, [categoria, localizacion])

    return (
        <SafeAreaView style={ImageBackgroundStyles.safeArea}>
            <ImageBackground
                source={Fondo}
                style={ImageBackgroundStyles.fondo}
            >
                <HeaderInicio navigation={navigation} />

                <ScrollView>
                    <View style={CartaStyles.container}>
                        {productos ?
                            productos.map(item => {
                                return (
                                    <View
                                        key={item.id_productos}
                                        style={CartaStyles.producto}
                                    >
                                        <TouchableOpacity onPress={() => navigation.navigate("Producto", { producto: item })}>
                                            <Text style={CartaStyles.productoDescripcion}>{item.nombre}</Text>
                                            <Image
                                                source={{ uri: item.img }}
                                                style={{ width: '50%', height: 80, marginLeft: 38 }}
                                            />
                                            <Text style={CartaStyles.productoDescripcion}>{item.precio}</Text>
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

export default Productos
