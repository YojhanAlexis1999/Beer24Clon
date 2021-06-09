import React, { useReducer } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'
import ClienteAxios from '../../config'
import { PRUEBA } from '../../types'

const AuthState = (props) => {

    const initialState = {
        data: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const Prueba = async () => {
        const response = await ClienteAxios.get('/beer24')
        console.log(response.data)
        dispatch({
            type: PRUEBA,
            payload: response.data
        })
    }

    return (
        <AuthContext.Provider
            value={{
                data: state.data,
                Prueba
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState