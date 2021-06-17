import React, { useReducer } from 'react'
import CartaContext from './cartaContext'
import CartaReducer from './cartaReducer'
import ClienteAxios from '../../config'
import { 
    CAMBIAR_LOCALIZACION,
    LISTAR_CATEGORIAS,
    LISTAR_PRODUCTOS,
    AGREGAR_PRODUCTO_PEDIDO,
    ELIMINAR_PRODUCTO_PEDIDO
} from '../../types'

const CartaState = (props) => {

    const initialState = {
        localizacion: 1,
        categorias: [],
        productos: [],
        pedido: []
    }

    const [state, dispatch] = useReducer(CartaReducer, initialState);

    const CambiarLocalizacion = (localizacion) => {
        dispatch({
            type: CAMBIAR_LOCALIZACION,
            payload: localizacion
        })
    }

    const ListarCategorias = async (localizacion) => {
        const response = await ClienteAxios.get(`/beer24/categorias/${localizacion}`)
        dispatch({
            type: LISTAR_CATEGORIAS,
            payload: response.data
        })
    }

    const ListarProductos = async (categoria, localizacion) => {
        const response = await ClienteAxios.get(`/beer24/productos/${categoria}/${localizacion}`)
        dispatch({
            type: LISTAR_PRODUCTOS,
            payload: response.data
        })
    }

    const AgregarProductoAlPedido = (info) => {
        dispatch({
            type: AGREGAR_PRODUCTO_PEDIDO,
            payload: info
        })
    }

    const EliminarProductoAlPedido = (id) => {
        dispatch({
            type: ELIMINAR_PRODUCTO_PEDIDO,
            payload: id
        })
    }

    return (
        <CartaContext.Provider
            value={{
                localizacion: state.localizacion,
                categorias: state.categorias,
                productos: state.productos,
                pedido: state.pedido,
                CambiarLocalizacion,
                ListarCategorias,
                ListarProductos,
                AgregarProductoAlPedido,
                EliminarProductoAlPedido
            }}
        >
            {props.children}
        </CartaContext.Provider>
    )
}

export default CartaState