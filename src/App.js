import React from "react";
import "./App.css";
import { AppHeader } from "./AppHeader";
import { ContactsList } from "./ContactsList";

export class App extends React.Component {
  state = {
    contacts: null,
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?format=json&results=10")
      .then((res) => res.json())
      .then((json) => this.setState({ contacts: json.results }));
  }

  render() {
    const contacts = this.state.contacts;
    return (
      <div className="App">
        <AppHeader />
        <main className="ui main text container">
          {contacts ? <ContactsList contacts={contacts} /> : "Ładowanie..."}
        </main>
      </div>
    );
  }
}

export default App;
