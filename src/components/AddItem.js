import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import CssBaseline from "@material-ui/core/CssBaseline";
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
        <form onSubmit={this.onSubmit} style={formStyle}>
          <CssBaseline />

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            component={Paper}
            elevation={6}
            square
            color="#fdf1e4"
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="title"
              type="text"
              name="title"
              autoFocus
              placeholder="Title..."
              value={this.state.title}
              onChange={this.onChange}
            />
            {/* <input
						type="text"
						name="title"
						placeholder="Title..."
						value={this.state.title}
						onChange={this.onChange}
					/> */}

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
            {/* <input
						type="date"
						name="createdAt"
						value={this.state.createdAt}
						onChange={this.onChange}
					/> */}

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="content"
              type="textarea"
              name="content"
              autoFocus
              value={this.state.content}
              onChange={this.onChange}
            />

            <Input
              type="file"
              name="image"
              id="image"
              alt="doc uploaded"
              value=""
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
              Submit
            </Button>
          </Grid>
        </form>
      </div>
    );
  }
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // justifyContent: 'space-around',
  marginLeft: "20px",
  width: "40vw"
};

export default AddItem;
