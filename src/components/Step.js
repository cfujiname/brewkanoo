import React, { Component } from 'react'
import CompletedButton from './CompletedButton'
import TaskDescription from './TaskDescription'
import { Timer } from 'react-countdown-clock-timer'
import TaskDetails from './TaskDetails'


export class Step extends Component {

  timer() {
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
        <table class="stepTable">
          <tr class="tableHeadings">
            <th>Task</th>
            <th>Details</th>
            <th>Completed?</th>
          </tr>
          <tr class="stepTableData">
            <td>{this.taskDescription()}</td>
            <td>{this.taskDetails()}</td>
            <td>{this.completedButton()}</td>
            {this.timer()}
            </tr>
        </table>
      </div>
    )
  }

  taskDescription() {
    return this.props.stepContent.map((task) => (
      <TaskDescription task={task} />
    ))
  }

  taskDetails() {
    return this.props.stepContent.map((task) => (
      <TaskDetails task={task} specs={this.props.specs} stepNumber={this.props.stepNumber} batchSize={this.props.batchSize} ingredients={this.props.ingredients}/>
    ))
  }

  completedButton() {
    return this.props.stepContent.map((task) => (
      <CompletedButton />
    ))
  }
}

export default Step
