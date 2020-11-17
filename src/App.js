import RecipesButton from './components/RecipesButton';
import React, { Component } from 'react';
import recipes from './data'
import './App.css';

class App extends Component {
  

  render() {
    console.log(recipes)
    return (
      
      <div className="App" style={appStyle}>
        <img src="image.png" style={logoStyle}></img>
        <h1 className="title" style={titleStyle}> BrewKanoo</h1>
           <RecipesButton recipes={recipes} /> 
      </div>
     
    );
  }
}

const titleStyle = {
  marginLeft: '300px',
  marginTop: '5px',
  position: 'absolute',
  fontFamily: 'Big Shoulders Inline Text, cursive',
  fontSize: '100px',
}

const appStyle = {
  margin: '0',
  position: 'absolute',
  fontFamily: 'Big Shoulders Inline Text, cursive',
  
}
const logoStyle = {
  marginTop: '25px',
  marginLeft: '220px',
  position: 'absolute',
  width: '80px',
  
}


export default App;
