import React from 'react'
import { MapView } from 'react-native-maps'
import { View } from 'react-native';
import UbicacionStyles from '../../styles/UbicacionStyles';

const Ubicacion = () => {
    return (
        <View style={UbicacionStyles.container}>
            <MapView style={UbicacionStyles.map} />
        </View>
    )
}

export default Ubicacion
