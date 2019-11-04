import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../app/api";
import GoogleLoginButton from './GoogleLoginButton';
import GoogleLogoutButton from './GoogleLogoutButton';

const HomeContainer = styled.div``;

const Title = styled.h1`
  display: inline;
  position: relative;
  font-size: 100px;
  letter-spacing: -5px;
  color: #012bad;
  opacity: 0.6;
`;

const fetchProfiles = (setProfiles) => {
  api
    .get("http://localhost:5000/profiles")
    .then(result => setProfiles(result.data));
}

const Home = () => {
  const [helloWorld, setHelloWorld] = useState("Loading...");
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    api
      .get("http://localhost:5000")
      .then(result => setHelloWorld(result.data));
  }, []);

  return (
    <HomeContainer>
      <Title>Trombenext</Title>
      <h2>{helloWorld}</h2>
      <GoogleLoginButton/> <GoogleLogoutButton/>
      <br/><br/>
      <button onClick={() => fetchProfiles(setProfiles)}>Fetch profiles</button>
      {profiles.map((profile, index) => <div key={index}>{profile.first_name} {profile.last_name}<br/><br/></div>)}
    </HomeContainer>
  );
};

export default Home;
