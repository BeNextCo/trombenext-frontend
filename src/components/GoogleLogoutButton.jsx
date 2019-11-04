import React from "react";
import { GoogleLogout } from 'react-google-login';
import api from "../app/api";

const onLogoutSuccess = () => {
  api.interceptors.request.use((config) => {
    config.headers.Authorization = null;
    return config;
  });
}

const GoogleLogoutButton = () => {
  return (
      <GoogleLogout
        clientId="1012100771021-7ngu163464ko6e3hulchflcdoipaetlc.apps.googleusercontent.com"
        buttonText="Se déconnecter"
        onLogoutSuccess={onLogoutSuccess}
      />
  );
};

export default GoogleLogoutButton;
