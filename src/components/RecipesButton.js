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
      {this.state.recipeButtonClicked ? null : <img class='buttonRecipes' src='buttonRecipes.png' onClick={this.clickButton}/>}
    </div>

    );
  }
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
