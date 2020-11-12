import RecipesButton from './components/RecipesButton';
import React, { Component } from 'react';
import recipes from './data'
import './App.css';

class App extends Component {
  

  render() {
    console.log(recipes)
    return (
      <div className="App">
        <h1>BrewKanoo</h1>
           <RecipesButton recipes={recipes} /> 
      </div>
    );
  }
}


export default App;
