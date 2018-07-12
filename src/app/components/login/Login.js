import React from "react";

import { Redirect } from "react-router-dom";

import { client } from "../../Client";
import "./Login-Form-Dark.css";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false
    };
    this.performLogin = this.performLogin.bind(this);
    this.redirectPath = this.redirectPath.bind(this);
  }

  performLogin() {
    client.login().then(() => this.setState({ shouldRedirect: true }));
  }

  redirectPath() {
    const locationState = this.props.location.state;
    const pathname =
      locationState && locationState.from && locationState.from.pathname;
    return pathname || "/poll";
  }

  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to={this.redirectPath()} />;
    } else {
      return (
        <div className="login-dark">
          <form>
            <div className="illustration">
              <i className="icon ion-ios-locked-outline" />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                type="submit"
                onClick={this.performLogin}
              >
                Log In
              </button>
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}
