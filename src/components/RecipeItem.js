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
    <div className='hideButton' style={hideBtnStyle}>
      <button onClick={this.handleClickOffTitle}>Hide</button>
      <VolumeForm recipe={this.props.recipe}/>
    </div> :
    <div style={linusStyle}>
      <button onClick={this.handleClickTitle}>{this.props.recipe.title}</button>
    </div>;
  }
}

//PropTypes
RecipeItem.propTypes = {
  recipeProp: PropTypes.object.isRequired
}

const hideBtnStyle = {
  margin: '0',
  position: 'relative',
  top: '150px',
  left: '15px',
}

const linusStyle = {
  position: 'relative',
  top: '250px',
  left: '15px',
}

export default RecipeItem
