import React from "react";
import { PrivateRoute } from "./PrivateRoute";
import { PolloptionList } from "./PolloptionList";
import { Logout } from "./Logout";
import { Login } from "./login/Login";
import { Route, Redirect, Switch } from "react-router-dom";

const NoMatch = ({ location }) => (
  <div>
    <strong>Error!</strong> No route found matching:
    <div>
      <code>{location.pathname}</code>
    </div>
  </div>
);

export class App extends React.Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/poll" component={PolloptionList} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route exact path="/" render={() => <Redirect to="/poll" />} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}
