import React from "react";
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
import Footer from '../Footer/Footer';
import ButtonMainTheme from '../../themes/buttonMainTheme';

const useStyles = makeStyles(theme => ({
  containerLogInPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-evenly',
    height: '100vh'
  },
  button: {
    fontSize: '2rem',
    padding: '.5em',
    marginBottom: '.5em'
  },
  wrapperMain: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'calc(100vh - 12.8rem)',
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginTop: '6.4em'
  },
  formContainer: {
    backgroundColor: 'rgba(255,255,255, 0.9)',
    color: 'inherit',
    boxSizing: 'border-box',
    padding: '3em',
    borderRadius: '1em'
  },
  textLink: {
    fontSize: '1.5rem',
    textDecoration: 'none'
  },
  wrapperLinks: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <div className={classes.containerLogInPage}>
      <AppBar />
      <div className={classes.wrapperMain}>

        <div className={classes.formContainer}>

          <form className={classes.form} noValidate>
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
          <div className={classes.wrapperLinks}> 
            <Link 
              href="#" 
              className={classes.textLink}
            >
              Forgot password?
            </Link>
            <Link 
              href="#" 
              className={classes.textLink}
              >
                Don't have an account? Sign Up
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}
