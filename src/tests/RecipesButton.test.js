import { render, screen } from '@testing-library/react';
import RecipesButton from '../components/RecipesButton.js';
import React from 'react';


it("should show recipes once user clicks on Recipes button", () => {

  const anotherMockRecipe = [{id: 1, title: 'test recipe'}, {id: 2, title: 'another recipe'}]
  render(<RecipesButton recipes={anotherMockRecipe}/>)
  const button = screen.getByRole('button');
  button.click();
  const differentButton = screen.getAllByRole('button');
  expect(differentButton).toHaveLength(2);
  
});
