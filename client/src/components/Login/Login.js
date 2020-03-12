import React, { useState } from "react";

import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";
import ButtonMainTheme from "../../themes/buttonMainTheme";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  containerLogInPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "space-evenly",
    height: "100vh"
  },
  button: {
    fontSize: "2rem",
    padding: ".5em",
    marginBottom: ".5em"
  },
  wrapperMain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "calc(100vh - 12.8rem)",
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginTop: "6.4em"
  },
  formContainer: {
    backgroundColor: "rgba(255,255,255, 0.9)",
    color: "inherit",
    boxSizing: "border-box",
    padding: "3em",
    borderRadius: "1em"
  },
  textLink: {
    fontSize: "1.5rem",
    color: "#baa6a5",
    textDecoration: "none",
    "&:hover": {
      color: "#a6c6c1"
    }
  },
  wrapperLinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
}));

export default function Login() {
  const classes = useStyles();
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: email,
      password: password
    };
    axios
      .post("http://localhost:8080/login", user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.user.name);
      })
      .then(() => history.push("/home/journals"))
      .catch(console.log);
  };

  return (
    <div className={classes.containerLogInPage}>
      <AppBar />
      <div className={classes.wrapperMain}>
        <div className={classes.formContainer}>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <ButtonMainTheme>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Login
              </Button>

              <Grid container justify="flex-end">
                <Grid item>
                  <Link
                    to="/sign-up"
                    variant="body2"
                    className={classes.textLink}
                  >
                    Don't have an account? Signup
                  </Link>
                </Grid>
              </Grid>
            </ButtonMainTheme>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
