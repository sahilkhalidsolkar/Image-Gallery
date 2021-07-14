import React, { useContext, Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/auth/AuthContext'
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [windowsize, setWindowsize] = useState(null)
    useEffect(() => {
        setWindowsize(window.innerWidth)
    }, []);
    const onLogout = e => {
        e.preventDefault()
        logOut()
    }
    const displayMenu = (e) => {
        e.preventDefault();
        const menu = document.querySelector('.nav_links')
        menu.classList.toggle('show_menu')
    }


    const links = user ? (<Fragment>
        <li><Link to="/mainpage" className="nav_link">Images</Link></li>
        <li><Link to="/upload" className="nav_link">Upload</Link></li>
        <li className="nav_link">Hii  {user.name.split(' ')[0]}</li>
        <li onClick={onLogout} className="nav_link">Logout <i className="fas fa-sign-out-alt"></i></li>

    </Fragment>) : (<Fragment>
        <li><Link to="/login" className="nav_link">Login</Link></li>
        <li><Link to="/register" className="nav_link">Register</Link></li>
    </Fragment>)


    return (
        <nav className="navbar">
            <Link to="/"><h4 className="nav_brand">YOUR GALLERY</h4></Link>
            <i className="fas fa-bars " onClick={displayMenu}></i>
            <ul className="nav_links">
                {links}
            </ul>
        </nav>

    )
}

export default Navbar
