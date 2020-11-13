import React, { Component } from 'react'
import PropTypes from 'prop-types';

import VolumeForm from './VolumeForm';

export class RecipeItem extends Component {
  state = {
    showDetails: false,
    potVolume: 25
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

  //insert item here for clicking off the title - to remove the Details 
  
  render() {
    if (this.state.showDetails) {
      return (
        <div>
          <button onClick={this.handleClickOffTitle}>Hide</button>
          <VolumeForm recipe={this.props.recipeProp}/>
         
        </div>
      );
    } else {
      return (
        <div id="linus">
          <button  onClick={this.handleClickTitle}>{ this.props.recipeProp.title }</button>
        </div>
      );
    };
  }
}

//PropTypes
RecipeItem.propTypes = {
  recipeProp: PropTypes.object.isRequired
}

export default RecipeItem
