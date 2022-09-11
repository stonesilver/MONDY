import Box from '@mui/material/Box';
import TitleBar from './TitleBar.AddMedicine';
import AddMedicineForm from './Form.AddMedicine';

const AddMedicine = () => {
  return (
    <Box px={5}>
      <TitleBar />
      <AddMedicineForm />
    </Box>
  );
};

export default AddMedicine;
