import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import './App.css';
import AppLayout from './Layout/AppLayout';
import Homepage from './Pages/Homepage/Homepage';
import Inventory from './Pages/Inventory/Inventory';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileScreenError from './Layout/MobileScreenError';
import PageNotFound from './Layout/PageNotFound';
import MedicineList from './Pages/MedicineList/MedicineList';
import MedicineDetail from './Pages/MedicineDetail/MedicineDetail';

const InventoryOutlet = () => (
  <>
    <Outlet />
  </>
);

const App = () => {
  const matches = useMediaQuery('(min-width:1024px)');

  return matches ? (
    <AppLayout>
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard' />} />
        <Route path='dashboard' element={<Homepage />} />
        <Route path='inventory' element={<InventoryOutlet />}>
          <Route index element={<Inventory />} />
          <Route path='medicine-list' element={<MedicineList />} />
          <Route
            path='medicine-list/:medicineName/:medicineID'
            element={<MedicineDetail />}
          />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </AppLayout>
  ) : (
    <MobileScreenError />
  );
};

export default App;
