import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import AppBarNav from "../AppBar/AppBar";
import Footer from "../Footer/Footer";
import axios from "axios";
import ButtonMainTheme from "../../themes/buttonMainTheme";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { withRouter, useHistory } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

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
  },
  button: {
    fontSize: "2rem",
    padding: ".5em",
    marginBottom: ".5em"
  }
}));

export function SignUp() {
  const classes = useStyles();
  let history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email,
      password: password
    };

    axios
      .post("http://localhost:8080/signupUser", newUser)
      .then(() => history.push("/login"))
      .catch(console.log());
  };
  return (
    <div className={classes.containerSignUpPage}>
      <AppBarNav />
      <div className={classes.wrapperMain}>
        <img
          src={require("../../resources/img/padlock.png")}
          alt="changing backround"
          className={classes.img}
        />
        <ValidatorForm
          // ref="form"
          className={classes.formWrapper}
          onSubmit={handleSubmit}
          onError={errors => console.log(errors)}
        >
          <TextValidator
            className={classes.textField}
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="Name"
            autoFocus
            value={name}
            onChange={e => setName(e.target.value)}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />

          <TextValidator
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
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
          />
          <TextValidator
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
            validators={["required"]}
            errorMessages={["this field is required"]}
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

          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </ValidatorForm>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(SignUp);
