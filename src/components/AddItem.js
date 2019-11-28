import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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

    this.setState({ title: "", createdAt: "", content: "" });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <Grid container spacing={10} style={{ marginTop: "5vh" }}>
            <Grid
              item
              xs={12}
              component={Paper}
              elevation={10}
              square
              color="#fdf1e4"
            >
              <Typography component="h1" variant="h5">
                Write
              </Typography>
              <TextField
                variant="outlined"
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
                id="content"
                type="date"
                name="createdAt"
                autoFocus
                value={this.state.createdAt}
                onChange={this.onChange}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="content"
                type="textarea"
                name="content"
                value={this.state.content}
                onChange={this.onChange}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                value="Submit"
                style={{ backgroundColor: "#b8929f", marginTop: 15 }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

// const formStyle = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   // justifyContent: 'space-around',
//   marginLeft: "20px",
//   width: "40vw"
// };

export default AddItem;
