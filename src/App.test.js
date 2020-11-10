import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BrewKanoo title', () => {
  render(<App />);
  const linkElement = screen.getByText("BrewKanoo");
  expect(linkElement).toBeInTheDocument();
});

