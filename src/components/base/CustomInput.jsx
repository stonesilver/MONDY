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
          borderRadius: '4px',
          '& .MuiInputBase-root': {
            backgroundColor: '#E3EBF3 !important',
            height: 38,
            border: '1px solid #1D242E5d',
          },
        }}
      />
    </Box>
  );
};

export default CustomInput;
