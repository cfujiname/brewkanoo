import React, { Component } from 'react'

export class Step extends Component {
  render() {
    return (
      <div>
        {this.props.stepNumber}: {this.props.stepContent}
      </div>
    )
  }
}

export default Step
