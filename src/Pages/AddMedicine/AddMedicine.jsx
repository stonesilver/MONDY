import Box from '@mui/material/Box';
import TitleBar from './TitleBar.AddMedicine';
import AddMedicineForm from '../../components/Form.AddMedicine';

const initData = {
  name: '',
  ID: '',
  group: '- Select Group -',
  quantity: '',
  use: '',
  effect: '',
};

const AddMedicine = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Medicine saved');
  };

  return (
    <Box px={5}>
      <TitleBar />
      <AddMedicineForm
        initData={initData}
        handleSubmit={handleSubmit}
        submitBtnText='Save Details'
        btnBgColor='red.main'
      />
    </Box>
  );
};

export default AddMedicine;
