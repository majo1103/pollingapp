import React from "react";
import { Polloption } from "../Polloption";
import { options } from "../../../seed";
import { Poll } from "../Poll";
import "./Header-Dark.css";

export class PolloptionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      choosenOption: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ options: options });
  }

  handleChange(optionId) {
    this.setState({
      choosenOption: optionId
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const nextOptions = this.state.options.map(option => {
      if (option.id === this.state.choosenOption) {
        return Object.assign({}, option, {
          votes: option.votes + 1
        });
      } else {
        return option;
      }
    });
    this.setState({
      options: nextOptions
    });
    alert(`You voted for option ${this.state.choosenOption}`);
  }

  render() {
    const polloptions = this.state.options.map(option => (
      <Polloption
        key={"option-" + option.id}
        id={option.id}
        title={option.title}
        votes={option.votes}
        onChange={this.handleChange}
        active={option.id === this.state.choosenOption}
      />
    ));
    return (
      <div>
        <div className="header-dark">
          <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
            <div className="container">
              <a className="navbar-brand">Poll</a>
              <button
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navcol-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navcol-1">
                <a className="btn btn-light action-button" role="button">
                  Logout
                </a>
              </div>
            </div>
          </nav>
          <div className="container hero">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <Poll />
                <form onSubmit={this.handleSubmit}>
                  <ul>{polloptions}</ul>
                  <button type="submit" className="btn">
                    Vote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
