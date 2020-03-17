import React from "react";
import { GoogleLogin } from 'react-google-login';

const {REACT_APP_GOOGLE_CLIENT_ID} = process.env

export const GoogleLoginButton = ({onSuccess, onError}) => (
      <GoogleLogin
        clientId={REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Se connecter avec beNext"
        onSuccess={onSuccess}
        onFailure={onError}
      />
  )