import React from 'react'
import { View, Text, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import ImageBackgroundStyles from '../styles/ImageBackgroundStyles'
import Fondo from '../assets/fondo_pantalla.jpg'

const Login = ({ navigation }) => {

    return (
        <SafeAreaView style={ImageBackgroundStyles.safeArea}>
            <ImageBackground
                source={Fondo}
                style={ImageBackgroundStyles.fondo}
            >
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <TextInput 
                        style={{ borderColor: 'transparent', borderBottomColor: '#fff', borderWidth: 2, width: '70%', height: 60 }}
                        placeholder="Email"
                        placeholderTextColor="#fff"
                    />
                    <TextInput 
                        style={{ borderColor: 'transparent', borderBottomColor: '#fff', borderWidth: 2, width: '70%', height: 60 }}
                        placeholder="Contraseña"
                        placeholderTextColor="#fff"
                    />
                    <TouchableOpacity onPress={() => navigation.navigate("Invitado")}>
                        <View style={{ width: '70%', height: 60, alignItems: 'center', backgroundColor: '#123456' }}>
                            <Text style={{ color: '#fff', fontSize: 20, marginTop: 14 }}>CONTINUAR COMO INVITADO</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Login
