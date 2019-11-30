import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import NavBar from "./components/NavBar";
import AddItem from "./components/AddItem";
import Journals from "./components/Journals";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import axios from "axios";

export class App extends Component {
  state = {
    journals: [],
    editState: false
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

  deleteItem = id => {
    this.setState({
      journals: [...this.state.journals.filter(journal => journal.id !== id)]
    });
  };

  editItem = () => {
    console.log("test");
    this.setState({
      journals: this.state.journals.map(journal => (
        <input value={journal.content} />
      ))
    });
  };

  render() {
    if (this.state.journals === undefined) {
      return <div>Loading...</div>;
    }

    return (
      <Router>
        <div>
          <div className="nav">
            <NavBar />
          </div>
          <Container className="container">
            <Switch>
              <Route exact path="/home">
                <Typography
                  component="h1"
                  variant="h4"
                  style={{ padding: "1.5vh" }}
                >
                  All Journals
                </Typography>
                <Journals
                  journals={this.state.journals}
                  deleteItem={this.deleteItem}
                  editItem={this.editItem}
                />
              </Route>
              {/* <Route path="/home/:id">
                <h1>something</h1>
              </Route> */}

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
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
