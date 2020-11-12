import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RecipesButton from '../components/RecipesButton';

Enzyme.configure({ adapter: new Adapter() })

test('should see RecipesButton', () => {
    const wrapper = shallow(<RecipesButton />);
    const recipes = wrapper.find('div.recipesButtonClicked').text();
    expect(recipes).toBe('Recipes');
}); 

it("should show Recipes on click", () => {
  const showRecipe = jest.fn(); // mock function
  // const wrapper = shallow(<RecipesButton onClick={showRecipe} />); // shallow to test single component
  // const handleClick = jest.spyOn(React, "useState"); // adjusting the state of the component and tracking the calls to the object's method
  // handleClick.mockImplementation(recipes => [recipes, showRecipe]); //if useState is called, then it will simulate the click
  // wrapper.find("#recipesButton").simulate("click");
  expect(showRecipe).toBeTruthy();
});



