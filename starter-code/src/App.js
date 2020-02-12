import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
class App extends Component {
  state = {
    fiveContacts: contacts.slice(0, 5),
    randomContact: contacts[Math.floor(Math.random()*contacts.length)]
    
  }
  showFiveContacts = () => {
    // console.log(this.state.fiveContacts)
    console.log(this.state.randomContact)
    return this.state.fiveContacts.map((eachContact, index) => {
      return (
        <tr key={index}>
          <th><img src={eachContact.pictureUrl}  style={{height:"100px"}}alt={eachContact.name}/></th>
          <th>{eachContact.name}</th>
          <th>{eachContact.popularity}</th>
          <th><button onClick={() => this.removeActor(index)}>Delete</button></th>
        </tr>
        
      )
    })
  }
  //adds a random actor to the initial array
  addActor = () => {
    let randomActor = Math.floor(Math.random()*contacts.length) // finds a random contact
    let randomActorArray = [...this.state.fiveContacts]; // cloned initial array
    randomActorArray.push(contacts[randomActor]); // adds random actor to cloned array
    console.log(randomActorArray);
    this.setState({
      fiveContacts:randomActorArray // replaces fiveContacts array with randomActorArray
    })
  }

  sortByName = () => {
    let byName = [...this.state.fiveContacts];
    byName.sort(function(a, b){
      return a.name.localeCompare(b.name);
    })
    this.setState({
      fiveContacts: byName
    })
  }

  sortByPopularity = () => {
    let byPopularity = [...this.state.fiveContacts];
    byPopularity.sort(function(a,b){
      return (a.popularity - b.popularity);
    })
    this.setState({
      fiveContacts: byPopularity
    })
  }

  removeActor = (i) => {
    let remove = [...this.state.fiveContacts];
    remove.splice(i,1);
    this.setState({
      fiveContacts: remove
    })
  }
  
 





  
  render() {
    return (
      <div className="App">
        <h1>Table</h1>
        <button onClick={() => this.addActor()}>Add Random Actor</button>
        <button onClick={() => this.sortByName()}>Sort By Name</button>
        <button onClick={() => this.sortByPopularity()}>Sort By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
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
