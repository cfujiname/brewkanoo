import React, { Component } from 'react'

export class TaskDescription extends Component {
  constructor(props){
    super(props);
    this.state = { 
      showHelp: false
    } 
    this.handleClickHelp = this.handleClickHelp.bind(this)
  }

  handleClickHelp() {
    this.setState({
      showHelp: !this.state.showHelp
    })
  }
  
  showButton() {
    if(this.props.task.info !== null ) {
      return (
        <div>
          <button type="button" class="help-button" data-toggle="tooltip" data-placement="top" onClick={this.handleClickHelp} onClicktitle={this.props.task.info} > ? </button>
          {this.state.showHelp === true ? <div class="help-info">{this.props.task.info}</div> : null}
        </div>
      )
    }
  }
  render() {
    return <p>{this.props.task.description}{'\n'}{this.showButton()}</p>
  }
}

export default TaskDescription
