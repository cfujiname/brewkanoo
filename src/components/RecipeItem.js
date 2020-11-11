import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Walkthrough from './Walkthrough';

export class RecipeItem extends Component {
  render() {
    return (
      <div style={itemStyle}>
        <h4>{ this.props.recipeProp.title }</h4>
        <Walkthrough key={this.props.recipeProp.id} walkthrough={this.props.recipeProp.walkthrough} />
      </div>
    )
  }
}

//PropTypes
RecipeItem.propTypes = {
  recipeProp: PropTypes.object.isRequired
}

const itemStyle = {
  backgroundColor: '#f4f4f4'
}

export default RecipeItem
