import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import RecipeItem from "../components/RecipeItem";

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

it("changes value when clicked", () => {
  const onChange = jest.fn();
  const recipe1 = {
    id: 2,
    title: "Richard's No Nonsense Pale Ale",
    walkthrough: [ "Boil the water", "Add the teabag" ],
    ingredients: {
      grains: ["chocolate malt", "crystal malt"],
      hops: ["Bramling Cross", "Citra"],
      yeast: "Safeale"
    },
    equipment: ["A bucket","Thermometer"]
  }
  act(() => {
    render(<RecipeItem onChange={onChange} recipeProp={recipe1}/>, container);
  });

  // get ahold of the button element, and trigger some clicks on it
  const button = document.querySelector("[data-testid=show-details]");
  expect(button.innerHTML).toBe("Richard's No Nonsense Pale Ale");

  act(() => {
    button.dispatchEvent(new MouseEvent("click"));
  });

   expect(onChange).toHaveBeenCalledTimes(1);
  // expect(button.innerHTML).toBe("Turn off");

  // act(() => {
  //   for (let i = 0; i < 5; i++) {
  //     button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  //   }
  // });

  // expect(onChange).toHaveBeenCalledTimes(6);
  // expect(button.innerHTML).toBe("Turn on");
});