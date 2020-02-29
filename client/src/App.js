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
import UserPage from "./components/UserPage/UserPage";

import Typography from "@material-ui/core/Typography";
import "./App.css";
import axios from "axios";

export class App extends Component {

  render() {
    

    return (
      <Router>
        <div>
        
          <Route exact path="/" component={LandingPage} />
          <Switch>
            <Route exact path="/home">
              <UserPage/>
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
            {/* <Redirect to="/home" /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
