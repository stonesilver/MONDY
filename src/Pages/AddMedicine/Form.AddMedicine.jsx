import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CustomInput from '../../components/base/CustomInput';
import CustomSelect from '../../components/base/Select';
import { Typography } from '@mui/material';
import CustomTextArea from '../../components/base/CustomTextArea';
import Button from '../../components/base/Button';

const AddMedicineForm = () => {
  const [name, setName] = useState('');
  const [ID, setID] = useState('');
  const [group, setGroup] = useState('- Select Group -');
  const [quantity, setQuantity] = useState('');
  const [use, setUse] = useState('');
  const [effect, setEffect] = useState('');

  const handleChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Medicine saved');
  };

  return (
    <Stack
      spacing={3}
      component='form'
      sx={{ width: '70%', mt: 3 }}
      onSubmit={handleSubmit}
    >
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
      <Stack direction='row' spacing={4}>
        <Box sx={{ width: '100%' }}>
          <Typography mb={1}>Medicine Group</Typography>
          <CustomSelect
            options={['Group One', 'Group Two', 'Group Three']}
            value={group}
            handleChange={(e) => handleChange(e, setGroup)}
            bgcolor='#E3EBF3'
          />
        </Box>
        <CustomInput
          label='Quantity in Number'
          name='quantity'
          value={quantity}
          handleChange={(e) => handleChange(e, setQuantity)}
        />
      </Stack>
      <CustomTextArea
        label='How to Use'
        value={use}
        handleChange={(e) => handleChange(e, setUse)}
      />
      <CustomTextArea
        label='Side Effects'
        value={effect}
        handleChange={(e) => handleChange(e, setEffect)}
      />
      <Box sx={{ width: 'fit-content' }}>
        <Button
          variant='contained'
          size='large'
          bgColor='red.main'
          textColor='white.main'
          type='submit'
          text='Save Details'
        />
      </Box>
    </Stack>
  );
};

export default AddMedicineForm;
