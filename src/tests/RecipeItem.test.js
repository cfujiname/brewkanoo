import { render, screen } from '@testing-library/react';
import React from 'react';
import RecipeItem from '../components/RecipeItem.js';


it("should show a clickable hide button after a recipe is clicked", () => {
    const mockRecipe = {
        id: 1,
        title: "Mock Recipe 1",
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
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(4);
});

it("should show the beer buttons after the hide button is clicked.",() => {
    const mockRecipe2 = {
        id: 2,
        title: "Mock Recipe 2",
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
      render(<RecipeItem recipeProp={mockRecipe2}/>)
      const button = screen.getByRole('button');
      button.click();
      const hideButton = screen.getByText("Hide")
      hideButton.click();
      const button1 = screen.getAllByRole('button');
      expect(button1).toHaveLength(1);
});
