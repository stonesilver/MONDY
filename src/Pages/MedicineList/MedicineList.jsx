import Box from '@mui/material/Box';
import SearchFilter from './SearchFilter';
import TitleBar from './TitleBar.medicineList';

const MedicineList = () => {
  return (
    <Box px={5}>
      <TitleBar />
      <SearchFilter />
    </Box>
  );
};

export default MedicineList;
