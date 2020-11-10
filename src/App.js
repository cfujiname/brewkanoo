import RecipesButton from './components/RecipesButton';
import Recipes from './components/Recipes';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    recipes: [
      {
        id: 1,
        title: "Ollie's Big Flavor Non-Descript Homebrew",
        rating: 4
      },
      {
        id: 2,
        title: "Richard's No Nonsense Pale Ale",
        rating: 8
      },
      {
        id: 3,
        title: "Linus's Hygge Winter Warmer",
        rating: 6
      },
      {
        id: 4,
        title: "Cristina's Big Boy (PREMIUM)",
        rating: 9
      }
    ]
  }

  render() {
    console.log(this.state.recipes)
    return (
      <div className="App">
        <h1>BrewKanoo</h1>
          <Recipes recipes={this.state.recipes} />
         {/* <RecipesButton /> */}
      </div>
    );
  }
  
}

export default App;
