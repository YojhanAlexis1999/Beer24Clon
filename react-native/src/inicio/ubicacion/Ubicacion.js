import React from 'react'
import MapView from 'react-native-maps';
import { View } from 'react-native';
import UbicacionStyles from '../../styles/UbicacionStyles';

const Ubicacion = () => {
    return (
        <View style={UbicacionStyles.container}>
            <MapView 
                style={UbicacionStyles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <MapView.Marker 
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }} 
                />
            </MapView>
        </View>
    )
}

export default Ubicacion
