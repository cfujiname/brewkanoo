import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders BrewKanoo title', () => {
  render(<App />);
  const linkElement = screen.getByText("BrewKanoo");
  expect(linkElement).toBeInTheDocument();
});

test('renders Recipes button', () => {
  render(<App />);
  const linkElement = screen.getByText("Recipes");
  expect(linkElement).toBeInTheDocument();
});


// test('renders a dropdown called Recipes', () => {
//   render(<App />);
//   const linkElement = screen.getByText("BrewnotKanoo");
//   expect(linkElement).toBeInTheDocument();
// });
