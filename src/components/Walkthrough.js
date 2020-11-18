import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import Step from './Step'
import { ProgressBar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
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
      console.log(this.props.walkthrough[this.state.counter].time)
      return this.props.walkthrough[this.state.counter][this.state.counter].time !== 0 ? <div className='timer-container'>
       <Timer
       durationInSeconds={this.props.walkthrough[this.state.counter].time}
       formatted={false}
       isPaused={true}
       showPauseButton={true}
          showResetButton={true}
          onPause = {(remainingDuration)=> {
        console.log('Triggered when the timer is paused', remainingDuration)
      }}
       onFinish = {()=> {
        console.log('Triggered when the timer finishes')
      }}
       />
     </div> : null;

  }

  render() {
    if(this.state.counter < this.props.walkthrough.length - 1){
    return (
      <div className='steps' style={steps}>
        <h2>Method:</h2>
        <Step key={this.state.counter} stepNumber={this.state.counter + 1} stepContent={this.props.walkthrough[this.state.counter]} batchSize={this.props.batchSize} specs={this.props.specs} ingredients={this.props.ingredients}/>
        <button onClick={this.handlePreviousStep}>Previous Step</button>
        <button onClick={this.handleNextStep} >Next Step</button>  
        {console.log(this.state.counter)}

        {console.log(this.props.walkthrough.length)}
        
        <ProgressBar variant="success" animated now={((100 / ((this.props.walkthrough.length - 1) * (this.props.walkthrough.length - 1)) * (this.props.walkthrough.length - 1)) * this.state.counter)} /> 
      </div>)
    }else{
      return (
        <div className='steps' style={steps}>
        <h2>Method:</h2>
        <Step key={this.state.counter} stepNumber={this.state.counter + 1} stepContent={this.props.walkthrough[this.state.counter]} batchSize={this.props.batchSize} specs={this.props.specs} ingredients={this.props.ingredients}/>
        <button onClick={this.handlePreviousStep}>Previous Step</button>
        
          <ProgressBar variant="success" animated now={((100 / ((this.props.walkthrough.length - 1) * (this.props.walkthrough.length - 1)) * (this.props.walkthrough.length - 1)) * this.state.counter)} /> 
      </div>)
    }
  }
}

const steps = {
  position: 'relative',
  margin: '0',
  width: '800px'
}
export default Walkthrough


