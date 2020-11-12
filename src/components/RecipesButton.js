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
    <div className='recipesButtonClicked'>      
      {this.state.recipeButtonClicked ? <Recipes recipes={this.props.recipes} /> : null}
      {this.state.recipeButtonClicked ? null : <button id="recipesButton" style={btnStyle} onClick={this.clickButton}>Recipes</button>  }
    </div>
    );
  }
}

const btnStyle = {
  fontSize: '30px',
  position: 'absolute',
  top: 'auto',
  left: '45%',
  backgroundColor: '#96D9FF',
  margin: '0',
  width: 'auto',
  height: 'auto',
  border: '8px solid #003557',
  outline: 'none'
}
 
export default RecipesButton;

{/* <Recipes recipes={this.state.recipes} />
<button onClick={this.handleClickTitle}>{ this.props.recipes }</button> */}