import React, { useState, useContext, useEffect } from 'react'
import { SafeAreaView, Text, ImageBackground, ScrollView, View, TouchableOpacity, Image, TextInput } from 'react-native'
import CartaContext from '../../context/carta/cartaContext'
import ImageBackgroundStyles from '../../styles/ImageBackgroundStyles'
import CartaStyles from '../../styles/CartaStyles'
import Fondo from '../../assets/fondo_pantalla.jpg'

const Producto = ({ navigation, route }) => {

    const cartaContext = useContext(CartaContext)
    const { AgregarProductoAlPedido } = cartaContext

    const { producto } = route.params

    const [total, setTotal] = useState(producto.precio)
    const [cantidad, setCantidad] = useState(1)
    const [adiciones, setAdiciones] = useState('')

    const AumentarCantidad = () => {
        setCantidad(cantidad + 1)
        setTotal(total + parseInt(producto.precio))
    }

    const DisminuirCantidad = () => {
        setCantidad(cantidad > 1 ? cantidad - 1 : cantidad)
        setTotal(cantidad > 1 ? total - parseInt(producto.precio) : total)
    }

    const AgregarALaOrden = () => {
        AgregarProductoAlPedido({
            id_productos: producto.id_productos,
            cantidad: cantidad,
            producto: producto.nombre,
            precio: total,
            adiciones: adiciones
        })
        navigation.navigate("Orden")
    }

    return (
        <SafeAreaView style={ImageBackgroundStyles.safeArea}>
            <ImageBackground
                source={Fondo}
                style={ImageBackgroundStyles.fondo}
            >

                <ScrollView>

                    <Image 
                        source={{ uri: producto.img }}
                        style={{ width: '100%', height: 200 }}
                    />

                    <View style={{ alignItems: 'center', marginTop: 4, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <Text style={CartaStyles.textDescripcion}>{producto.descripcion}</Text>
                        <Text style={CartaStyles.adiciones}>Notas Adicionales</Text>
                        <TextInput
                            placeholder="Ej Sin verduras, Sin salsas"
                            onChangeText={(value => setAdiciones(value))}
                            style={CartaStyles.adicionesInput}
                            placeholderTextColor="#fff"
                        />
                        <View style={CartaStyles.viewContenido}>
                            <Text style={CartaStyles.labelCantidad}>Cantidad</Text>
                            <TouchableOpacity onPress={DisminuirCantidad}>
                                <View style={CartaStyles.buttonCantidad}>
                                    <Text style={CartaStyles.buttonCantidadDisminuirText}>-</Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={CartaStyles.textCantidad}>{cantidad}</Text>
                            <TouchableOpacity onPress={AumentarCantidad}>
                                <View style={CartaStyles.buttonCantidad}>
                                    <Text style={CartaStyles.buttonCantidadAumentarText}>+</Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={CartaStyles.textPrecio}>${total}</Text>
                        </View>
                        <TouchableOpacity onPress={AgregarALaOrden}>
                            <View style={CartaStyles.buttonAgregarOrden}>
                                <Text style={CartaStyles.buttonAgregarOrdenText}>AGREGAR A LA ORDEN</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Producto
