import { StyleSheet } from 'react-native'

const height = 60

export default StyleSheet.create({
    menuBar: {
        width: '100%',
        height: height,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menuItem: {
        width: '25%',
        height: height,
        alignItems: 'center',
        marginTop: 10
    },
    icono: {
        width: 40,
        height: 40
    }
})