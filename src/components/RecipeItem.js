import React, { Component } from 'react'
import PropTypes from 'prop-types';

import VolumeForm from './VolumeForm';

export class RecipeItem extends Component {
  handleClickTitle = () => {
    this.props.sendData(this.props.recipe.title)
  }

  handleClickOffTitle = () => {
    this.props.sendData(null)
  }

  //insert item here for clicking off the title - to remove the Details 
  
  render() {
    return (this.props.recipe.title === this.props.currentRecipe) ? 
    <div style={formStyle}>
      {this.props.currentRecipe}
      <VolumeForm recipe={this.props.recipe}/>
    </div> :
    <div style={titleBtnStyle}>
      <button onClick={this.handleClickTitle}>{this.props.recipe.title}</button>
    </div>;
  }
}

//PropTypes
RecipeItem.propTypes = {
  recipeProp: PropTypes.object.isRequired
}

const formStyle = {
  position: 'absolute',
  width: '50%',
  margin: '0 auto',
  top: '150px',
  left: '400px',
}

const titleBtnStyle = {
  position: 'relative',
  padding: '10px',
  width: '350px'

}

export default RecipeItem
