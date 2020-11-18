import React, { Component } from 'react'

export class CompletedButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false
    };    
    this.completed= this.completed.bind(this);
    
  }


  completed() {
    this.setState({
      complete: !this.state.complete
    })
  }


  render() {
    return (
      <div class="completed-button">
        <button onClick={this.completed} >{this.state.complete ? "Certainly!" : "Working on it...."}</button>
      </div>
    )
  }
}

export default CompletedButton
