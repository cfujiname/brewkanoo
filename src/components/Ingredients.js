import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Ingredients extends Component {
  render() {
    const divisor = this.props.batchSize/25

    return (
      <div>
        <h2>Ingredients List: </h2>
        <h4>Grains:</h4>
        {this.props.ingredients.grains.map((grain) =>(
          <p>{(grain.quantity*divisor).toFixed(2)} kg's of {grain.item}  <input type="checkbox"></input></p>))}
        <h4>Hops:</h4>
        {this.props.ingredients.hops.map((hop) => (
       <p> {(hop.quantity*divisor).toFixed(2)} g's of {hop.item }  <input type="checkbox"></input> </p>))}
        <h4>Yeast:</h4>
        <p>{this.props.ingredients.yeast.quantity} packets of {this.props.ingredients.yeast.item}{' '}<label class="myCheckbox"><input type="checkbox"></input></label></p>
      </div>
    )
  }
};

export default Ingredients;
