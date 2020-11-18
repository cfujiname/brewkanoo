import React, { Component } from 'react'
import Task from './Task'
import { Timer } from 'react-countdown-clock-timer'

export class Step extends Component {

  timer() {
   console.log(this.props.stepContent[0])
    return this.props.stepContent[0].time !== 0 ? <div className='timer-container'>
     <Timer
     durationInSeconds={this.props.stepContent[0].time}
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
        Step {this.props.stepNumber} <br>
        </br>
        <table class="stepTable">
          <tr>
            <th>Task</th>
            <th>Details</th>
            <th>Completed?</th>
          </tr>
          <tr>    
            {this.tasks()}
            {this.timer()}
          </tr>
        </table>
      </div>
    )
  }

  tasks() {
    return this.props.stepContent.map((task) => (
      <Task task={task} specs={this.props.specs} stepNumber={this.props.stepNumber} batchSize={this.props.batchSize} ingredients={this.props.ingredients}/>
    ))
  }
}

export default Step
