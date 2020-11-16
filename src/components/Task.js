import React, { Component } from 'react'

export class Task extends Component {

  constructor(props) {
    super(props);
    this.state = {
      complete: false
    };
    this.completed= this.completed.bind(this);
  }

  render() {
    return (
      <div>
        {this.whichStep()}
      </div>
    )
  }

  whichStep() {
    // rename this method and maybe look into switch to make more DRY
    if (this.props.stepNumber === 1) {
      return this.step1();
    } else if (this.props.stepNumber === 2) {
      return this.step2();
    } else if (this.props.stepNumber === 3) {
      return this.step3();
    } else if (this.props.stepNumber === 4) {
      return this.step4(); 
    } else if (this.props.stepNumber === 5) {
      return this.step5();
    } else if (this.props.stepNumber === 6) {
      return this.step6();
    }
  }

  completed() {
    this.setState({
      complete: !this.state.complete
    })
  }

  formatCompleted() {
    if (this.state.complete) {
      return "Tick"
    } else {
      return "X"
    }
  }

  step1() {
    return (
      <div>
        <table>
          <tr>
            <th>Task</th>
            <th>Details</th>
            <th>Completed</th>
          </tr>
          <tr>
            <td>{this.props.description}</td>
            <td>{this.formatStrikeWater(this.props.strikeWater)} {this.formatMashTemp(this.props.specs.mashTemp)} {this.formatGrains()}</td>
            <td>{this.formatCompleted()}</td>
          </tr>
        </table>
        <button onClick={this.completed}>{this.state.complete ? "Uncomplete" : "Complete"}</button>
      </div>
    )
  }

  formatGrains() {
    if (this.props.description.includes("grain")) {
      for (let i = 0; i < this.props.ingredients.grains.length; i++) {
        return this.props.ingredients.grains[i].item + " , " + this.props.ingredients.grains[i].quantity.toString() + " kg"
      }
    }
  }

  // formatGrain(grain) {
  //   return grain.item + " ," + grain.quantity.toString() + " kg"
  // }

  formatStrikeWater(volume) {
    if (this.props.description.includes("water")) {
      return volume.toString() + " Litres"
    }
  }

  formatMashTemp(temp) {
    if (this.props.description.includes("water")) {
      temp += 8
      return temp.toString() + " degrees C "
    }
  }

  step2() {
    return this.props.description
  }

  step3() {
    return this.props.description
  }

  step4() {
      return this.props.description
  }

  step5() {
      return this.props.description
  }

  step6() {
      return this.props.description
  }
}

export default Task
