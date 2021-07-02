import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
// import Scratch from "@pages/scratch";
import LandingPage from "@root/pages/landingPage";
import UserHome from "@root/pages/user/userHome";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/userhome" component={UserHome} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
