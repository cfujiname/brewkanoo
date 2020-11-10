import React, { Component } from 'react';

class RecipesButton extends Component {
  render() {
    return <select name="recipes" id="dropdown">
      <option value="Pale ale" ></option>
      <option value="Lager"></option>
      <option value="Strawberry beer"></option>
      </select>
  }
}

export default RecipesButton; 