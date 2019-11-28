import React, { Component } from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export class JournalItem extends Component {
  render() {
    const { title, createdAt, content, id } = this.props.note;
    return (
      <div>
        <Paper
          style={{
            padding: "2vw",
            margin: "2vh",
            width: "80vw"
          }}
        >
          <CardContent>
            <Typography>
              <h3>{title}</h3>
            </Typography>

            <Typography>
              <h5>{new Date(createdAt).toLocaleDateString("en-US")}</h5>
            </Typography>

            <Typography
              style={{
                padding: "1vw",
                margin: "1vh"
              }}
            >
              <p>{content}</p>
            </Typography>

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
              // onClick={this.props.updateItem.bind(this, content)}
            >
              Edit
            </Button>
          </CardContent>
        </Paper>
      </div>
    );
  }
}

export default JournalItem;
