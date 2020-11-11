import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class RecipeItem extends Component {
  // getStyle = () => {
  //   if(this.props.recipe.completed) {
  //     return {
  //       textDecoration: 'line-through'
  //     }
  //   }
  // }
  render() {
    return (
      <div style={itemStyle}>
        <p>{ this.props.recipe.title }</p>
      </div>
    )
  }
}

//PropTypes
RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired
}

const itemStyle = {
  backgroundColor: '#f4f4f4'
}

export default RecipeItem
