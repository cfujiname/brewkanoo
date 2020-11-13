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
          { description: "Boil the water", time: 10},
          { description: "Add the teabag", time: 0},
          { description: "Stir", time: 3 },
          { description: "Remove the teabag", time: 0 },
         { description: "Enjoy!", time: 0}
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
          { tasks: [
            { task: "Start heating the strike water", comment: "Strike water is the brewing water initially added to the mash." },
            { task: "Measure out the grains" } 
            ]
          },
          { description: "Add the teabag", time: 0},
          { description: "Stir", time: 3 },
          { description: "Remove the teabag", time: 0 },
         { description: "Enjoy!", time: 0}
        ],
        ingredients: {
          grains: [{ grain: "chocolate malt", quantity: 0.5}, { grain: "crystal malt", quantity: 3 }],
          hops: ["Bramling Cross", "Citra"],
          yeast: "Safeale"
        },
        equipment: ["A bucket","Thermometer"]
      },
      {
        id: 3,
        title: "Linus's Lagom Hard Hitting Lager (NOT FOR KIDS)",
        walkthrough: [
          { description: "Boil the water", time: 10},
          { description: "Add the teabag", time: 0},
          { description: "Stir", time: 3 },
          { description: "Remove the teabag", time: 0 },
         { description: "Enjoy!", time: 0}
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
          { description: "Boil the water", time: 10},
          { description: "Add the teabag", time: 0},
          { description: "Stir", time: 3 },
          { description: "Remove the teabag", time: 0 },
         { description: "Enjoy!", time: 0}
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

  // multiply the grain weight in kg by 2.7 to get the amount of strike water required in L.

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
