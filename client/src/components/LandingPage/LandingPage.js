import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

const useStyles = makeStyles(theme => ({
  paperContainer: {
    backgroundColor: "pink",
    backgroundSize: "cover",
    overflow: "hidden",
    width: "100vw",
    height: "90vh",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: "#000000",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1
  },
  pageButton: {
    backgroundColor: "#413E4A",
    margin: theme.spacing(1),
    position: "relative",
    zIndex: 2
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Paper className={classes.paperContainer}>
      <AppBar />
      <Button
        variant="contained"
        size="large"
        color="secondary"
        className={classes.pageButton}
        component={Link}
        to="/sign-up"
      >
        SignUp
      </Button>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        className={classes.pageButton}
        component={Link}
        to="/login"
      >
        Login
      </Button>
    </Paper>
  );
}
