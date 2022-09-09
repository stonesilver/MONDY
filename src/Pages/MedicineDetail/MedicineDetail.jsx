import Box from '@mui/material/Box';
import DetailColumn from './DetailColumn';
import DetailRow from './DetailRow';
import SearchBar from './SearchBar.MedicineDetail';
import TitleBar from './TitleBar.MedicineDetail';
import Button from '../../components/base/Button';
import { ReactComponent as DeleteIcon } from '../../assets/svg/delete.svg';

const MedicineDetail = () => {
  return (
    <Box px={5}>
      <TitleBar />
      <SearchBar />
      <DetailRow />
      <DetailColumn />
      <Button
        variant='outlined'
        text='Delete Medicine'
        textColor='red.main'
        icon={<DeleteIcon />}
        border={{ border: '1px solid red' }}
      />
    </Box>
  );
};

export default MedicineDetail;
