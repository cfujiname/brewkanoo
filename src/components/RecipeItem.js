import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Walkthrough from './Walkthrough';
import Ingredients from './Ingredients';
import Equipment from './Equipment'

export class RecipeItem extends Component {
  state = {
    showDetails: false
  }

  handleClickTitle = () => {
    this.setState({
      showDetails: true
    })
  }

  handleClickOffTitle = () => {
    this.setState({
      
      showDetails: false
      
    })
  }

  //insert item here for clicking off the title - to remove the Details 

  render() {
    if (this.state.showDetails) {
      return (
        <div>
          <button onClick={this.handleClickOffTitle}>Hide</button>
          <Walkthrough key={this.props.recipeProp.id} walkthrough={this.props.recipeProp.walkthrough} />
          <Ingredients key={this.props.recipeProp.id} ingredients={this.props.recipeProp.ingredients}/>
          <Equipment key={this.props.recipeProp.id} equipment={this.props.recipeProp.equipment}/>
        </div>
      );
    } else {
      return (
        <div id="linus">
          <button  onClick={this.handleClickTitle}>{ this.props.recipeProp.title }</button>
        </div>
      );
    };
  }
}

//PropTypes
RecipeItem.propTypes = {
  recipeProp: PropTypes.object.isRequired
}

// const itemStyle = {
//   backgroundColor: '#f4f4f4',
// }

export default RecipeItem
