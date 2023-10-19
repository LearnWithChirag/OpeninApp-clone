import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import {BrowserRouter} from 'react-router-dom'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider 
      domain='dev-d7r3xvuo0qwnp8lw.us.auth0.com'
      clientId='AnZry5j5fKsfMB4dJOuFZ8a4LpNO8g8y'
      redirectUri={()=> window.location='/homepage'}
    >

    <App />
    </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

