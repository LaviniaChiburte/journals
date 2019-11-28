import React, { Component } from "react";
import JournalItem from "./JournalItem";

class Journals extends Component {
  render() {
    return this.props.journals.map(note => (
      <JournalItem
        key={note.id}
        note={note}
        deleteItem={this.props.deleteItem}
        // updateItem={this.props.updateItem}
      />
    ));
  }
}

export default Journals;
