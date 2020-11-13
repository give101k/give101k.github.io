import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Cv from "./Cv";
import Project from "./Project";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/projects" component={Project} />
    <Route exact path="/cv" component={Cv} />
  </Switch>
);

export default Main;
