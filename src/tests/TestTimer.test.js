import React from 'react';
import TestTimer from '../components/TestTimer';
import { render, fireEvent, screen } from '@testing-library/react';

it("should render a timer with the correct starting time", () => {
  render(<TestTimer timerStart={2}/>);
  const startingTime = screen.getByText('2')
  expect(startingTime).toBeInTheDocument();
});

it("should show zero seconds after the timer has been run", () => {
  render(<TestTimer timerStart={2}/>);
  // const startingTime = screen.getByText('2');
  // expect(startingTime).toBeInTheDocument();
  const startButton = screen.getByText('Start');
  startButton.click();
  const endingTime = screen.getByText('0')
  expect(endingTime).toBeInTheDocument();
  screen.debug();
});