import React, { Component } from 'react'
import Walkthrough from './Walkthrough';
import Ingredients from './Ingredients';
import Equipment from './Equipment';

export class VolumeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {showDetails: false, batchSize: 25, showForm: true, showWalkthrough: true, showIngredients: false, showEquipment: false};

    this.onSubmit = this.onSubmit.bind(this);
    this.handleBatchSizeChange = this.handleBatchSizeChange.bind(this);
    this.handleClickShowForm = this.handleClickShowForm.bind(this);
    this.handleClickWalkthrough = this.handleClickWalkthrough.bind(this);
    this.handleClickIngredients = this.handleClickIngredients.bind(this);
    this.handleClickEquipment = this.handleClickEquipment.bind(this);
  }

  handleClickWalkthrough() {
    this.setState({
      showWalkthrough: true,
      showIngredients: false,
      showEquipment: false
    })
  }

  handleClickIngredients() {
    this.setState({
      showWalkthrough: false,
      showIngredients: true,
      showEquipment: false
    })
  }

  handleClickEquipment() {
    this.setState({
      showWalkthrough: false,
      showIngredients: false,
      showEquipment: true
    })
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      showDetails: true,
      showForm: !this.state.showForm
    })
  }

  handleClickShowForm() {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  handleBatchSizeChange(event) {
    this.setState({
      batchSize: event.target.value
    })
    
  }

  render() {
    let details = <div style={barStyle}>
                    <button onClick={this.handleClickWalkthrough}>Walkthrough</button>
                    <button onClick={this.handleClickIngredients}>Ingredients</button>
                    <button onClick={this.handleClickEquipment}>Equipment</button>
                    {this.state.showWalkthrough ? <Walkthrough key={this.props.recipe.id} walkthrough={this.props.recipe.walkthrough} batchSize={this.state.batchSize} specs={this.props.recipe.specs} ingredients={this.props.recipe.ingredients}/> : null }
      {this.state.showIngredients ? <Ingredients key={this.props.recipe.id} ingredients={this.props.recipe.ingredients} batchSize={this.state.batchSize}/> : null }
                    {this.state.showEquipment ? <Equipment key={this.props.recipe.id} equipment={this.props.recipe.equipment}/> : null }
                  </div>
    let form =  <form style={barStyle}>
                  <label>
                    <h2>How thirsty are you?</h2>
                    <h4>
                      Make {' '}
                      <input type="number" min="4" style={textBoxStyle} value={this.state.batchSize} onChange={this.handleBatchSizeChange}/>
                      {' '} Litres
                    </h4>
                  </label>
                  <div style={submitStyle}><input onClick={this.onSubmit} type="submit" value="Submit" /></div>
                </form>
    return (
      <div>
        {this.state.showForm ? form : null}
        {this.state.showDetails ? details : null} 
      </div>
    )
  }
}
const barStyle = {
  position: 'relative',

  textAlign: 'center'
}

const textBoxStyle = {
  position: 'relative',
  textAlign: 'center'
}

const submitStyle = {
  position: 'relative',
  textAlign: 'center'
}

export default VolumeForm;
