import React, { useReducer } from 'react'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'
import axios from '../../Axios'
import setHeader from '../../utils/setHeader'
import {
    LOAD_USER,
    REGISTER_USER,
    REGISTER_FAIL,
    UNLOAD_USER,
    LOGIN_USER,
    LOGIN_FAIL,
    LOG_OUT
} from '../types'

const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: false,
        user: null,

    }
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    // load user

    const loadUser = async () => {
        try {
            const token = localStorage.getItem('token')

            setHeader(token)
            const res = await axios.get('/auth')
            if (res.data.error === "No token ,authorization denied") {
                dispatch({
                    type: UNLOAD_USER
                })
            } else {
                dispatch({
                    type: LOAD_USER,
                    payload: res.data
                })

            }
        } catch (error) {
            console.log(error)
            dispatch({
                type: UNLOAD_USER
            })
        }
    }


    // register user
    const register = async (userdata) => {
        try {
            const data = await axios.post('/user', userdata)
            console.log(data.data)
            dispatch({
                type: REGISTER_USER,
                payload: data.data.token
            })
            loadUser()
        } catch (error) {
            dispatch({
                type: REGISTER_FAIL
            })

        }


    }

    // login user
    const login = async userdata => {
        try {
            const data = await axios.post('/auth', userdata)
            console.log(data.data)
            if (data.data.error === "Invalid credentials") {
                dispatch({
                    type: LOGIN_FAIL
                })
                dispatch({
                    type: UNLOAD_USER
                })
            } else {
                dispatch({
                    type: LOGIN_USER,
                    payload: data.data.token
                })
                loadUser()

            }
        } catch (error) {
            console.log(error)
            dispatch({
                type: LOGIN_FAIL
            })


        }

    }
    const logOut = () => {
        dispatch({
            type: LOG_OUT
        })
    }


    // yaha pe provider use hota jo state provide krta components ko

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                register,
                loadUser,
                login,
                logOut
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )


}
export default AuthState
