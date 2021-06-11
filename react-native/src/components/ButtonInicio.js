import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import ButtonInicioStyles from '../styles/ButtonInicioStyles'

const ButtonInicio = ({ onPress, icono, label }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={ButtonInicioStyles.button}>
                <View>
                    <Image
                        source={icono}
                        style={ButtonInicioStyles.icono}
                    />
                </View>
                <View>
                    <View style={ButtonInicioStyles.circulo}>
                        <Text style={ButtonInicioStyles.circuloText}>{label}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonInicio
