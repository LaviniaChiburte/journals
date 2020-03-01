import React, { Component } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import AddItem from "../AddItem/AddItem";
import Journals from "../Journals/Journals";
//Logout

import Typography from "@material-ui/core/Typography";
import axios from "axios";

export class UserPage extends Component {
  state = {
    journals: [],
    editState: false
  };

  componentDidMount() {
    fetch("http://localhost:8080/journals")
      .then(res => res.json())

      .then(journals => {
        this.setState({ journals });
        console.log(journals);
      });
  }

  addItem = (title, createdAt, content) => {
    axios
      .post("http://localhost:8080/add", {
        title,
        createdAt,
        content
      })

      .then(res => {
        this.setState({ journals: [res.data, ...this.state.journals] });
        console.log(res);
      });
  };

  deleteItem = id => {
    axios.delete(`http://localhost:8080/journals/${id}`, {}).then(
      this.setState({
        journals: [...this.state.journals.filter(journal => journal.id !== id)]
      })
    );
  };

  editItem = journal => {
    console.log(journal);
  };

  render() {
    if (this.state.journals === undefined) {
      return <div>Loading...</div>;
    }

    return (
    <div>
      <NavigationBar/>
      <Journals
        journals={this.state.journals}
        deleteItem={this.deleteItem}
        editItem={this.editItem}
      />
    </div>
    );
  }
}

export default UserPage;