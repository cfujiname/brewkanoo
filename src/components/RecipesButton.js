import React, { Component } from "react";
import Recipes from './Recipes';

 
class RecipesButton extends Component {
  
  state = {
    recipeButtonClicked: false  
  }

  clickButton = () => {
    this.setState({
      recipeButtonClicked: true
    }) 
  }
  
  render() {
    return (
    <div style={headingStyle}>      
      {this.state.recipeButtonClicked ? <div style={allRecipes}><Recipes recipes={this.props.recipes} /> </div> : null  }
      {this.state.recipeButtonClicked ? null : <img src='button.png' style={btnStyle} onClick={this.clickButton}/> }
    </div>
    );
  }
}

const btnStyle = {
  fontSize: '50px',
  position: 'absolute',
  top: '200px',
  marginLeft: '400px',
  backgroundColor: '232, 128, 37, 1',
  width: 'auto',
  height: 'auto',
  outline: 'none',
  fontFamily: 'Big Shoulders Inline Text, cursive',
  padding: '10px',
  width: '180px',
}

const headingStyle = {
  position: 'relative',
  margin: '0',
}
 
const allRecipes = {
  width: '50px',
  height: '50%',
  paddingTop: '200px'
}
export default RecipesButton;
