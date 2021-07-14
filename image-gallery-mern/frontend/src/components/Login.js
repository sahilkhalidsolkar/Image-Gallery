import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/auth/AuthContext'
import { isEmail, isEmpty, trim } from 'validator'
const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, isAuthenticated } = useContext(AuthContext);
    useEffect(() => {
        if (isAuthenticated) {
            console.log(isAuthenticated)
            props.history.push('/mainpage')
        }
    }, [isAuthenticated]);
    const onSubmit = e => {
        e.preventDefault()
        if (!isEmail(trim(email)) || isEmpty(trim(password))) {
            alert('invalid credentials')
            return
        }
        login({
            email,
            password
        })
    }
    return (
        <div className="container">
            <form onSubmit={onSubmit} className="form">
                <h3 className="heading">Login</h3>
                <input type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text_field"
                    placeholder="Email"
                />
                <input type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text_field"
                    placeholder="Password"
                />
                <input type="submit"
                    value="Login"
                    className="button"
                />
            </form>
            <p className="formbottom">Don't have an account ? <Link to="/register" className="link">Register</Link></p>
        </div>
    )
}

export default Login

