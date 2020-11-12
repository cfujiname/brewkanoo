import React, { Component, useState } from 'react';
import Basic from './components/basic test/basic_test';
import './App.css';
import RecipesButton from './components/RecipesButton';

class App extends Component {
  state = {
    recipes: [
      {
        id: 1,
        title: "Ollie's Big Flavor Non-Descript Homebrew",
        walkthrough: "Make beer"
      },
      {
        id: 2,
        title: "Richard's No Nonsense Pale Ale",
        walkthrough: "Make more beer"
      },
      {
        id: 3,
        title: "Linus's Lagom Hard Hitting Lager (NOT FOR KIDS)",
        walkthrough: "no Hygge!"
      },
      {
        id: 4,
        title: "Cristina's Big Boy (PREMIUM)",
        walkthrough: "Make big boy beer"
      }
    ]
  }

  //move the recipe data to Recipes where it can be held as a state

  render() {
    return (
      <div className="App">
        <Basic />
        <h1>BrewKanoo</h1>
        <RecipesButton recipes={this.state.recipes} /> 
      </div>
    );
  }
  
}


export default App;
