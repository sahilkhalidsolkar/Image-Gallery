import React, { useEffect, useContext } from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import MainPage from './components/MainPage'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Upload from './components/Upload'
import PrivateComponent from './components/PrivateComponent'
import AuthContext from './context/auth/AuthContext'
import ImageContext from './context/image/ImageContext'

function App() {
  const { loadUser } = useContext(AuthContext)
  const { loadImage } = useContext(ImageContext)
  useEffect(() => {
    loadUser()
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <PrivateComponent exact path='/mainpage' component={MainPage} />
          <PrivateComponent exact path='/upload' component={Upload} />
          <Route render={(props) => "404 error wrong page"} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
