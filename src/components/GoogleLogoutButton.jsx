import React from "react";
import { GoogleLogout } from 'react-google-login';
import { redirect } from "../app/tools";
import { removeToken } from "../app/auth";

const {REACT_APP_GOOGLE_CLIENT_ID} = process.env

const onLogoutSuccess = () => {
  removeToken()
  redirect('/login')
}

const GoogleLogoutButton = () => {
  return (
      <GoogleLogout
        clientId={REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Se déconnecter"
        onLogoutSuccess={onLogoutSuccess}
      />
  );
};

export default GoogleLogoutButton;
