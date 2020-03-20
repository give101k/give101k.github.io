import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Cv from "./Cv";
const Main = () => (
  <main className="page landing-page">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cv" component={Cv} />
    </Switch>
  </main>
);

export default Main;
