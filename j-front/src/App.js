import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// import NavBar from "./components/NavBar";
import AppBar from "./components/AppBar";
import AddItem from "./components/AddItem";
import Journals from "./components/Journals";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
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
    this.setState({
      journals: [...this.state.journals.filter(journal => journal.id !== id)]
    });
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
          {/* <Container className="container"> */}
          <Switch>
            <Route exact path="/home">
              <Typography
                component="h1"
                variant="h4"
                style={{ padding: "5vh", marginTop: 60 }}
              >
                All Journals
              </Typography>

              {/* <Typography>
                  {this.state.journals.map(journal => (
                    <h1 key={journal.id}>{journal.title}</h1>
                  ))}
                </Typography> */}

              {/* <Typography>
                  {this.state.journals.map(journal => (
                    <JournalItem
                      key={journal.id}
                      journal={journal}
                      deleteItem={this.deleteItem}
                      editItem={this.editItem}
                    />
                  ))}
                </Typography> */}

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
          {/* </Container> */}
        </div>
      </Router>
    );
  }
}

export default App;
