import RecipesButton from './components/RecipesButton';
import React, { Component } from 'react';
import recipes from './data'
import './App.css';

class App extends Component {
  

  render() {
    return (
      
      <div className="App" style={appStyle}>
<<<<<<< HEAD
        <div class="title" ><img class='logo' src="logo1.png"></img> BrewKanoo</div>
=======
        <h1 class="title"><img src="logo1.png" style={logoStyle}></img> BrewKanoo</h1>
>>>>>>> b1e7a80e4b8c3fd52bbac26bb220dc1b054baaa0
           <RecipesButton recipes={recipes} /> 
      </div>
     
    );
  }
}


const appStyle = {
  position: 'relative',
  fontFamily: 'Big Shoulders Inline Text, cursive',

}
export default App;
