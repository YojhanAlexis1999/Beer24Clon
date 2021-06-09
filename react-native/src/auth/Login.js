import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import AuthContext from '../context/auth/authContext'

const Login = () => {

    const authContext = useContext(AuthContext)
    const { data, Prueba } = authContext

    useEffect(() => {
        Prueba()
    }, [])

    return (
        <View>
            {data ? 
                <Text>{JSON.stringify(data)}</Text>
            : null}
        </View>
    )
}

export default Login
