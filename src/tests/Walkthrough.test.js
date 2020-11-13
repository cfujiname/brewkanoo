import React from 'react';
import Walkthrough from '../components/Walkthrough';
import { render, fireEvent, screen } from '@testing-library/react';

it("should display the next step when the Next Step button is clicked", () => {
  render(<Walkthrough walkthrough={[
    { description: "Boil the water", time: 10},
    { description: "Add the teabag", time: 0}
  ]}/>);
  const nextStepButton = screen.getByText('Next Step')
  nextStepButton.click();
  const secondStep = screen.getByText('2: Add the teabag');
  expect(secondStep).toBeInTheDocument();
});

