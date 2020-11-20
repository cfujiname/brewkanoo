import { render, screen } from '@testing-library/react';
import Equipment from '../components/Equipment'

it("should display equipments when Equipment button is clicked", () => {
  render(<Equipment equipment={["A large stock pot","Thermometer", "Fermentation Vessel","Airlock","Hydrometer","Bottles(with caps and capper)/Keg","Siphon tube","Mashing/Sparging bag"]
  }/>);
  const equipmentButton = screen.getByRole('heading')
  equipmentButton.click();
  const equipmentList = screen.getByText('Thermometer');
  expect(equipmentList).toBeInTheDocument();
});