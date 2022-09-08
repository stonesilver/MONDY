import Box from '@mui/material/Box';
import SearchBar from './SearchBar.MedicineDetail';
import TitleBar from './TitleBar.MedicineDetail';

const MedicineDetail = () => {
  return (
    <Box px={5}>
      <TitleBar />
      <SearchBar />
    </Box>
  );
};

export default MedicineDetail;
