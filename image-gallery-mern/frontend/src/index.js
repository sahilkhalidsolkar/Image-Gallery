import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthState from './context/auth/AuthState'
import ImageState from './context/image/ImageState'
ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <ImageState>
        <App />
      </ImageState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById('root')
);
