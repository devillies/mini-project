// @flow
import React, {Component} from 'react';

type Contact = {
  id: string;
  name: string;
  number: string;
};

type State = {
  selectedContact: ?Contact;
  contacts: Array<Contact>;
};

let contacts = [
  {id: '1', name: 'Teagan', number: '082151666123'},
  {id: '2', name: 'RB', number: '081571335541'},
  {id: '3', name: 'Galu', number: '081555662778'},
];
let contactStyle = {
  backgroundColor: 'purple',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
};
let selectedContactStyle = {
  backgroundColor: 'blue',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
};

class ContactApp extends Component<{}, State> {
  state = {
    contacts,
    selectedContact: null,
  };

  render() {
    let {contacts, selectedContact} = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={contactStyle}>
          <h1> Contact List</h1>
          <ul style={{fontSize: 28}}>
            {contacts.map((contact) => this.renderContact(contact))}
          </ul>
        </div>
        <div style={selectedContactStyle}>
          <h1> Contact Details</h1>
          {selectedContact ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 28,
              }}
            >
              {selectedContact.number}
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  onContactClick = (selectedID) => {
    // for (let contact of contacts) {
    //   if (contact.id === selectedID) {
    //     this.setState({
    //       selectedContact: contact,
    //     });
    //   }
    // }
    contacts.map((contact) =>
      contact.id === selectedID
        ? this.setState({selectedContact: contact})
        : null,
    );
  };

  renderContact(contact) {
    return (
      <li key={contact.id} onClick={(event) => this.onContactClick(contact.id)}>
        {contact.name}
      </li>
    );
  }
}
export default ContactApp;
