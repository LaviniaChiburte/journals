import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    fontSize: "7vh",
    fontFamily: "Overlock",
    fontWeight: "bold"
  },

  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ background: "#855184" }}>
        <div
          className={classes.root}
          position="static"
          style={{ background: "#45146b", height: "1vh" }}
        ></div>

        <Typography
          noWrap
          to="/home"
          color="inherit"
          className={classes.title}
          component={Link}
        >
          Journals
        </Typography>
      </AppBar>
    </div>
  );
}
