import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Walkthrough extends Component {
    render() {
        return (
            <div>
           <p>{ this.props.walkthrough }</p>
            </div>
        )
    }
}

// be good to add prop types checker when possible
//PropTypes
Walkthrough.propTypes = {
    walkthrough: PropTypes.string.isRequired
  }


export default Walkthrough


