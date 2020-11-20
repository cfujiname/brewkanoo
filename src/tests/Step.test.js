import React from 'react';
import Step from '../components/Step';
import { render, screen, getByLabelText } from '@testing-library/react';

// it("should display the Steps when Walkthrough button is clicked", () => {
//   const mockKey = "1";
//   const mockStepNumber = "1";
//   const mockStepContent = "test content";
//   const mockBatchSize = "19";
//   const mockSpecs = { mashTemp: 68, colour: '#FFF897'};
//   const mockIngredients = {
//     grains: [{ item: "Great Western Wheat Malt", quantity: 2.2 }, { item: "Durst Pilsner Malt", quantity: 2.2 }],
//     hops: [ { item: "Hallertau Hops", quantity: 17, type: "Bittering" },
//             { item: "Cascade Hops", quantity: 50, type: "Flavouring" },
//             { item: "Citra Hops", quantity: 57, type: "Aroma" }
//           ],
//     yeast: {item: "Safale US-05 yeast", quantity: 1 },
//     primingSugar: 3.3
//   }; 

//   render(<Step key={mockKey} stepNumber={mockStepNumber} stepContent={mockStepContent} batchSize={mockBatchSize} specs={mockSpecs} ingredients={mockIngredients} />);
//   });


