import React, { Component } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import Journals from "../Journals/Journals";
import { Route, Switch } from "react-router-dom";
import AddItem from "../AddItem/AddItem";
import axios from "axios";
import Typography from "@material-ui/core/Typography";

// let userName = localStorage.getItem("name");
export class UserPage extends Component {
  state = {
    journals: [],
    editState: false
  };

  componentDidMount() {
    fetch("http://localhost:8080/journals", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())

      .then(journals => {
        this.setState({ journals });
        console.log(journals);
      });
  }

  addItem = (title, createdAt, content) => {
    axios
      .post(
        "http://localhost:8080/journals",
        {
          title,
          createdAt,
          content
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )

      .then(res => {
        this.setState({ journals: [res.data, ...this.state.journals] });
        console.log(res);
      });
  };

  deleteItem = id => {
    axios
      .delete(
        `http://localhost:8080/journals/${id}`,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )
      .then(
        this.setState({
          journals: [
            ...this.state.journals.filter(journal => journal.id !== id)
          ]
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
        <NavigationBar />
        <Switch>
          <Route path="/home/journals">
            <>
              {localStorage.getItem("name") === undefined ? (
                ""
              ) : (
                <Typography
                  variant="h4"
                  component="h5"
                  style={{
                    marginTop: "20vh",
                    marginLeft: "5vw",
                    color: "#baa6a5"
                    // position: "fixed"
                  }}
                >
                  {localStorage.getItem("name")}'s journals
                </Typography>
              )}
            </>

            <Journals
              journals={this.state.journals}
              deleteItem={this.deleteItem}
              editItem={this.editItem}
            />
          </Route>
          <Route path="/home/add">
            <AddItem addItem={this.addItem} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default UserPage;
