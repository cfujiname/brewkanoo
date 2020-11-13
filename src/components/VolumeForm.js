import React, { Component } from 'react'
import Walkthrough from './Walkthrough';
import Ingredients from './Ingredients';
import Equipment from './Equipment';

export class VolumeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {potVolume: 25, showDetails: false};

    this.onSubmit = this.onSubmit.bind(this);
  }

  handleClickTitle = () => {
    this.setState({
      showDetails: true
    })
  }

  handleClickOffTitle = () => {
    this.setState({
      
      showDetails: false
      
    })
  }


  onSubmit(event) {
    event.preventDefault();
    this.setState({
     showDetails: true
    })
    console.log(this.state.potVolume)
  }

  render() {
    return (
      <div>
        <form >
          <label>
            Boiling water pot volume:
            <input type="number" name="pot-volume" />
          </label>
          <input onClick={this.onSubmit} type="submit" value="Submit" />
        </form>
        {this.state.showDetails ? <Walkthrough key={this.props.recipe.id} walkthrough={this.props.recipe.walkthrough} /> : null} 
          
           {/* <Ingredients key={this.props.recipeProp.id} ingredients={this.props.recipeProp.ingredients}/>
           <Equipment key={this.props.recipeProp.id} equipment={this.props.recipeProp.equipment}/> : null} */}
     
      </div>
    )
  }
}

export default VolumeForm;
