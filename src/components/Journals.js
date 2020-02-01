import React, { Component } from "react";
import JournalItem from "./JournalItem";
import Box from "@material-ui/core/Box";
import { flexbox } from "@material-ui/system";

class Journals extends Component {
  render() {
    return (
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="space-around"
      >
        {this.props.journals.map(journal => (
          <JournalItem
            key={journal.id}
            journal={journal}
            deleteItem={this.props.deleteItem}
            editItem={this.props.editItem}
          />
        ))}
      </Box>
    );
  }
}

export default Journals;
