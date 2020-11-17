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
      return this.state.showDetails ? 

      
      <div className='hideButton' style={hideBtnStyle}>
        <button onClick={this.handleClickOffTitle}>Hide</button>
        <VolumeForm recipe={this.props.recipeProp}/>
       
      </div> :
        <div id="linus" style={linusStyle}>

      <button onClick={this.handleClickTitle}>{this.props.recipeProp.title}</button>
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
