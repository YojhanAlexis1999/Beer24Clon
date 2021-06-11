import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    safeArea: {
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor: '#444'
    },
    fondo: {
        width: '100%',
        height: '100%'
    }
})