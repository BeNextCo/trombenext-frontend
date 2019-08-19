import React, { useState } from "react";
import styled from "styled-components";
import UserForm from "./UserForm";

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ErrorMessage = styled.span`
  position: absolute;
  top: 230px;
  color: red;
  font-family: "IM Fell French Canon";
`;

const User = () => {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <UserContainer>
      <UserForm errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
      {errorMessage && <ErrorMessage>{`${errorMessage}`}</ErrorMessage>}
    </UserContainer>
  );
};

export default User;
