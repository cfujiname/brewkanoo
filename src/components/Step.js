import React, { Component } from 'react'

export class Step extends Component {
  render() {
    return (
      <div>
        <p>{this.props.stepNumber}: {this.props.stepContent}</p>
      </div>
    )
  }
}

export default Step
