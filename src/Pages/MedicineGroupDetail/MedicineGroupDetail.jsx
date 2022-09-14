import Box from '@mui/material/Box';
import SearchBar from '../../components/base/SearchBar';
import MedicineGroupDetailTable from './MedicineGroupDetailTable';
import TitleBar from './TitleBar.MedicineGroupDetail';

const MedicineGroupDetail = () => {
  return (
    <Box px={5}>
      <TitleBar />
      <Box sx={{ width: 340, mt: 2 }}>
        <SearchBar placeholder='Search for Medicine' />
      </Box>
      <MedicineGroupDetailTable />
    </Box>
  );
};

export default MedicineGroupDetail;
