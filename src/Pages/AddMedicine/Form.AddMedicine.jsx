import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CustomInput from '../../components/base/CustomInput';

const AddMedicineForm = () => {
  const [name, setName] = useState('');
  const [ID, setID] = useState('');
  const [group, setGroup] = useState('');
  const [quantity, setQuantity] = useState('');
  const [use, setUse] = useState('');
  const [effect, setEffect] = useState('');

  const handleChange = (event, setState) => {
    setState(event.target.value);
  };
  return (
    <Box component='form' sx={{ width: '70%', mt: 3 }}>
      <Stack direction='row' spacing={4}>
        <CustomInput
          label='Medicine Name'
          name='name'
          value={name}
          handleChange={(e) => handleChange(e, setName)}
        />
        <CustomInput
          label='Medicine ID'
          name='ID'
          value={ID}
          handleChange={(e) => handleChange(e, setID)}
        />
      </Stack>
    </Box>
  );
};

export default AddMedicineForm;
