import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    pedidoProducto: { 
        borderColor: 'transparent',
        borderBottomColor: '#fff', 
        borderWidth: 2,
        paddingVertical: 10 
    },
    ordenText: { 
        color: '#fff', 
        marginLeft: 20 
    },
    totalText: {
        color: '#fff',
        fontSize: 20,
        position: 'absolute',
        right: 100,
        bottom: 80
    },
    button: { 
        width: '100%', 
        height: 50, 
        backgroundColor: '#123456',
        alignItems: 'center',
    },
    buttonText: { 
        color: '#fff',
        fontSize: 20, 
        marginTop: 12 
    }
})