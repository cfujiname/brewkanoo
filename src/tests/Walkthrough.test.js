import React from 'react';
import Walkthrough from '../components/Walkthrough';

import { render, fireEvent, screen, getByLabelText } from '@testing-library/react';

const testWalkthrough = [

    [ { description: "Heat the following amount of water to the temperature provided", strikeWater: 15, time:0, info: "Strike water, when heated up properly, will activate enzymes to change the starch of the grains into sugar - which will cause fermentation"}, 
      { description: "Weigh out the following amount of grain and place inside the fermentation vessel",time:0, info: null}
    ],
    [ { description: "Add the water to the grains and start the timer", time: 3600, info: null}, 
      { description: "Check the temperature of the liquid - Add boiling or cold water to adjust the temperature to between 65-68 degrees C.",time:0, info: null },
      { description: "Heat the following amount of sparge water to 77 degrees C", spargeWater: 12,time:0, info: 'Sparge water is used to rinse your grains to extract the sugars and keep the tannins - beware of not heating up above the recommended temperature as it would make tannin husks soluble!'}
    ],
    [ { description: "Strain the liquid back into the boiling pot" ,time:0, info: null},
      { description: "In a few batches rinse the grains with the sparge water, each time pouring the amber liquid into the boiling pot",time:0, info: null }
    ],
    [ { description: "Begin boiling - move to the next step when a rolling boil achieved" ,time:0, info: null},
      { description: "Weigh out the bittering hops" ,time:0, info: null}
    ],
    [ { description: "Add bittering hops and start the timer", time: 1800, info: null },
      { description: "Weigh out the flavouring hops",time:0 , info: null}
    ],
    [ { description: "Add flavouring hops and start the timer", time: 1200, info: null },
      { description: "Weigh out the aroma hops" ,time:0, info: null}
    ],
    [ { description: "Add aroma hops and start the timer", time: 600, info: null },
      { description: "After the timer is complete, Add the Finings and begin to cool the liquid" ,time:0, info: null}
    ],
    [ { description: "Strain the wort into the fermentation vessel, leaving behind the cold break matter at the bottom" ,time:0, info: null},
      { description: "Take a hydrometer reading - this will allow you to know when your beer is ready and also to work out the ABV%",time:0 , info: null},
      { description: "If the temp has reached 25 degrees, sprinkle the dried yeast on top" ,time:0, info: null},
      { description: "Fit the airlock and close the container" ,time:0, info: null}
    ],

    [ { description: "When the hydrometer reading has stabilised (around 1-2 weeks), bottle or keg the beer.",time:0 , info: null}]
  ]
const mockSpecs={
  mashTemp: 68, colour: '#FFF897'
}
const mockIngredients = {
  grains: [{ item: "Great Western Wheat Malt", quantity: 2.2 }, { item: "Durst Pilsner Malt", quantity: 2.2 }],
  hops: [ { item: "Hallertau Hops", quantity: 17, type: "Bittering" },
          { item: "Cascade Hops", quantity: 50, type: "Flavouring" },
          { item: "Citra Hops", quantity: 57, type: "Aroma" }
        ],
  yeast: {item: "Safale US-05 yeast", quantity: 1 },
  primingSugar: 3.3
}


it("should display the next step when the Next Step button is clicked", () => {
  render(<Walkthrough walkthrough={testWalkthrough} specs={mockSpecs} ingredients={mockIngredients} batchSize={19}/>);
  const nextStepButton = screen.getByText('Next Step')
  nextStepButton.click();
  const secondStep = screen.getByText('Add the water to the grains and start the timer');
  expect(secondStep).toBeInTheDocument();
});

it("should display the previous step when the Previous Step button is clicked", () => {
  render(<Walkthrough walkthrough={testWalkthrough} specs={mockSpecs} ingredients={mockIngredients} batchSize={19}/>);
  const nextStepButton = screen.getByText('Next Step')
  const prevStepButton = screen.getByText('Previous Step')
  nextStepButton.click();
  prevStepButton.click();

  const firstStep = screen.getByText('Heat the following amount of water to the temperature provided');
  expect(firstStep).toBeInTheDocument();
});

it("should display the last step when the Next Step button is clicked multiple times", () => {
  render(<Walkthrough walkthrough={testWalkthrough} specs={mockSpecs} ingredients={mockIngredients} batchSize={19}/>);
  
  const nextStepButton = screen.getByText('Next Step')
    var array = [1,2,3,4,5,6,7,8,9,10]
  array.forEach(function () { nextStepButton.click() })
  
  const lastStep = screen.getByText('When the hydrometer reading has stabilised (around 1-2 weeks), bottle or keg the beer.');
  expect(lastStep).toBeInTheDocument();
});

it("should display the timer when the time data is > 0", () => {
  render(<Walkthrough walkthrough={testWalkthrough} specs={mockSpecs} ingredients={mockIngredients} batchSize={19}/>);
  const nextStepButton = screen.getByText('Next Step')
  
  nextStepButton.click();
  const startButton = screen.getByText('Pause')
  expect(startButton).toBeInTheDocument()
  
});
it('should display Start value of the timer',() => {
  render(<Walkthrough walkthrough={testWalkthrough} specs={mockSpecs} ingredients={mockIngredients} batchSize={19} />);
  const nextStepButton = screen.getByText('Next Step')
  nextStepButton.click();
  const startTime = screen.getByText('01:00:00');
  expect(startTime).toBeInTheDocument();
});


// it('finds start button and when clicked, changes the default state to true', () => {
//   render(<Walkthrough walkthrough={[
//     { description: "Add the teabag", time: 10}
//   ]}/>);
//   const timerBoolean = (<Walkthrough state={
//      { start: false }
//   }/>);
//   console.log(timerBoolean);
//   const startButton1 = screen.getByText('Start');
//   startButton1.click();
//   console.log(timerBoolean)
//   expect(timerBoolean).toHaveValue(true)
// });