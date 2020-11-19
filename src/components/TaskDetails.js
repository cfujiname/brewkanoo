import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';



export class TaskDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startGravity: 1.050 , endGravity: 1.010
    };
    this.handleStartGravityChange = this.handleStartGravityChange.bind(this)
    this.handleEndGravityChange = this.handleEndGravityChange.bind(this)
    this.divisor = this.props.batchSize/25;
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
    return (
      <div>
        {this.formatTable(this.formatPrimingSugar())}
        {this.formatABVForm()}
        {this.state.complete ? <Alert.Heading>Well done - Enjoy your beer!</Alert.Heading> : null }
      </div>
    )
  }

  showButton(){
      if(this.props.task.info !== null ) {
      return<button class="help-button" data-toggle="tooltip" data-placement="top" title={this.props.task.info} > ? </button>
    }
  }

  formatTable(details, details2=null, details3=null) {
    return (
      <div class="taskDetails">
          {details ? <td>{details}{details2}{details3}</td> : null}     
      </div>
    )
  }

  formatABVForm() {
    return (
      <div>
        <form>
          <div>
            <label><h4>Enter starting hydrometer reading </h4></label>{' '}
            <input type="number" step='0.001' value={this.state.startGravity} placeholder='1.000' onChange={this.handleStartGravityChange}></input>
          </div>
          <div>
            <label> <h4>Enter final hydrometer reading </h4></label>{' '}
            <input type="number" step='0.001' value={this.state.endGravity} placeholder='1.000' onChange={this.handleEndGravityChange}></input>
          </div>
        </form>
        <h4>{((this.state.startGravity - this.state.endGravity) * 131.25).toFixed(1)}%ABV</h4>
      </div>
    )
  }

  handleStartGravityChange(event) {
    this.setState({startGravity: event.target.value})
  }
  handleEndGravityChange(event) {
    this.setState({endGravity: event.target.value})
  }

  formatGrains() {
    if (this.props.task.description.includes("grain")) {
      return this.props.ingredients.grains.map(grain => {
        return (<p>{grain.item}, {grain.quantity*this.divisor.toFixed(2)} kg</p>)
      })
    }
  }

  formatPrimingSugar() {
    if (this.props.task.description.includes("bottle")) {
      return (<p>{this.props.ingredients.primingSugar} g of priming sugar per 500mL bottle</p>)
    }
  }

  formatBitteringHops() {
    if (this.props.task.description.includes("Weigh")) {
      return this.props.ingredients.hops.map(hop => {
        if (hop.type === "Bittering") {
          return (<p>{hop.item}, {(hop.quantity*this.divisor).toFixed(2)} g</p>)
        }
      })
    }
  }

  formatFlavouringHops() {
    if (this.props.task.description.includes("Weigh")) {
      return this.props.ingredients.hops.map(hop => {
        if (hop.type === "Flavouring") {
          return (<p>{hop.item}, {(hop.quantity*this.divisor).toFixed(2)} g</p>)
        }
      })
    }
  }

  formatAromaHops() {
    if (this.props.task.description.includes("Weigh")) {
      return this.props.ingredients.hops.map(hop => {
        if (hop.type === "Aroma") {
          return (<p>{hop.item}, {(hop.quantity*this.divisor).toFixed(2)} g</p>)
        }
      })
    }
  }

  formatStrikeWater(volume) {
    if (this.props.task.description.includes("water")) {
      return (<p>{(volume*this.divisor).toFixed(2).toString()} Litres</p>)
    }
  }

  formatSpargeWater(volume) {
    if (this.props.task.description.includes("sparge")) {
      return (<p>{(volume*this.divisor).toFixed(2).toString()} Litres</p>)
    }
  }

  formatMashTemp(temp) {
    if (this.props.task.description.includes("water")) {
      temp += 8
      return (<p>{temp.toString()} degrees C</p>)
    }
  }
}

 

const tableStyle = {
  border: 'none',
  boxShadow: 'none'
}

export default TaskDetails
