import React from "react";
import { Polloption } from "./Polloption";
import { options } from "../../seed";

export class PolloptionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.handleOptionUpVote = this.handleOptionUpVote.bind(this);
  }

  componentDidMount() {
    this.setState({ options: options });
  }

  handleOptionUpVote(optionId) {
    const nextOptions = this.state.options.map(option => {
      if (option.id === optionId) {
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
  }
  render() {
    const polloptions = this.state.options.map(option => (
      <Polloption
        key={"option-" + option.id}
        id={option.id}
        title={option.title}
        votes={option.votes}
        onVote={this.handleOptionUpVote}
      />
    ));
    return <ul>{polloptions}</ul>;
  }
}
