import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddItem from "./components/AddItem";
import Journals from "./components/Journals";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Container from "@material-ui/core/Container";

import "./App.css";
import axios from "axios";

export class App extends Component {
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
  addItem = (title, createdAt, content) => {
    axios
      .post("https://secure-bayou-68150.herokuapp.com/journals", {
        title,
        createdAt,
        content
      })

      .then(res => {
        this.setState({ journals: [...this.state.journals, res.data] });
        console.log(res);
      });
  };

  render() {
    return (
      <Router>
        <div>
          <div className="nav">
            <NavBar />
          </div>
          <Container className="container">
            <Switch>
              <Route exact path="/home">
                <Journals journals={this.state.journals} />
              </Route>

              <Route path="/add">
                <Container className="container">
                  {" "}
                  <AddItem addItem={this.addItem} />
                </Container>
              </Route>

              <Route path="/login">
                <Login />
              </Route>
              <Route path="/sign-up">
                <SignUp />
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
