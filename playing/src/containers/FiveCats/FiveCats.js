import React, { Component } from 'react';
import './Five.css';
import catFive from '../../photos/cat5.jpg';
import catFour from '../../photos/cat4.jpg';
import catThree from '../../photos/cat3.jpg';
import catTwo from '../../photos/cat2.jpg';
import catOne from '../../photos/cat1.jpg';

class FiveCats extends Component {
  state = {
      catOney: 0,
      catTwoy: 0,
      catThreey: 0,
      catFoury: 0,
      catFivey: 0
}

  addOne  = () => {
    console.log(this.state.target)
    let updatedCat1 = this.state.catOney + 1
    this.setState({ catOney: updatedCat1 })
  }
  addTwo = () => {
    let updatedCat2 = this.state.catTwoy + 1
    this.setState({ catTwoy: updatedCat2 })
  }
  addThree = () => {
    let updatedCat3 = this.state.catThreey + 1
    this.setState({ catThreey: updatedCat3 })
  }
  addFour = () => {
    let updatedCat4 = this.state.catFoury + 1
    this.setState({ catFoury: updatedCat4 })
  }
  addFive = () => {
    let updatedCat5 = this.state.catFivey + 1
    this.setState({ catFivey: updatedCat5 })
  }

  render () {
    return (
  <div>
   <a onClick={this.addOne}><img className="photoWidth" alt="catFive" src={catFive} />{this.state.catOney}</a>
   <a onClick={this.addTwo}><img className="photoWidth" src={catFour} alt="catFour" />{this.state.catTwoy}</a>
   <a onClick={this.addThree}><img className="photoWidth" src={catTwo} alt="catTwo" />{this.state.catThreey}</a>
   <a onClick={this.addFour}><img className="photoWidth" src={catThree} alt="catThree" />{this.state.catFoury}</a>
   <a onClick={this.addFive}><img className="photoWidth" src={catOne} alt="catOne" />{this.state.catFivey}</a>
  </div>
);
}
}
export default FiveCats;
