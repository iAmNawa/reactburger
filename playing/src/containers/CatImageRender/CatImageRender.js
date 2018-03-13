import React, { Component } from 'react';

class CatImageRender extends Component {
  state = {
    pickles: 0
  }

  addMore  = () => {
    this.setState({
      pickles: this.state.pickles + 1
    })
  }

  render () {
      return (
        <div>
          <div
            pickles={this.state.pickles}
           >Pickles: {this.state.pickles}</div>
          <button onClick={this.addMore}>CLICK ME</button>
        </div>
      );
    }
}
 export default CatImageRender;
