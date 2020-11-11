import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Walkthrough from './Walkthrough';
import Ingredients from './Ingredients';

export class RecipeItem extends Component {
  state = {
    showWalkthrough: false,
    showIngredients: false
  }

  handleClickTitle = () => {
    this.setState({
      showWalkthrough: true,
      showIngredients: true
    })
  }

  handleClickOffTitle = () => {
    this.setState({
      showIngredients: false,
      showWalkthrough: false
    })
  }

  // walkthroughMount() {

  // }

  //insert item here for clicking off the title - to remove the walkthrough 

  render() {
    if (this.state.showWalkthrough) {
      return (
        <div>
          <button onClick={this.handleClickOffTitle}>Hide</button>
          <Walkthrough key={this.props.recipeProp.id} walkthrough={this.props.recipeProp.walkthrough} />
          <Ingredients key={this.props.recipeProp.id} />
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.handleClickTitle}>{ this.props.recipeProp.title }</button>
        </div>
      );
    };
  }

  //     <div class='menu' ref={node => this.node = node}>
  //       <button onClick={this.handleClickTitle}>{ this.props.recipeProp.title }</button>
  //       <button onClick={this.handleClickOffTitle}>Hide</button>

  //       {
  //       if (this.state.showWalkthrough) {

  //       } <Walkthrough key={this.props.recipeProp.id} walkthrough={this.props.recipeProp.walkthrough} /> : null}
  //       {this.state.showIngredients ? <Ingredients key={this.props.recipeProp.id} /> : null}
  //     </div>
  //   )
  // }
}

//PropTypes
RecipeItem.propTypes = {
  recipeProp: PropTypes.object.isRequired
}

// const itemStyle = {
//   backgroundColor: '#f4f4f4',
// }

export default RecipeItem
