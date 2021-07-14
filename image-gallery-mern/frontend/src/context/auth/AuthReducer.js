import { LOAD_USER, LOGIN_FAIL, LOG_OUT, LOGIN_USER, REGISTER_FAIL, REGISTER_USER, UNLOAD_USER } from '../types'

export default (state, action) => {
    console.log(action)
    switch (action.type) {
        case REGISTER_USER:
        case LOGIN_USER:
            localStorage.setItem('token', action.payload)
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOG_OUT:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                user: null,
            }
        case LOAD_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        case UNLOAD_USER:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null
            }
    }
}