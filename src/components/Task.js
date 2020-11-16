import toJson from 'enzyme-to-json';
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
    } else if (this.props.stepNumber === 7) {
      return this.step7();
    } else if (this.props.stepNumber === 8) {
      return this.step8();
    } else if (this.props.stepNumber === 9) {
      return this.step9();
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
            <td>{this.props.task.description}</td>
            <td>{this.formatStrikeWater(this.props.task.strikeWater)} {this.formatMashTemp(this.props.specs.mashTemp)} {this.formatGrains()}</td>
            <td>{this.formatCompleted()}</td>
          </tr>
        </table>
        <button onClick={this.completed}>{this.state.complete ? "Uncomplete" : "Complete"}</button>
      </div>
    )
  }

  step2() {
    return (
      <div>
        <table>
          <tr>
            <th>Task</th>
            <th>Details</th>
            <th>Completed</th>
          </tr>
          <tr>
            <td>{this.props.task.description}</td>
            <td>{this.formatSpargeWater(this.props.task.spargeWater)}</td>
            <td>{this.formatCompleted()}</td>
          </tr>
        </table>
        <button onClick={this.completed}>{this.state.complete ? "Uncomplete" : "Complete"}</button>
      </div>
    )
  }
  
  step3() {
    return (
      <div>
        <table>
          <tr>
            <th>Task</th>
            <th>Details</th>
            <th>Completed</th>
          </tr>
          <tr>
            <td>{this.props.task.description}</td>
            <td></td>
            <td>{this.formatCompleted()}</td>
          </tr>
        </table>
        <button onClick={this.completed}>{this.state.complete ? "Uncomplete" : "Complete"}</button>
      </div>
    )
  }

  step4() {
    return (
      <div>
        <table>
          <tr>
            <th>Task</th>
            <th>Details</th>
            <th>Completed</th>
          </tr>
          <tr>
            <td>{this.props.task.description}</td>
            <td>{this.formatBitteringHops()}</td>
            <td>{this.formatCompleted()}</td>
          </tr>
        </table>
        <button onClick={this.completed}>{this.state.complete ? "Uncomplete" : "Complete"}</button>
      </div>
    )
  }

  formatGrains() {
    if (this.props.task.description.includes("grain")) {
      return this.props.ingredients.grains.map(grain => {
        return (<p>{grain.item}, {grain.quantity} kg </p>)
      })


      // for (let i = 0; i < this.props.ingredients.grains.length; i++) {
      //   return (this.props.ingredients.grains[i].item + " , " + this.props.ingredients.grains[i].quantity.toString() + " kg")
      // }
    }
  }

  formatBitteringHops(){

    if (this.props.task.description.includes("Weigh")) {
      return this.props.ingredients.hops.map(hop => {
        if (hop.type === "Bittering"){
          return (<p>{hop.item},  {hop.quantity} g </p>)
        }
    
      })
    }

    }



  formatStrikeWater(volume) {
    if (this.props.task.description.includes("strike")) {
      return volume.toString() + " Litres"
    }
  }

  formatSpargeWater(volume) {
    if (this.props.task.description.includes("sparge")) {
      return volume.toString() + " Litres"
    }
  }

  formatMashTemp(temp) {
    if (this.props.task.description.includes("water")) {
      temp += 8
      return temp.toString() + " degrees C "
    }
  }

  

  step5() {
      return this.props.description
  }

  step6() {
      return this.props.description
  }
}

export default Task
