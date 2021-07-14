import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../context/auth/AuthContext'
const PrivateComponent = ({ component: Component, ...rest }) => {
    const { isAuthenticated, loaduser } = useContext(AuthContext)

    return (
        <Route
            {...rest}
            render={
                (props) => localStorage.getItem('token') ? (
                    <Component {...props} />
                ) : (<Redirect to="/login" />)

            }

        />
    )
}

export default PrivateComponent
