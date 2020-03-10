import React, { Component } from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { TextField, Card } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

export class JournalItem extends Component {
  state = {
    isEditing: false,
    content: ""
  };

  handleChange = event => {
    this.setState({ content: event.target.value });
  };

  handleCancelEdit = e => {
    this.setState({ isEditing: false });
  };

  render() {
    const { title, createdAt, content, id } = this.props.journal;

    return (
      <Card
        style={{
          padding: ".5rem",
          margin: "1rem",
          width: "40rem",
          height: "30rem"
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            component="h6"
            style={{ fontWeight: "bold" }}
          >
            {title}
          </Typography>

          <Typography component="h6">
            {new Date(createdAt).toLocaleDateString("en-US")}
            {/* {createdAt} */}
          </Typography>

          {this.state.isEditing ? (
            <>
              <TextField
                value={content}
                multiline
                fullWidth
                onChange={this.handleChange}
              />

              <CardActions
                style={{
                  padding: "0.5vw",
                  display: "flex",
                  justifyContent: "flex-end"
                }}
              >
                <Tooltip title="Cancel">
                  <IconButton onClick={this.handleCancelEdit}>
                    <ClearIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Save">
                  <IconButton
                    // onClick={}

                    type="submit"
                  >
                    <CheckIcon />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </>
          ) : (
            <>
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

              <CardActions
                style={{
                  padding: "0.5vw",
                  display: "flex",
                  justifyContent: "flex-end"
                }}
              >
                <Tooltip title="Delete">
                  <IconButton
                    type="submit"
                    variant="text"
                    color="secondary"
                    size="small"
                    value="Submit"
                    onClick={this.props.deleteItem.bind(this, id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Edit">
                  <IconButton
                    type="submit"
                    variant="text"
                    color="primary"
                    size="small"
                    value="Submit"
                    onClick={() =>
                      this.setState({ isEditing: !this.state.isEditing })
                    }
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>

                {/* <Button
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
            </Button> */}
              </CardActions>
            </>
          )}
        </CardContent>
      </Card>
    );
  }
}

export default JournalItem;
