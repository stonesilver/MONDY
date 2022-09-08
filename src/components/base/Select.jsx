import { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CustomSelect = () => {
  const [option, setOption] = useState('- Select Group -');

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 217 }}>
      <FormControl fullWidth sx={{ bgcolor: 'white.main' }}>
        <Select
          labelId='label'
          id='select'
          value={option}
          onChange={handleChange}
          sx={{ maxHeight: 38 }}
        >
          <MenuItem disabled value='- Select Group -'>
            <em>- Select Group -</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
