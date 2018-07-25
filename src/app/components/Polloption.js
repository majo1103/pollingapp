import React from "react";
import { runInDebugContext } from "vm";

export class Polloption extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote() {
    this.props.onChange(this.props.id);
  }

  render() {
    return (
      <div>
        <input
          type="radio"
          className="form-check-input"
          checked={this.props.active}
          onChange={this.handleUpVote}
        />
        <label className="form-check-label" style={{ color: "white" }}>
          {this.props.title}
        </label>
      </div>
    );
  }
}
