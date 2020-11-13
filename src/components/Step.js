import React, { Component } from 'react'

export class Step extends Component {
  render() {
    return (
      <div>
        {this.props.stepNumber}: {this.props.stepContent.description}: {this.props.strikeWater}
      </div>
    )
  }
}

export default Step
