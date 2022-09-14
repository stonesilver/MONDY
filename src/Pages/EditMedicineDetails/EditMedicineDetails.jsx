import Box from '@mui/material/Box';
import TitleBar from './TitleBar.EditMedicine';
import AddMedicineForm from '../../components/Form.AddMedicine';
import { useLocation } from 'react-router-dom';

const EditMedicineDetails = () => {
  const {
    state: {
      medicineName,
      medicineId,
      medicineGroup,
      medicineQuantity,
      use,
      effect,
    },
  } = useLocation();

  const initData = {
    name: medicineName,
    ID: medicineId,
    group: 'Group Two',
    quantity: medicineQuantity,
    use,
    effect,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Medicine details Updated Successfully');
  };

  return (
    <Box px={5}>
      <TitleBar />
      <AddMedicineForm
        initData={initData}
        handleSubmit={handleSubmit}
        submitBtnText='Edit Details'
        btnBgColor='blue.main'
      />
    </Box>
  );
};

export default EditMedicineDetails;
