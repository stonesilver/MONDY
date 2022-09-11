import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const CustomInput = ({ label, value, name, handleChange }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography>{label}</Typography>
      <TextField
        fullWidth
        type='text'
        name={name}
        value={value}
        onChange={handleChange}
        sx={{
          backgroundColor: '#E3EBF3',
          mt: 1,
          outline: '1px solid #1D242E5d',
          borderRadius: '4px',
        }}
      />
    </Box>
  );
};

export default CustomInput;
