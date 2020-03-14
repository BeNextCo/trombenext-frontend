import React from "react";
import { GoogleLogout } from 'react-google-login';
import { redirect } from "../app/tools";
import { removeCredential } from "../app/auth";

const {REACT_APP_GOOGLE_CLIENT_ID} = process.env

const onLogoutSuccess = () => {
  removeCredential()
  redirect('/login')
}

const GoogleLogoutButton = ({className}) => {
  return (
      <GoogleLogout className={className}
        clientId={REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Se déconnecter"
        onLogoutSuccess={onLogoutSuccess}
      />
  );
};

export default GoogleLogoutButton;
