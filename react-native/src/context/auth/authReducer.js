import { 
    PRUEBA
} from '../../types';

export default (state, action) => {

    switch (action.type) {

        default:
            return state

        case PRUEBA:
            return {
                ...state,
                data: action.payload
            }
        
    }

}