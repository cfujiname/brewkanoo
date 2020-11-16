import { render, screen } from '@testing-library/react';
import React from 'react';
import Task from '../components/Task.js';

it("should return 30 Litres when the input is 50", () => {
  render(<Task task={[ { description: "Heat the following amount of water to the temperature provided", strikeWater: 15, time:0}, 
  { description: "Weigh out the following amount of grain and place inside the fermentation vessel",time:0}
]} specs={["specs"]} stepNumber={1} potVolume={50} ingredients={{
      grains: [{ item: "Maris Otter Pale Ale Malt", quantity: 4.7 }, { item: "Crystal Malt", quantity: 0.45 }],
      hops: [ { item: "Magnum Hops", quantity: 12, type: "Bittering" },
              { item: "Perle Hops", quantity: 14, type: "Bittering" },
              { item: "Cascade Hops", quantity: 57, type: "Flavouring" },
              { item: "Cascade Hops", quantity: 57, type: "Aroma" }
            ],
      yeast: "Safale US-05 yeast",
    }}/>)
  screen.debug();
  const expectedAmount = screen.getByText('30 Litres')
  expect(expectedAmount).toBeInTheDocument();
})
