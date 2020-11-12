import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RecipeItem from '../components/RecipeItem';

const recipe1 = {
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
}

test('recipe1 has many values', () => {
  expect(recipes1).toHaveProperty('id', 1);
  expect(recipes1).toHaveProperty('title', "Ollie's Big Flavor Non-Descript Homebrew");
  expect(recipes1).toHaveProperty('walkthrough', ["Boil the water", "Add the teabag", "Stir", "Remove the teabag","Enjoy!"]);
  expect(recipes1).toHaveProperty('ingredients', {grains: ["chocolate malt", "crystal malt"], hops: ["Bramling Cross", "Citra"], yeast: "Safeale",});
  expect(recipes1).toHaveProperty('equipment', ["A bucket","Thermometer"])
});


describe('handleClickTitle', () => {
  test('onClickTitle gets called with the right thing', () => {
    const onClickTitle = jest.fn();
    const wrapper = shallow(<RecipeItem onClickTitle={showRecipe} />;

  });
})
