import React, { Component } from "react";
import './MenuButton.css';

 
class MenuButton extends Component {
  render() {
    return (
      <button id="recipesButton" 
              onMouseDown={this.props.handleMouseDown}>Recipes</button>
    );
  }
}
 
export default MenuButton;

<Recipes recipes={this.state.recipes} />