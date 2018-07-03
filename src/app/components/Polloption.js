import React from "react";

export class Polloption extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote() {
    this.props.onVote(this.props.id);
  }

  render() {
    return (
      <li>
        <div>{this.props.title}</div>
        <div>
          <button className="btn btn-primary" onClick={this.handleUpVote}>
            vote
          </button>
          <span> number of votes: {this.props.votes}</span>
        </div>
      </li>
    );
  }
}
