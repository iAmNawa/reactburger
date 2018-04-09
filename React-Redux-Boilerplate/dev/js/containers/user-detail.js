import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {

  render() {

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
