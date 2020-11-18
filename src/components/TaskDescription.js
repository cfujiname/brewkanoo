import React, { Component } from 'react'

export class TaskDescription extends Component {
  render() {
    return <p>{this.props.task.description}</p>
  }
}

export default TaskDescription
