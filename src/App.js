import RecipesButton from './components/RecipesButton';
import React, { Component } from 'react';
import './App.css';

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

  render() {
    console.log(this.state.recipes)
    return (
      <div className="App">
        <h1>BrewKanoo</h1>
           <RecipesButton recipes={this.state.recipes} /> 
      </div>
    );
  }
}


export default App;
