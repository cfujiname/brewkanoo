import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Step from './Step'
//import Timer from './Timer'
import { Timer } from 'react-countdown-clock-timer'

export class Walkthrough extends Component {
  constructor(props){
    super(props);
    this.state = { counter: 0, start: false} 
  }

  handleNextStep = () => {
      if (this.state.counter < this.props.walkthrough.length - 1) {
    this.setState(prev => ({ counter: prev.counter + 1 }));
      } 
  }
  handlePreviousStep = () => {
      if (this.state.counter > 0)
    this.setState(prev => ({ counter: prev.counter  - 1 }));
  }
  startTimer() {
    this.setState({ start: true })
  }

  // timer() {
  //   return this.props.walkthrough[this.state.counter].time !== 0 ?
  //      <Timer timerStart={this.props.walkthrough[this.state.counter].time}></Timer> : null
    
  // }

  timer() {
      console.log(this.props.walkthrough[this.state.counter].time)
      return this.props.walkthrough[this.state.counter][this.state.counter].time !== 0 ? <div className='timer-container'>
       <Timer
       durationInSeconds={this.props.walkthrough[this.state.counter].time}
       formatted={false}
       isPaused={true}
       showPauseButton={true}
       showResetButton={true}
       />
     </div> : null;

  }

  render() {
    return (
      <div>
        <h2>Method:</h2>
        <Step key={this.state.counter} stepNumber={this.state.counter + 1} stepContent={this.props.walkthrough[this.state.counter]} potVolume={this.props.potVolume} specs={this.props.specs} ingredients={this.props.ingredients}/>  
        <button onClick={this.handlePreviousStep}>Previous Step</button>
        <button onClick={this.handleNextStep} >Next Step</button>  
        {/* {this.timer()}  */}
      </div>
    )
  }
}

export default Walkthrough


