import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SearchBar from '../../components/base/SearchBar';
import TitleBar from './TitleBar.medicineList';

const MedicineList = () => {
  return (
    <Box px={5}>
      <TitleBar />
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        mt={2}
      >
        <SearchBar placeholder='Search Medicine Inventory..' />
      </Stack>
    </Box>
  );
};

export default MedicineList;
