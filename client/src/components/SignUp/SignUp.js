import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppBarNav from "../AppBar/AppBar";
import Footer from "../Footer/Footer";
import axios from "axios";
import ButtonMainTheme from "../../themes/buttonMainTheme";

const useStyles = makeStyles(theme => ({
  containerSignUpPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100vh"
  },
  img: {
    width: "10%",
    marginBottom: "2rem"
  },
  wrapperMain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textField: {
    marginBottom: "2rem"
  }
}));

export default function SignUp() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ name, email, password });
    const newUser = {
      name: name,
      email: email,
      password: password
    };
    axios
      .post("http://localhost:8080/signupUser", newUser)
      .then(res => console.log(res))
      .catch(console.log);
  };
  return (
    <div className={classes.containerSignUpPage}>
      <AppBarNav />
      <div className={classes.wrapperMain}>
        <img
          src={require("../../resources/img/padlock.png")}
          className={classes.img}
        />
        <form className={classes.formWrapper} onSubmit={handleSubmit}>
          <TextField
            className={classes.textField}
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {/*<TextField*/}
          {/*className={classes.textField}*/}
          {/*    variant="outlined"*/}
          {/*    required*/}
          {/*    fullWidth*/}
          {/*    id="lastName"*/}
          {/*    label="Last Name"*/}
          {/*    name="lastName"*/}
          {/*    autoComplete="lname"*/}
          {/*/>*/}
          <TextField
            className={classes.textField}
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <ButtonMainTheme>
            <Button
              className={classes.button}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          </ButtonMainTheme>
        </form>
        {/*<Link href="#" variant="body2">*/}
        {/*  Already have an account? Login*/}
        {/*</Link>*/}
      </div>
      <Footer />
    </div>
  );
}
