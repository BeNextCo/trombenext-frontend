import React, { useState } from "react";
import styled from "styled-components";
import GoogleLoginButton from './GoogleLoginButton';
import { isEmailValid, setCredential, hasCredential } from "../app/auth";
import { redirect } from "../app/tools";
import Loading from "./Loading";
import { authenticate } from '../hooks/useAuth'

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [hasToken, setHasToken] = useState(hasCredential())

  if(hasToken) redirect('/')

  const onSuccess = onSuccessClosure(setHasToken, setIsLoading)

  return (
    <LoginContainer>
      <Title>Trombenext</Title>
      { isLoading && <Loading text={'Connexion en cours'} /> }
      { !hasToken && <GoogleLoginButton onSuccess={onSuccess} onError={onError} /> }
    </LoginContainer>
  );
};

const onSuccessClosure = (setHasToken,setIsLoading) => (response) => {
  const email = response.profileObj.email
  if (!isEmailValid(email)) return; 
  const token = response.uc.id_token;
  setCredential(token)
  setHasToken(true)
  setIsLoading(true)
  authenticate.then(() => {
    setIsLoading(false)
    redirect('/');
  })
}

const onError = (response) => {
  throw new Error (response);
}

const LoginContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`

const Title = styled.h1`
  position: relative;
  margin-top: 0;
  font-size: 100px;
  letter-spacing: -5px;
  color: #ef7f19;
  opacity: 1;
`

export default Login;
