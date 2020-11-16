import React, { Component } from 'react'
import styled from 'styled-components'
const Tracker = styled.div`
width: 50 %;
height: 20px;
margin: 15px auto;
background: rgb(34,34,34)
border-radius: 10px;
box-shadow: inset 0 0 5px #000`

export default class ProgressBar extends Component {
  

  render() {
    return (
      <Tracker>
        <ProgressInTracker percentage={25} />
      </Tracker>
        
      
    )
  }
}
