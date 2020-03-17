import React from "react";

import { useAuth } from "./hooks/useAuth";
import { GlobalStyle } from "./styles/global";
import { Routing } from "./components/Routing";
import { LoadingPage } from "./components/LoadingPage";

function App() {
  const {isLoading, isLogged} = useAuth()

  return (
    <div>
      <GlobalStyle/>
      {isLoading ? <LoadingPage/> : <Routing isLogged={isLogged} /> }
    </div>
  );
}

export default App;
