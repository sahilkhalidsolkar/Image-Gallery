import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/auth/AuthContext'
import { isEmail, isEmpty, trim } from 'validator'
const Register = (props) => {
    const { register, isAuthenticated } = useContext(AuthContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [country, setCountry] = useState('')
    useEffect(() => {
        if (isAuthenticated) {
            console.log(isAuthenticated)
            props.history.push('/mainpage')
        }
    }, [isAuthenticated]);
    const onSubmit = e => {

        e.preventDefault()

        if (!isEmail(trim(email)) || isEmpty(trim(name)) || isEmpty(trim(password)) || isEmpty(trim(confirmpassword)) || isEmpty(trim(country))) {
            alert('invalid credentials')
            return

        }
        if (trim(password) !== trim(confirmpassword)) {
            alert('password dont match')
            return
        }
        register({
            email,
            name,
            password,
            country
        })


    }

    return (
        <div className="container">
            <form onSubmit={onSubmit} className="form">
                <h3 className="heading">Register</h3>
                <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text_field"
                    placeholder="Name"
                />
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
                <input type="text"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="text_field"
                    placeholder="Confirm password"
                />
                <input type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="text_field"
                    placeholder="Country"
                />
                <input type="submit"
                    value="Register"
                    className="button"
                />
            </form>
            <p className="formbottom">Already have an account ? <Link to="/login" className="link">Login</Link></p>

        </div>
    )
}

export default Register

