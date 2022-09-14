import Box from '@mui/material/Box';
import SearchBar from '../../components/base/SearchBar';
import MedicineGroupsTable from './MedicineGroupsTable';
import TitleBar from './TitleBar.MedicineGroups';

const MedicineGroups = () => {
  return (
    <Box px={5}>
      <TitleBar />
      <Box sx={{ width: 340, mt: 2 }}>
        <SearchBar placeholder='Search Medicine Groups..' />
      </Box>
      <MedicineGroupsTable />
    </Box>
  );
};

export default MedicineGroups;
