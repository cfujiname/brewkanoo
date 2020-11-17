import React, { Component } from 'react'
import Walkthrough from './Walkthrough';
import Ingredients from './Ingredients';
import Equipment from './Equipment';

export class VolumeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {showDetails: false, potVolume: 25, showForm: true, showWalkthrough: true, showIngredients: false, showEquipment: false};

    this.onSubmit = this.onSubmit.bind(this);
    this.handlePotVolumeChange = this.handlePotVolumeChange.bind(this);
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

  handlePotVolumeChange(event) {
    this.setState({
      potVolume: event.target.value
    })
    
  }

  render() {
    let details = <div style={barStyle}>
                    <button onClick={this.handleClickWalkthrough}>Walkthrough</button>
                    <button onClick={this.handleClickIngredients}>Ingredients</button>
                    <button onClick={this.handleClickEquipment}>Equipment</button>
                    {this.state.showWalkthrough ? <Walkthrough key={this.props.recipe.id} walkthrough={this.props.recipe.walkthrough} potVolume={this.state.potVolume} specs={this.props.recipe.specs} ingredients={this.props.recipe.ingredients}/> : null }
                    {this.state.showIngredients ? <Ingredients key={this.props.recipe.id} ingredients={this.props.recipe.ingredients}/> : null }
                    {this.state.showEquipment ? <Equipment key={this.props.recipe.id} equipment={this.props.recipe.equipment}/> : null }
                  </div>
    let form =  <form >
                  <label>
                    Boiling water pot volume:
                    <input type="number" name="pot-volume" value={this.state.potVolume} onChange={this.handlePotVolumeChange}/>
                  </label>
                  <input onClick={this.onSubmit} type="submit" value="Submit" />
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
  margin: '0',
  width: '500px'
}

export default VolumeForm;
