import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Ingredients extends Component {
  render() {
    return (
      <div>
        <h2>Yeast:</h2>
        <p>{this.props.ingredients.yeast}</p>
        <h2>Grains:</h2>
        <p>{this.props.ingredients.grains.map((grain) =>(
          grain + " ")) }</p>
        <h2>Hops:</h2>
        <p>{this.props.ingredients.hops.map((hop) => (
          hop + " " ))}</p>
      </div>
    )
  }
};

export default Ingredients;
