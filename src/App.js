import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Paul', age: 30 },
      { name: 'Max', age: 29 },
      { name: 'Emily', age: 26 }
    ]
  }

  switchNameHandler = () => {
    // console.log('Was clicked');
    // DO NOT DO THIS this.state.persons[0].name = "Pauly";
    this.setState({
      persons: [
      { name: 'Pauly', age: 30 },
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
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}></Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
      );
      //return React.createElement('div', { className: "App" }, React.createElement('h1', { className: "Appchild"}, 'Does this work now?'))
  }
}

export default App;
