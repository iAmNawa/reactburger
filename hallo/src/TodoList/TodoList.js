import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <h1>Fading at Initial Mount</h1>
    </CSSTransitionGroup>
    );
  }
}

export default TodoList;
