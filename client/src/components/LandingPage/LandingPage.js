import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import ButtonMainTheme from "../../themes/buttonMainTheme";
import AppBarNav from "../AppBar/AppBar";
import Footer from "../Footer/Footer";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh"
  },
  wrapper: {
    maxWidth: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    fontWeight: "bold",
    marginTop: "2rem",
    width: "50%",
    fontSize: "1.5rem"
  },
  first: {
    marginRight: "1rem"
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "8" + "0%"
  },
  text: {
    fontSize: "1.5rem",
    textAlign: "center",
    marginTop: "2rem",
    fontSize: "2.5rem"
  },
  image: {
    maxHeight: "40vh",
    marginTop: "10vh"
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <AppBarNav />
      <div className={classes.wrapper}>
        <img
          src={require("../../resources/img/notebook.png")}
          className={classes.image}
        />
        <div className={classes.buttonWrapper}>
          <ButtonMainTheme>
            <Button
              color="primary"
              variant="contained"
              size="large"
              className={[classes.button, classes.first]}
              component={Link}
              to="/sign-up"
            >
              Sign Up
            </Button>
          </ButtonMainTheme>
          <ButtonMainTheme>
            <Button
              color="primary"
              variant="contained"
              size="large"
              className={classes.button}
              component={Link}
              to="/login"
            >
              Login
            </Button>
          </ButtonMainTheme>
        </div>
        <Typography className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit!
        </Typography>
      </div>
      <Footer />
    </div>
  );
}
