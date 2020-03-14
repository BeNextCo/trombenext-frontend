import React from "react";
import { GoogleLogin } from 'react-google-login';

const {REACT_APP_GOOGLE_CLIENT_ID} = process.env

const GoogleLoginButton = ({onSuccess, onError}) => {
  return (
      <GoogleLogin
        clientId={REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Se connecter avec beNext"
        onSuccess={onSuccess}
        onFailure={onError}
      />
  );
};

export default GoogleLoginButton;
