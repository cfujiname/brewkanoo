import React, { Component } from "react";


 
class RecipesButton1 extends Component {
  render() {
    return (
      <button id="recipesButton" style={btnStyle}
              onMouseDown={this.props.handleMouseDown}>Recipes</button>
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
 
export default RecipesButton1;

{/* <Recipes recipes={this.state.recipes} />
<button onClick={this.handleClickTitle}>{ this.props.recipes }</button> */}