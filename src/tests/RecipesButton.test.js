import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import RecipesButton from '../components/RecipesButton'

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders a button with Recipes written on it", () => {
  act(() => {
    render(<RecipesButton />, container);
  });
  expect(container.textContent).toBe("Recipes");
});




// import React from 'react';
// import { shallow } from 'enzyme';
// import RecipesButton from '../RecipesButton';

// describe('Test clicking recipe button', () => {
//   it('Test click event', () => {

//     const button = shallow(<RecipesButton />);
//     button.find('button').simulate('click');
//     const linkElement = screen.getByText("Pale Ale");
//     expect(linkElement).toBeInTheDocument();
//   });
// });