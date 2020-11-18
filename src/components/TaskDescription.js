import React, { Component } from 'react'

export class TaskDescription extends Component {
  
  showButton() {
    if(this.props.task.info !== null ) {
    return<button type="button" class="help-button" data-toggle="tooltip" data-placement="top" title= {this.props.task.info} > ? </button>
  }
}
  render() {
    return <p>{this.props.task.description}{'\n'}{this.showButton()}</p>
  }
}

export default TaskDescription
