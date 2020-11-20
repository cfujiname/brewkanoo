import React from 'react';
import Ingredients from '../components/Ingredients';
import { render, fireEvent, screen, getByLabelText } from '@testing-library/react';



it("should display the list of ingredients", () => {

    const mockIngredients =  {
        grains: [{ item: "Great Western Wheat Malt", quantity: 2.2 }, { item: "Durst Pilsner Malt", quantity: 2.2 }],
        hops: [ { item: "Hallertau Hops", quantity: 17, type: "Bittering" },
                { item: "Cascade Hops", quantity: 50, type: "Flavouring" },
                { item: "Citra Hops", quantity: 57, type: "Aroma" }
              ],
        yeast: {item: "Safale US-05 yeast", quantity: 1 },
        primingSugar: 3.3
      }
    render(<Ingredients batchSize = {10} ingredients={ mockIngredients }/>);
    const grains = screen.getByText("0.88 kg's of Great Western Wheat Malt");
    eqwxpect(grains).toBeInTheDocument();
  });