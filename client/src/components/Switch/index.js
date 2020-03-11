import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Home = () => {
  return <h1> Home</h1>;
};
const Users = () => {
  return <h1> Users</h1>;
};
const SwitchRoute = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
      </Switch>
    </Router>
  );
};

export default SwitchRoute;
