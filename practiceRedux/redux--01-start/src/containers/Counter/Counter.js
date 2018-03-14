import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 5 } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 5 } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onIncrementDecrementer}  />
                <CounterControl label="Add 5" clicked={this.props.onIncrementAddFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.onDecrementFive}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    onIncrementDecrementer: () => dispatch({type: 'DECREMENT'}),
    onIncrementAddFive: () => dispatch({type: 'ADD'}),
    onDecrementFive: () => dispatch({type: 'SUBTRACT'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
