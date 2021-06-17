import React, { useContext } from 'react'
import { SafeAreaView, Text, ImageBackground, View, TouchableOpacity } from 'react-native'
import CartaContext from '../../context/carta/cartaContext'
import HeaderInicio from '../../components/HeaderInicio'
import ImageBackgroundStyles from '../../styles/ImageBackgroundStyles'
import OrdenStyles from '../../styles/OrdenStyles'
import Fondo from '../../assets/fondo_pantalla.jpg'

const Orden = ({ navigation }) => {

    const cartaContext = useContext(CartaContext)
    const { pedido, EliminarProductoAlPedido } = cartaContext

    let total = 0

    for (let i = 0; i <= pedido.length - 1; i++) {
        total = total + parseInt(JSON.stringify(pedido[i].precio))
    }

    return (
        <SafeAreaView style={ImageBackgroundStyles.safeArea}>
            <ImageBackground
                source={Fondo}
                style={ImageBackgroundStyles.fondo}
            >
                <HeaderInicio navigation={navigation} />
                {pedido ?
                    pedido.map(item => {
                        return (

                            <View
                                key={item.id_productos}
                                style={OrdenStyles.pedidoProducto}
                            >
                                <TouchableOpacity onPress={() => EliminarProductoAlPedido(item.id_productos)}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={OrdenStyles.ordenText}>{item.cantidad}</Text>
                                        <Text style={OrdenStyles.ordenText}>{item.producto}</Text>
                                        <Text style={OrdenStyles.ordenText}>{item.precio}</Text>
                                    </View>
                                    {item.adiciones ?
                                        <Text style={OrdenStyles.ordenText}>{item.adiciones}</Text>
                                        :
                                        null
                                    }
                                </TouchableOpacity>

                            </View>
                        )
                    })
                    : null}
                <Text style={OrdenStyles.totalText}>Total: ${total + 2500}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <View style={OrdenStyles.button}>
                        <Text style={OrdenStyles.buttonText}>HACER PEDIDO</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Orden
