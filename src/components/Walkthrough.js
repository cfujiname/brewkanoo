import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Step from './Step'
import Timer from './Timer'

export class Walkthrough extends Component {
  constructor(props){
    super(props);
    this.state = { counter: 0, start: false} 
  }
  /* istanbul ignore next */
  handleNextStep = () => {
      if (this.state.counter < this.props.walkthrough.length - 1) {
    this.setState(prev => ({ counter: prev.counter + 1 }));
      } 
  }
  /* istanbul ignore next */
  handlePreviousStep = () => {
      if (this.state.counter > 0)
    this.setState(prev => ({ counter: prev.counter  - 1 }));
  }
  /* istanbul ignore next */
  startTimer() {
    this.setState({ start: true })
  }

  timer() {
    if (this.props.walkthrough[this.state.counter].time !== 0) {
      return <Timer timerStart={this.props.walkthrough[this.state.counter].time}/> 
    } else {
      return null
    }
  }

  render() {
    return (
      <div>
        <h2>Method:</h2>
          <Step key={this.state.counter} stepNumber={this.state.counter + 1} stepContent={this.props.walkthrough[this.state.counter]} strikeWater={this.props.potVolume} />  
        <button onClick={this.handlePreviousStep}>Previous Step</button>
        <button onClick={this.handleNextStep} >Next Step</button>
        {this.timer()}   
      </div>
    )
  }
}

export default Walkthrough


