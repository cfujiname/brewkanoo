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
        {console.log(this.whichStep())}
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
    var a = this.formatStrikeWater(this.props.task.strikeWater)
    var b = this.formatMashTemp(this.props.specs.mashTemp)
    var c = this.formatGrains()
    return this.formatTable(a, b, c)
  }

  step2() {
    return this.formatTable(this.formatSpargeWater(this.props.task.spargeWater))
  }
  
  step3() {
    return this.formatTable()
  }

  step4() {
    return this.formatTable(this.formatBitteringHops())
  }

  step5() {
    return this.formatTable(this.formatFlavouringHops())
  }

  step6() {
    return this.formatTable(this.formatAromaHops())
  }

  step7() {
    return this.formatTable()
  }

  step8() {
    return this.formatTable()
  }

  step9() {
    return this.formatTable()
  }

  formatTable(details, details2=null, details3=null) {
    return (
      <div class="table">
        <table class="inner">
          <tr>
            <th>Task</th>
            {details ? <th>Details</th> : null}
            <th>Completed</th>
          </tr>
          <tr>
            <td>{this.props.task.description}</td>
            {details ? <td>{details}{details2}{details3}</td> : null}
            <td>{this.formatCompleted()}</td>
          </tr>
        </table>
        <button onClick={this.completed} class="inner">{this.state.complete ? "Uncomplete" : "Complete"}</button>
      </div>
    )
  }

  formatGrains() {
    if (this.props.task.description.includes("grain")) {
      return this.props.ingredients.grains.map(grain => {
        return (<p>{grain.item}, {grain.quantity} kg</p>)
      })
    }
  }

  formatBitteringHops() {
    if (this.props.task.description.includes("Weigh")) {
      return this.props.ingredients.hops.map(hop => {
        if (hop.type === "Bittering") {
          return (<p>{hop.item}, {hop.quantity} g</p>)
        }
      })
    }
  }

  formatFlavouringHops() {
    if (this.props.task.description.includes("Weigh")) {
      return this.props.ingredients.hops.map(hop => {
        if (hop.type === "Flavouring") {
          return (<p>{hop.item}, {hop.quantity} g</p>)
        }
      })
    }
  }

  formatAromaHops() {
    if (this.props.task.description.includes("Weigh")) {
      return this.props.ingredients.hops.map(hop => {
        if (hop.type === "Aroma") {
          return (<p>{hop.item}, {hop.quantity} g</p>)
        }
      })
    }
  }

  formatStrikeWater(volume) {
    if (this.props.task.description.includes("water")) {
      return (<p>{volume.toString()} Litres</p>)
    }
  }

  formatSpargeWater(volume) {
    if (this.props.task.description.includes("sparge")) {
      return (<p>{volume.toString()} Litres</p>)
    }
  }

  formatMashTemp(temp) {
    if (this.props.task.description.includes("water")) {
      temp += 8
      return (<p>{temp.toString()} degrees C</p>)
    }
  }
}

export default Task
