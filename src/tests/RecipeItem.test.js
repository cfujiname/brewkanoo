import { render, screen } from '@testing-library/react';
import React from 'react';
import RecipeItem from '../components/RecipeItem.js';


it("should show a clickable hide button after a recipe is clicked", () => {
    const mockRecipe = {
        id: 1,
        title: "Ollie's Big Flavor Non-Descript Homebrew",
        walkthrough: [
          { description: "Boil the water", time: 10},
        ],
        ingredients: {
          grains: ["chocolate malt", "crystal malt"],
          hops: ["Bramling Cross", "Citra"],
          yeast: "Safeale",
        },
        equipment: ["A bucket","Thermometer"]
      }
    render(<RecipeItem recipeProp={mockRecipe}/>)

    const button = screen.getByRole('button');
    button.click();
    screen.debug();
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(4);


});
