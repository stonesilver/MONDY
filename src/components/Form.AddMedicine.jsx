import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CustomInput from './base/CustomInput';
import CustomSelect from './base/Select';
import { Typography } from '@mui/material';
import CustomTextArea from './base/CustomTextArea';
import Button from './base/Button';

const MedicineForm = ({
  initData,
  handleSubmit,
  submitBtnText,
  btnBgColor,
}) => {
  const [formData, setFormData] = useState(initData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevS) => ({ ...prevS, [name]: value }));
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
          value={formData.name}
          handleChange={handleChange}
        />
        <CustomInput
          label='Medicine ID'
          name='ID'
          value={formData.ID}
          handleChange={handleChange}
        />
      </Stack>
      <Stack direction='row' spacing={4}>
        <Box sx={{ width: '100%' }}>
          <Typography mb={1}>Medicine Group</Typography>
          <CustomSelect
            options={['Group One', 'Group Two', 'Group Three']}
            value={formData.group}
            name='group'
            handleChange={handleChange}
            bgcolor='#E3EBF3'
          />
        </Box>
        <CustomInput
          label='Quantity in Number'
          name='quantity'
          value={formData.quantity}
          handleChange={handleChange}
        />
      </Stack>
      <CustomTextArea
        label='How to Use'
        value={formData.use}
        name='use'
        handleChange={handleChange}
      />
      <CustomTextArea
        label='Side Effects'
        value={formData.effect}
        name='effect'
        handleChange={handleChange}
      />
      <Box sx={{ width: 'fit-content' }}>
        <Button
          variant='contained'
          size='large'
          bgColor={btnBgColor}
          textColor='white.main'
          type='submit'
          text={submitBtnText}
        />
      </Box>
    </Stack>
  );
};

export default MedicineForm;
