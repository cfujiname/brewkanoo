import React, { Component } from 'react';
import RecipeItem from './RecipeItem';
import PropTypes from 'prop-types';


class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {recipe: null};

    this.getData = this.getData.bind(this);
  }

  getData(value) {
    this.setState({
      recipe: value
    })
  }

  render() {
    return this.props.recipes.map((recipe) => (
      // advised by alice to use arrow functions like below in react => gives you the correct "this"
      <RecipeItem key={recipe.id} recipe={recipe} sendData={this.getData} currentRecipe={this.state.recipe}/>
    ));
  };
};

//PropTypes
Recipes.propTypes = {
  recipes: PropTypes.array.isRequired
}

export default Recipes;