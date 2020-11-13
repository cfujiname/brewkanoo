import React, { Component } from 'react'

export class Step extends Component {
  hasStrikeWater() {
    if (this.props.stepContent.strikeWater) {
      return ": " + (this.props.strikeWater * 0.8).toFixed(2) + " Litres"
    }
  }

  render() {
    return (
      <div>
        {this.props.stepNumber}: {this.props.stepContent.description} {this.hasStrikeWater()}
      </div>
    )
  }
}

export default Step
