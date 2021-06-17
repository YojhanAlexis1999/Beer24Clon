import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import CambioCiudadStyles from '../styles/CambioCiudadStyles'

const ButtonCambioCiudad = ({ onPress, text }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={CambioCiudadStyles.button}
        >
            <Text style={CambioCiudadStyles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ButtonCambioCiudad
