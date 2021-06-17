import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    categoria: {
        width: '40%',
        height: 120,
        backgroundColor: '#555',
        marginLeft: '7%',
        marginTop: '3%'
    },
    producto: {
        width: '40%',
        height: 140,
        marginLeft: '7%',
        marginTop: '3%',
        borderColor: '#fff',
        borderRadius: 20,
        borderWidth: 2,
    },
    productoDescripcion: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 13
    },
    viewContenido: { 
        flexDirection: 'row', 
        marginTop: 20 
    },
    adiciones: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 10
    },
    adicionesInput: {
        borderColor: 'transparent',
        borderBottomColor: '#fff',
        borderWidth: 1,
        width: '80%',
        color: '#fff'
    },
    labelCantidad: { 
        color: '#fff', 
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonCantidad: { 
        width: 25,
        height: 25,
        borderRadius: 25/2,
        borderColor: '#fff',
        borderWidth: 2,
        marginLeft: 15
    },
    buttonCantidadAumentarText: { 
        color: '#fff',
        fontSize: 20,
        position: 'relative',
        bottom: 5,
        left: 5
    },
    buttonCantidadDisminuirText: { 
        color: '#fff',
        fontSize: 30,
        position: 'relative',
        bottom: 12,
        left: 7
    },
    textCantidad: { 
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 16,
        marginLeft: 15,
        fontSize: 20
    },
    textPrecio: {
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 16,
        marginLeft: 15,
        fontSize: 20
    },
    textDescripcion: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    buttonAgregarOrden: {
        width: '100%',
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        alignItems: 'center'
    },
    buttonAgregarOrdenText: {
        color: '#fff',
        fontSize: 20,
    }
})