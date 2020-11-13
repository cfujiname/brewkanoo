import React, { Component } from 'react'
import Walkthrough from './Walkthrough';
import Ingredients from './Ingredients';
import Equipment from './Equipment';

export class VolumeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {showDetails: false, potVolume: 25};

    this.onSubmit = this.onSubmit.bind(this);
    this.handlePotVolumeChange = this.handlePotVolumeChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      showDetails: true
    })
  }

  handlePotVolumeChange(event) {
    this.setState({
      potVolume: event.target.value
    })
  }

  render() {
    let details = <div>
                    <Walkthrough key={this.props.recipe.id} walkthrough={this.props.recipe.walkthrough} potVolume={this.state.potVolume}/>
                    <Ingredients key={this.props.recipe.id} ingredients={this.props.recipe.ingredients}/>
                    <Equipment key={this.props.recipe.id} equipment={this.props.recipe.equipment}/>
                  </div>
    return (
      <div>
        <form >
          <label>
            Boiling water pot volume:
            <input type="number" name="pot-volume" value={this.state.potVolume} onChange={this.handlePotVolumeChange}/>
          </label>
          <input onClick={this.onSubmit} type="submit" value="Submit" />
        </form>
        {this.state.showDetails ? details : null} 
      </div>
    )
  }
}

export default VolumeForm;
