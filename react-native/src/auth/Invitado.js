import React,{ useState, useContext } from 'react'
import { View, Text, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import CartaContext from '../context/carta/cartaContext'
import ImageBackgroundStyles from '../styles/ImageBackgroundStyles'
import Fondo from '../assets/fondo_pantalla.jpg'

const Invitado = () => {

    const cartaContext = useContext(CartaContext)
    const { pedido } = cartaContext

    const [nombre, setNombre] = useState('')
    const [direccion, setDireccion] = useState('')
    const [barrio, setBarrio] = useState('')
    const [telefono, setTelefono] = useState('')

    console.log(JSON.stringify(pedido))

    const EnviarPedido = () => {

    }

    return (
        <SafeAreaView style={ImageBackgroundStyles.safeArea}>
            <ImageBackground
                source={Fondo}
                style={ImageBackgroundStyles.fondo}
            >
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <TextInput 
                        style={{ borderColor: 'transparent', borderBottomColor: '#fff', borderWidth: 2, width: '70%', height: 60 }}
                        placeholder="Nombre"
                        placeholderTextColor="#fff"
                        onChangeText={(value) => setNombre(value)}
                    />
                    <TextInput 
                        style={{ borderColor: 'transparent', borderBottomColor: '#fff', borderWidth: 2, width: '70%', height: 60 }}
                        placeholder="Direccion"
                        placeholderTextColor="#fff"
                        onChangeText={(value) => setDireccion(value)}
                    />
                    <TextInput 
                        style={{ borderColor: 'transparent', borderBottomColor: '#fff', borderWidth: 2, width: '70%', height: 60 }}
                        placeholder="Barrio"
                        placeholderTextColor="#fff"
                        onChangeText={(value) => setBarrio(value)}
                    />
                    <TextInput 
                        style={{ borderColor: 'transparent', borderBottomColor: '#fff', borderWidth: 2, width: '70%', height: 60 }}
                        placeholder="Telefono"
                        placeholderTextColor="#fff"
                        onChangeText={(value) => setTelefono(value)}
                    />
                    <TouchableOpacity onPress={EnviarPedido}>
                        <View style={{ width: '70%', height: 60, alignItems: 'center', backgroundColor: '#123456' }}>
                            <Text style={{ color: '#fff', fontSize: 20, marginTop: 14 }}>ENVIAR</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Invitado
