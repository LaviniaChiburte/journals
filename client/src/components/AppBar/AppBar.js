import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  title: {
    textDecoration: "none",
    fontSize: "3rem",
    padding: '.2em .5em .2em',
    fontFamily: "Philosopher",
    background: "#baa6a5"
  }
}));

export default function AppBarNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Typography
          className={classes.title}
          variant={'h1'}
        >
          Journals
        </Typography>
      </AppBar>
    </div>
  );
}
