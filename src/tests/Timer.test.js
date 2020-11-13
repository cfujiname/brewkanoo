import React from 'react';
import Timer from '../components/Timer';
import { render, fireEvent, screen } from '@testing-library/react';


it("should render a timer with the correct starting time", () => {
  render(<Timer timerStart={2}/>);
  const startingTime = screen.getByText('2')
  expect(startingTime).toBeInTheDocument();
});

it("should show zero seconds after the timer has been run", () => {
  jest.useFakeTimers()
  render(<Timer timerStart={2}/>);
  const startingTime = screen.getByText('2');
  expect(startingTime).toBeInTheDocument();
  const startButton = screen.getByText('Start');
  startButton.click();
  jest.advanceTimersByTime(2000);
  const endingTime = screen.getByText('0')
  expect(endingTime).toBeInTheDocument();
});

it("should show 0 after 3 seconds have elapsed when the start timer was set to 2 seconds", () => {
  jest.useFakeTimers()
  render(<Timer timerStart={2}/>);
  const startingTime = screen.getByText('2');
  expect(startingTime).toBeInTheDocument();
  const startButton = screen.getByText('Start');
  startButton.click();
  jest.advanceTimersByTime(3000);
  const endingTime = screen.getByText('0');
  expect(endingTime).toBeInTheDocument();
});