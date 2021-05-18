import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Auth0Provider } from '@auth0/auth0-react'
// import Auth0ProviderWithHistory from "./auth0-provider-with-history"

// ReactDOM.render(
//   <React.StrictMode>
//       <Auth0ProviderWithHistory>
//          <App />
//       </Auth0ProviderWithHistory>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(
  <Auth0Provider
     domain={domain}
     clientId={clientId}
     redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
