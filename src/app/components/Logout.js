import React from "react";

import { Redirect } from "react-router-dom";

import { client } from "../Client";

export class Logout extends React.Component {
  constructor(props) {
    super(props);

    client.logout();
  }

  render() {
    return <Redirect to="/login" />;
  }
}
