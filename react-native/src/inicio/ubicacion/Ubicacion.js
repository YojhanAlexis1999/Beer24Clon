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
                    latitude: 2.92769914,
                    longitude: -75.280725,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <MapView.Marker 
                    coordinate={{
                        latitude: 2.92769914,
                        longitude: -75.280725,
                    }} 
                />
            </MapView>
        </View>
    )
}

export default Ubicacion
