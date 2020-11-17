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
    <div className='heading' style={headingStyle}>      
      {this.state.recipeButtonClicked ? <Recipes recipes={this.props.recipes} /> : null}
      {this.state.recipeButtonClicked ? null : <button id="recipesButton"> <img src='button.png' style={btnStyle} onClick={this.clickButton}/>Recipes</button>  }
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
  width: '80px',
}

const headingStyle = {
  position: 'relative',
  margin: '0',
}
 
export default RecipesButton;
