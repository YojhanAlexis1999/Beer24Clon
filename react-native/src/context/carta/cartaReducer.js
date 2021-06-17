import { 
    CAMBIAR_LOCALIZACION,
    LISTAR_CATEGORIAS,
    LISTAR_PRODUCTOS,
    AGREGAR_PRODUCTO_PEDIDO,
    ELIMINAR_PRODUCTO_PEDIDO
} from '../../types';

export default (state, action) => {

    switch (action.type) {

        default:
            return state

        case CAMBIAR_LOCALIZACION:
            return {
                ...state,
                localizacion: action.payload
            }

        case LISTAR_CATEGORIAS:
            return {
                ...state,
                categorias: action.payload
            }

        case LISTAR_PRODUCTOS:
            return {
                ...state,
                productos: action.payload
            }

        case AGREGAR_PRODUCTO_PEDIDO:
            return {
                ...state,
                pedido: [...state.pedido, action.payload]
            }

        case ELIMINAR_PRODUCTO_PEDIDO: 
            return {
                ...state,
                pedido: state.pedido.filter(pedido => pedido.id_productos !== action.payload)
            }
        
    }

}