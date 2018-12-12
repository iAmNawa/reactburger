import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { styleOne: {}, styleTwo: {} };

  onMouseMove = (event) => {
    function transform(offset) {
    const cos = Math.cos(offset);
    const sin = Math.sin(offset);
    return { transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)` };
    }

    this.setState({
      styleOne: transform(-event.clientX / event.clientY),
      styleTwo: transform(event.clientX / event.clientY)
    })
  }

  render() {
    return (
      <div className="App">
        <div onMouseMove={this.onMouseMove}>
          <div className="panel" style={this.state.styleOne} />
          <div className="panel" style={this.state.styleTwo} />
       </div>
      </div>
    );
  }
}

export default App;
