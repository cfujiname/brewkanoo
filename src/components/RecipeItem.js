import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Walkthrough from './Walkthrough';

export class RecipeItem extends Component {
  state = {
    showWalkthrough: false
  }

  handleClickTitle = () => {
    this.setState({
      showWalkthrough: !this.showWalkthrough
    })
  }

  handleClickOffTitle = () => {
    this.setState({
      showWalkthrough: false
    })
  }

  // }

  //insert item here for clicking off the title - to remove the walkthrough 

  render() {
    return (
      <div class='menu' ref={node => this.node = node}>
        <button onClick={this.handleClickTitle}>{ this.props.recipeProp.title }</button>
        <button onClick={this.handleClickOffTitle}>Hide</button>
        {this.state.showWalkthrough ? <Walkthrough key={this.props.recipeProp.id} walkthrough={this.props.recipeProp.walkthrough} /> : null}
      </div>
    )
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
