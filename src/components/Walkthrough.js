import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Step from './Step'

export class Walkthrough extends Component {
  constructor(props){
    super(props);
    this.stepIndex = 0
  }

  handleNextStep = () => {
    this.stepIndex = this.stepIndex + 1
  }

  render() {
    return (
      <div>
        <h2>Method:</h2>
        <p>
          <Step key={this.stepIndex} stepNumber={this.stepIndex + 1} stepContent={this.props.walkthrough[this.stepIndex]}/>
          {/* { this.props.walkthrough.map((step) => (
            <Step key={this.props.walkthrough.indexOf(step)} stepNumber={this.props.walkthrough.indexOf(step) + 1} stepContent={step} />
          ))} */}
        </p>
        <button onClick={this.handleNextStep}>Next Step</button>
        { console.log(this.stepIndex)}
      </div>
    )
  }
}

// be good to add prop types checker when possible
//PropTypes
Walkthrough.propTypes = {
    walkthrough: PropTypes.string.isRequired
  }


export default Walkthrough


