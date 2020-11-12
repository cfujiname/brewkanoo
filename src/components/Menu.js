import React, { Component, Fragment } from "react";
import "./Menu.css";

 
class Menu extends Component {
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      
      <Fragment>
      
     
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
                
        <h2><a href="#">Richard's No Nonsense Pale Ale</a></h2>
        <h2><a href="#">Linus's Lagom Hard Hitting Lager (NOT FOR KIDS)</a></h2>
        <h2><a href="#">Cristina's Big Boy (PREMIUM)</a></h2>
      </div>
      </Fragment>
    );
  }
}
 
export default Menu;