import React from "react";
import { render } from "react-dom";

import { Poll } from "./components/Poll";
import { PolloptionList } from "./components/PolloptionList";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Poll />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <PolloptionList />
          </div>
        </div>
      </div>
    );
  }
  //messing
}

render(<App />, window.document.getElementById("app"));
