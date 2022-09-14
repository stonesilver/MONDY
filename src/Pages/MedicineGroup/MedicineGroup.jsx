import Box from '@mui/material/Box';
import SearchBar from '../../components/base/SearchBar';
import TitleBar from './TitleBar.MedicineGroup';

const MedicineGroup = () => {
  return (
    <Box px={5}>
      <TitleBar />
      <Box sx={{ width: 340, mt: 2 }}>
        <SearchBar placeholder='Search Medicine Groups..' />
      </Box>
    </Box>
  );
};

export default MedicineGroup;
