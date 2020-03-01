import React from "react";
import { GoogleLogin } from 'react-google-login';
import { setToken, isEmailValid } from "../app/auth";
import { redirect } from "../app/tools";

const {REACT_APP_GOOGLE_CLIENT_ID} = process.env

const onSuccess = (response) => {
  const email = response.profileObj.email
  
  if (!isEmailValid(email)) return; 

  const token = response.uc.id_token;
  
  setToken(token)
  redirect('/');
}

const onError = (response) => {
  throw new Error (response);
}

const GoogleLoginButton = () => {
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
