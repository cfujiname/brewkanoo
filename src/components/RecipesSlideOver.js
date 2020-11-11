import React, { Component, Fragment } from "react";
import RecipesButton1 from './RecipesButton1';
import Menu from './Menu';
 
class RecipesSlideOver extends Component {
  constructor(props, context) {
    super(props, context);
   
    this.state = {
      visible: false
    };
    
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
   
  handleMouseDown(e) {
    this.toggleMenu();
 
    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    // showLeftMenu state this be visible
    this.setState({
        visible: !this.state.visible
    });
  }
  render() {
    return (
      <Fragment>
        <RecipesButton1 handleMouseDown={this.handleMouseDown} />
        <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
      </Fragment>
    );
  }
}
 
export default RecipesSlideOver;