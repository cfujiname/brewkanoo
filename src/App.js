import RecipesButton from './components/RecipesButton';
import React, { Component } from 'react';
import recipes from './data'
import './App.css';

class App extends Component {
  

  render() {
    return (
      
      <div className="App" style={appStyle}>
        <h1 className="title" style={titleStyle}><img src="logo1.png" style={logoStyle}></img> BrewKanoo</h1>
           <RecipesButton recipes={recipes} /> 
      </div>
     
    );
  }
}

const titleStyle = {
  textAlign: 'center',
  marginTop: '5px',
  position: 'relative',
  fontFamily: 'Big Shoulders Inline Text, cursive',
  fontSize: '100px',
}

const appStyle = {
  position: 'relative',
  fontFamily: 'Big Shoulders Inline Text, cursive',
  
}
const logoStyle = {
  textAlign: 'center',
  position: 'relative',
  width: '120px',
  
}


export default App;
