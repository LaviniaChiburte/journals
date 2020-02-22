import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

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

    this.props.history.push("/journals");
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Container className="container">
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
                {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    value={this.state.createdAt}
                    onChange={this.onChange}
                  />
                </MuiPickersUtilsProvider> */}

                <TextField
                  // rowsMax={4}
                  variant="filled"
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

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  value="Submit"
                  style={{ backgroundColor: "#855184", marginTop: 15 }}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    );
  }
}

export default withRouter(AddItem);
