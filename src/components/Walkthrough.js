import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Step from './Step'

export class Walkthrough extends Component {
  constructor(props){
    super(props);
    this.state = { counter: 0 } //stepIndex = 0
  }

  handleNextStep = () => {
      if (this.state.counter < this.props.walkthrough.length - 1) {
    this.setState(prev => ({ counter: prev.counter + 1 }));
      } 
    //this.stepIndex = this.stepIndex + 1
  }
  handlePreviousStep = () => {
      if (this.state.counter > 0)
    this.setState(prev => ({ counter: prev.counter  - 1 }));
  }

  render() {
    return (
      <span>
        <h2>Method:</h2>
          {console.log(this.state.counter)}
          <Step stepNumber={this.state.counter + 1} stepContent={this.props.walkthrough[this.state.counter]}/>
        <button onClick={this.handlePreviousStep}>Previous Step</button>
        <button onClick={this.handleNextStep}>Next Step</button>
      </span>
    )
  }
}

// be good to add prop types checker when possible
//PropTypes
// Walkthrough.propTypes = {
//     walkthrough: PropTypes.string.isRequired
//   }


export default Walkthrough


