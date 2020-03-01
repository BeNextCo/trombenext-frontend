import React from "react";
import styled from "styled-components";
import GoogleLoginButton from './GoogleLoginButton';

const HomeContainer = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  position: relative;
  margin-top: 0;
  font-size: 100px;
  letter-spacing: -5px;
  color: #012bad;
  opacity: 0.6;
`;

const Login = () => {
  return (
    <HomeContainer>
      <Title>Trombenext</Title>
      <GoogleLoginButton/>
    </HomeContainer>
  );
};

export default Login;
