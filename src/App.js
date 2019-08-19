import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./components/Home";
import User from "./components/User";

const AppContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={User} />
      </Router>
    </AppContainer>
  );
}

export default App;
