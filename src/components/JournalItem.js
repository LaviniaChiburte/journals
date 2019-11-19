import React, { Component } from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

export class JournalItem extends Component {
  render() {
    return (
      <div>
        <Paper
          style={{
            padding: "2vw",
            margin: "2vh",
            backgroundColor: "#fdf1e4"
            // borderTopLeftRadius: "25px"
          }}
        >
          <CardContent>
            <Typography>
              <h4>{this.props.note.title}</h4>{" "}
            </Typography>

            <h6>
              {new Date(this.props.note.createdAt).toLocaleDateString("en-US")}
            </h6>
            <p>{this.props.note.content}</p>
          </CardContent>
        </Paper>
      </div>
    );
  }
}

export default JournalItem;
