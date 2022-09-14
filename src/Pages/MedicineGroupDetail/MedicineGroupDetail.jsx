import Box from '@mui/material/Box';
import SearchBar from '../../components/base/SearchBar';
import MedicineGroupDetailTable from './MedicineGroupDetailTable';
import TitleBar from './TitleBar.MedicineGroupDetail';
import Button from '../../components/base/Button';
import { ReactComponent as DeleteIcon } from '../../assets/svg/delete.svg';

const MedicineGroupDetail = () => {
  const handleGroupDelete = () => {
    alert('Medicine group deleted!!!');
  };

  return (
    <Box px={5}>
      <TitleBar />
      <Box sx={{ width: 340, mt: 2 }}>
        <SearchBar placeholder='Search for Medicine' />
      </Box>
      <MedicineGroupDetailTable />

      <Button
        icon={<DeleteIcon />}
        text='Delete Group'
        bgColor='white.main'
        textColor='red.main'
        variant='outlined'
        handleClick={handleGroupDelete}
      />
    </Box>
  );
};

export default MedicineGroupDetail;
