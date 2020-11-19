
import React, { Component } from 'react';

import Alert from 'react-bootstrap/Alert'

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

    if (this.props.stepNumber !== 9) {
      return (
        <div class="completed-button">
        
          <button onClick={this.completed} >{this.state.complete ? "Certainly" : "Working on it...."}</button>
        </div>
      )
    } else {
      return (
        <div class="completed-button">
        
          <button onClick={this.completed} >{this.state.complete ? <Alert.Heading>Well done - Enjoy your beer!</Alert.Heading> : "Working on it...."}</button>
        </div>
      )
      
    }

  }
}

export default CompletedButton
