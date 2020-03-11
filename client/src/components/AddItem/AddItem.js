import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";
import ButtonMainTheme from "../../themes/buttonMainTheme";

export class AddItem extends Component {
  state = {
    title: "",
    createdAt: "",
    content: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addItem(
      this.state.title,
      this.state.createdAt,
      this.state.content
    );

    this.setState({
      title: "",
      createdAt: null,
      content: ""
    });

    this.props.history.push("/home/journals");
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Paper
          elevation={3}
          style={{
            maxWidth: "40%",
            boxSizing: "border-box",
            padding: "2em",
            marginTop: "12rem"
          }}
        >
          <form onSubmit={this.onSubmit}>
            <Typography component="h1" variant="h5">
              Write
            </Typography>
            <TextField
              variant="outlined"
              required
              margin="normal"
              fullWidth
              id="title"
              type="text"
              name="title"
              placeholder="Entry Title"
              value={this.state.title}
              onChange={this.onChange}
            />

            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="createdAt"
              type="date"
              name="createdAt"
              autoFocus
              value={this.state.createdAt}
              onChange={this.onChange}
            />

            <TextField
              multiline
              fullWidth
              variant="outlined"
              margin="normal"
              required
              id="content"
              type="textarea"
              name="content"
              value={this.state.content}
              onChange={this.onChange}
            />
            <ButtonMainTheme>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                value="Submit"
                style={{ fontSize: "2rem", padding: ".5rem" }}
              >
                Add
              </Button>
            </ButtonMainTheme>
          </form>
        </Paper>
      </Container>
    );
  }
}

export default withRouter(AddItem);
