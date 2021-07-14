import React, { useContext, useEffect } from 'react'
import { Fragment } from 'react-is';
import AuthContext from '../context/auth/AuthContext'
import image from './homepage.jpg'
const Home = () => {
    const { isAuthenticated, loadUser } = useContext(AuthContext);
    useEffect(() => {
        loadUser()
    }, []);
    console.log(isAuthenticated)
    // const location=window.location.pathname;
    // let style;
    // if(location=='/'){
    //     style
    // }
    return (
        <div className="home_background">
            <img src={image} className="home_background_img" />

            <div className="content">
                <p className="content_title">Welcome to your gallery ...</p>
                <p>a place where you can store your images and access on any device</p>
            </div>
        </div>
    )
}

export default Home
