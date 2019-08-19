import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeContainer = styled.div``;

const Title = styled.h1`
  display: inline;
  position: relative;
  font-size: 200px;
  letter-spacing: -5px;
  color: rgba(0, 0, 255, 0.5);
  opacity: 0.7;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  color: palevioletred;
  font-size: 2em;
  font-weight: bold;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  text-decoration: none;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Trombenext</Title>
      <LinkContainer>
        <StyledLink to="/user">Gérer les profils</StyledLink>
      </LinkContainer>
    </HomeContainer>
  );
};

export default Home;
