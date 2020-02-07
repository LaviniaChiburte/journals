import React, { Component } from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { TextField, Card } from "@material-ui/core";

export class JournalItem extends Component {
  state = {
    isEditing: false,
    content: ""
  };

  handleChange = event => {
    this.setState({ isEditing: false, content: event.target.value });
  };

  render() {
    const { title, createdAt, content, id } = this.props.journal;
    return (
      <Card
        style={{
          padding: "0.5vw",
          margin: "1vh",
          width: "30vw"
        }}
      >
        <CardContent>
          <Typography variant="h6" component="h6">
            {title}
          </Typography>

          <Typography component="h6">
            {new Date(createdAt).toLocaleDateString("en-US")}
          </Typography>

          {this.state.isEditing ? (
            <TextField
              value={content}
              multiline
              fullWidth
              onChange={this.handleChange}
            />
          ) : (
            <Typography
              style={{
                padding: "1vw",
                margin: "1vh"
              }}
              component="p"
              onChange={this.handleChange}
            >
              {content}
            </Typography>
          )}
          <CardActions>
            <Button
              type="submit"
              variant="text"
              color="secondary"
              size="small"
              value="Submit"
              onClick={this.props.deleteItem.bind(this, id)}
            >
              Delete
            </Button>

            <Button
              type="submit"
              variant="text"
              color="primary"
              size="small"
              value="Submit"
              onClick={() =>
                this.setState({ isEditing: !this.state.isEditing })
              }
            >
              {this.state.isEditing ? "Save" : "Edit"}
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    );
  }
}

export default JournalItem;
