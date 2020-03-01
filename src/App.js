import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./components/Home";
import User from "./components/User";
import PrivateRoute from "./PrivateRoute";
import Login from "./components/Login";
import { isAuth } from "./app/auth";

const AppContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const isLogged = isAuth();
  return (
    <AppContainer>
      <Router>
        <PrivateRoute exact path="/" component={Home} isLogged={isLogged} />
        <PrivateRoute path="/user" component={User} isLogged={isLogged} />
        <Route path="/login" component={Login} />
      </Router>
    </AppContainer>
  );
}

export default App;
