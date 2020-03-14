import React from "react";
import styled from "styled-components";

import { useAuth } from "./hooks/useAuth";
import { GlobalStyle } from "./styles/global";
import LoadingPage from "./components/LoadingPage";
import Routing from "./components/Routing";

function App() {
  const {isLoading, isLogged} = useAuth()

  return (
    <AppContainer>
      <GlobalStyle/>
      {isLoading ? <LoadingPage/> : <Routing isLogged={isLogged} /> }
    </AppContainer>
  );
}

const AppContainer = styled.div``

export default App;
