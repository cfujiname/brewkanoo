import { render, screen } from '@testing-library/react';
import Equipment from '../components/Equipment'

it("should display equipments when Equipment button is clicked", () => {
  const mockEquipment = ["A large stock pot","Thermometer", "Fermentation Vessel","Airlock","Hydrometer","Bottles(with caps and capper)/Keg","Siphon tube","Mashing/Sparging bag"];
  render(<Equipment equipment={mockEquipment}/>);
  const equipmentList = screen.getByText('Thermometer');
  expect(equipmentList).toBeInTheDocument();
});