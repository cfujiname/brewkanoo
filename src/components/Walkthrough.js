import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Step from './Step'
import Timer from './Timer'

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
    if (this.props.walkthrough[this.state.counter].time !== 0) {
      return (
        <div>
          <h2>Method:</h2>
          <p>
            {console.log(this.state.counter)}
            <Step key={this.state.counter} stepNumber={this.state.counter + 1} stepContent={this.props.walkthrough[this.state.counter].description} />
          
          </p>
          <button onClick={this.handlePreviousStep}>Previous Step</button>
          <button onClick={this.handleNextStep}>Next Step</button>
          <Timer startTime={this.props.walkthrough[this.state.counter.time]} />
        </div>
      )
    } else {
      return (
        <div>
          <h2>Method:</h2>
          <p>
            {console.log(this.state.counter)}
            <Step key={this.state.counter} stepNumber={this.state.counter + 1} stepContent={this.props.walkthrough[this.state.counter].description} />
          
          </p>
          <button onClick={this.handlePreviousStep}>Previous Step</button>
          <button onClick={this.handleNextStep}>Next Step</button>
        </div>
      )
    }

  }
}

// be good to add prop types checker when possible
//PropTypes
// Walkthrough.propTypes = {
//     walkthrough: PropTypes.string.isRequired
//   }


export default Walkthrough


