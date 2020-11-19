import React, { Component } from 'react'
import CompletedButton from './CompletedButton'
import TaskDescription from './TaskDescription'
import { Timer } from 'react-countdown-clock-timer'
import TaskDetails from './TaskDetails'


export class Step extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startGravity: 1.050 , endGravity: 1.010
    };
    this.handleStartGravityChange = this.handleStartGravityChange.bind(this)
    this.handleEndGravityChange = this.handleEndGravityChange.bind(this)
  }

  timer() {
    return this.props.stepContent[0].time? <div className='timer-container'>
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
            <th class="taskColumn">Task</th>
            <th class="detailsColumn">Details</th>
            <th class="completedColumn">Completed?</th>
          </tr>
          <tr class="stepTableData">
            <td>{this.taskDescription()}</td>
            <td>{this.taskDetails()}</td>
            <td>{this.completedButton()}</td>
            </tr>
        </table>
        {this.timer()}
        <div class="abv"> {this.props.stepNumber === 9 ? this.formatABVForm() : null }</div>
      </div>
    )
  }

  formatABVForm() {
    return (
      <div>
        <form>
          <div>
            <label><h4>Enter starting hydrometer reading </h4></label>{' '}
            <input type="number" step='0.001' value={this.state.startGravity} placeholder='1.000' onChange={this.handleStartGravityChange}></input>
          </div>
          <div>
            <label> <h4>Enter final hydrometer reading </h4></label>{' '}
            <input type="number" step='0.001' value={this.state.endGravity} placeholder='1.000' onChange={this.handleEndGravityChange}></input>
          </div>
        </form>
        <p class="abv-result" >{((this.state.startGravity - this.state.endGravity) * 131.25).toFixed(1)}%ABV</p>
      </div>
    )
  }

  handleStartGravityChange(event) {
    this.setState({startGravity: event.target.value})
  }
  
  handleEndGravityChange(event) {
    this.setState({endGravity: event.target.value})
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
    return this.props.stepContent.map(() => (
      <CompletedButton stepNumber={this.props.stepNumber}/>
    ))
  }
}

export default Step
