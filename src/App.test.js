import { render, screen } from '@testing-library/react';
import App from './App';
// import ReactDOM from 'react-dom';

test('renders BrewKanoo title', () => {
  render(<App />);
  const linkElement = screen.getByText("BrewKanoo");
  expect(linkElement).toBeInTheDocument();
});

test('renders a button called Recipes', () => {
  render(<App />);
  const linkElement = screen.getByText("Recipes");
  expect(linkElement).toBeInTheDocument();
});
