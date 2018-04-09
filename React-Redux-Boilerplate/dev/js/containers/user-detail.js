import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {

  render() {
    if(!this.props.user) {
      return (<h2>Select a user...</h2>)
    }
    return (
      <div>
        <div>{this.props.user.first}</div>
        <div>{this.props.user.last}</div>
        <div>{this.props.user.age}</div>
        <div>description: {this.props.user.description}</div>
      </div>
    );
  }
}

  function mapStateToProps(state) {
    return {
      user: state.activeUser
    }
  }

export default connect(mapStateToProps)(UserDetail);
