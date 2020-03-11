import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";
import ButtonMainTheme from "../../themes/buttonMainTheme";
import axios from "axios";

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
    textDecoration: "none"
  },
  wrapperLinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
}));

export default function SignInSide() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // console.log({ email, password });
    const user = {
      email: email,
      password: password
    };
    axios
      .post("http://localhost:8080/login", user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        console.log(res);
      })
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
            </ButtonMainTheme>
          </form>
          {/* <div className={classes.wrapperLinks}>
            <Link href="#" className={classes.textLink}>
              Forgot password?
            </Link>
            <Link href="#" className={classes.textLink}>
              Don't have an account? Sign Up
            </Link>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
