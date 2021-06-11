import React, { useReducer } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'
import ClienteAxios from '../../config'
import { 

} from '../../types'

const AuthState = (props) => {

    const initialState = {
        data: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthContext.Provider
            value={{
                data: state.data,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState