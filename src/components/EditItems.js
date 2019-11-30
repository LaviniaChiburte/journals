import React, { Component } from "react";

export class EditItems extends Component {
  state = {
    title: "",
    content: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.editItem(this.state.title, this.state.content);

    this.setState({ title: "", content: "" });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return <div></div>;
  }
}

export default EditItems;
