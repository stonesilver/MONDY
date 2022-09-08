import InventoryList from './InventoryList';
import TitleBar from './TitleBar.Inventory';
import { Outlet } from 'react-router-dom';

const Inventory = () => {
  return (
    <>
      <TitleBar />
      <InventoryList />
    </>
  );
};

export default Inventory;
