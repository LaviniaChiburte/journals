import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import LandingPage from "./components/LandingPage/LandingPage";
import UserPage from "./components/UserPage/UserPage";

import "./App.css";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Switch>
            <Route path="/home">
              <UserPage />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
