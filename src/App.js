import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Paul', age: 30 },
      { name: 'Max', age: 29 },
      { name: 'Emily', age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DO NOT DO THIS this.state.persons[0].name = "Pauly";
    this.setState({
      persons: [
      { name: newName, age: 30 },
      { name: 'Max', age: 29 },
      { name: 'Emily', age: 29 }
    ]
    })
  }

  render() {
   return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('PaulyOne')}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'PaulyTwo')}>Hobbies: coding</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
      );
      //return React.createElement('div', { className: "App" }, React.createElement('h1', { className: "Appchild"}, 'Does this work now?'))
  }
}

export default App;
