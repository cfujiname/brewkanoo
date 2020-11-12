import RecipesButton from './components/RecipesButton';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    recipes: [
      {
        id: 1,
        title: "Ollie's Big Flavor Non-Descript Homebrew",
        walkthrough: [
          "Boil the water",
          "Add the teabag",
          "Stir",
          "Remove the teabag",
          "Enjoy!"
        ],
        ingredients: {
          grains: ["chocolate malt", "crystal malt"],
          hops: ["Bramling Cross", "Citra"],
          yeast: "Safeale",
        },
        equipment: ["A bucket","Thermometer"]
      },
      {
        id: 2,
        title: "Richard's No Nonsense Pale Ale",
        walkthrough: [
          "Boil the water",
          "Add the teabag",
          "Stir",
          "Enjoy!"
        ],
        ingredients: {
          grains: ["chocolate malt", "crystal malt"],
          hops: ["Bramling Cross", "Citra"],
          yeast: "Safeale"
        },
        equipment: ["A bucket","Thermometer"]
      },
      {
        id: 3,
        title: "Linus's Lagom Hard Hitting Lager (NOT FOR KIDS)",
        walkthrough: [
          "Boil the water",
          "Add the teabag",
          "Stir",
          "Enjoy!"
        ],
        ingredients: {
          grains: ["chocolate malt", "crystal malt"],
          hops: ["Bramling Cross", "Citra"],
          yeast: "Safeale"
        },
        equipment: ["A bucket","Thermometer"]
      },
      {
        id: 4,
        title: "Cristina's Big Boy (PREMIUM)",
        walkthrough: [
          "Boil the water",
          "Add the teabag",
          "Stir",
          "Enjoy!"
        ],
        ingredients: {
          grains: ["chocolate malt", "crystal malt"],
          hops: ["Bramling Cross", "Citra"],
          yeast: "Safeale"
        },
        equipment: ["A bucket","Thermometer"]
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
