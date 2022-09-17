import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CustomSelect = ({
  options,
  value,
  name,
  handleChange,
  bgcolor,
  placeholder,
}) => {
  return (
    <FormControl fullWidth sx={{ bgcolor }}>
      <Select
        labelId='label'
        id='select'
        name={name}
        value={value}
        onChange={handleChange}
        sx={{ maxHeight: 38 }}
      >
        <MenuItem disabled value={placeholder}>
          <em>{placeholder}</em>
        </MenuItem>
        {options.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

CustomSelect.defaultProps = {
  bgcolor: 'white.main',
};

export default CustomSelect;
