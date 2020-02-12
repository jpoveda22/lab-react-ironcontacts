import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {

  // constructor(props){
  //   super(props)
  //   this.state ={
  //     fiveContacts: contacts.slice(0, 5)
  //   }
  // }

  state = {
    fiveContacts: contacts.slice(0, 5)
  }

  showFiveContacts = () => {
    // console.log(this.state.fiveContacts)
    return this.state.fiveContacts.map((eachContact, index) => {
      return (
        <tr key={index}>
          <th><img src={eachContact.pictureUrl} alt={eachContact.name}/></th>
          <th>{eachContact.name}</th>
          <th>{eachContact.popularity}</th>
        </tr>
      )
  })
  }
  
  render() {
    console.log("Render App.js")
    console.log(this.state.fiveContacts)
    return (
      <div className="App">
        <h1>Table</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.showFiveContacts()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

