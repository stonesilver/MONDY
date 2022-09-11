import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CustomSelect = ({ options, option, handleChange }) => {
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
          {options.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
