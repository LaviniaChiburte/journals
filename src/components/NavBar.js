import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textDecoration: "none"
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#855184" }}>
        <div
          className={classes.root}
          position="static"
          style={{ background: "#45146b", height: "1vh" }}
        ></div>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            // style={{ color: '#45146b' }} - asta sa fie culoarea pe focus filedtext
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography
            to="/home"
            variant="h4"
            color="inherit"
            className={classes.title}
            component={Link}
          >
            Journals
          </Typography>

          <Button to="/add" component={Link} color="inherit">
            Add journal
          </Button>

          <Button to="/login" component={Link} color="inherit">
            Login
          </Button>

          <Button to="/sign-up" component={Link} color="inherit">
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
