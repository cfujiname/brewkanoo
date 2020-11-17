import React, { Component } from 'react';
import RecipeItem from './RecipeItem';
import PropTypes from 'prop-types';


class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {closeAllRecipes: true};

    this.getData = this.getData.bind(this);
  }

  getData() {
    console.log("hi")
    this.setState({
      closeAllRecipes: true
    })
    this.forceUpdate()
  }

  render() {
    return this.props.recipes.map((recipe) => (
      <RecipeItem key={recipe.id} recipeProp={recipe} sendData={this.getData} closeAllRecipes={this.state.closeAllRecipes}/>
    ));
  };
};

//PropTypes
Recipes.propTypes = {
  recipes: PropTypes.array.isRequired
}

export default Recipes;