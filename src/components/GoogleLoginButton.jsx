import React from "react";
import { GoogleLogin } from 'react-google-login';
import api from "../app/api";

const onSuccess = (response) => {
  const token = response.Zi.id_token;
  addIdTokenInHeaders(token);
  login();
}

const onError = (response) => {
  throw new Error (response);
}

const addIdTokenInHeaders = (token) => {
  api.interceptors.request.use((config) => {
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  });
}

const login = () => {
  api
    .get('/login')
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

const GoogleLoginButton = () => {
  return (
      <GoogleLogin
        clientId="1012100771021-7ngu163464ko6e3hulchflcdoipaetlc.apps.googleusercontent.com"
        buttonText="Se connecter avec beNext"
        onSuccess={onSuccess}
        onFailure={onError}
      />
  );
};

export default GoogleLoginButton;
