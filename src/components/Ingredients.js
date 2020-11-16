import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Ingredients extends Component {
  render() {
    return (
      <div>
        <h2>Ingredients List: </h2>
        <h4>Yeast:</h4>
        <p>{this.props.ingredients.yeast}<input type="checkbox"></input></p>
        <h4>Grains:</h4>
        <p>{this.props.ingredients.grains.map((grain) =>(
          grain + " ")) }<input type="checkbox"></input></p>
        <h4>Hops:</h4>
        <p>{this.props.ingredients.hops.map((hop) => (
          hop + " " ))}<input type="checkbox"></input></p>
      </div>
    )
  }
};

export default Ingredients;
