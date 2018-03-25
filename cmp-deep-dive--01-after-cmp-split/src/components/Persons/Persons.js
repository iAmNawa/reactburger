import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] inside constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] inside componentWillMount', this.props);
  }

  componentDidMount() {
    console.log('[Persons.js] inside componentDidMount', this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Update Persons.js] inside componentWillReceiveProps', nextProps);
  }

  render() {
    console.log('[Persons.js] inside render', this.props);
    return this.props.persons.map( ( person, index ) => {
      return <Person
        click={() => this.props.clicked( index )}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={( event ) => this.props.changed( event, person.id )} />
    } );
  }
}

export default Persons;
