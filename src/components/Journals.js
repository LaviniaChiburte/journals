import React, { Component } from "react";
import JournalItem from "./JournalItem";

import Container from "@material-ui/core/Container";

class Journals extends Component {
  render() {
    return (
      <Container>
        {this.props.journals.map(journal => (
          <JournalItem
            key={journal.id}
            journal={journal}
            deleteItem={this.props.deleteItem}
            editItem={this.props.editItem}
          />
        ))}
      </Container>
    );
  }
}

export default Journals;
