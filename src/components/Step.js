import React, { Component } from 'react'
import Task from './Task'

export class Step extends Component {

  render() {
    return (
      <div>
        Step {this.props.stepNumber} <br>
        </br>
        {this.tasks()}
      </div>
    )
  }

  tasks() {
    return this.props.stepContent.map((task) => (
      <Task task={task} specs={this.props.specs} stepNumber={this.props.stepNumber} ingredients={this.props.ingredients}/>
    ))
  }
}

export default Step
