import Box from '@mui/material/Box';
import DetailColumn from './DetailColumn';
import DetailRow from './DetailRow';
import SearchBar from './SearchBar.MedicineDetail';
import TitleBar from './TitleBar.MedicineDetail';
import Button from '../../components/base/Button';
import { ReactComponent as DeleteIcon } from '../../assets/svg/delete.svg';
import { rowStat, columnStat } from '../../assets/data';

const MedicineDetail = () => {
  const state = {
    medicineId: rowStat[0].details[0].count,
    medicineGroup: rowStat[0].details[1].count,
    medicineQuantity: rowStat[1].details[2].count,
    use: columnStat[0].text,
    effect: columnStat[1].text,
  };

  return (
    <Box px={5}>
      <TitleBar state={state} />
      <SearchBar />
      <DetailRow rowStat={rowStat} />
      <DetailColumn columnStat={columnStat} />
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
