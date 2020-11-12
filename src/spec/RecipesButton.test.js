import RecipesButton from '../components/RecipesButton';
import { render, screen } from '@testing-library/react';

test('renders recipe button', () => {
  render(<RecipesButton />);
  expect(screen.getByText("Recipes")).toBeInTheDocument();
});