import React from "react";
import { PrivateRoute } from "./PrivateRoute";
import { PolloptionList } from "./polloptionList/PolloptionList";
import { Logout } from "./Logout";
import { Login } from "./login/Login";
import { Register } from "./register/Register";
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
        <Route path="/register" component={Register} />
        <Route exact path="/" render={() => <Redirect to="/poll" />} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}
