import Box from '@mui/material/Box';
import DetailRow from './DetailRow';
import SearchBar from './SearchBar.MedicineDetail';
import TitleBar from './TitleBar.MedicineDetail';

const MedicineDetail = () => {
  return (
    <Box px={5}>
      <TitleBar />
      <SearchBar />
      <DetailRow />
    </Box>
  );
};

export default MedicineDetail;
