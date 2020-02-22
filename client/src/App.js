import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import AppBar from "./components/AppBar/AppBar";
import AddItem from "./components/AddItem/AddItem";
import Journals from "./components/Journals/Journals";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import LandingPage from "./components/LandingPage/LandingPage";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import axios from "axios";

export class App extends Component {
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
      <Router>
        <div>
          <div className="nav">
            <AppBar />
          </div>

          <Switch>
            <Route exact path="/home">
              <Typography
                variant="h4"
                style={{ padding: "5vh", marginTop: 60 }}
              >
                User X's journals
              </Typography>

              <Journals
                journals={this.state.journals}
                deleteItem={this.deleteItem}
                editItem={this.editItem}
              />
            </Route>
            <Route path="/home/:id">
              <h1>something</h1>
            </Route>

            <Route path="/add">
              <AddItem addItem={this.addItem} />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
