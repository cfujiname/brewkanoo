import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import Step from './Step'
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Timer } from 'react-countdown-clock-timer'

export class Walkthrough extends Component {
  constructor(props){
    super(props);
    this.state = { counter: 0, start: false } 
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

  timer() {
      return this.props.walkthrough[this.state.counter][this.state.counter].time !== 0 ? <div className='timer-container'>
       <Timer
       durationInSeconds={this.props.walkthrough[this.state.counter].time}
       formatted={false}
       isPaused={true}
       showPauseButton={true}
          showResetButton={true}
          onPause = {(remainingDuration)=> {
      }}
       onFinish = {()=> {
      }}
       />
     </div> : null;

  }

  render() {
    if(this.state.counter < this.props.walkthrough.length - 1){
    return (
      <div className='steps'>
        <h2>Method: Step {this.state.counter + 1}</h2>
        <Step key={this.state.counter} stepNumber={this.state.counter + 1} stepContent={this.props.walkthrough[this.state.counter]} batchSize={this.props.batchSize} specs={this.props.specs} ingredients={this.props.ingredients}/>
        <div class="walkthrough-buttons">
        <button class="previous" onClick={this.handlePreviousStep}>Previous Step</button>
          <button onClick={this.handleNextStep} >Next Step</button> 
          </div>  
        <div>
        <ProgressBar variant="success" animated now={((100 / ((this.props.walkthrough.length - 1) * (this.props.walkthrough.length - 1)) * (this.props.walkthrough.length - 1)) * this.state.counter)} /> 
        </div>
      </div>)
    }else{
      return (
        <div className='steps'>
        <h2>Method: Step {this.state.counter + 1}</h2>
        <Step key={this.state.counter} stepNumber={this.state.counter + 1} stepContent={this.props.walkthrough[this.state.counter]} batchSize={this.props.batchSize} specs={this.props.specs} ingredients={this.props.ingredients}/>
        <div class="walkthrough-buttons">
            <button onClick={this.handlePreviousStep}>Previous Step</button>
          </div>
          <div>
            <ProgressBar variant="success" animated now={((100 / ((this.props.walkthrough.length - 1) * (this.props.walkthrough.length - 1)) * (this.props.walkthrough.length - 1)) * this.state.counter)} /> 
            </div>
      </div>)
    }
  }
}


export default Walkthrough


