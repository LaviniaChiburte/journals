import React, { Component } from "react";

export class Filter extends Component {
  state = {
    journals: []
  };

  componentDidMount() {
    fetch("https://secure-bayou-68150.herokuapp.com/journals")
      .then(res => res.json())

      .then(journals => {
        this.setState({ journals });
        console.log(journals);
      });
  }
  render() {
    return <div></div>;
  }
}

export default Filter;
