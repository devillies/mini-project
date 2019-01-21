// @flow
import React, { Component } from "react";

type Contact = {
  id: string,
  name: string,
  number: string
};

type State = {
  selectedContact: ?Contact,
  contacts: Array<Contact>
};

let contactStyle = {
  backgroundColor: "purple",
  fontFamily: "arial",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start"
};
let selectedContactStyle = {
  backgroundColor: "blue",
  fontFamily: "arial",
  color: "white",
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center"
};

class ContactApp extends Component<{}, State> {
  state = {
    todoList: [
      { id: "1", name: "buy oreos", isDone: false },
      { id: "2", name: "buy cheetos ", isDone: false },
      { id: "3", name: "buy soap", isDone: false }
    ],
    searchValue: "",
    todoIndex: 0,

    newList: ""
  };

  render() {
    let { contacts, selectedContact } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row"
        }}
      >
        <div style={contactStyle}>
          <h1> Contact List</h1>
          <ul
            style={{
              fontSize: 28
            }}
          >
            {contacts.map(contact => this.renderContact(contact))}
          </ul>
        </div>
        <div style={selectedContactStyle}>
          <h1> Contact Details</h1>
          {selectedContact ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 28
              }}
            >
              {selectedContact.number}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
  onContactClick = (selectedID: string) => {
    // for (let contact of contacts) {
    //   if (contact.id === selectedID) {
    //     this.setState({
    //       selectedContact: contact,
    //     });
    //   }
    // }
    contacts.map(contact =>
      contact.id === selectedID
        ? this.setState({ selectedContact: contact })
        : null
    );
  };

  renderContact(contact: Object) {
    return (
      <li key={contact.id} onClick={event => this.onContactClick(contact.id)}>
        {contact.name}
      </li>
    );
  }
}

export default ContactApp;
