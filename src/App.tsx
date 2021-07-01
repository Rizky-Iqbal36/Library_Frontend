import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
// import Scratch from "@pages/scratch";
import LandingPage from "@root/pages/landingPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
